import Image from "next/image"
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from 'react';
const sambutanDukuh = () => {
  const [data, setData] = React.useState([]);
    const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "dukuh"));
    const result = querySnapshot.docs.map((doc) => {
      return {
        image: doc.data().gambar,
      };
    });
    setData(result);
  };
  React.useEffect(() => {

    fetchData();
  }
  , []);
    return(
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                <pre className="whitespace-pre-wrap pr-4 pl-4 rounded-lg text-[#354b39] text-justify md:text-base lg:text-base text-base order-2">
                  {`
Assalamu'alaikum warahmatullahi wabarakatuh,
    
Salam sejahtera untuk kita semua,
    
Yang saya hormati, para tamu undangan, tokoh masyarakat, serta seluruh warga Desa Ngreyung yang saya cintai.

Puji syukur kita panjatkan ke hadirat Allah SWT, karena berkat rahmat dan karunia-Nya kita dapat berkumpul di acara yang sangat istimewa ini. Saya ingin mengucapkan selamat datang kepada seluruh hadirin yang telah menyempatkan waktu untuk hadir.

Pada kesempatan yang berbahagia ini, saya selaku Kepala Desa Ngreyung ingin menyampaikan beberapa hal penting terkait kemajuan dan perkembangan desa kita tercinta. Pertama-tama, saya mengucapkan terima kasih yang sebesar-besarnya atas kerja keras dan kerjasama yang baik dari seluruh warga dalam membangun dan memajukan desa kita. Tanpa partisipasi aktif dari bapak dan ibu sekalian, berbagai program dan kegiatan yang kita rencanakan tidak akan bisa berjalan dengan sukses.

Akhir kata, mari kita terus bekerja sama, menjaga keharmonisan, dan selalu berdoa agar Desa Ngreyung selalu diberikan keberkahan dan kemajuan. Semoga Allah SWT senantiasa memberikan rahmat dan hidayah-Nya kepada kita semua.

Wassalamu'alaikum warahmatullahi wabarakatuh.

Kepala Desa Ngreyung
                  `}
                </pre>
                <div className="flex justify-center items-center order-1 lg:mt-0 md:mt-0 mt-5">
                  <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                    {data.map((data, index) => (
                      <Image src={data.image} alt="logo" layout="fill" objectFit="contain" key={index}/>
                    ))}
                  </div>
                </div>
              </div>
    )
}
export default sambutanDukuh