'use client';
import type { Metadata } from "next";
import "./globals.css";
import Navigate from "@/components/ui/Navigate";
import Footer from "@/components/ui/footer";
import MouseLight from "@/components/MouseLight";
import { Poppins } from 'next/font/google'
import News from "@/components/ui/news";
import Chatbot from "@/components/ui/hopAssistant";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { useTheme } from "@/components/ui/ThemeProvider";
import Head from "next/head";
import AdSense from "@/components/AdSense";

//export const metadata: Metadata = {
//  title: "HoldONPlay | A Music Distribution Company",
//  description: "holdONplay is a Standalone Music Distribution Company. We have our Ways to Amplify Your Music",
//};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose weights you need
  variable: '--font-poppins',           // Tailwind-friendly CSS variable
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme] = useTheme();
  const HoldOnPlayData = {
    "@context": "https://schema.org",
    "@type": "Music",
    "name": "Hold On Play | Music Distribution Company",
    "url": "https://www.holdonplay.com",
    "logo": "https://www.holdonplay.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P.O. Box 2505",
      "addressLocality": "Dodoma",
      "addressRegion": "Dodoma Region",
      "postalCode": "41117",
      "addressCountry": "TZ"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+255 762 638 232",
      "contactType": "Customer Service",
      "areaServed": "TZ",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/holdonplay",
      "https://twitter.com/holdonplay",
      "https://www.linkedin.com/school/holdonplay"
    ]
  };
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(HoldOnPlayData) }}
        />
        <AdSense pId="ca-pub-9891580637314161"/>
      </Head>
    <html lang="en">
      <body
        className={`${theme === "dark" ? "text-white bg-black" : "text-black bg-white"} ${poppins.variable} flex  flex-col antialiased relative  `}
      > 
      <ThemeProvider>
        <News/>
        <Chatbot/>
        <MouseLight/>
        <Navigate/>
        {children}
        <Footer/>
      </ThemeProvider>
      </body>
     
    </html>
  </>
      
  );
}
