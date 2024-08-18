'use client';
import Myswiper from "./swiper";
import styles from "@/utils/swiper.module.css";
import Btn from "./button"
const Carousel = () => {
  return (
    <section className={`${styles.container}container p-6 lg:px-[clamp(2rem,5vw,4rem)] bg-[#f5f5f5]`}>
      <div className="flex justify-end">
          <Btn />
      </div>
        <Myswiper/>
    </section>
  );
}

export default Carousel;