import Image from 'next/image';
const Struktur = () => {
    const dummyData = [
        {
            Gambar: "/images/flora.png",
          Nama: "Pak Dukuh",
          Jabatan: "Kepala Dukuh",
        },
        {
            Gambar: "/images/flora.png",
          Nama: "Pak RT",
          Jabatan: "Ketua RT 1",
        },
        {
            Gambar: "/images/flora.png",
          Nama: "Pak RT",
          Jabatan: "Ketua RT 2",
        },
        {
            Gambar: "/images/flora.png",
          Nama: "Pak RT",
          Jabatan: "Ketua RT 3",
        }
    ];
       
    return (
      <>
        <div className="text-center lg:py-10 lg:mt-52 md:mt-52 mt-20 text-[#354b39]">
          <h1 className="lg:text-6xl md:text-6xl text-3xl font-bold mb-20">Pejabat Padukuhan</h1>
        </div>
        <div className="pl-10 pr-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pb-10 text-[#354b39]">
            {dummyData.map((data, index) => (
              <div key={index} className='flex justify-center lg:block md:block'>
                <div  className="bg-white shadow-lg rounded-lg lg:max-w-7xl md:max-w-sm max-w-60 m-5">
                    <Image src={data.Gambar} alt="kegiatan" layout="responsive" width={50} height={50} className="rounded-t-lg" />
                    <div className='p-5'>
                      <h1 className="lg:text-2xl md:text-2xl text-xl font-bold">{data.Nama}</h1>
                      <p className="lg:text-lg md:text-lg text-base font-medium">{data.Jabatan}</p>
                    </div>
                </div>
              </div>
            ))}
        </div>
      </>
    )
}
export default Struktur