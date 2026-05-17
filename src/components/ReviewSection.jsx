"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const REVIEWS = [
    {
        id: 1,
        name: "Shoriful Islam",
        role: "Frontend Developer",
        image: "/picture1.jpg",
        review:
            "Mentora completely changed my learning journey. The courses are modern, practical, and beginner friendly.",
    },
    {
        id: 2,
        name: "Ariana Smith",
        role: "UI/UX Designer",
        image: "/picture2.jpg",
        review:
            "The platform design is amazing and the mentors explain everything step by step with real projects.",
    },
    {
        id: 3,
        name: "David Miller",
        role: "Full Stack Developer",
        image: "/picture3.jpg",
        review:
            "I landed my first freelance client after completing the web development roadmap from Mentora.",
    },
    {
        id: 4,
        name: "Rahim Ahmed",
        role: "MERN Stack Learner",
        image: "/picture4.jpg",
        review:
            "Best learning platform for modern developers. The project-based learning system is incredibly helpful.",
    },
    {
        id: 5,
        name: "Sophia Lee",
        role: "Software Engineer",
        image: "/picture5.jpg",
        review:
            "The UI feels premium and the content quality is top tier. Highly recommended for serious learners.",
    },
    {
        id: 6,
        name: "Alex Johnson",
        role: "Backend Developer",
        image: "/picture6.jpg",
        review:
            "I love how organized the courses are. Everything feels smooth, modern, and easy to follow.",
    },
];

const ReviewSection = () => {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-24">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0b1120] to-slate-950" />

            {/* GLOW */}
            <div className="absolute left-[-120px] top-10 h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-[120px]" />

            <div className="absolute bottom-0 right-[-100px] h-[350px] w-[350px] rounded-full bg-pink-500/20 blur-[120px]" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/* HEADER */}
                <div className="mx-auto max-w-3xl text-center">

                    <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 backdrop-blur-xl">
                        💬 Student Reviews
                    </div>

                    <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                        What Our{" "}

                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Students
                        </span>{" "}

                        Say
                    </h2>

                    <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
                        Thousands of learners are building their careers with
                        Mentora through modern project-based learning.
                    </p>

                </div>

                {/* REVIEWS */}
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {REVIEWS.map((review) => (
                        <div
                            key={review.id}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:bg-white/[0.07]"
                        >

                            {/* CARD GLOW */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative z-10">

                                {/* USER */}
                                <div className="flex items-center gap-4">

                                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10">

                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                    <div>

                                        <h3 className="text-lg font-semibold text-white">
                                            {review.name}
                                        </h3>

                                        <p className="text-sm text-white/50">
                                            {review.role}
                                        </p>

                                    </div>

                                </div>

                                {/* STARS */}
                                <div className="mt-5 flex items-center gap-1 text-yellow-400">

                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar key={star} />
                                    ))}

                                </div>

                                {/* REVIEW */}
                                <p className="mt-5 leading-relaxed text-white/65">
                                    “{review.review}”
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ReviewSection;