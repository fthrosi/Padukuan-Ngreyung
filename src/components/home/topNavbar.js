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
    <nav className={`py-4 lg:px-96  fixed w-screen ${scroll? "bg-[#354b39]":"bg-transparent"} z-50`}>
      <div className={`lg:mx-auto flex md:items-center items-start md:justify-center lg:justify-between px-5 md:px-0 lg:px-0 ${open?"justify-end":"justify-between"} text-white `}>
        <Link href="/" className={`display  ${open?"hidden":"flex items-center"}`}>
          <div className="relative w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20">
            <Image src="/images/logo.png" alt="logo" layout="fill" objectFit="contain" />
          </div>
          <h1 className="lg:text-3xl md:text-xl text-sm font-bold ml-2">Padukuhan Ngreyung</h1>
        </Link>
        <ul className="nav-links hidden display md:flex lg:space-x-10 md:space-x-2 md:ml-7 lg:text-3xl md:text-xl font-bold">
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
          <button className={`btn md:block hidden lg:text-2xl md:text-lg ${scroll ? "bg-white text-[#283a2c]":"bg-[#283a2c] text-white"}   lg:px-4 :py-2 md:px-2 md:py-1 rounded-lg m-5`}>Telusuri</button>
        </Link>
        
        <div className='md:hidden lg:hidden block relative w-5 h-5 mt-4' onClick={() => setOpen(!open)}>
        {scroll ? (open ? <Image src="/icon/cross-button.png" layout="fill" objectFit="contain" alt='logo'></Image>:<Image src="/icon/equal.png" layout="fill" objectFit="contain" alt='logo'></Image>):(open ? <Image src="/icon/incorrect.png" layout="fill" objectFit="contain" alt='logo'></Image>:<Image src="/icon/equal.png" layout="fill" objectFit="contain" alt='logo'></Image>)}
        </div>
      </div>
    </nav>
     <div className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-40 transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
     <div className="bg-white w-64 h-full p-5">
       <ul className="space-y-4 text-lg mt-16">
         <li>
           <Link href="/informasi" onClick={() => setOpen(false)}>
             Informasi
           </Link>
         </li>
         <li>
           <Link href="/about" onClick={() => setOpen(false)}>
             Tentang Padukuhan
           </Link>
         </li>
       </ul>
     </div>
   </div>
   </>
  );
};

export default Navbar;
