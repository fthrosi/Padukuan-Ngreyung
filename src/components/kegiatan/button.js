import Link from "next/link";
const Button = ()=>{
    return(
        <Link href="/informasi">
            <h1 className="btn lg:text-base text-sm bg-white text-[#283a2c] px-1 py-1 rounded-lg">See All</h1>
        </Link>
    )
}
export default Button