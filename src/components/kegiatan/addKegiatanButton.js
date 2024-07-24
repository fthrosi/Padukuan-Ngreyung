import Link from "next/link";
const addKegiatan = ()=>{
    return(
        <Link href="/admin/kegiatan/addKegiatan">
            <button className="btn lg:text-2xl md:text-2xl bg-[#283a2c] text-white hover:bg-slate-300 hover:text-[#283a2c] px-4 py-2 rounded-lg m-5">Tambah Kegiatan</button>
        </Link>
    )
}
export default addKegiatan