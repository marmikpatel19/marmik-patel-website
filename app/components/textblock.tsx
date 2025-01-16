'use client';

import { JSX } from "react";

type Props = {
    width: string;
    lines: (string | JSX.Element)[];
}

export default function TextBlock({width, lines}: Props){
    return (
        <div className={`${width}`}>
            {lines.map((line, indx) => (
                <p key={indx} className="mt-5">{line}</p>
            ))}
        </div>
    );
}