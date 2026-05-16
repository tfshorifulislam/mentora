"use client";

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

const STATS = [
    { id: 1, label: "⭐ 4.9 Rating" },
    { id: 2, label: "🔥 50K+ Students" },
    { id: 3, label: "🎯 300+ Courses" },
    { id: 4, label: "💼 Career Focused" }
];

const Banner = () => {
    return (
        <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-[#020617]">

            {/* GRID */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0b1120] to-slate-950" />

            {/* GLOWS */}
            <div className="absolute -top-40 left-[-120px] h-[500px] w-[500px] rounded-full bg-indigo-500/30 blur-[140px]" />
            <div className="absolute bottom-[-200px] right-[-120px] h-[500px] w-[500px] rounded-full bg-pink-500/30 blur-[140px]" />
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">

                {/* BADGE */}
                <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white/80 backdrop-blur-xl">
                    🚀 Next Generation Learning Platform
                </div>

                {/* TITLE */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white">
                    Build Your Future With{" "}
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Mentora
                    </span>
                </h1>

                {/* DESCRIPTION */}
                <p className="mx-auto mt-5 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-white/65">
                    Learn modern web development with premium courses,
                    real-world projects, expert mentorship, and career-focused learning system.
                </p>

                {/* BUTTONS */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

                    <Link href="/courses" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto h-12 sm:h-14 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 sm:px-10 text-white font-semibold shadow-2xl shadow-purple-500/30 transition hover:scale-105">
                            Browse Courses
                        </Button>
                    </Link>

                    <Link href="/add-course" className="w-full sm:w-auto">
                        <Button
                            variant="bordered"
                            className="w-full sm:w-auto h-12 sm:h-14 rounded-2xl border-white/15 bg-white/5 px-8 sm:px-10 text-white backdrop-blur-xl hover:bg-white/10 transition"
                        >
                            Become Instructor
                        </Button>
                    </Link>

                </div>

                {/* STATS */}
                <div className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-10">

                    {STATS.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm text-white/70 backdrop-blur-xl"
                        >
                            {item.label}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Banner;