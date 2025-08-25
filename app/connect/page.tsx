"use client";

import { JSX, useEffect, useRef } from "react";
import Navigation from "../components/navigation";
import TextBlock from "../components/textblock";
import { useForm } from "@formspree/react";

export default function Connect(){
    const lines: (string | JSX.Element)[] = [
        <>
            insta:{" "}  
            <a href="https://www.instagram.com/marmikpatel_" className="underline" target="_blank" rel="noopener noreferrer">@marmikpatel_</a> 
        </>,
        <>
            linkedin:{" "}  
            <a href="https://www.linkedin.com/in/marmikp" className="underline" target="_blank" rel="noopener noreferrer">@marmikp</a> 
        </>,
        <>
            twitter:{" "}  
            <a href="https://x.com/Marmik_Patel19" className="underline" target="_blank" rel="noopener noreferrer">@Marmik_Patel19</a> 
        </>,
        <>
            content channel one: MarmikThinks:{" "}  
            <a href="https://www.youtube.com/@MarmikThinks" className="underline" target="_blank" rel="noopener noreferrer">youtube</a>,{" "}
            <a href="https://www.instagram.com/marmikthinks" className="underline" target="_blank" rel="noopener noreferrer">insta</a>,{" "}
            <a href="https://www.tiktok.com/@marmikthinks" className="underline" target="_blank" rel="noopener noreferrer">tiktok</a> 
        </>,
        <>
        content channel two: MarmikLives:{" "}  
            <a href="https:/www.youtube.com/@MarmikLives" className="underline" target="_blank" rel="noopener noreferrer">youtube</a>,{" "}
            <a href="https://www.instagram.com/marmiklives" className="underline" target="_blank" rel="noopener noreferrer">insta</a>,{" "}
            <a href="https://www.tiktok.com/@marmiklives" className="underline" target="_blank" rel="noopener noreferrer">tiktok</a> 
        </>,
    ];

    const formRef = useRef<HTMLFormElement>(null);
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_CONTACT_FORM_ID || "");

    useEffect(() => {
        if (state.succeeded && formRef.current) {
          formRef.current.reset();
        }
      }, [state.succeeded]);

    return (
        <div className="max-w-custom mx-auto px-6 sm:px-16 mb-10 sm:mb-0">
            <Navigation />
            <div className="flex flex-col md:flex-row mt-16 md:mt-36 gap-12 items-start">
                <TextBlock width="max-w-md" lines={lines} />

                <form
                    className="flex flex-col gap-y-4 w-full max-w-sm"
                    onSubmit={handleSubmit}
                    ref={formRef}
                >
                    <p className="text-lg font-medium">Reach out:</p>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-left text-sm">name:</label>
                        <input
                            id="name"
                            name="name"
                            required
                            className="h-12 rounded-lg border border-gray-300 dark:border-gray-600 px-4 bg-background text-foreground outline-none focus:ring-2 focus:ring-foreground"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-left text-sm">email:</label>
                        <input
                            id="email"
                            name="email"
                            required
                            className="h-12 rounded-lg border border-gray-300 dark:border-gray-600 px-4 bg-background text-foreground outline-none focus:ring-2 focus:ring-foreground"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-left text-sm">message:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="min-h-[100px] resize-y rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 bg-background text-foreground outline-none focus:ring-2 focus:ring-foreground"
                        />
                    </div>

                    <button
                        type="submit"
                        className="self-start px-4 py-2 text-lg rounded-lg border border-gray-300 dark:border-gray-600 text-foreground bg-white dark:bg-black"
                    >
                        Submit
                    </button>

                    {state.succeeded && <p className="text-sm mt-2">Thanks for reaching out!</p>}
                </form>
            </div>
            </div>
    );
}