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