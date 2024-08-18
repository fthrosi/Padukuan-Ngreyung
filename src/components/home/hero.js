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
              <h1 className="text-[clamp(1.2rem,6vw,8rem)] md:text-5xl lg:text-[clamp(3rem,4.69vw,3.75rem)] 2xl:text-[clamp(3.75rem,4vw,5rem)] font-bold z-10">Menikmati Budaya & Tradisi</h1>
              <h1 className="text-[clamp(0.75rem,5vw,1.5rem)]  md:text-2xl lg:text-[clamp(1.5rem,2.3vw,1.875rem)] 2xl:text-[clamp(1.875rem,2.3vw,2.875rem)] md:mt-6 lg:mt-6 font-bold">Dhadio Tulodho Nyengkuyung Gegayuhan</h1>
            </div>
          ),
        },
      ]}
      className="lg:aspect-[2/1.5] md:aspect-[1/1.5] aspect-[1/2.5] 2xl:aspect-[2/1.2]"
    />
  );
};

export default hero;
