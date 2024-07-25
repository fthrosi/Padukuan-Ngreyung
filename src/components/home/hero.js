'use client';
import { ParallaxBanner } from 'react-scroll-parallax';

const hero = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: '/images/home.jpg', speed: -50 },
        {
          speed: -25,
          children: (
            <div className="absolute inset-0 items-center justify-center text-center text-white flex flex-col p-4">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold z-10">Menikmati Budaya & Tradisi</h1>
              <h1 className="text-xl  md:text-2xl lg:text-3xl mt-4 md:mt-6 lg:mt-10 font-bold">Dhadio Tulodho Nyengkuyung Gegayuhan</h1>
            </div>
          ),
        },
      ]}
      className="lg:aspect-[2/1.1] md:aspect-[1/1.5] aspect-[1/1.8]"
    />
  );
};

export default hero;
