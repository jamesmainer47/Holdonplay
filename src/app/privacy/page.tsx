"use client";

import { useTheme } from "@/components/ui/ThemeProvider";


export default function Privacy(){
    const [theme] = useTheme();
    return (
        <div className={`flex relative flex-col h-dvh justify-center items-center text-center  ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
            <div className="flex flex-col px-10">
                <h1 className="lg:text-6xl font-bold text-4xl"><span className="text-blue-400">Holdonplay</span> Privacy Policy</h1>
                <p className="text-justify">At HoldOnPlay.com, we value your privacy. This Privacy Policy outlines the types of information we collect and how we use it.</p><br />
                <p className="text-justify font-extrabold text-blue-500">Information We Collect:</p>
                <span className="justify-items-start items-start text-start pl-10">- We may collect personal information such as name and email if you subscribe or contact us.</span>
                <span className="justify-items-start items-start text-start pl-10">- We may use cookies to improve user experience and analyze site usage.</span><br />
                <p className="text-justify font-extrabold text-blue-500">Third-Party Services:</p>
                <span className="justify-items-start items-start text-start pl-10">- We may display advertisements through third-party services like Google AdSense.</span>
                <span className="justify-items-start items-start text-start pl-10">- These services may collect data using cookies and similar technologies to serve ads based on your interests.</span><br />
                <p className="text-justify font-extrabold text-blue-500">Your Consent:</p>
                <span className="justify-items-start items-start text-start pl-10">By using our website, you consent to our Privacy Policy.</span><br />
                <p className="text-justify font-extrabold text-blue-500">Contact Us:</p>
                <span className="justify-items-start items-start text-start pl-10">If you have any questions, email us at support@holdonplay.com.</span><br />
            </div>    
        </div>
    )
}    
