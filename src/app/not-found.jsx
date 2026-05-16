"use client";

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0%,transparent_60%)]"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-xl">

                {/* 404 */}
                <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-white/70 text-base md:text-lg">
                    The page you are looking for doesn’t exist or has been moved.
                    Let’s get you back to learning something amazing.
                </p>

                {/* Button */}
                <div className="mt-8">
                    <Link href="/">
                        <Button
                            size="lg"
                            className="text-white font-semibold 
                            bg-gradient-to-r from-indigo-500 to-pink-500 
                            shadow-lg shadow-purple-500/30 
                            hover:scale-105 transition-all"
                        >
                            Back to Home
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;