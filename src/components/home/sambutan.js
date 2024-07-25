import Image from 'next/image';

const sambutan = () => {
  return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 bg-[#677D6A]">
          <div className="flex lg:pt-36 md:pt-36 pt-16 sm:order-1 justify-center">
            <div className="pb-10 relative w-80 h-60 md:w-96 md:h-[550px] lg:w-[800px] lg:h-[680px] rounded-xl">
              <Image src="/images/home.jpg" alt="padukuhan ngreyung" layout="fill" objectFit="cover" className='rounded-xl'/>
            </div>
          </div>
          <div className="lg:pr-60 lg:pb-36 md:pb-36 pb-16 md:pr-14 pl-10 pr-10 lg:pt-36 md:pt-36 pt-10 sm:order-2 text-white">
            <h1 className="lg:text-4xl md:text-2xl text-lg font-bold">
              Padukuhan Ngreyung
            </h1>
            <p className="lg:text-2xl lg:mt-5 md:mt-5 text-justify whitespace-pre-wrap md:text-lg">
              {`
Selamat datang di website resmi Padukuhan Ngreyung. 

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