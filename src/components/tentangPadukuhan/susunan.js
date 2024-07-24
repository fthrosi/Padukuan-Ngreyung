import Image from "next/image"

const Susunan = () => {
    return (
        <>
            <div className="relative w-full h-[250px] md:h-[500px] lg:h-[1000px] mt-28">
                <Image src="/images/pertama.png" alt="struktur" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-full h-[250px] md:h-[500px] lg:h-[1000px]">
                <Image src="/images/kedua.png" alt="struktur" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-full h-[250px] md:h-[500px] lg:h-[1000px]">
                <Image src="/images/ketiga.png" alt="struktur" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-full h-[250px] md:h-[500px] lg:h-[1000px]">
                <Image src="/images/keempat.png" alt="struktur" layout="fill" objectFit="cover" />
            </div>
        </>
    )
}

export default Susunan
