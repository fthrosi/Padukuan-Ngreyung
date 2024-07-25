"use client";
import React from "react";
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { Spinner } from "@nextui-org/react";

const Artikel = () => {
  const [datas, setDatas] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // State untuk loading
  const [isMdScreen, setIsMdScreen] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "kegiatan"));
    const result = querySnapshot.docs.map((doc) => ({
      key: doc.id,
      id: doc.data().id,
      tanggalPembuatan: doc.data().tanggalPembuatan,
      tanggal: doc.data().tanggal,
      judul: doc.data().judul,
      image: doc.data().gambar,
      deskripsi: doc.data().deskripsi,
      
  }));


    const sortedResult = result.sort((a, b) => new Date(b.tanggalPembuatan) - new Date(a.tanggalPembuatan));
    setDatas(sortedResult);
    setTimeout(() => {
      setLoading(false); 
    }, 500); 
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner color="primary" size="lg" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      ) : (
        datas.map((item, index) => (
          <Link href={`/informasi/detailInformasi/${item.id}`} key={index}>
            <div className="flex space-x-4 mt-5">
              <img 
                src={item.image} 
                alt="kegiatan" 
                layout="responsive" 
                width={0} 
                height={0} 
                className="rounded-t-lg lg:h-[300px] lg:w-[400px] md:w-[300px] md:h-[200px] w-[100px] h-[100px]" 
              />
              <div className="flex-grow text-[#354b39]">
                <h1 className="font-semibold lg:font-bold md:font-bold lg:text-xl md:text-xl text-base">
                  {truncateText(item.judul, isMdScreen ? 100 : 40)}
                </h1>
                <p className="lg:text-base md:text-base text-sm">{item.tanggal}</p>
                <p className="lg:text-lg md:text-lg text-sm" dangerouslySetInnerHTML={{ __html: truncateText(item.deskripsi, isMdScreen ? 100 : 40) }}></p>
              </div>
            </div>
            <hr />
          </Link>
        ))
      )}
    </div>
  );
};

export default Artikel;
