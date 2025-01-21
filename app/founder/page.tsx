import { JSX } from "react";
import Navigation from "../components/navigation";
import TextBlock from "../components/textblock";
import Image from "next/image";

export default function Founder(){
    const lines: (string | JSX.Element)[] = [
        "I find purpose in building. I love the 0-1.",
        <>
            I’m currently building{" "}
            <a href="https://www.agent-jobs.com" className="underline">Agent-jobs</a>
            , an hr-tech platform where you hire real people to apply to jobs for you. 
        </>,
        <>
            Since I was 15, I’ve been running a nonprofit in Canada,{" "}
            <a href="https://plantforever.org" className="underline">PlantForever</a>. 
            We do private-property tree planting. I lead a team of 11 across two cities.  
        </>
    ];

    return (
        <div className="max-w-custom mx-auto pl-10 sm:pl-16 pr-10 sm:pr-16 mb-10 sm:mb-0">
            <Navigation />
            <div className="flex flex-col sm:flex-row mt-16 sm:mt-24 sm:items-end">
                <TextBlock width="max-w-xl" lines={lines} />
            </div>
            <div className="flex flex-col md:flex-row mt-8 sm:mt-9 space-x-8 mb-8">
                <Image 
                    src="/images/Marmik_Patel_Agent_Jobs_Launch.png"  
                    alt="Marmik Patel Agent-Jobs Launch Post"
                    width={200} // original resolution (update this if you crop image)
                    height={197} // original resolution (update this if you crop image)
                    className="rounded-lg"
                /> 
                <Image 
                    src="/images/Marmik_Patel_PlantForever_CBC_Canada_Article.png"  
                    alt="Marmik Patel PlantForever CBC Canada News Article"
                    width={210} // original resolution (update this if you crop image)
                    height={207} // original resolution (update this if you crop image)
                    className="rounded-lg"
                /> 
                <Image 
                    src="/images/Marmik_Patel_PlantForever_Global_News_Article.png"  
                    alt="Marmik Patel PlantForever Global News News Article"
                    width={210} // original resolution (update this if you crop image)
                    height={207} // original resolution (update this if you crop image)
                    className="rounded-lg"
                /> 
            </div>
        </div>
    );
}