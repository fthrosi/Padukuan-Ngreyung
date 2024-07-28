'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#354b39] text-white">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:p-20 md:p-10 p-3">
        <div className=' flex flex-col lg:justify-center lg:items-center order-1'>
          <h1 className='lg:text-3xl md:text-xl'>
            Alamat
          </h1>
          <h1 className='lg:mt-8 lg:text-2xl md:text-xl'>
            Ngreyung, Pucung,Girisubo, <br />
            Kabupaten Gunung Kidul,<br />
            Daerah Istimewa Yogyakarta
          </h1>
        </div>
        <div className='flex lg:justify-center lg:items-center order-2 lg:mt-0 md:mt-0 mt-5'>
            <nav >
                <h1 className='flex lg:justify-center md:justify-center items-center lg:text-3xl md:text-2xl text-xl'>Ikuti Kami</h1>
                <ul className='flex lg:justify-center md:justify-center items-center lg:m-10 md:m-10 mt-5 lg:pl-20 lg:pr-20 lg:space-x-10 md:space-x-10 space-x-5'>
                <li><Link href="https://www.facebook.com/share/dYG4HbUFfPKdvvDt/?mibextid=qi2Omg"><img src="/icon/facebook.png" alt="Facebook" className='lg:h-10 lg:w-10 h-8 w-8' /></Link></li>
                <li><Link href="https://www.instagram.com/kim_padukuhanngreyung?igsh=bW43OHQzcXJqZ2po"><img src="/icon/instagram.png" alt="Instagram" className='lg:h-10 lg:w-10 h-8 w-8' /></Link></li>
                </ul>
            </nav>
        </div>
        <div className='flex flex-col lg:items-center md:items-center lg:pl-10 md:pl-10 space-y-2 md:pr-4 lg:mt-0 md:mt-0 mt-5 order-3'>
          <div>
            <h1 className='lg:text-3xl md:text-2xl text-xl'>
              Kontak Kami
            </h1>
            <h1 className='lg:mt-8 mt-2 lg:text-2xl md:text-xl'>
              Telepon : 089675775700
            </h1>
            <h1 className='lg:text-2xl md:text-xl'>
              Email : padukuhanngreyung@gmail.com
            </h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center lg:mt-0 md:mt-0 mt-5 lg:text-base md:text-base text-sm'>
        <p>&copy; 2024 KKN 85 UAJY KELOMPOK 61. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;