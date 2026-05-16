"use client";

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-[#020617]">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

            {/* MAIN GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0b1120] to-slate-950" />

            {/* GLOW EFFECTS */}
            <div className="absolute -top-40 left-[-120px] h-[500px] w-[500px] rounded-full bg-indigo-500/30 blur-[140px]" />

            <div className="absolute bottom-[-200px] right-[-120px] h-[500px] w-[500px] rounded-full bg-pink-500/30 blur-[140px]" />

            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

                {/* BADGE */}
                <div
                    className="
                        mb-6
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-5
                        py-2
                        text-sm
                        font-medium
                        text-white/80
                        backdrop-blur-xl
                    "
                >
                    🚀 Next Generation Learning Platform
                </div>

                {/* HEADING */}
                <h1
                    className="
                        text-4xl
                        font-black
                        leading-tight
                        tracking-tight
                        text-white
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                    "
                >
                    Build Your Future With{" "}

                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Mentora
                    </span>
                </h1>

                {/* DESCRIPTION */}
                <p
                    className="
                        mx-auto
                        mt-6
                        max-w-3xl
                        text-base
                        leading-relaxed
                        text-white/65
                        sm:text-lg
                        md:text-xl
                    "
                >
                    Learn modern web development with premium courses,
                    real-world projects, expert mentorship, and a strong
                    developer community designed for rapid growth.
                </p>

                {/* BUTTONS */}
                <div
                    className="
                        mt-10
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-4
                        sm:flex-row
                    "
                >

                    <Link href="/courses">

                        <Button
                            size="lg"
                            className="
                                h-14
                                rounded-2xl
                                bg-gradient-to-r
                                from-indigo-500
                                via-purple-500
                                to-pink-500
                                px-10
                                text-base
                                font-semibold
                                text-white
                                shadow-2xl
                                shadow-purple-500/30
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:shadow-purple-500/50
                            "
                        >
                            Browse Courses
                        </Button>

                    </Link>

                    <Link href="/add-course">

                        <Button
                            variant="bordered"
                            size="lg"
                            className="
                                h-14
                                rounded-2xl
                                border-white/15
                                bg-white/5
                                px-10
                                text-base
                                font-medium
                                text-white
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                hover:border-white/30
                                hover:bg-white/10
                            "
                        >
                            Become Instructor
                        </Button>

                    </Link>

                </div>

                {/* STATS */}
                <div
                    className="
                        mt-14
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-4
                        sm:gap-6
                        md:gap-10
                    "
                >

                    {[
                        "⭐ 4.9 Rating",
                        "🔥 50K+ Students",
                        "🎯 300+ Courses",
                        "💼 Career Focused"
                    ].map((item) => (
                        <div
                            key={item}
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                px-5
                                py-3
                                text-sm
                                text-white/70
                                backdrop-blur-xl
                            "
                        >
                            {item}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Banner;