'use client';

export default function Navigation(){
    return (
        <div className="flex justify-between">
            <div>Marmik Patel</div>
            <div className="flex space-x-6">
                <a className="underline">Engineer</a>
                <a className="underline">Founder</a>
                <a className="underline">Connect</a>
            </div>
        </div>
    );
}