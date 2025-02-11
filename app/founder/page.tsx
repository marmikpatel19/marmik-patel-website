import { JSX } from "react";
import Navigation from "../components/navigation";
import TextBlock from "../components/textblock";
import Image from "next/image";

export default function Founder(){
    const lines: (string | JSX.Element)[] = [
        "I love the 0-to-1.",
        <>
            I’m currently building{" "}
            <a href="https://www.agent-jobs.com" className="underline" target="_blank" rel="noopener noreferrer">Agent-jobs</a>
            , an hr-tech platform where you hire real people to apply to jobs for you. 
        </>,
        <>
            Since I was 15, I’ve been running a nonprofit in Canada,{" "}
            <a href="https://plantforever.org" className="underline" target="_blank" rel="noopener noreferrer">PlantForever</a>. 
            We do private-property tree planting. I lead a team of 11 across two cities.  
        </>
    ];

    return (
        <div className="max-w-custom mx-auto pl-10 sm:pl-16 pr-10 sm:pr-16 mb-10 sm:mb-0">
            <Navigation />
            <div className="flex flex-col sm:flex-row mt-16 sm:mt-24 sm:items-end">
                <TextBlock width="max-w-xl" lines={lines} />
            </div>
            <div className="flex flex-col md:flex-row mt-8 sm:mt-9 md:space-x-8 mb-8 items-start">
                <div className="flex flex-col">
                    <a href="https://www.linkedin.com/posts/marmikp_buildspace-activity-7225964189964541952-R7Ya" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/images/Marmik_Patel_Agent_Jobs_Launch.png"  
                            alt="Marmik Patel Agent-Jobs Launch Post"
                            width={200} // original resolution (update this if you crop image)
                            height={197} // original resolution (update this if you crop image)
                            className="rounded-lg w-full md:w-[200px] md:h-[197px] xs:w-[300px] xs:h-[297px] object-contain"
                        /> 
                        <p className="mt-2 text-sm">agent-jobs mvp launch post</p>
                    </a>
                </div>
                <div className="flex flex-col mt-8 md:mt-0">
                    <a href="https://www.cbc.ca/radio/whatonearth/how-to-plant-a-tree-in-2023-1.6967362" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/images/Marmik_Patel_PlantForever_CBC_Canada_Article.png"  
                            alt="Marmik Patel PlantForever CBC Canada News Article"
                            width={200} // original resolution (update this if you crop image)
                            height={197} // original resolution (update this if you crop image)
                            className="rounded-lg w-full md:w-[200px] md:h-[197px] xs:w-[300px] xs:h-[297px] object-contain -ml-3 md:-ml-0" // weird left margin issue can't resolve, so using negative left margin to solve it
                        /> 
                        <p className="mt-2 text-sm">plantforever cbc canada news article</p>
                    </a>
                </div>
                <div className="flex flex-col mt-8 md:mt-0">
                    <a href="https://globalnews.ca/news/9166036/edmonton-youth-climate-change-trees" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/images/Marmik_Patel_PlantForever_Global_News_Article.png"  
                            alt="Marmik Patel PlantForever Global TV Segment"
                            width={200} // original resolution (update this if you crop image)
                            height={197} // original resolution (update this if you crop image)
                            className="rounded-lg w-full md:w-[200px] md:h-[197px] xs:w-[300px] xs:h-[297px] object-contain"
                        /> 
                        <p className="mt-2 text-sm">plantforever global news tv segment</p>
                    </a>
                </div>
            </div>
        </div>
    );
}