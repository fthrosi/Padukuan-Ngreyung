import { Swiper, SwiperSlide } from 'swiper/react';
import style from "@/utils/swiper.module.css";
import React, { useState } from 'react';
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";
import modalStyle from '@/utils/modal.module.css'; // Import CSS module

import 'swiper/css';

import { Autoplay} from 'swiper/modules';

const Myswiper = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

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
  }, []);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className={`${style.swiper}`}
        modules={[Autoplay]}
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
            <div className='shadow-lg rounded-lg'>
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className={`${style.swiperSlideImg}`}
                onClick={() => openModal(item.image)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <div className={modalStyle.modal} onClick={closeModal}>
          <span className={modalStyle.close} onClick={closeModal}>&times;</span>
          <img className={modalStyle.modalContent} src={currentImage} />
        </div>
      )}
    </div>
  );
};

export default Myswiper;
