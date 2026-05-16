import React from "react";
import { Avatar, Button, Card, CloseButton, Link } from "@heroui/react";

const SomeProjectDisplay = () => {
    return (
        <div className="w-full bg-slate-950 py-16">

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Projects</span>
                    </h1>

                    <p className="text-white/60 mt-3">
                        Explore top learning builds, community projects, and creative experiments
                    </p>
                </div>

                {/* GRID */}
                <div className="flex w-full items-center justify-center">

                    <div className="grid w-full max-w-5xl grid-cols-12 gap-5">

                        {/* BIG CARD */}
                        <Card className="col-span-12 bg-white/5 border border-white/10 backdrop-blur-md text-white overflow-hidden">

                            <div className="flex flex-col sm:flex-row">

                                <img
                                    alt="Cherries"
                                    className="h-[180px] sm:h-[140px] sm:w-[180px] w-full object-cover"
                                    src="https://picsum.photos/id/1011/800/600"
                                />

                                <div className="flex flex-1 flex-col gap-3 p-5">

                                    <Card.Title className="text-lg font-semibold">
                                        Become an ACME Creator!
                                    </Card.Title>

                                    <Card.Description className="text-white/60 text-sm">
                                        Build real-world projects, join challenges, and grow your developer portfolio with structured learning experiences.
                                    </Card.Description>

                                    <Card.Footer className="flex items-center justify-between mt-auto">

                                        <div className="text-sm text-white/60">
                                            Only 10 spots • Limited access
                                        </div>

                                        <Button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
                                            Apply Now
                                        </Button>

                                    </Card.Footer>

                                </div>

                            </div>

                        </Card>

                        {/* LEFT SECTION */}
                        <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-5">

                            {/* INFO CARD */}
                            <Card className="col-span-12 bg-white/5 border border-white/10 text-white">

                                <div className="absolute top-3 right-3">
                                    <CloseButton />
                                </div>

                                <Card.Header className="p-4">
                                    <div>
                                        <p className="text-xs text-indigo-300 uppercase tracking-wider">
                                            Update
                                        </p>

                                        <Card.Title className="text-base mt-1">
                                            New Crypto Withdrawal System
                                        </Card.Title>

                                        <Card.Description className="text-white/60 text-sm">
                                            Connect wallet and withdraw earnings instantly
                                        </Card.Description>
                                    </div>
                                </Card.Header>

                                <Card.Footer className="px-4 pb-4">
                                    <Link href="#" className="text-indigo-400 text-sm">
                                        Go to settings →
                                    </Link>
                                </Card.Footer>

                            </Card>

                            {/* MINI CARDS */}
                            <div className="col-span-12 grid grid-cols-12 gap-5">

                                {/* CARD 1 */}
                                <Card className="col-span-12 sm:col-span-6 bg-white/5 border border-white/10 text-white p-3">

                                    <Avatar className="size-14 rounded-xl mb-3">
                                        <Avatar.Image src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg" />
                                    </Avatar>

                                    <Card.Title className="text-sm">
                                        Indie Hackers
                                    </Card.Title>

                                    <Card.Description className="text-white/60 text-xs">
                                        148 members
                                    </Card.Description>

                                </Card>

                                {/* CARD 2 */}
                                <Card className="col-span-12 sm:col-span-6 bg-white/5 border border-white/10 text-white p-3">

                                    <Avatar className="size-14 rounded-xl mb-3">
                                        <Avatar.Image src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg" />
                                    </Avatar>

                                    <Card.Title className="text-sm">
                                        AI Builders
                                    </Card.Title>

                                    <Card.Description className="text-white/60 text-xs">
                                        362 members
                                    </Card.Description>

                                </Card>

                            </div>

                        </div>

                        {/* RIGHT FEATURE CARD */}
                        <Card className="col-span-12 lg:col-span-6 bg-white/5 border border-white/10 overflow-hidden relative text-white">

                            <img
                                className="absolute inset-0 w-full h-full object-cover opacity-40"
                                src="https://picsum.photos/id/1062/800/600"
                            />

                            <div className="relative p-5 flex flex-col h-full min-h-[280px] justify-between">

                                <div>
                                    <p className="text-xs text-indigo-300 tracking-widest">
                                        FEATURED
                                    </p>

                                    <Card.Title className="text-xl mt-1">
                                        AI Learning Robot System
                                    </Card.Title>

                                    <Card.Description className="text-white/60 text-sm mt-2">
                                        Interactive learning assistant powered by AI for personalized education.
                                    </Card.Description>
                                </div>

                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-sm">Available Soon</p>
                                        <p className="text-xs text-white/50">Get notified early</p>
                                    </div>

                                    <Button className="bg-white text-black">
                                        Notify Me
                                    </Button>

                                </div>

                            </div>

                        </Card>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SomeProjectDisplay;