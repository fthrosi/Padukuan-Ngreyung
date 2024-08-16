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
    <nav className={`py-4 lg:px-72 md:px-16 fixed w-screen md:flex md:justify-between items-center ${open? (scroll? "bg-[#354b39]":"bg-[#354b39]"):(scroll? "bg-[#354b39]":"bg-transparent transition-color duration-1000") } md:${scroll? "bg-[#354b39]":"bg-transparent transition-color duration-1000"} z-50`}>
        <div className='flex items-center justify-between w-full px-6 text-white z-50 md:px-0 md:w-auto'>
          <Link href="/">
            <div className='flex justify-between items-center'>
              <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12">
                <Image src="/images/logo.png" alt="logo" layout="fill" objectFit="contain" />
              </div>
              <h1 className="lg:text-base md:text-base text-sm font-bold ml-2">Padukuhan Ngreyung</h1>
            </div>
          </Link>
          <div className='md:hidden lg:hidden block relative w-6 h-6' onClick={() => setOpen(!open)}>
              {open ? <Image src="/icon/cross-button.png" layout="fill" objectFit="contain" alt='logo'></Image>:<Image src="/icon/menu_24px.svg" layout="fill" objectFit="contain" alt='logo' className='text-black'></Image>}
          </div>
        </div>
        <ul className={`nav-links -z-50 absolute top-14 text-sm text-white bg-[#354b39] w-full py-5 flex flex-col justify-center items-center gap-2 transition-transform ${open? "translate-y-0" : "-translate-y-36"} md:flex md:translate-y-0 md:static md:flex-row md:gap-5 md:bg-transparent md:text-base md:w-auto`} onClick={() => setOpen(!open)}>
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
          <button className={`btn md:block hidden lg:text-base text-sm ${scroll ? "bg-white text-[#283a2c]":"bg-[#283a2c] text-white"}   lg:px-1 lg:py-1 md:py-2 md:px-3 rounded-lg`}>Telusuri</button>
        </Link>
    </nav>
   </>
  );
};

export default Navbar;
