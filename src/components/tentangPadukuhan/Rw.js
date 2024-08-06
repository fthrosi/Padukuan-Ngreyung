import Image from 'next/image';
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from 'react';
const Struktur = () => {
    const [data, setData] = React.useState([]);
    const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "rw"));
    const result = querySnapshot.docs.map((doc) => {
      return {
        Nama: doc.data().nama,
        image: doc.data().gambar,
        Jabatan: doc.data().jabatan
      };
    });
    setData(result);
  };
  React.useEffect(() => {

    fetchData();
  }
  , []);
    return (
      <>
        {data.map((data, index) => (
            <div key={index} className='flex justify-center lg:block md:block'>
            <div className="bg-white shadow-lg rounded-lg lg:max-w-7xl md:max-w-sm max-w-60 m-5">
                <Image src={data.image} alt="kegiatan" layout="responsive" width={50} height={50} className="rounded-t-lg" />
                <div className='p-5'>
                    <h1 className="lg:text-xl md:text-2xl text-xl font-bold">{data.Nama}</h1>
                    <p className="lg:text-base md:text-lg text-base font-medium">{data.Jabatan}</p>
                </div>
            </div>
            </div>
        ))}
      </>
    )
}
export default Struktur