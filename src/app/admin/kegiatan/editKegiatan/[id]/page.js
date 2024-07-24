
'use client';

import React, { useState, useEffect } from 'react';;
import { db } from '@/service/firebase';
import { collection, where, query, getDocs, updateDoc, doc } from 'firebase/firestore';
import { Button, Image, Input, Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import 'react-quill/dist/quill.snow.css';
import { getFile, uploadFile } from "@/lib/storage";
import { ref, deleteObject } from 'firebase/storage';
import { storage } from '@/service/firebase';
import { toast } from "sonner";
import { useFormik } from "formik";
import { useRouter } from 'next/navigation';
import * as yup from "yup";
import slugify from "slugify";
import dynamic from "next/dynamic";
import authCheck from '@/components/auth/authcheck';
import { Spinner } from "@nextui-org/react";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


const validationSchema = yup.object({
    judul: yup.string().required('Judul diperlukan'),
    deskripsi: yup.string().required('deskripsi diperlukan'),
    gambar: yup.mixed().nullable().test('fileSize', 'Gambar tidak boleh lebih dari 1MB', (value) => {
        if (!value) return true; 
        return value.size <= 1*1024*1024;
    })
})

const EditKegiatan = ({ params }) => {
    const [preview, setPreview] = useState(null);
    const [oldImage, setOldImage] = useState(null);
    const router = useRouter();
    const { id } = params;
    const decodeId = decodeURIComponent(id);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    
    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
            ['link']
        ]
    };

    
    const formik = useFormik({
        initialValues: {
            judul: '',
            deskripsi: '',
            gambar: null
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setIsSubmitting(true); 
            let imageUrl = preview; 

            if (values.gambar) {
                const storageRef = ref(storage, oldImage);
                await deleteObject(storageRef);
                const folder = 'kegiatan/';
                const imagePath = await uploadFile(values.gambar, folder);
                imageUrl = await getFile(imagePath);
            }

            const q = query(collection(db, 'kegiatan'), where('id', '==', id));
            const querySnapshot = await getDocs(q);
            const docRef = doc(db, 'kegiatan', querySnapshot.docs[0].id);
            await updateDoc(docRef, {
                
                id: slugify(values.judul, { lower: true }),
                judul: values.judul,
                deskripsi: values.deskripsi,
                gambar: imageUrl
            })
            .finally(() => {
                setIsSubmitting(false); 
            });

            

            toast.success('Artikel berhasil diubah', {
                position: 'top-center',
                duration: 2000
            });
            router.push('/admin/kegiatan');
        }
    });

    // Handle image change and set preview
    const handleImageChange = (e) => {
        const file = e?.target?.files?.[0];
        if (file) {
            setOldImage(preview);
            setPreview(URL.createObjectURL(file));
            formik.setFieldValue('gambar', file);
        } else {
            formik.setFieldValue('gambar', null);
        }
    };

    // Fetching data for the article to be edited
    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, 'kegiatan'), where('id', '==', decodeId));
                const querySnapshot = await getDocs(q);
                if (querySnapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    formik.setFieldValue('judul', data.judul);
                    formik.setFieldValue('deskripsi', data.deskripsi);
                    setPreview(data.gambar);
                });
            } catch (error) {
                console.error('Error fetching document:', error);
            }
        };
        fetchData();
    }, [decodeId]);

    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-br from-slate-100 to-purple-500 overflow-hidden'>
            <div className='h-full py-10'>
                <div className="flex justify-center items-center h-full">
                    <div className="w-full mt-4 max-w-[1024px] px-6 min-w-[420px]:px-6">
                        <Card className='flex flex-col gap-y-2'>
                            <CardHeader>
                                <p className='text-medium font-semibold'>Ubah Artikel</p>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className=''>
                                        <div className='my-4'>
                                            <Input
                                                type='text'
                                                label='Judul'
                                                id='Judul'
                                                placeholder='Judul'
                                                isRequired
                                                labelPlacement='outside'
                                                value={formik.values.judul}
                                                onChange={formik.handleChange('judul')}
                                            />
                                            {formik.errors.judul && formik.touched.judul && (
                                                <div className="text-red-500 text-sm">{formik.errors.judul}</div>
                                            )}
                                        </div>
                                        <div className='flex flex-col'>
                                            <Input
                                                type='file'
                                                id='gambar'
                                                onChange={handleImageChange}
                                                accept='image/*'
                                                label='Gambar'
                                                labelPlacement='outside'
                                                placeholder='Pilih Gambar'
                                                name='gambar'
                                            />
                                            {formik.errors.gambar && formik.touched.gambar && (
                                                <div className="text-red-500 text-sm">{formik.errors.gambar}</div>
                                            )}
                                        </div>
                                        <div className='my-4'>
                                            {preview && <Image src={preview} className='w-full aspect-[16/9]' />}
                                        </div>
                                        <div className='h-52 mb-6'>
                                            <ReactQuill 
                                                id='deskripsi'
                                                theme='snow'
                                                modules={modules}
                                                value={formik.values.deskripsi}
                                                onChange={(deskripsi) => formik.setFieldValue('deskripsi', deskripsi)}
                                                key='deskripsi'
                                                className='sm:h-[80%] h-[60%]'
                                                placeholder='Isi deskripsi'
                                            />
                                        </div>
                                        {formik.errors.deskripsi && formik.touched.deskripsi && (
                                            <div className="text-red-500 text-sm">{formik.errors.deskripsi}</div>
                                        )}
                                        <div className='w-full mt-10'>
                                            <Button color="primary" onClick={formik.handleSubmit} className='w-full' disabled={isSubmitting}>{isSubmitting? (<Spinner color="white" size="sm" />):("Simpan")}</Button>
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
};

export default authCheck(EditKegiatan);
