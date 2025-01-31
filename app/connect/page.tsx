import { JSX } from "react";
import Navigation from "../components/navigation";
import TextBlock from "../components/textblock";

export default function Connect(){
    const lines: (string | JSX.Element)[] = [
        <>
            I use instagram as my casual social media. I post my day-to-day life as stories:{" "}  
            <a href="https://www.instagram.com/marmikpatel_" className="underline" target="_blank" rel="noopener noreferrer">@marmikpatel_</a> 
        </>,
        <>
            I use linkedin quite a bit. I post often about my life experiences, swe work, and founder work:{" "}  
            <a href="https://www.linkedin.com/in/marmikp" className="underline" target="_blank" rel="noopener noreferrer">@marmikp</a> 
        </>,
        <>
            Twitter:{" "}  
            <a href="https://x.com/Marmik_Patel19" className="underline" target="_blank" rel="noopener noreferrer">@Marmik_Patel19</a> 
        </>,
        <>
            A youtube channel where I share my thoughts:{" "}  
            <a href="https://www.youtube.com/@MarmikThinks" className="underline" target="_blank" rel="noopener noreferrer">@MarmikThinks</a> 
        </>,
    ];

    return (
        <div className="max-w-custom mx-auto pl-10 sm:pl-16 pr-10 sm:pr-16 mb-10 sm:mb-0">
            <Navigation />
            <div className="flex flex-col sm:flex-row mt-16 sm:mt-40 sm:items-end">
                <TextBlock width="max-w-md" lines={lines} />
            </div>
        </div>
    );
}