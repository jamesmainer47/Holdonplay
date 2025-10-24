'use client';
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { SplitText } from "gsap/all";

export default function FirstSection(){
    const boxRef = useRef(null); 

    // Using useGSAP to run animation on mount 
    useGSAP(() => {
        const split = SplitText.create(".text", {type:"chars,words,lines"});
        gsap.from(split.chars, {
            duration: 1,
            y: 100, 
            autoAlpha: 0, 
            stagger: 0.05,
        });
        gsap.from('.box', {
            y:200,
            stagger: 0.005,
            opacity: 0
        });
        gsap.to(".box", {
            y: 0, 
            stagger: 0.005
        });
        gsap.from(boxRef.current, {y: 700, duration: 1});
        gsap.to(boxRef.current, {y: 0, duration: 1});
    }, []);
    return (
        <div ref={boxRef} className="lg:h-dvh h-auto px-10  p-10 pb-30 flex flex-col justify-center relative align-middle self-center text-justify lg:text-center items-center bg-[url('/hero.jpg')] bg-cover ">
            <h1 className="text-4xl lg:text-7xl text text-center text-white font-bold "><span className="text-blue-400">Music Distribution</span> Services</h1>
            <p className="lg:px-60 pt-5 lg:text-3xl  text-sm font-bold text-white">Get your Music on Spotify, Apple Music, TikTok, Youtube, Tidal, Tencent and more.</p>
            <p className="lg:px-60 pt-5 lg:text-3xl text-sm  font-bold text-white">Keep 100% ownership of your music and stay in control of your career. Unlimited Releases starting at Tsh: 77,000/=</p>
            <button className="rounded-full border-2 bg-blue-400 font-bold border-blue-400 hover:bg-blue-800 p-2 lg:p-5">
            <Link href="/sellMusic" className="text-sm font-bold">
                DISTRIBUTE MY MUSIC ONLINE
            </Link></button>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black "></div>
        </div>
    )
}