"use client";

import Image from "next/image";
import { useState } from "react";
import  { FaGreaterThan, FaLessThan} from "react-icons/fa"
import { useTheme } from "./ThemeProvider";
const artistsay = [
    {
        "name": "ClonOnly",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "StupidBoyfriend",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "Muller",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "Phoncedady",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "Benson",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "Thug Chris",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "bugsarebugs",
        "image": "/forhome/very.jpg",
        "words": "What If life was all just about Music and Exploration. HoldOnPlay has made it easy for you to get the pay without daily hustle",
    },
]
export default function SixthSection(){
    const [currentIndex, setcurrentIndex] = useState(0);
    const [theme] = useTheme();

    const prevSlide = () => {
        setcurrentIndex((prev) => (prev === 0 ? artistsay.length-1 : prev - 1));
    };
    const nextSlide = () => {
        setcurrentIndex((prev) => (prev === artistsay.length-1  ? 0 : prev + 1));
    };
    return(
    <div className={`flex flex-col p-10 justify-center relative items-center text-center overflow-scroll ${theme === "dark" ? "bg-black text-white": "bg-white text-black"}`}>
        <h1 className="lg:text-5xl sm:text-2xl font-bold">What are <span className="text-blue-400">Artists </span>Saying About HoldOnPlay?</h1>
        <div className="flex relative">
            <div className="flex flex-row overflow-scroll transition-transform duration-300 ease-linear hide-scroll">
            {artistsay.map((src) => (
                <div className="p-5 text-xl flex-2/5 min-w-svw items-center self-center justify-center flex flex-col transition-transform duration-300 " key={src.name}  style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                    <div className="flex-shrink-0"><Image src={src.image} width={200} height={100} alt="username" className="rounded-full "/></div>
                    <h1 className="text-white font-bold">{src.name}</h1>
                    <p className="flex text-wrap lg:text-lg max-w-100 text-justify text-sm">{src.words }</p>
                </div>
            ))}
            </div>
        </div>
        <div className="absolute flex gap-200">
            <button className="sticky top-50  p-5 left-4 border-blue-400 bg-[rgba(0,0,255,0.1)] hover:bg-blue-800 " onClick={prevSlide}><FaLessThan/></button>
            <button className="sticky top-50 p-5 right-10 border-blue-400 bg-[rgba(0,0,255,0.1)] hover:bg-blue-800 " onClick={nextSlide}><FaGreaterThan/></button>
        </div>

    </div>
    )
}