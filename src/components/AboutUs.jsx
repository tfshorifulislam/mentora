import Image from "next/image";
import React from "react";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* IMAGE */}
                <div className="relative w-full h-[450px]">

                    {/* glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 blur-2xl opacity-30 rounded-2xl"></div>

                    <Image
                        src="/123.png"
                        alt="About Mentora"
                        fill
                        className="object-cover rounded-2xl shadow-xl border border-white/10"
                    />
                </div>

                {/* CONTENT */}
                <div>

                    <h1 className="text-4xl md:text-5xl font-bold">
                        About{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                            Mentora
                        </span>
                    </h1>

                    <p className="text-white/70 mt-5 leading-relaxed">
                        Mentora is a modern learning platform designed to help students
                        and developers upgrade their skills with real-world projects,
                        structured courses, and expert guidance.
                    </p>

                    <p className="text-white/60 mt-4 leading-relaxed">
                        We focus on practical, job-ready education rather than just theory.
                        Every course is built to simulate real industry workflows so learners
                        can confidently apply their knowledge in real projects and interviews.
                    </p>

                    <p className="text-white/60 mt-4 leading-relaxed">
                        Our platform brings together experienced developers, designers, and
                        industry professionals to create high-quality learning content that
                        stays updated with modern technologies like React, Next.js, Node.js,
                        and full-stack development practices.
                    </p>

                    <p className="text-white/60 mt-4 leading-relaxed">
                        Whether you're a beginner starting your journey or an experienced
                        developer upgrading your skills, Mentora provides a clear roadmap
                        to grow step by step and achieve your career goals.
                    </p>

                    {/* FEATURES */}
                    <ul className="mt-8 space-y-3 text-white/70">

                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span>
                            High quality structured courses
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span>
                            Learn from industry experts
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400">✔</span>
                            Real-world project based learning
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;