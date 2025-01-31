"use client";

import { JSX } from "react";
import Navigation from "../components/navigation";
import TextBlock from "../components/textblock";
import { useForm } from "@formspree/react";

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

    const [state, handleSubmit] = useForm("FORM_ID");

    if (state.succeeded) {
        return <p>Thanks for reaching out :)</p>;
    }

    return (
        <div className="max-w-custom mx-auto pl-10 sm:pl-16 pr-10 sm:pr-16 mb-10 sm:mb-0">
            <Navigation />
            <div className="flex flex-col sm:flex-row mt-16 sm:mt-40 sm:items-end">
                <TextBlock width="max-w-md" lines={lines} />

                <form className="grid gap-y-4 mt-10 sm:mt-24" onSubmit={handleSubmit}>
                    <p className="block text-foreground text-lg">Reach out:</p>

                    <div className="flex items-start gap-x-4 w-full">
                        <label className="w-24 text-left -mt-1" htmlFor="name">
                            name:
                        </label>
                        <input
                            className="flex-1 h-12 rounded-lg border border-gray-300 dark:border-gray-600 px-4 text-foreground bg-background outline-none focus:ring-2 focus:ring-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400"
                            id="name"
                            name="name"
                            required
                        />
                    </div>

                    <div className="flex items-start gap-x-4 w-full">
                        <label className="w-24 text-left -mt-1" htmlFor="email">
                            email:
                        </label>
                        <input
                            className="flex-1 h-12 rounded-lg border border-gray-300 dark:border-gray-600 px-4 text-foreground bg-background outline-none focus:ring-2 focus:ring-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400"
                            id="email"
                            name="email"
                            required
                        />
                    </div>

                    <div className="flex items-start gap-x-4 w-full">
                        <label className="w-24 text-left -mt-1" htmlFor="message">
                            message:
                        </label>
                        <textarea
                            className="resize-y flex-1 h-12 rounded-lg border border-gray-300 dark:border-gray-600 px-4 text-foreground bg-background outline-none focus:ring-2 focus:ring-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400"
                            id="message"
                            name="message"
                            required
                        />
                    </div>

                    <div className="flex flex-row-reverse gap-x-6">
                        <button
                            className="cursor-pointer rounded-lg bg-foreground px-8 py-3 text-lg font-medium text-background transition duration-200 hover:bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}