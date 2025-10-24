
"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const forNavs = [
    {
        name: "SELL YOUR MUSIC", 
        link: "/sellMusic",
    },
    {
        name: "STORES",
        link: "/stores",
    },
    {
        name: "SHOP",
        link: "/shop"
    }

    ]
export default function Navigate(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme ] = useTheme();

    const togleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <nav className={`flex flex-row ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"} justify-between text-center   w-full p-2 self-center-safe items-center align-middle sticky top-0 h-20 z-100 bg-[rgba(0,0,0,0.7)]`}>
            <Link href="/"><h1 className="text-3xl font-bold p-5">hold<span className="text-blue-400 text-5xl font-extrabold">ON</span>play</h1></Link>
            <div className=""> 
                <button className="relative" onClick={togleTheme}>
                    <FaSun className={`size-10 ${theme == "dark" ? 'flex': 'hidden'}`} />
                    <FaMoon className={`size-10 ${theme == "dark" ? 'hidden': 'flex'}`} />
                </button>
            </div>
            <div className="flex font-bold">
                <ul className="hidden xl:flex md:hidden lg:hidden flex-row items-center self-center">
                  {forNavs.map((navitem) => (
                    <Link href={navitem.link} key={navitem.name}>
                      <li className="p-4 m-2 relative group cursor-pointer">
                        <span className="relative z -10 hover:text-blue-500">{navitem.name}</span>
                        <span className="absolute left-0 bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                      </li>
                    </Link> 
                  ))}
                </ul>

                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden xl:hidden md:flex sm:flex flex  mr-4 focus:outline-blue-400 size-10"><FiMenu className="hover:text-blue-400 size-10"/></button>
                 <div className={`absolute w-full left-0 top-20 h-dvh ${menuOpen ? 'block' : 'hidden'} `}>
                <ul className={`flex-col flex items-center self-center ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
                {forNavs.map((navitem) => (
                <Link href={navitem.link} key={navitem.name}><li className="p-4 m-2 hover:border-b-2 hover:border-blue-400" key={navitem} onClick={() => setMenuOpen(false)}>
                    {navitem.name}
                </li>
                </Link>
                ))}
                
                </ul> 
                
                   
              
            </div>
           
            </div>

            
        </nav>
    )
}