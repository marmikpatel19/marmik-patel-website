import { JSX } from "react";
import Navigation from "../components/navigation";
import TextBlock from "../components/textblock";

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
            <div className="flex flex-col sm:flex-row mt-16 sm:mt-40 sm:items-end">
                <TextBlock width="max-w-xl" lines={lines} />
            </div>
        </div>
    );
}