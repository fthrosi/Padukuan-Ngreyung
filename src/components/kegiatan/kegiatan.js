"use client"
import Btn from "./button";
import React from "react";
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

const Kegiatan = () => {
  const [datas, setDatas] = React.useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "kegiatan"));
    const result = querySnapshot.docs.map((doc) => {
      return {
        key: doc.id,
        id: doc.data().id,
        tanggalPembuatan: new Date(doc.data().tanggalPembuatan),
        tanggal: doc.data().tanggal,
        judul: doc.data().judul,
        image: doc.data().gambar,
        deskripsi: doc.data().deskripsi,
      };
    });

    const sortedResult = result.sort((a, b) => b.tanggalPembuatan - a.tanggalPembuatan).slice(0, 4);
    setDatas(sortedResult);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <>
      <div className='bg-[#677D6A] py-10 px-6 lg:px-24'>
        <div className="flex flex-col gap-10">
          <div className="text-center lg:py-10 text-white order-1">
            <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold">Kegiatan</h1>
          </div>
          <div className="flex justify-center order-3 md:order-2 md:justify-end">
            <Btn />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 text-[#354b39] justify-center order-2">
            {datas.map((data) => (
              <Link href={`/informasi/detailInformasi/${data.id}`} key={data.id}>
                <div className="bg-white shadow-lg rounded-lg">
                  <div className="lg:h-[200px] h-[200px] md:h-[400px]">
                    <img 
                    src={data.image} 
                    alt="kegiatan" 
                    layout="responsive" 
                    width={800} 
                    height={600} 
                    className="rounded-t-lg w-full h-full object-cover" 
                  />
                  </div>
                  <div className='p-5'>
                    <h1 className="lg:text-xl md:text-2xl text-xl font-bold">{truncateText(data.judul, 23)}</h1>
                    <p className="lg:text-sm md:text-lg text-base font-medium">{data.tanggal}</p>
                    <p className="lg:text-lg md:text-lg text-base" dangerouslySetInnerHTML={{ __html: truncateText(data.deskripsi, 60) }}></p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Kegiatan;
