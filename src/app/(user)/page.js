import Kegiatan from "@/components/kegiatan/kegiatan"
import Hero from "@/components/home/hero"
import Sambutan from "@/components/home/sambutan"
import Img from "@/components/home/image"
import Crsl from "@/components/home/carousel"

const home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Hero/>
      </div>
      <div>
        <Sambutan/>
      </div>
      <div>
        <Kegiatan/>
      </div>
      <div>
        <Img/>
      </div>
      <div>
        <Crsl/>
      </div>
    </>
  )
}
export default home