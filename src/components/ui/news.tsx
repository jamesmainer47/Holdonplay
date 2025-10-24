import { useTheme } from "./ThemeProvider"
import { FaStar, FaSun, FaRocket } from "react-icons/fa"

export default function News(){
    const [theme] = useTheme();
    return (
        <div className={` text-blue-500  overflow-hidden ${theme === 'dark' ? 'bg-black text-blue-500' : 'bg-white text-blue-950'}`}>
            <div className=" flex flex-row gap-4 flex-nowrap scrollme  overflow-x-scroll w-1900">
                <span className="">HOP</span>
                <span className=""><FaSun size={20} className="text-blue-500"/></span>
                <span className="">hold ON play</span>
                <span className="">Your Music</span>
                <span className="">Distribution Company</span>
                <span className=""><FaRocket size={20} className="text-blue-500"/></span>
                <span className="">We hav our ways</span>
                <span className="">Music is Power, Amplify It</span>
                <span className="">Make sure you plug in those Headphones</span>
                <span className=""><FaStar size={20} className="text-blue-500"/></span>
            </div>
        </div>
    )
}