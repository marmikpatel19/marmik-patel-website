import { JSX } from "react";
import Navigation from "../components/navigation";
import TextBlock from "../components/textblock";
import Image from "next/image";

export default function Founder(){
    const lines: (string | JSX.Element)[] = [
        "I love the 0-to-1.",
        <>
            I’m currently working on a few projects. Previously built a recruitment-tech platform where you hire people to apply to jobs. 
        </>,
        <>
            Since I was 15, I’ve been running a nonprofit in Canada,{" "}
            <a href="https://plantforever.org" className="underline" target="_blank" rel="noopener noreferrer">PlantForever</a>. 
            {" "}We do private-property tree planting.  
        </>
    ];

    return (
    <div className="max-w-custom mx-auto px-10 sm:px-16 mb-10 sm:mb-0">
        <Navigation />
        <div className="flex flex-col sm:flex-row mt-10 sm:mt-24 sm:items-end">
            <TextBlock width="max-w-xl" lines={lines} />
        </div>
        <div className="flex flex-col md:flex-row mt-8 sm:mt-9 md:space-x-8 mb-8 items-start">
            {[
                {
                href: "https://www.linkedin.com/posts/marmikp_buildspace-activity-7225964189964541952-R7Ya",
                src: "/images/Marmik_Patel_Agent_Jobs_Launch.png",
                alt: "Marmik Patel Agent-Jobs Launch Post",
                label: "agent-jobs mvp launch post",
                },
                {
                href: "https://www.cbc.ca/radio/whatonearth/how-to-plant-a-tree-in-2023-1.6967362",
                src: "/images/Marmik_Patel_PlantForever_CBC_Canada_Article.png",
                alt: "Marmik Patel PlantForever CBC Canada News Article",
                label: "plantforever cbc canada news article",
                },
                {
                href: "https://globalnews.ca/news/9166036/edmonton-youth-climate-change-trees",
                src: "/images/Marmik_Patel_PlantForever_Global_News_Article.png",
                alt: "Marmik Patel PlantForever Global TV Segment",
                label: "plantforever global news tv segment",
                },
            ].map(({ href, src, alt, label }) => (
                <div className="flex flex-col mt-8 md:mt-0" key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={src}
                            alt={alt}
                            width={240}
                            height={160}
                            className="rounded-lg w-full h-auto sm:w-[240px] sm:h-[160px] object-cover"
                        />
                        <p className="mt-2 text-sm">{label}</p>
                    </a>
                </div>
            ))}
        </div>
    </div>
    );
}