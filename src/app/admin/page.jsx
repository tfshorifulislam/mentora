"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
    FaBookOpen,
    FaCalendarAlt,
    FaEnvelope,
    FaHeart,
    FaUserFriends
} from "react-icons/fa";

const COURSES = [
    {
        id: 1,
        title: "Modern React Mastery",
        image: "/picture1.jpg",
        students: "12K Students",
    },
    {
        id: 2,
        title: "Next.js Full Stack",
        image: "/picture2.jpg",
        students: "8K Students",
    },
    {
        id: 3,
        title: "Advanced Tailwind CSS",
        image: "/picture3.jpg",
        students: "5K Students",
    },
    {
        id: 4,
        title: "MERN Stack Bootcamp",
        image: "/picture4.jpg",
        students: "15K Students",
    },
];

const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const AdminPage = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { data: session } = authClient.useSession();

    const user = session?.user;

    if (!mounted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
                Loading...
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0b1120] to-slate-950" />

            {/* GLOW */}
            <div className="absolute left-[-100px] top-0 h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-[120px]" />

            <div className="absolute bottom-0 right-[-100px] h-[350px] w-[350px] rounded-full bg-pink-500/20 blur-[120px]" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-10">

                {/* COVER */}
                <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5">

                    <div className="h-[260px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />

                    {/* PROFILE */}
                    <div className="relative px-6 pb-8">

                        <div className="-mt-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                            {/* LEFT */}
                            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-end">

                                {/* IMAGE */}
                                <div className="relative h-36 w-36 overflow-hidden rounded-3xl border-4 border-slate-950 bg-slate-900 shadow-2xl">

                                    {user?.image ? (
                                        <Image
                                            src={user.image}
                                            alt={user.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-indigo-500 to-pink-500 text-5xl font-bold text-white">
                                            {user?.name?.charAt(0)?.toUpperCase()}
                                        </div>
                                    )}

                                </div>

                                {/* USER INFO */}
                                <div>

                                    <h1 className="text-3xl font-black text-white md:text-4xl">
                                        {user?.name}
                                    </h1>

                                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-white/60">

                                        <div className="flex items-center gap-2">
                                            <FaEnvelope />
                                            {user?.email}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <FaCalendarAlt />
                                            Joined {formatDate(user?.createdAt)}
                                        </div>

                                    </div>

                                    {/* TAGS */}
                                    <div className="mt-4 flex flex-wrap gap-3">

                                        <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-xs font-medium text-indigo-400">
                                            Creator
                                        </span>

                                        <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-1 text-xs font-medium text-pink-400">
                                            Admin
                                        </span>

                                        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1 text-xs font-medium text-green-400">
                                            Active User
                                        </span>

                                    </div>

                                </div>

                            </div>

                            {/* ACTIONS */}
                            <div className="flex flex-col gap-3 sm:flex-row">

                                <Button className="h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 px-6 font-semibold text-white">
                                    Edit Profile
                                </Button>

                                <Button
                                    variant="bordered"
                                    className="h-12 rounded-2xl border-white/15 bg-white/5 px-6 text-white/70 hover:bg-white/10"
                                >
                                    Share Profile
                                </Button>

                            </div>

                        </div>

                    </div>

                </div>

                {/* STATS */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-white/50">
                                    Total Courses
                                </p>
                                <h2 className="mt-2 text-3xl font-black text-white">
                                    24
                                </h2>
                            </div>

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                                <FaBookOpen size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-white/50">
                                    Followers
                                </p>
                                <h2 className="mt-2 text-3xl font-black text-white">
                                    18K
                                </h2>
                            </div>

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">
                                <FaUserFriends size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-white/50">
                                    Likes
                                </p>
                                <h2 className="mt-2 text-3xl font-black text-white">
                                    92K
                                </h2>
                            </div>

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                                <FaHeart size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-white/50">
                                    Updated
                                </p>
                                <h2 className="mt-2 text-lg font-bold text-white">
                                    {formatDate(user?.updatedAt)}
                                </h2>
                            </div>

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                                <FaCalendarAlt size={22} />
                            </div>
                        </div>
                    </div>

                </div>

                {/* COURSES SECTION */}
                <div className="mt-10">

                    <div className="mb-8 flex items-center justify-between">

                        <div>
                            <h2 className="text-3xl font-black text-white">
                                Posted Courses
                            </h2>

                            <p className="mt-2 text-white/50">
                                Courses created and published by this instructor
                            </p>
                        </div>

                        <Button className="hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 px-6 text-white sm:flex">
                            Add New Course
                        </Button>

                    </div>

                    {/* COURSE GRID */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

                        {COURSES.map((course) => (
                            <div
                                key={course.id}
                                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30"
                            >

                                {/* IMAGE */}
                                <div className="relative h-56 overflow-hidden">

                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-110"
                                    />

                                </div>

                                {/* CONTENT */}
                                <div className="p-5">

                                    <h3 className="text-lg font-bold text-white">
                                        {course.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-white/50">
                                        {course.students}
                                    </p>

                                    <Button className="mt-5 w-full rounded-2xl bg-white/10 text-white hover:bg-white/15">
                                        View Course
                                    </Button>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AdminPage;
