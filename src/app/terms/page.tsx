"use client";
import { useTheme } from "@/components/ui/ThemeProvider";

 

export default function Terms(){
    const [theme] = useTheme();
    return (
        <div className={`flex relative flex-col justify-center items-center  text-center ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
            <div className="flex flex-col lg:px-80 px-10">
                <h1 className="lg:text-6xl font-bold text-4xl p-5">Terms <span className="text-blue-400">&</span> Conditions</h1>
                <p className="text-justify">Welcome to Holdonplay. By accessing or using our website, you agree to be bound by the following terms.</p><br />
                <p className="text-justify text-blue-500 font-extrabold">Content Usage:</p>
                <span className="justify-items-start items-start text-start pl-10">- All content is for informational and entertainment purposes.</span>
                <span className="justify-items-start items-start text-start pl-10">- You may not reproduce or distribute content without permission.</span><br />
                <p className="text-justify text-blue-500 font-extrabold">User Responsibilities:</p>
                <span className="justify-items-start items-start text-start pl-10">- Do not upload or share copyrighted material without authorization.</span>
                <span className="justify-items-start items-start text-start pl-10">- Do not use our platform for illegal or harmful activities.</span><br />
                <p className="text-justify text-blue-500 font-extrabold">Limitation of Liability:</p>
                <span className="justify-items-start items-start text-start pl-10">We are not responsible for any loss or damage resulting from use of our website.</span><br />
                <p className="text-justify text-blue-500 font-extrabold">Contact Us:</p>
                <span className="justify-items-start items-start text-start pl-10">For questions, email info@holdonplay.com</span><br />
            </div>    
        </div>
    )
}    