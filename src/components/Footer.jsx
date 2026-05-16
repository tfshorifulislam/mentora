import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full overflow-hidden border-t border-white/10 bg-slate-950 text-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* BRAND */}
                    <div className="lg:col-span-4">
                        <h2 className="text-2xl font-bold">
                            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                Mentora
                            </span>
                        </h2>

                        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                            Mentora is a modern learning platform that helps developers
                            build real-world skills through structured courses,
                            mentorship, and practical projects.
                        </p>
                    </div>

                    {/* PLATFORM LINKS */}
                    <div className="sm:col-span-1 lg:col-span-2">
                        <h3 className="mb-4 text-sm font-semibold text-white">
                            Platform
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-white/60">
                            <Link href="/" className="transition hover:text-white">
                                Home
                            </Link>

                            <Link href="/courses" className="transition hover:text-white">
                                Courses
                            </Link>

                            <Link href="/add-course" className="transition hover:text-white">
                                Add Course
                            </Link>

                            <Link href="/admin" className="transition hover:text-white">
                                Admin
                            </Link>
                        </div>
                    </div>

                    {/* RESOURCES */}
                    <div className="sm:col-span-1 lg:col-span-2">
                        <h3 className="mb-4 text-sm font-semibold text-white">
                            Resources
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-white/60">
                            <Link href="#" className="transition hover:text-white">
                                Blog
                            </Link>

                            <Link href="#" className="transition hover:text-white">
                                Docs
                            </Link>

                            <Link href="#" className="transition hover:text-white">
                                Community
                            </Link>

                            <Link href="#" className="transition hover:text-white">
                                Support
                            </Link>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="lg:col-span-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md">

                            <h3 className="text-lg font-semibold">
                                Start Learning Today
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-white/60">
                                Join thousands of learners building modern development skills.
                            </p>

                            <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 py-3 text-sm font-medium text-white transition hover:scale-[1.02]">
                                Get Started
                            </button>

                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">

                    <p className="text-sm text-white/50">
                        © 2026 Mentora. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/50">
                        <Link href="#" className="transition hover:text-white">
                            Privacy
                        </Link>

                        <Link href="#" className="transition hover:text-white">
                            Terms
                        </Link>

                        <Link href="#" className="transition hover:text-white">
                            Cookies
                        </Link>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;