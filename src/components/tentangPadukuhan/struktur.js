import Image from 'next/image';
import Rt1 from './Rt1';
import Rt2 from './Rt2';
import Rt3 from './Rt3';
import Rw from './Rw';
const Struktur = () => { 
    return (
      <>
        <div className="text-center lg:py-10 lg:mt-28 md:mt-52 mt-20 text-[#354b39]">
          <h1 className="lg:text-3xl md:text-3xl text-3xl font-bold mb-20">Pejabat Padukuhan</h1>
        </div>
        <div className="pl-10 pr-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pb-10 text-[#354b39]">
            <Rw/>
            <Rt1/>
            <Rt2/>
            <Rt3/>
        </div>
      </>
    )
}
export default Struktur