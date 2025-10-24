'use client';
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function ThirdSection(){
    const [theme] = useTheme();
    return (
        <div className={`flex flex-col lg:px-80   justify-center items-center   ${theme === "dark" ? "bg-black text-white" : "text-black bg-white"}`}>
            <div className="text-center flex flex-col ">            
            <h1 className="lg:text-7xl  text-3xl font-bold ">What is <span className="">Hold<span className="text-blue-400">On</span>Play</span>?</h1>
            <h2 className="font-bold text-sm lg:text-4xl">Your <span className="text-blue-400">Independent</span> Music Distrbiution Company</h2>
            <p className="text-justify text-sm lg:text-3xl p-5">HoldOnPlay, a part of Believe, is the leading global platform empowering independent artists to build sustainable careers. Though cutting-edge technology and artist 
                first services, HoldOnPlay offers independent music distribution, publishing administration, and 
                promotional tools that help musicians grow their audience and revenue.
            </p>
            <p className="text-center text-sm lg:text-3xl font-bold p-5">As a pioneer in Hiphop Music Distribution and Independent digital music distribution, HoldOnPlay is dedicated to making music accessible while keeping artists in control</p>
            <button className="p-2 border-2 bg-blue-400 w-fit self-center hover:bg-blue-800  border-blue-400 rounded-full font-bold"><Link href="/sellMusic">SEE OUR DISTRIBUTION PLANS</Link></button>
        </div>

        </div>
    )
}
