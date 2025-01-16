'use client';
import Link from "next/link";

export default function Navigation(){
    return (
        <div className="flex flex-col sm:flex-row justify-between mt-6">
            <div className="font-semibold">
                <Link href="/">
                Marmik Patel
                </Link>
            </div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link className="underline font-semibold" href="/engineer">
                    Engineer
                </Link>
                <Link className="underline font-semibold" href="/founder">
                    Founder
                </Link>
                <Link className="underline font-semibold" href="/connect">
                    Connect
                </Link>
            </div>
        </div>
    );
}