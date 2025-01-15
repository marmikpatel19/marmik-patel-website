'use client';

type Props = {
    width: string;
    lines: string[];
}

export default function TextBlock({width, lines}: Props){
    const tailwindWidth = "max-w-" + width;

    return (
        <div className={`${width} mt-48`}>
            {lines.map((line, indx) => (
                <p key={indx} className="mt-5">{line}</p>
            ))}
        </div>
    );
}