"use client"
import { useTheme } from "./ThemeProvider";
import Link from "next/link"
export default function FifthSection(){
    const [theme] = useTheme();
    return (
        <div className={`flex flex-col  items-center justify-center lg:px-80 px-4 text-center  ${theme === "dark" ? "bg-black text-white": "bg-white text-black"}`}>
            <h1 className="text-2xl font-bold px-5">Stream & Distribute <span className="text-blue-400">Your Music</span> Without a Label</h1>
            <h2 className="text-xl font-bold ">Sell Your Music Online Worldwide</h2>
            <p className="text-justify text-sm lg:text-lg p-2">
                Before HoldOnPlay, artists needed a label to get their music sold online. In 2025, we disrupted the industry partnering directly 
                with Digital Stores to allow any musician to sell their songs worldwide. Today, HoldOnPlay is the world&apos;s leading digital music aggregator.
                Choose an unlimited distribution plan, upload your music and we&apos;ll do the rest. Your music will hit top digital stores, like Spotify and Apple Music, in no time
            </p>
            <button className="rounded-full border-2 p-2 bg-blue-400 hover:bg-blue-800  font-bold border-blue-400">
                <Link href="/sellMusic">SELL YOUR MUSIC</Link>
            </button>
        
        </div>
    )
}