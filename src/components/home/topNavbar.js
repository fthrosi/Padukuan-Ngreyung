'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open,setOpen] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);
  return (
    <>
    <nav className={`py-4 lg:px-[clamp(2rem,5vw,4rem)] md:px-[clamp(2rem,4vw,6rem)] 2xl:px-[clamp(4rem,2.08vw,6rem)] fixed w-screen md:flex md:justify-between items-center ${open? (scroll? "bg-[#354b39]":"bg-[#354b39] transition-color duration-100"):(scroll? "bg-[#354b39]":" backdrop-blur-sm transition-color duration-1000") } md:${scroll? "bg-[#354b39]":"bg-transparent transition-color duration-1000"} z-50`}>
        <div className='flex items-center justify-between w-full px-[clamp(1.5rem,5vw,4rem)] text-white z-50 md:px-0 md:w-auto'>
          <Link href="/">
            <div className='flex justify-between items-center'>
              <div className="relative w-[clamp(2.5rem,7vw,5rem)] h-[clamp(2.5rem,7vw,5rem)] md:w-[clamp(3rem,6.25vw,4rem)] md:h-[clamp(3rem,6.25vw,4rem)] lg:w-[clamp(3.5rem,5vw,4rem)] lg:h-[clamp(3.5rem,5vw,4rem)]">
                <Image src="/images/logo.png" alt="logo" layout="fill" objectFit="cover" />
              </div>
              <h1 className="lg:text-[clamp(1.2rem,1.75vw,1.4rem)] 2xl:text-[clamp(1.4rem,1.44vw,1.8rem)] md:text-[clamp(1rem,2.18vw,1.4rem)] text-[clamp(0.9rem,2.5vw,2rem)] font-bold ml-2">Padukuhan Ngreyung</h1>
            </div>
          </Link>
          <div className='md:hidden lg:hidden block relative w-[clamp(1.5rem,4.5vw,2.5rem)] h-[clamp(1.5rem,4.5vw,2.5rem)]' onClick={() => setOpen(!open)}>
              {open ? <Image src="/icon/cross-button.png" layout="fill" objectFit="cover" alt='logo'></Image>:<Image src="/icon/menu_24px.svg" layout="fill" objectFit="contain" alt='logo' className='text-black'></Image>}
          </div>
        </div>
        <ul className={`nav-links -z-50 absolute top-14 text-sm text-white bg-[#354b39] w-full py-5 flex flex-col justify-center items-center gap-2 transition-transform ${open? "translate-y-0" : "-translate-y-36"} md:flex md:translate-y-0 md:static md:flex-row md:gap-5 md:bg-transparent md:text-[clamp(1rem,2.18vw,1.4rem)] lg:text-[clamp(1.2rem,1.75vw,1.4rem)] 2xl:text-[clamp(1.4rem,1.44vw,1.8rem)]  md:w-auto`} onClick={() => setOpen(!open)}>
          <li>
            <Link href="/informasi">
              <h1 className=''>Informasi</h1>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <h1>Tentang Padukuhan</h1>
            </Link>
          </li>
        </ul>
        <Link href="/informasi">
          <button className={`btn md:block hidden md:text-[clamp(1rem,1.7vw,1.1rem)] lg:text-[clamp(1.1rem,1.3vw,1.4rem)] text-sm ${scroll ? "bg-white text-[#283a2c]":"bg-[#283a2c] text-white"}   lg:px-2 lg:py-2 md:py-2 md:px-3 rounded-lg`}>Telusuri</button>
        </Link>
    </nav>
   </>
  );
};

export default Navbar;
