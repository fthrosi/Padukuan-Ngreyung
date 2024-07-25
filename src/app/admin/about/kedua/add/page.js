'use client'

import React from "react";
import { db } from "@/service/firebase";
import { collection, query, getDocs, deleteDoc, addDoc } from "firebase/firestore";
import { Button, Image, Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { getFile, uploadFile, deleteFile } from "@/lib/storage";
import { toast } from "sonner";
import { useFormik } from "formik";
import * as yup from "yup";
import slugify from "slugify";
import { useRouter } from 'next/navigation';
import authCheck from "@/components/auth/authcheck";
import { Spinner } from "@nextui-org/react";

const validationSchema = yup.object({
    gambar: yup.mixed().required('Gambar diperlukan')
        .test('fileSize', 'File terlalu besar, maksimal 1MB', (value) => {
            return value && value.size <= 1 * 1024 * 1024;
        })
});

const formatDate = (date) => {
    return new Intl.DateTimeFormat('id-ID', { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    }).format(date);
}

const AddKeduaPage = () => {
    const [preview, setPreview] = React.useState(null);
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const formik = useFormik({
        initialValues: {
            gambar: null
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setIsSubmitting(true);
            let imageUrl = '';
            const folder = 'kedua/';
            const imagePath = await uploadFile(values.gambar, folder);
            imageUrl = await getFile(imagePath);

            // Generate an ID for the new image using slugify
            const newId = slugify(imageUrl, { lower: true });

            // Get all documents in the "kedua" collection
            const q = query(collection(db, "kedua"));
            const querySnapshot = await getDocs(q);

            // Delete all documents and their corresponding images
            await Promise.all(querySnapshot.docs.map(async (doc) => {
                const docData = doc.data();
                await deleteFile(docData.gambar); // Remove image from storage
                await deleteDoc(doc.ref); // Remove document from Firestore
            }));

            // Add the new image to Firestore
            await addDoc(collection(db, "kedua"), {
                id: newId,
                gambar: imageUrl,
                tanggalPembuatan: formatDate(new Date())
            })
            .then(() => {
                resetForm();
                setPreview(null);
                router.push('/admin/about/kedua');
                toast.success('Berhasil menambahkan data', {
                    position: 'top-center',
                    duration: 2000
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
        },
    });

    const handleImageChange = (e) => {
        const file = e?.target?.files?.[0];
        if (file) {
            formik.setFieldValue('gambar', file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-100 to-purple-500 overflow-hidden">
            <div className="h-full py-10">
                <div className="flex justify-center items-center h-full">
                    <div className="w-full mt-4 max-w-[1024px] px-6 min-w-[420px]:px-6 bg-white p-8">
                        <Card className="flex flex-col gap-y-2">
                            <CardHeader>
                                <h1 className="text-xl">Tambah Gambar</h1>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="">
                                        <div className="mt-3">
                                            <div>
                                                <label htmlFor="gambar" className="text-sm">Gambar <span className="text-red-500">*</span></label>
                                            </div>
                                            <input
                                                type="file"
                                                id="gambar"
                                                onChange={handleImageChange}
                                                accept="image/*"
                                                label='Gambar'
                                                placeholder="Pilih Gambar"
                                                name="gambar"
                                                className="bg-slate-50"
                                            />
                                            {formik.errors.gambar && formik.touched.gambar && (
                                                <div className="text-red-500 text-sm">{formik.errors.gambar}</div>
                                            )}
                                        </div>
                                        <div className="my-4">
                                            <Image src={preview} className="w-full aspect-[16/9]" />
                                        </div>
                                        <div className="w-full mt-10">
                                            <Button type="submit" className="w-full bg-blue-600 p-2 text-white" onClick={formik.handleSubmit} disabled={isSubmitting}>{isSubmitting ? (<Spinner color="white" size="sm" />) : ("Tambah")}</Button>
                                        </div>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default authCheck(AddKeduaPage);
