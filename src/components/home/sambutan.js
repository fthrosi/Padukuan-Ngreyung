import Image from 'next/image';

const sambutan = () => {
  return (
        <div className="flex lg:flex-row md:flex-row flex-col bg-[#f5f5f5] px-6 py-8 gap-5 md:py-20 lg:px-[clamp(2rem,5vw,4rem)] lg:py-28">
          <div className="order-2 md:order-1">
            <div className="relative w-full h-[60vw] md:w-[45vw] md:h-[70vw] lg:w-[40vw] lg:h-[68vw] xl:w-[45vw] xl:h-[71vw] 2xl:w-[50vw] 2xl:h-[50vw] rounded-xl">
              <Image src="/images/home.jpg" alt="padukuhan ngreyung" layout="fill" objectFit="cover" className='rounded-xl'/>
            </div>
          </div>
          <div className="text-[#354b39] order-1 flex items-center md:order-2">
            <p className="lg:text-[clamp(1.33rem,2.06vw,1.65rem)] xl:text-[clamp(1.65rem,2.08vw,2rem)] text-justify whitespace-pre-wrap text-[clamp(1rem,2.5vw,1.2rem)] md:text-[clamp(0.968rem,2.1vw,1.3443rem)] 2xl:text-[clamp(1.564rem,1.65vw,3rem)]">
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