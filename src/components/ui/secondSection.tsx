"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useTheme } from "./ThemeProvider";


const logoz = ["/companies/spotify.webp", "/companies/tidal.svg", "/comapanies/youtube.svg", "/companies/beatport.svg", "/companies/amazon.svg", "/companies/apple.svg"]
export default function SecondSection(){
    const boxRef = useRef(null);
    const [theme] = useTheme();
 
;    return (
        <div ref={boxRef} className={`bg-black boxile2 flex relative flex-col justify-center items-center  p-4 text-center text-2xl ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
            <div className="flex flex-col lg:px-80 p-2">
            <h1 className="lg:text-6xl font-bold text-4xl"><span className="text-blue-400">Unlimited Distribution</span> </h1>
            <p className="text-justify text-sm lg:text-xl">Increase the reach of your music across the most popular stores & platforms like Spotify, Apple Music, TikTok, Youtube and many more. Empower yourself with unlimited distribution opportunities, and get your music heard by a global audience</p>
            <p className="text-justify text-sm lg:text-xl">Keep 100% ownership of your music, maintaining creative control and authority in your music career</p>
            <div className="flex self-center bg-black rounded-b-xl flex-wrap items-center justify-center p-4">{logoz.map((src) => (
                <Image src={src} key={src} width={200} height={300} alt="logos" className="size-20 lg:size-20 p-1 "/>
            ))}
            </div>
            <button className="border-2 batani rounded-full p-2 mt-5 border-blue-400 bg-blue-400 hover:bg-blue-800 w-fit self-center">
                <Link href="/stores">
                    VIEW ALL 150+ StORES
                </Link>
            </button>
            </div>
          
        </div>
    )
}
