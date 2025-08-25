import { JSX } from "react";
import Navigation from "./components/navigation";
import TextBlock from "./components/textblock";
import Image from "next/image";

export default function Home() {
  const lines: (string | JSX.Element)[] = [
    "Hey, I’m Marmik",
    "A 23 y/o engineer and founder from canada. In sf & nyc",
    "Currently working at meta as a swe, doing content, and running a nonprofit"
  ];

  return (
    <div className="max-w-custom mx-auto pl-10 sm:pl-16 pr-10 sm:pr-16 mb-10 sm:mb-0">
      <Navigation />
      <div className="flex flex-col sm:flex-row mt-10 sm:mt-40 sm:items-end">
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
