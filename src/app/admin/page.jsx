"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { Button } from "@heroui/react";

const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const AdminPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white px-4 py-12 flex items-center justify-center">

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full" />

            {/* CARD */}
            <div className="relative w-full max-w-2xl">

                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

                    {/* HEADER */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">

                        {/* AVATAR */}
                        <div className="h-24 w-24 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                            {user.name?.charAt(0)?.toUpperCase()}
                        </div>

                        {/* NAME + EMAIL */}
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold">
                                {user.name}
                            </h1>
                            <p className="text-white/60 text-sm mt-1">
                                {user.email}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">

                                <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                                    Active User
                                </span>

                                <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                    Admin Panel
                                </span>

                            </div>
                        </div>

                    </div>

                    {/* INFO GRID */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                            <p className="text-xs text-white/50">Email</p>
                            <p className="mt-1 font-medium">{user.email}</p>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                            <p className="text-xs text-white/50">Name</p>
                            <p className="mt-1 font-medium">{user.name}</p>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                            <p className="text-xs text-white/50">Created At</p>
                            <p className="mt-1 font-medium">
                                {formatDate(user.createdAt)}
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                            <p className="text-xs text-white/50">Updated At</p>
                            <p className="mt-1 font-medium">
                                {formatDate(user.updatedAt)}
                            </p>
                        </div>

                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">

                        <Button className="flex-1 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-2xl hover:scale-[1.02] transition">
                            Edit Profile
                        </Button>

                        <Button variant="bordered" className="flex-1 h-12 border-white/15 text-white/70 rounded-2xl hover:bg-white/5">
                            Security Settings
                        </Button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default AdminPage;