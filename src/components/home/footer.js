'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#354b39] text-white">
      <div className="flex flex-col gap-5 lg:py-24 lg:px-[clamp(2rem,5vw,4rem)] md:p-10 px-6 py-8 md:flex-row md:justify-between">
        <div className='flex flex-col  order-1 md:w-auto md:gap-2 lg:gap-5'>
          <h1 className='lg:text-2xl text-lg md:text-base font-bold 2xl:text-[clamp(1.5rem,2vw,2.25rem)]'>
            Alamat
          </h1>
          <h1 className=' lg:text-xl md:text-sm 2xl:text-[clamp(1.25rem,1.2vw,1.5rem)] text-base'>
            Ngreyung, Pucung,Girisubo, <br />
            Kabupaten Gunung Kidul,<br />
            Daerah Istimewa Yogyakarta
          </h1>
        </div>
        <div className='flex flex-col gap-2 lg:gap-8 order-2 md:w-auto'>
            <h1 className='flex lg:justify-center md:justify-center lg:text-2xl md:text-base font-bold 2xl:text-[clamp(1.5rem,2vw,2.25rem)] text-lg'>Ikuti Kami</h1>
            <ul className='flex justify-start items-center  lg:space-x-10 md:space-x-5 space-x-3 2xl:justify-center'>
            <li><Link href="https://www.facebook.com/share/dYG4HbUFfPKdvvDt/?mibextid=qi2Omg"><img src="/icon/facebook.png" alt="Facebook" className='lg:h-10 lg:w-10 h-8 w-8 2xl:w-12 2xl:h-12 ' /></Link></li>
            <li><Link href="https://www.instagram.com/kim_padukuhanngreyung?igsh=bW43OHQzcXJqZ2po"><img src="/icon/instagram.png" alt="Instagram" className='lg:h-10 lg:w-10 h-8 w-8 2xl:w-12 2xl:h-12' /></Link></li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 lg:gap-5 order-3 md:w-auto'>
            <h1 className='lg:text-2xl md:text-base text-lg font-bold 2xl:text-[clamp(1.5rem,2vw,2.25rem)]'>
              Kontak Kami
            </h1>
            <h1 className='lg:text-xl md:text-sm 2xl:text-[clamp(1.25rem,1.2vw,1.5rem)] text-base'>
              Telepon : 089675775700
              <br />
              Email : padukuhanngreyung@gmail.com
            </h1>
        </div>
      </div>
      <div className='flex justify-center px-6 lg:text-base md:text-base text-xs'>
        <p>&copy; 2024 KKN 85 UAJY KELOMPOK 61. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;