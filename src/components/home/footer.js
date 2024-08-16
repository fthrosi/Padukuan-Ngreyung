'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#354b39] text-white">
      <div className="flex flex-col gap-5 lg:p-24 md:p-10 px-6 py-8 md:flex-row md:justify-between">
        <div className='flex flex-col  order-1 md:w-auto md:gap-2 lg:gap-5'>
          <h1 className='lg:text-2xl md:text-base font-bold'>
            Alamat
          </h1>
          <h1 className=' lg:text-xl md:text-sm'>
            Ngreyung, Pucung,Girisubo, <br />
            Kabupaten Gunung Kidul,<br />
            Daerah Istimewa Yogyakarta
          </h1>
        </div>
        <div className='flex flex-col gap-2 lg:gap-8 order-2 md:w-auto'>
            <h1 className='flex lg:justify-center md:justify-center lg:text-2xl md:text-base font-bold text-xl'>Ikuti Kami</h1>
            <ul className='flex justify-center items-center  lg:space-x-10 md:space-x-5 space-x-3'>
            <li><Link href="https://www.facebook.com/share/dYG4HbUFfPKdvvDt/?mibextid=qi2Omg"><img src="/icon/facebook.png" alt="Facebook" className='lg:h-10 lg:w-10 h-8 w-8' /></Link></li>
            <li><Link href="https://www.instagram.com/kim_padukuhanngreyung?igsh=bW43OHQzcXJqZ2po"><img src="/icon/instagram.png" alt="Instagram" className='lg:h-10 lg:w-10 h-8 w-8' /></Link></li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 lg:gap-5 order-3 md:w-auto'>
            <h1 className='lg:text-2xl md:text-base text-xl font-bold'>
              Kontak Kami
            </h1>
            <h1 className='lg:text-xl md:text-sm'>
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