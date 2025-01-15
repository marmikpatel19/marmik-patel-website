'use client';
import Link from "next/link";

export default function Navigation(){
    return (
        <div className="flex justify-between mt-6">
            <div className="font-semibold">Marmik Patel</div>
            <div className="flex space-x-6">
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