import { JSX } from "react";
import Navigation from "./components/navigation";
import TextBlock from "./components/textblock";
import Image from "next/image";

export default function Home() {
  const lines: (string | JSX.Element)[] = [
    "Hey, I’m Marmik",
    "An engineer and founder from canada. I am often in sf and nyc",
    <>
      Currently building an hr-tech startup in sf,{" "}  
      <a href="https://www.agent-jobs.com" className="underline" target="_blank" rel="noopener noreferrer">Agent-jobs</a> 
      , and running a tree-planting nonprofit in canada,{" "}
      <a href="https://plantforever.org" className="underline" target="_blank" rel="noopener noreferrer">PlantForever</a>
    </>,
    "I’m studying cs and in my senior year of college"
  ];

  return (
    <div className="max-w-custom mx-auto pl-10 sm:pl-16 pr-10 sm:pr-16 mb-10 sm:mb-0">
      <Navigation />
      <div className="flex flex-col sm:flex-row mt-24 sm:mt-40 sm:items-end">
        <TextBlock width="max-w-lg" lines={lines} />
        <div className="max-w-32 ml-0 sm:ml-10 mt-8 sm:mt-0">
          <Image 
            src="/images/Marmik_Patel.jpg"  
            alt="Marmik Patel"
            width={2125} // original resolution (update this if you crop image)
            height={2620} // original resolution (update this if you crop image)
            className="rounded-lg"
          /> 
        </div>
      </div>
    </div>
  );
}
