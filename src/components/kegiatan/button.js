import Link from "next/link";
const Button = ()=>{
    return(
        <Link href="/informasi">
            <h1 className="btn lg:text-lg text-base bg-white text-[#283a2c] px-4 py-2 rounded-lg m-5 ">See All</h1>
        </Link>
    )
}
export default Button