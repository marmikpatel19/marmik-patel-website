import { JSX } from "react";
import Navigation from "../components/navigation";
import TextBlock from "../components/textblock";
import Image from "next/image";

export default function Engineer(){
    const lines: (string | JSX.Element)[] = [
        <>
            I just graduated. I&apos;m incoming as a software engineer at [redacted] in the bay.
        </>,
        <>
            I have experience building{" "}
            <a href="https://www.agent-jobs.com" className="underline">Agent-jobs</a>
            , and last year I worked on payments at a{" "}
            <a href="https://www.7shifts.com" className="underline">series-c startup</a>.   
        </>,
        <>
            I&apos;ve been developing projects, often through hackathons. I&apos;ve built at{" "}  
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
            <div className="flex flex-col md:flex-row mt-8 sm:mt-9 md:space-x-8 mb-8 items-start">
                {[
                    {
                        href: "https://www.cbc.ca/listen/live-radio/1-88-saskatoon-morning/clip/16140779-how-u-s-student-spends-ivy-league-campuses",
                        src: "/images/Marmik_Patel_Hackathon_CBC_News_Radio.png",
                        alt: "Marmik Patel CBC Saskatoon Radio Hackathon News Interview",
                        label: "cbc news radio interview about hackathons",
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
                            <p className="mt-2 text-sm w-full sm:w-[240px]">{label}</p>
                            <audio 
                                controls 
                                src="/audio/How this U of S student spends more time at Ivy League campuses.mp3" 
                                className="w-full sm:w-[240px] mt-3 -ml-2"
                            >
                            </audio>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}