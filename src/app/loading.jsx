"use client";

import React from "react";

const LoadingPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0%,transparent_60%)]"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Loader */}
            <div className="relative z-10 flex flex-col items-center gap-6">

                {/* Spinner */}
                <div className="w-14 h-14 border-4 border-white/20 border-t-indigo-500 rounded-full animate-spin"></div>

                {/* Text */}
                <h2 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                    Loading Mentora...
                </h2>

                <p className="text-white/60 text-sm md:text-base text-center max-w-sm">
                    Preparing your learning experience. Please wait a moment.
                </p>

            </div>

        </div>
    );
};

export default LoadingPage;