"use client";

import React from "react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        image: "/project1.jpg",
        title: "Modern Portfolio",
        category: "Frontend Development"
    },
    {
        id: 2,
        image: "/project2.jpg",
        title: "AI Dashboard UI",
        category: "UI/UX Design"
    },
    {
        id: 3,
        image: "/project3.jpg",
        title: "E-Commerce Platform",
        category: "Full Stack"
    },
    {
        id: 4,
        image: "/project4.jpg",
        title: "Learning Management",
        category: "Web Application"
    },
    {
        id: 5,
        image: "/project5.jpg",
        title: "Crypto Landing Page",
        category: "Landing Page"
    },
    {
        id: 6,
        image: "/project6.jpg",
        title: "SaaS Product Design",
        category: "Product Design"
    },
    {
        id: 7,
        image: "/project7.jpg",
        title: "Travel Booking UI",
        category: "Frontend UI"
    },
    {
        id: 8,
        image: "/project8.jpg",
        title: "Admin Dashboard",
        category: "Dashboard Design"
    },
    {
        id: 9,
        image: "/project9.jpg",
        title: "Social Media App",
        category: "Mobile UI"
    },
    {
        id: 10,
        image: "/project10.jpg",
        title: "Creative Agency",
        category: "Brand Website"
    }
];

const Project = () => {
    return (
        <section className="relative overflow-hidden bg-[#020617] py-24 text-white">

            {/* BACKGROUND GRID */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

            {/* GLOW */}
            <div className="absolute left-[-120px] top-20 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[120px]" />
            <div className="absolute bottom-0 right-[-120px] h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

                {/* HEADER */}
                <div className="mx-auto max-w-3xl text-center">

                    <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur-xl">
                        🚀 Featured Works
                    </div>

                    <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                        Creative{" "}
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base md:text-lg">
                        Explore modern web projects, premium interfaces,
                        dashboards, SaaS products, and creative UI experiences.
                    </p>

                </div>

                {/* PROJECT GRID */}
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-white/20"
                        >

                            {/* IMAGE */}
                            <div className="relative h-64 overflow-hidden">

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            </div>

                            {/* CONTENT */}
                            <div className="p-5">

                                <div className="mb-3 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
                                    {project.category}
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-white/60">
                                    Modern responsive project with premium UI,
                                    smooth interactions, and scalable design system.
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Project;