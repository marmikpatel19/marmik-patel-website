import { JSX } from "react";
import Navigation from "../components/navigation";
import TextBlock from "../components/textblock";

export default function Engineer(){
    const lines: (string | JSX.Element)[] = [
        <>
            I just graduated. I'm incoming as a software engineer at [redacted] in the bay.
        </>,
        <>
            I have experience building{" "}
            <a href="https://www.agent-jobs.com" className="underline">Agent-jobs</a>
            , and last year I worked on payments at a{" "}
            <a href="https://www.7shifts.com" className="underline">series-c startup</a>.   
        </>,
        <>
            I’ve been developing projects, often through hackathons. I’ve built at{" "}  
            <a href="https://www.linkedin.com/posts/marmikp_i-built-an-ai-agent-that-you-speak-to-over-activity-7242215855751610368-9t8C" className="underline" target="_blank" rel="noopener noreferrer">MIT</a> 
            ,{" "}
            <a href="https://www.linkedin.com/posts/marmikp_i-just-spent-the-weekend-at-harvard-university-activity-7252000316198461441-rd45" className="underline" target="_blank" rel="noopener noreferrer">Harvard</a> 
            , {" "}
            <a href="https://www.linkedin.com/posts/marmikp_hackathon-computerscience-calhacks-activity-7262169796333469696-CE2F" className="underline" target="_blank" rel="noopener noreferrer">Berkeley</a>
            ,{" "}
            <a href="https://www.linkedin.com/posts/marmikp_i-controlled-my-browser-with-my-mind-at-activity-7298402677846065153-xFr5" className="underline" target="_blank" rel="noopener noreferrer">CMU</a> 
            , and{" "}
            <a href="https://www.linkedin.com/posts/marmikp_i-connected-my-eyes-and-voice-to-ai-at-activity-7324115488102313984-BJwL" className="underline" target="_blank" rel="noopener noreferrer">UCLA</a>.
        </>,
    ];

    return (
        <div className="max-w-custom mx-auto pl-10 sm:pl-16 pr-10 sm:pr-16 mb-10 sm:mb-0">
            <Navigation />
            <div className="flex flex-col sm:flex-row mt-10 sm:mt-40 sm:items-end">
                <TextBlock width="max-w-xl" lines={lines} />
            </div>
        </div>
    );
}