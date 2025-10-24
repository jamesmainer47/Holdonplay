

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function SeventhSection(){
    const [theme] = useTheme();
    return (
        <div className={`flex flex-col lg:flex-row sm:flex-col p-10 px-10 lg:px-80 sm:px-10 text-center items-center self-center justify-center  sm:dvh ${theme === "dark" ? "bg-black text-white": "bg-white text-black"}`}>
            <div className="flex flex-col">
                <h1 className="text-4xl lg:text-6xl font-extrabold sm:text-2xl">Be Your Own <span className="text-blue-400">Graphic Designer</span></h1>
                <h2 className="p-2">Create your Cover Art with Layouts, Images, Presets, Filters, Fonts, and Overlays</h2>
                <p className="p-2 ">Customize your HoldOnPlay Cover Art during the upload process</p>
                <button className="p-2 m-2 bg-blue-400 font-bold border-blue-400 rounded-full border-2 hover:bg-blue-800 "><Link href="/sellMusic">SIGN UP NOW</Link></button>
                <button className="p-2 m-2 bg-blue-400 font-bold border-blue-400 rounded-full border-2 hover:bg-blue-800 "><Link href="/stores">WATCH VIDEO</Link></button>
            </div>
            <Image src="/forhome/tool.webp" alt="simple" width={500} height={500}/>
        </div>
    )
}