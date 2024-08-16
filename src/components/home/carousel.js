'use client';
import Myswiper from "./swiper";
import styles from "@/utils/swiper.module.css";
import Btn from "./button"
const Carousel = () => {
  return (
    <section className={`${styles.container}container p-6 lg:px-24 bg-[#677D6A]`}>
      <div className="flex justify-end">
          <Btn />
      </div>
        <Myswiper/>
    </section>
  );
}

export default Carousel;