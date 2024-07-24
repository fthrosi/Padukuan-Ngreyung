"use client"
import React, { useState, useEffect } from 'react';
import { db } from '@/service/firebase';
import { collection, where, query, getDocs } from 'firebase/firestore';
import { Spinner } from "@nextui-org/react";

const DetailInformasi = ({ params }) => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { id } = params;
    const decodeId = decodeURIComponent(id);

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
                setDatas(data);
            });
        } catch (error) {
            console.error('Error fetching document:', error);
        }
        setTimeout(() => {
            setLoading(false); 
          }, 500);
    };

    useEffect(() => {
        fetchData();
    }, [decodeId]);

    return (
        <div className="bg-[#354b396f] flex justify-center pt-[110px]">
            <div className="bg-white w-[1800px] min-h-screen p-10">
                {loading? (
                    <div className="flex justify-center items-center min-h-screen">
                    <Spinner color="primary" size="lg" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                ):(
                    <>
                   <h1 className='lg:text-6xl md:text-6xl text-3xl font-bold lg:mt-5 md:mt-0 lg:mb-10 md:mb-10 mb-5'>{datas.judul}</h1>
                    <img src={datas.gambar} alt={datas.judul} layout="responsive" width={0} height={0} className="rounded-t-lg w-full lg:h-[800px]  md:h-[500px] h-[300px]" />
                    <p className='lg:text-3xl md:text-2xl text-xl lg:mt-10 md:mt-10 mt-5 text-justify' dangerouslySetInnerHTML={{ __html: datas.deskripsi }}/> 
                    </>
                )}
            
            </div>
        </div>
    );
};

export default DetailInformasi;
