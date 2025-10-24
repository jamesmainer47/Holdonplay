"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ui/ThemeProvider";

const companyz = [
    {
        name: "Spotify",
        logo: "/companies/spotify.webp",
        descr: "Spotify is currently the largest purely music-streaming platform in the world, with over 140 million active users per month enjoying a rich offering of popular playlists. Strength: Reach. Your tracks join a catalogue of millions of songs, available for a rapidly growing user base."
    },
    {
        name: "Apple Music",
        logo: "/companies/apple.svg",
        descr: "With over 241 million active users, iTunes is one of the most popular digital music stores in the world. By putting your music on iTunes and Apple Music, you can make it easier for fans to discover and play your music than ever before. Strength: Ubiquity. You can reach over a hundred million people."
    },
    {
        name: "Deezer",
        logo: "/companies/deezer.svg",
        descr: "Available in more countries than any other streaming music service, Deezer gets your music in front of 20 million users. Strength: Reach. Go global with your music."
    },
    {
        name: "Youtube Music",
        logo: "/companies/youtube.svg",
        descr: "YouTube Music gets your music in front of more than a billion users on YouTube. YouTube Music pairs your song with cover art (YouTube calls this an “Art Track”) and you earn money when those Art Tracks are streamed on YouTube. Strength: With a reach of one billion unique users monthly, YouTube Music gives you the power to connect with more fans worldwide."
    },
    {
        name: "Amazon Music",
        logo: "/companies/amazon.svg",
        descr: "The biggest retailer on planet earth also sells your music via downloads and streams in all major music markets. Your music will be eligible for streaming to Amazon Prime members, 90 days after your release date. You can even give your fans the option of buying your music on CD, directly from Amazon. Strength: Ubiquity. You can reach over 80 million people."
    },
    {
        name: "TikTok/ TikTok Music/ Resso",
        logo: "/companies/tiktok.svg",
        descr: "TikTok is one of the most downloaded apps in the world. TikTok allows users to upload 15-second videos to a scrollable feed, using background music from their diverse library of songs. The app offers music discovery features and has been a viral platform for popular artists. Strength: Reach. Give fans permission to use your music in their TikTok posts and reach a massive user base across the globe."
    },
    {
        name: "Meta",
        logo: "/companies/meta.webp",
        descr: "With more than 5 billion combined active users on Facebook and Instagram, Meta's social media platforms are the premiere way to find and make new fans. By getting your music onto both platforms, you make it easier for listeners to discover your songs and content creators to make them viral through posts, Reels, and more."
    },
    {
        name: "Tidal",
        logo: "/companies/tidal.svg",
        descr: "Tidal offers its listeners a highly curated selection of high quality audio with one consumer goal in mind: music discovery. Strength: Editorially curated with a local edge."
    },
    {
        name: "BeatPort",
        logo: "/companies/beatport.svg",
        descr: "Beatport is the World's largest electronic music platform for DJs, serving both downloads and streaming via web store, mobile app, DJ Web App, and integrations directly into DJ software and hardware. Beatport is a pivotal marketing tool that helps artists reach DJs and spread music in clubs, festivals, and radio, reaching their fans and fueling an irresistible hype that builds both before and after the release date."
    },
    {
        name: "Napster",
        logo: "/companies/napster.webp",
        descr: "Napster (formerly Rhapsody) is the original streaming music service. It boasts a catalog of over 42 million songs (and growing) and over three million paying subscribers worldwide. Napster is also partnered with iHeartRadio to offer users the interactive streaming service iHeartRadio All Access. You must distribute to both Napster and iHeartRadio to be on iHeartRadio All Access. Strength: Music focus. iHeartRadio and Napster are pure music brands and are not just in the game to sell devices."
    },
    {
        name: "Peloton Music",
        logo: "/companies/peloton.webp",
        descr: "Peloton Music is a discovery resource for new artists and songs while also providing the opportunity for Peloton Members to re-discover music they love. Setting a new standard for musical content development in the fitness and wellness categories, Peloton Music premieres new music, works with artists to co-curate classes based on their own music or influences, and partners with artists to create original music. STRENGTH:: Reach.Peloton Music represents the largest audiovisual connected fitness music catalog in the world."
    },
    {
        name: "Qobuz",
        logo: "/companies/qobuz.webp",
        descr: "Get high quality audio & more with Qobuz 80 million+ tracks available for high sound quality unlimited streaming. Worldwide leader in 24-Bit Hi-Res downloads."
    },
    {
        name: "Wynk",
        logo: "/companies/wynk.webp",
        descr: "Wynk is one of India’s most-downloaded music apps, with over 100 million installs and over 1.5 billion monthly streams. The service is integrated with one of the leading telecom brands in the region, Airtel, and offers users features like personalized radio, playlists, voice search, and more recently, “Wynk Direct”, which gives them the opportunity to share music with their friends on the app regardless of connectivity. Strengths– Reach – get your music in front of listeners across India, Sri Lanka, and fifteen countries within Africa."
    },
    {
        name: "Soundtrack Your Brand",
        logo: "/companies/soundtrack.webp",
        descr: "Soundtrack Your Brand streams licensed music from the world’s largest catalog for businesses to more than 10,000 brands. Your music gets heard across the world in bars, restaurants, hotels, and more. Strengths: Reach – get heard and discovered in new locations around the world."
    },
    {
        name: "TIMMUSIC",
        logo: "/companies/tim.webp",
        descr: "TIMMUSIC is a digital music streaming platform that is made instantly available to users of the first telecommunications provider in Italy, Telecom Italia S.p.A on desktop or mobile app. When you distribute your releases to TIMMUSIC, you can get discovered by music fans across the country. The app boasts user-generated and curated playlists, weekly discovery charts, and over 45,000 active monthly users. Strength: Reach – make your music available across Italy."
    },
    {
        name: "NetEase Cloud Music",
        logo: "/companies/netease.webp",
        descr: "NetEase Cloud Music is one of the largest streaming platforms in Mainland China. With 800 million registered users, NetEase Cloud Music boasts a catalog of around 50% international releases and social features that encourage fan engagement and discovery. Strengths:​ Reach. Get discovered in the growing Chinese digital music market."
    },
    {
        name: "Tencent",
        logo: "/companies/tencent.webp",
        descr: "Tencent delivers your music to three popular digital streaming platforms throughout Mainland China, including KuGuo Music, the world’s largest subscription service boasting hundreds of millions of monthly active users. Your music will be delivered to the following Chinese music platforms: KuGou Music QQ Music Kuwo Music Strength: Reach. Get discovered, streamed and downloaded in the growing Chinese music market across three popular platforms."
    },
    {
        name: "TouchTunes",
        logo: "/companies/touchtunes.webp",
        descr: "TouchTunes provides curated, in-venue interactive music and entertainment within bars and restaurants across North America and Europe. Note: Because TouchTunes curates any and all content available on their service, we cannot guarantee that they will accept your submission(s). Strength: Reach. TouchTunes’ digital jukebox platform can be found in over 75,000 establishments."
    },
    {
        name: "PlayNetwork",
        logo: "/companies/playnetwork.webp",
        descr: "PlayNetwork provides restaurants, retail and hospitality establishments with non-interactive branded music curation and strategic marketing around in-store music. Note: Because PlayNetwork curates any and all content available on their service, we cannot guarantee that they will accept your submission(s). Reach. PlayNetwork delivers music for 400+ brands in 150,000+ locations worldwide."
    },
    {
        name: "Q.SIC",
        logo: "/companies/qsic.webp",
        descr: "Reach listeners in Australia on Q.SIC’s fully digital commercial music streaming service. Strength: Q.SIC’s solution enables retailers and hospitality businesses to stream brand-aligned curated playlists in multiple venues."
    },
    {
        name: "Yandex Music",
        logo: "/companies/yandex.webp",
        descr: "Powered by Russia’s largest search engine, Yandex.Music delivers your music to listeners in Russia, Ukraine, Belarus, and Kazakhstan. Strength: Reach. Get your music in front of a monthly audience of over 15 million people."
    },
    {
        name: "Spinlet",
        logo: "/companies/spinlet.webp",
        descr: "Showcase your music to the growing African music market with Spinlet, the leading music download and streaming service in Africa."
    },
    {
        name: "MusicTime",
        logo: "/companies/musictime.webp",
        descr: "MusicTime is a ‘pay-as-you-go’ streaming service available to music fans all across Africa and the Middle- East. Asides from the traditional subscription offerings of daily, weekly and monthly. MTN Users can purchase either two hours or five hours of MusicTime that includes bundled data to stream songs. Fans who download the app will have access to artist-specific and genre-focused editorial playlists. Strength: Focus on emerging artists throughout Africa and access to leading telecom provider MTN’s marketing inventory."
    },
    {
        name: "Pandora",
        logo: "/companies/pandora.webp",
        descr: "Pandora is one of the world’s most powerful music discovery platforms – a place where artists find their fans and listeners find music they love. Strength: Reach. With over 78 million actively monthly listeners and counting, Pandora is one of the most popular streaming services available. Note: Because Pandora curates any and all content available on their service, we cannot guarantee that they will accept your submission(s)."
    },
    {
        name: "Zvooq",
        logo: "/companies/zvuk.webp",
        descr: "Zvooq is a leading music streaming service in Russia & the CIS where digital music streaming is booming. Strength: Locally-focused to the emerging music streaming & mobile markets in Russia and the CIS."
    },
    {
        name: "Shazam",
        logo: "/companies/shazam.webp",
        descr: "A popular tool for identifying unfamiliar songs anywhere and everywhere. The social aspect of the service lets you discover, explore, buy and share the music you find. Strength: More sales opportunities. Shazam generates over $300 million in digital sales."
    },
    {
        name: "VerveLife",
        logo: "/companies/vervelife.webp",
        descr: "A middle man who connects you with virtual reality service IMVU, the new HMV Digital Music store and many more. Strength: Connections. Vervelife builds music experiences for brands and as their network grows, so does yours."
    },
    {
        name: "AYOBA",
        logo: "/companies/ayoba.webp",
        descr: "Ayoba is an all-in-one social networking app that delivers free music, games, news, entertainment, instant messaging, voice and video calling, and other content. Developed by Simfy Africa and reaching over 10 million monthly users from all over the globe, Ayoba allows fans to subscribe to free channels where they can read articles about everything from music, to fashion, to sports, to education, to current affairs, and access regularly curated music playlists and interactive games. STRENGTH(S): Reach"
    },
    {
        name: "Music Island",
        logo: "/companies/musicisland.webp",
        descr: "Music Island delivers your music to six popular digital stores and streaming platforms throughout South Korea, including Melon, the country’s largest subscription service boasting over 4 million subscribers. Your music will be delivered to the following Korean music platforms: Melon (Kakao-M) Genie Music (KT) Bugs (NHN Bugs) VIBE (Naver Music) Soribada FLO (Dreamus Co.) Strength: Reach. Your tracks reach up to six digital music services in a rapidly growing music market. Store Types: Streaming, Downloads"
    },
    {
        name: "MediaNet",
        logo: "/companies/medianet.webp",
        descr: "One distribution point gets you in multiple stores. MediaNet powers services like MOG."
    },
    {
        name: "Kuack",
        logo: "/companies/kuack.svg",
        descr: "Kuack allows mobile carrier services and major brands to offer music streaming services to their subscribers in Latin America and the Caribbean. The catalogue is available for streaming on Digicel, Virgin Mobile, and other mobile services. Strength: Local Focus. Kuack provides an opportunity to reach more fans in Latin America and the Caribbean."
    },
    {
        name: "KKBox",
        logo: "/companies/kkbox.webp",
        descr: "Reach the growing Asian music market with the largest digital music subscription service in the Asia region. Listeners can stream over 10 million music tracks from over 500 major and local music labels and publishers, both online and offline. Strength: Local focus. Zero-in on the music market in Japan, Taiwan, Hong Kong & Macau, Singapore, Malaysia and Thailand."
    },
    {
        name: "JOOX",
        logo: "/companies/joox.webp",
        descr: "JOOX is one of the fastest growing streaming platforms in South Eastern Asia, with an increasing market share in South Africa. With millions of active users, the app has a community of music lovers and provides artists opportunities to engage with fans. Strengths: Reach. Increase your potential to be discovered by music fans in Hong Kong, Macao, Indonesia, Malaysia, Thailand, Myanmar and South Africa."
    },
    {
        name: "JioSaavn",
        logo: "/companies/jiosaawn.webp",
        descr: "The #1 digital music service in India with award-winning mobile features. Strength: Local focus & reach. Known as “India’s Spotify,” your music can reach over 11 million monthly users in a booming music streaming market."
    },

    {
        name: "iHeartRadio",
        logo: "/companies/iheart.webp",
        descr: "iHeartRadio is a free, all-in-one digital radio service that lets listeners find more than 1,500 Live Stations or create commercial-free, all-music Custom Stations, in addition to a fully-interactive service called iHeartRadio All Access. You must distribute to both Napster and iHeartRadio to be on iHeartRadio All Access. Strength: Discovery through radio. Get new people listening to your music."
    },
    {
        name: "Hungama Music",
        logo: "/companies/hungama.webp",
        descr: "Hungama is India’s leading digital entertainment company that runs two popular streaming services – Hungama Music for music streaming and Hungama Play for video streaming. With over 65 million monthly users, Hungama Music offers a multilingual and multi genre library of songs, music videos and more, along with a unique loyalty program, Hungama Rewards that allows fans to earn and redeem points for every action they take on either of the streaming platforms. Strengths: Reach - make your music available across India."
    },
    {
        name: "Gracenote",
        logo: "/companies/gracenote.webp",
        descr: "Top-notch music recognition technology that lets music fans identify and discover your music. Strength: Identification. Hundreds of millions of music fans can find out who you are."
    },
    {
        name: "Gaana",
        logo: "/companies/gaana.webp",
        descr: "Gaana is one of India’s most-downloaded music streaming and download apps, boasting over 150 million monthly active users. The platform also has playlists, radio, a discovery portal, and a widely-used voice assistant for multilingual searches. Strength: Reach. Get discovered by fans in India’s rapidly growing digital music market."
    },
    {
        name: "Douyin Streaming / Qishui Yinyue",
        logo: "/companies/qishui.webp",
        descr: "Douyin – one of the most frequented and downloaded social apps in China, and the sister-app to TikTok– is a 15-second video recording social platform that offers discovery features and an in-app store, and has become a viral platform for discovering new artists.  STRENGTH: Reach - Douyin users can discover and follow new creators & trends, while artists have the opportunity to interact and connect with potential fans from all over China."
    },
    {
        name: "Boomplay Music",
        logo: "/companies/boomplay.webp",
        descr: "Boomplay Music is currently the #1 and fastest growing music community, lifestyle and entertainment app with a focus on music that aims to build the largest and most sustainable digital music platform in pan-Africa & African diaspora markets. Strength: Reach. With over 62 million users and a monthly growth rate of over 700k new users, Boomplay Music continues to be preloaded on the number one smartphone in Africa."
    },
    {
        name: "UMA (Formerly 'BOOM')",
        logo: "/companies/uma.svg",
        descr: "UMA (Formerly 'BOOM') is one of the most popular streaming platforms in Russia, boasting a catalog of over 35 million tracks. UMA users are able to stream, discover, and create/follow playlists, and the app is integrated within two of Russia’s largest social networks, VK.com and OK.ru. Strengths: Reach. Get discovered within a growing music market and across popular social media networks."
    },
    {
        name: "Anghami",
        logo: "/companies/anghami.webp",
        descr: "The #1 streaming & download music service in the Middle East & North Africa. Strength: Local focus. Reach new fans in the growing Middle Eastern & North African music market."
    },
    {
        name: "7digital",
        logo: "/companies/qishui.webp",
        descr: "Made by music lovers for music lovers, 7digital offers a simple-to-use experience that is the backbone of dozens of mobile & desktop music services. Strength: Connections. Easy access to multiple retailers, all through one click."
    },
    {
        name: "Claromusica",
        logo: "/companies/claro.webp",
        descr: "Powered by the leading wireless services provider in Latin America, Claromúsica gets your music heard in Mexico, Argentina, Colombia, and 12 other Latin American countries. Your fans can access your music when and however they want via Claromúsica’s multi-platform experience. Strength: Local focus. Get your music heard in major Latin American countries."
    },
    {
        name: "Capcut",
        logo: "/companies/capcut.webp",
        descr: "With over 250 million active users each month, CapCut makes content creation effortless and engaging. An all-in-one video editing solution that helps users create incredible videos, CapCut offers easy-to-use video editing tools, free in-app fonts & effects, keyframe animation, smooth slow-motion, chroma key, stabilization, and more. CapCut empowers fans to capture, snip, and share their best moments–soundtracked by your latest music. STRENGTHS: Cloud, Discovery, Downloads, Social, Streaming, Video Editing"
    },
    {
        name: "Snapchat",
        logo: "/companies/snapchat.webp",
        descr: "Snapchat is a fun and fast way for you to share the moment with anyone in the world. Tap into an audience of over 306 million daily users who use the Snapchat audio library to discover new music & artists, and can use sound clips in their messages, stories, & posts on the platform. Tracks on Snapchat Sounds can be playlisted globally and be made available in the global search catalog. STRENGTHS: Reach, Connections, Identification"
    },
    
    
]
export default function Stores(){
    const [theme] = useTheme();
    return (
        <div className={`flex flex-col items-center justify-center p-5 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
            <h1 className="text-7xl font-extrabold text-center ">Digital <span className="text-blue-400">Music Distribution </span>Stores</h1>
            <p className="lg:px-100 px-5 sm:px-5 sm:text-justify text-justify md:px-20 lg:text-center text-xl">HoldOnPlay Music Distribution puts your music in the most popular digital stores around the world like Spotify, Apple Music, iTunes, Amazon Music, and more. In Face, We partner with over 150 digital stores. Below are just some of out top store partners.</p>
            <button className="hidden"><Link href="/sellMusic">SELL YOUR MUSIC ONLINE</Link></button>
            <div className="max-w-250 xl:max-w-400 p-5">
                {companyz.map((src) => (
                    <div className="flex p-5 border-b-2 flex-col lg:flex-row md:flex-col sm:flex-col sm:mx-50" key={src.name}>
                        <Image  src={src.logo} width={200} height={200} alt={src.name} className="p-5"/>
                        <div className="">
                            <h1 className="text-2xl font-bold">{src.name}</h1>
                            <p className="text-justify ">{src.descr}</p>
                            <button className="hidden"><Link href="/sell"></Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}