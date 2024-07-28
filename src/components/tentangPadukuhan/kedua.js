import Image from "next/image"
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from 'react';

  

const Pertama = () => {
    const [data, setData] = React.useState([]);
    const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "kedua"));
    const result = querySnapshot.docs.map((doc) => {
      return {
        image: doc.data().gambar,
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
        {data.map((item, index) => (
        <div className="relative w-full h-[225px] md:h-[500px] lg:h-[450px]" key={index}>
            <Image src={item.image} alt={`Gambar ${index+1}`} layout="fill" objectFit="cover" />
        </div>
        ))}
        </>
    )
}

export default Pertama
