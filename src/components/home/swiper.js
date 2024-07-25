import { Swiper, SwiperSlide } from 'swiper/react';
import style from "@/utils/swiper.module.css"
import React from 'react';
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";


import 'swiper/css';
import 'swiper/css/pagination';

const Myswiper = () => {
  const [data, setData] = React.useState([]);
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "galeri"));
    const result = querySnapshot.docs.map((doc) => {
      return {
        key: doc.id,
        id: doc.data().id,
        tanggalPembuatan: doc.data().tanggalPembuatan,
        image: doc.data().gambar,
      };
    });
    const sortedResult = result.sort((a, b) => new Date(b.tanggalPembuatan) - new Date(a.tanggalPembuatan));
    setData(sortedResult);
  };
  React.useEffect(() => {

    fetchData();
  }
  , []);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      className={`${style.swiper} p-10`} 
      breakpoints={{
        768: { 
          slidesPerView: 2,
        },
        1024: { 
          slidesPerView: 4,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className={style.swiperSlide}>
          <img src={item.image} alt={`Slide ${index + 1}`} className={style.swiperSlideImg} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Myswiper;