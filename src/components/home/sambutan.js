import Image from 'next/image';

const sambutan = () => {
  return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 bg-[#677D6A] px-6 py-8 gap-5 md:py-20 lg:px-24 lg:py-28">
          <div className="flex order-2 md:order-1">
            <div className="relative w-[45rem] h-56 md:w-[30rem] md:h-[49rem] lg:w-[60rem] lg:h-[31.5rem] rounded-xl">
              <Image src="/images/home.jpg" alt="padukuhan ngreyung" layout="fill" objectFit="cover" className='rounded-xl'/>
            </div>
          </div>
          <div className="text-white order-1 flex items-center md:order-2">
            <p className="lg:text-xl text-justify whitespace-pre-wrap md:text-lg">
              {`Selamat datang di website resmi Padukuhan Ngreyung. 

Kami berharap platform ini menjadi jendela informasi yang memudahkan seluruh warga untuk mendapatkan berita terkini, program desa, serta layanan publik yang tersedia. Website ini juga diharapkan dapat menjadi sarana komunikasi dan interaksi antara pemerintah desa dan masyarakat, sehingga terjalin hubungan yang lebih harmonis dan transparan.

Melalui website ini, kami berkomitmen untuk terus memberikan informasi yang akurat dan bermanfaat bagi seluruh warga. Mari bersama-sama kita membangun desa tercinta ini menjadi tempat yang semakin maju, sejahtera, dan harmonis. Dukungan dan partisipasi aktif dari seluruh warga sangat kami harapkan demi kemajuan Desa Ngreyung.

Terima kasih atas kunjungannya, dan semoga website ini dapat memberikan manfaat yang besar bagi kita semua.
              `}
            </p>
          </div>
        </div>
  )
}
export default sambutan