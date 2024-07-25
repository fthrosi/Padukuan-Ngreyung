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
      <div className='bg-[#677D6A]'>
        <div className="text-center lg:py-10 text-white">
          <h1 className="lg:text-6xl md:text-6xl text-3xl font-bold">Kegiatan</h1>
        </div>
        <div className="flex justify-end pl-10 pr-10">
          <Btn />
        </div>
        <div className="pl-10 pr-10 grid lg:grid-cols-4 md:grid-cols-2 pb-10 text-[#354b39] justify-center">
          {datas.map((data) => (
            <Link href={`/informasi/detailInformasi/${data.id}`} key={data.id}>
              <div className="bg-white shadow-lg rounded-lg m-5">
                <img 
                  src={data.image} 
                  alt="kegiatan" 
                  layout="responsive" 
                  width={800} 
                  height={600} 
                  className="rounded-t-lg lg:h-[300px] h-[100px] md:h-[200px]" 
                />
                <div className='p-5'>
                  <h1 className="lg:text-2xl md:text-2xl text-xl font-bold">{data.judul}</h1>
                  <p className="lg:text-lg md:text-lg text-base font-medium">{data.tanggal}</p>
                  <p className="lg:text-lg md:text-lg text-base" dangerouslySetInnerHTML={{ __html: truncateText(data.deskripsi, 100) }}></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Kegiatan;
