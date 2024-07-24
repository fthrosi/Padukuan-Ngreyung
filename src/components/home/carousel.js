'use client';
import Myswiper from "./swiper";
import styles from "@/utils/swiper.module.css";
const Carousel = () => {
  return (
    <section className={`${styles.container}container p-10 bg-[#677D6A]`}>
        <Myswiper/>
    </section>
  );
}

export default Carousel;