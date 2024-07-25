import Image from "next/image"
import Pertama from "./pertama"
import Kedua from "./kedua"
import Ketiga from "./ketiga"
import Keempat from "./keempat"

  

const Susunan = () => {
    return (
        <>
            <div className="mt-28">
                <Pertama />
                <Kedua />
                <Ketiga />
                <Keempat />
            </div>
        </>
    )
}

export default Susunan
