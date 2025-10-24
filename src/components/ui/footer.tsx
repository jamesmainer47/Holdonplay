"use client";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Footer(){
    const [theme] = useTheme();
    return (
        <div className={`flex flex-col p-10 justify-center text-center shadow-2xl shadow-blue-400 bg-black sm:text-center ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className="flex flex-col sm:flex-col md:flex-col  lg:flex-row justify-center  text-center lg:text-left md:text-center">
            <div className="p-2 m-2">
                <h1 className="text-2xl font-bold">Learn About HoldOnPlay</h1>
                <ul>
                    <li className="hover:text-blue-500"><Link href="/about">About HoldOnPlay</Link></li>
                    <li className="hover:text-blue-500"><Link href="/privacy">Privacy</Link></li>
                    <li className="hover:text-blue-500"><Link href="/terms">Terms & Conditions</Link></li>
                </ul>
            </div>
            <div className="p-2 m-2">
                <h1 className="text-2xl font-bold">Make Money With HoldOnPlay</h1>
                <ul>
                    <li className="hover:text-blue-500"><Link href="/register">Create Your Account</Link></li>
                    <li className="hover:text-blue-500"><Link href="/sellMusic">Sell Your Music</Link></li>
                    <li className="hover:text-blue-500"><Link href="/publish">Music Publishing</Link></li>
                    <li className="hover:text-blue-500"><Link href="/services">Artist Services</Link></li>
                </ul>
            </div>
            <div className="p-2 m-2">
                <h1 className="text-2xl font-bold">HoldOnPlay Community</h1>
                <ul>
                    <li className="hover:text-blue-500"><Link href="/about">Facebook</Link></li>
                    <li className="hover:text-blue-500"><Link href="/about">X(Formerly Twitter)</Link></li>
                    <li className="hover:text-blue-500"><Link href="/about">Instagram</Link></li>
                </ul>
            </div>
            <div className="p-2 m-2">
                <h1 className="text-2xl font-bold">Account Services</h1>
                <ul>
                    <li className="hover:text-blue-500"><Link href="/login">Login</Link></li>
                    <li className="hover:text-blue-500"><Link href="/contact">Contact</Link></li>
                    <li className="hover:text-blue-500"><Link href="/help">Help</Link></li>
                </ul>
            </div>            
        </div>
        <div>
            <h1 className="text-sm">&copy; 2025 All Rights Reserved. JOMAFA done!!</h1>
        </div>
        </div>
    )
}