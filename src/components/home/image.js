'use client';
import { ParallaxBanner,} from 'react-scroll-parallax';
const image = () => {
    return (
      <ParallaxBanner
        layers={[
          { image: '/images/home.jpg', speed: -50 },
          { image: '/images/home.jpg', speed: -30 },
        ]}
        className="lg:aspect-[2/1.1] md:aspect-[1/1.5] aspect-[1/1.8]"
      />
    );
};
export default image;