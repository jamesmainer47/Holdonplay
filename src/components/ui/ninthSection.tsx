"use client";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function NinthSection(){
    const [theme] = useTheme()
    return (
        <div className={`flex flex-col lg:px-50 sm:px-10  relative lg:flex-row sm:flex-col items-center self-center justify-center sm:h-dvh text-center  ${theme === "dark" ? "bg-black text-white": "bg-white text-black"}`}>
            <div className="flex flex-col p-5">
                <h1 className="text-2xl lg:text-5xl font-extrabold sm:text-xl ">Reach .<span className="text-blue-500">More Fans</span> Increase Your Streams.</h1>
                <h1 className="text-2xl lg:text-xl font-extrabold sm:text-xl"></h1>
                <h1 className="lg:text-6xl font-extrabold text-blue-400 sm:text-2xl">Grow Your Music Career.</h1>
                <h2 className="text-justify font-bold">Join HoldOnPlay to access the Accelerator platform and speed up your success!</h2>
                <p className="text-justify text-sm">HoldOnPlay leverages innovative, developed in-house tools to elevate the ideal tracks for 
                    greater audience reach. In the first half of 2024 alone, Accelerator generated 10 billion
                    streams for opted-in artists.
                </p>
                <div className="flex">
                    <button className="p-2 w-fit self-center m-2 bg-blue-400 border-blue-400 hover:bg-blue-800  rounded-full border-2"><Link href="/sellMusic">SIGN UP </Link></button>
                    <button className="p-2 w-fit self-center m-2 bg-blue-400 border-blue-400 hover:bg-blue-800  rounded-full border-2"><Link href="/book">WATCH READ THE REPORT</Link></button>
                </div>
            </div>
            <video src="/hopplayer.mp4"  playsInline loop autoPlay muted className="" >Fuck its not playing</video>
        </div>
    )
}