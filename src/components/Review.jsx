import React from "react";
import { Avatar, Button, Card, CloseButton, Link } from "@heroui/react";

const BecomeACreator = () => {
    return (
        <div className="w-full bg-slate-950 py-16 text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Become{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                            Creator
                        </span>
                    </h1>

                    <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                        Explore learning opportunities, build real-world projects, and grow your developer career with Mentora.
                    </p>
                </div>

                {/* GRID */}
                <div className="flex justify-center">

                    <div className="grid w-full max-w-5xl grid-cols-12 gap-6">

                        {/* BIG CARD */}
                        <Card className="col-span-12 bg-white/5 border border-white/10 backdrop-blur-md text-white p-6">

                            <div className="flex flex-col gap-4">

                                <div>
                                    <h2 className="text-xl font-semibold">
                                        Become a Mentora Creator!
                                    </h2>

                                    <p className="text-white/60 text-sm mt-3 leading-relaxed">
                                        Build real-world projects, join challenges, and grow your developer portfolio with structured learning experiences and expert guidance.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">

                                    <span className="text-xs text-white/50">
                                        Only 10 spots • Limited access
                                    </span>

                                    <Button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
                                        Apply Now
                                    </Button>

                                </div>

                            </div>

                        </Card>

                        {/* LEFT SECTION */}
                        <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-6">

                            {/* INFO CARD */}
                            <Card className="col-span-12 bg-white/5 border border-white/10 text-white p-5 relative">

                                <div className="absolute top-3 right-3">
                                    <CloseButton />
                                </div>

                                <p className="text-xs text-indigo-300 uppercase tracking-wider">
                                    Update
                                </p>

                                <h3 className="text-base font-semibold mt-2">
                                    New Crypto Withdrawal System
                                </h3>

                                <p className="text-white/60 text-sm mt-2 leading-relaxed">
                                    Connect wallet and withdraw earnings instantly with improved speed, security, and transparency.
                                </p>

                                <Link href="#" className="text-indigo-400 text-sm mt-4 inline-block">
                                    Go to settings →
                                </Link>

                            </Card>

                            {/* MINI CARDS */}
                            <div className="col-span-12 grid grid-cols-12 gap-6">

                                <Card className="col-span-12 sm:col-span-6 bg-white/5 border border-white/10 p-5">
                                    <div className="flex flex-col gap-2">

                                        <Avatar className="size-12 rounded-xl">
                                            <Avatar.Fallback>IH</Avatar.Fallback>
                                        </Avatar>

                                        <h4 className="text-sm font-medium">Indie Hackers</h4>
                                        <p className="text-white/60 text-xs">148 members</p>

                                    </div>
                                </Card>

                                <Card className="col-span-12 sm:col-span-6 bg-white/5 border border-white/10 p-5">
                                    <div className="flex flex-col gap-2">

                                        <Avatar className="size-12 rounded-xl">
                                            <Avatar.Fallback>AI</Avatar.Fallback>
                                        </Avatar>

                                        <h4 className="text-sm font-medium">AI Builders</h4>
                                        <p className="text-white/60 text-xs">362 members</p>

                                    </div>
                                </Card>

                            </div>

                        </div>

                        {/* RIGHT FEATURE CARD */}
                        <Card className="col-span-12 lg:col-span-6 bg-white/5 border border-white/10 text-white p-6">

                            <p className="text-xs text-indigo-300 uppercase tracking-widest">
                                Featured
                            </p>

                            <h2 className="text-xl font-semibold mt-2">
                                AI Learning Robot System
                            </h2>

                            <p className="text-white/60 text-sm mt-3 leading-relaxed">
                                Interactive AI assistant that adapts to your learning style and helps you master skills faster.
                            </p>

                            <div className="flex items-center justify-between mt-8">

                                <div>
                                    <p className="text-sm">Available Soon</p>
                                    <p className="text-xs text-white/60">Get notified early</p>
                                </div>

                                <Button className="bg-white text-black">
                                    Notify Me
                                </Button>

                            </div>

                        </Card>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BecomeACreator;