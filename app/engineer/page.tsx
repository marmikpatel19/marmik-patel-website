import { JSX } from "react";
import Navigation from "../components/navigation";
import TextBlock from "../components/textblock";

export default function Engineer(){
    const lines: (string | JSX.Element)[] = [
        <>
            I’m a senior cs student. I graduate in may and I’m currently interviewing for full-time swe work in the bay and nyc.{" "}  
            <a href="/Marmik_Patel_Resume.pdf" className="underline" target="_blank">Resume</a> 
        </>,
        <>
            I’m currently working on{" "}
            <a href="https://www.agent-jobs.com" className="underline">Agent-jobs</a>
            . Last year, I did a 12-month internship at a series-c startup where I built an{" "}
            <a href="https://www.7shifts.com/restaurant-tip-payouts-software-non-us" className="underline" target="_blank" rel="noopener noreferrer">fintech</a>{" "}
            product.   
        </>,
        <>
            I’ve been developing a lot of projects, often through hackathons. In the past few months, I’ve built at{" "}  
            <a href="https://www.linkedin.com/posts/marmikp_i-built-an-ai-agent-that-you-speak-to-over-activity-7242215855751610368-9t8C" className="underline" target="_blank" rel="noopener noreferrer">MIT</a> 
            ,{" "}
            <a href="https://www.linkedin.com/posts/marmikp_i-just-spent-the-weekend-at-harvard-university-activity-7252000316198461441-rd45" className="underline" target="_blank" rel="noopener noreferrer">Harvard</a> 
            , and{" "}
            <a href="https://www.linkedin.com/posts/marmikp_hackathon-computerscience-calhacks-activity-7262169796333469696-CE2F" className="underline" target="_blank" rel="noopener noreferrer">Berkeley</a>.
        </>,
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