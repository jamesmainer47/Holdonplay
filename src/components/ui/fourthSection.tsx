"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function FourthSection(){
    const [theme] = useTheme();
    return (
        <div className={`flex flex-col lg:flex-row gap-10 sm:flex-col md:flex-col justify-center items-center lg:px-80  p-5 ${theme === "dark" ? "bg-black text-white": "bg-white text-black"}`}>
            <Image src="/forhome/adela.webp" width={300} height={300} alt="decoration image"/>
            <div className=" flex flex-col  ">
                <h1 className="text-2xl font-bold"><span className="text-blue-400">Why Choose</span> HoldOnPlay</h1>
                <h2 className="font-bold text-2xl"><span className="text-blue-400">Best Choice</span> of Music Distribution Companies</h2>
                <ul className="list-disc text-sm">
                    <li>Unlimited Music Distribution Worldwide</li>
                    <li>Direct access to 150+ digital stores and streaming services </li>
                    <li>Access to Exclusive Audience Development Program - HoldOnPlay Accelerator</li>
                    <li>Detailed sales data to guide your music strategy</li>
                    <li>Discover why we are better than <Link href="/whynotetunecore">TuneCore</Link> and <Link href="/whynotdistrokid">DistroKid</Link></li>
                </ul>
                <Link href="/stores" className="p-2 border-2 flex text-center self-center  hover:bg-blue-800  bg-blue-400 font-bold rounded-full border-blue-400">ALL OUR SERVICES</Link>
            </div>
        </div>
    )
}