"use client";

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">

            {/* Soft glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0%,transparent_60%)]"></div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Blur circles (subtle) */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                <div className="space-y-6">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-white text-sm font-medium border border-white/20">
                        🚀 Premium Learning Platform
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                        Master New Skills with{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                            Mentora
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Learn from industry experts. Get lifetime access.
                        Build real-world projects and upgrade your career with modern web development skills.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Link href="/courses">
                            <Button
                                size="lg"
                                className="text-lg px-10 py-6 font-semibold text-white 
                                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all"
                            >
                                Browse Courses
                            </Button>
                        </Link>
                        <Link href="/add-course">
                            <Button
                                variant="bordered"
                                size="lg"
                                className="text-lg px-10 py-6 font-medium text-white border-white/30 hover:bg-white/10"
                            >
                                Become an Instructor
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="pt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-white/60 text-sm">
                        <div>⭐ 4.9/5 Rating</div>
                        <div>50,000+ Students</div>
                        <div>300+ Courses</div>
                        <div>Expert Instructors</div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;