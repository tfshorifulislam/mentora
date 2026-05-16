"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Netflix",
    "Spotify",
    "Apple",
    "Adobe",
    "IBM",
    "GitHub",
];

const TrustCompanies = () => {
    return (
        <div className="w-full bg-slate-950 py-10 overflow-hidden border-y border-white/10">

            <p className="text-center text-white/50 text-sm mb-6 tracking-widest">
                TRUSTED BY TOP COMPANIES
            </p>
            <Marquee>
                <div className="relative flex overflow-hidden">

                    <div className="flex gap-10 animate-marquee whitespace-nowrap">

                        {[...companies, ...companies].map((name, index) => (
                            <div
                                key={index}
                                className="text-white/70 text-lg font-semibold px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                            >
                                {name}
                            </div>
                        ))}

                    </div>

                </div>
            </Marquee>
        </div>
    );
};

export default TrustCompanies;