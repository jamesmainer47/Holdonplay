"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";


export default function EightSection(){
    const [theme] = useTheme();
    return (
        <div className={`flex flex-col p-10 gap-2 md:flex-col lg:flex-row sm:flex-col justify-center items-center px-10 lg:px-50 sm:px-20 text-center ${theme === "dark" ? "bg-black text-white": "bg-white text-black"}`}>
            <Image src="/forhome/kingofstatenisland.webp" width={500} height={500} alt="Earnings with Music Publishing" className="mr-4"/>
            <div className=" flex flex-col align-middle self-center ">
                <h1 className="text-3xl font-bold sm:text-2xl">Maximize Your Earnings with <span className="text-blue-400">Music Publishing</span></h1>
                <p className="text-justify text-sm">Distribution isn&apos;t only way to make money as an independent musician. When you write a song, you are owed royalities.
                    Your original songs generate publishing revenue with every stream on Spotify, video creation on TikTok, view on Youtube, radio spin, or 
                    live perfomance worldwide. 
                </p>
                <p className="font-bold">Let us help you get the royalties you are owed by:</p>
                <ul className="list-decimal text-left text-sm">
                    <li>Collecting your royalties globally/worldwide </li>
                    <li>Tracking your publishing royalties from Spotify, Youtube, TikTok, Radio and thousands of other pay sources</li>
                    <li>Offering advanced analytics on where your perfomance and mechanical royalties come from</li>
                    <li>All while you keep 100% of your copyrights</li>
                </ul>
                <div>
                <button className="p-2 m-2 w-fit self-center border-blue-400 bg-blue-400 rounded-full border-2 hover:bg-blue-800">
                    <Link href="/stores">LEARN MORE</Link>
                </button>
                <button className="p-2 m-2 border-blue-400 w-fit self-center bg-blue-400 hover:bg-blue-800  rounded-full border-2">
                    <Link href="/book">BOOK YOUR PERSONNEL</Link>
                </button>
                </div>
            </div>
        </div>
    )
}