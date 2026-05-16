"use client";

import React, { useState } from "react";
import { Button, Link } from "@heroui/react";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => setIsOpen(false);

    const navLinkClass = (path) =>
        `no-underline transition-colors relative ${pathname === path
            ? "text-white font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-indigo-400 after:to-pink-400"
            : "text-white/70 hover:text-white"
        }`;

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950 backdrop-blur-xl">

            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <div className="text-2xl font-bold tracking-tight text-white">
                        <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                            Mentora
                        </span>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-8 text-sm">
                        <Link href="/" className={navLinkClass("/")}>Home</Link>
                        <Link href="/courses" className={navLinkClass("/courses")}>Courses</Link>
                        <Link href="/add-course" className={navLinkClass("/add-course")}>Add Course</Link>
                        <Link href="/admin" className={navLinkClass("/admin")}>Admin</Link>
                    </div>

                    {/* DESKTOP AUTH */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/login">
                            <Button variant="light" className="text-white/80 hover:text-white">
                                Login
                            </Button>
                        </Link>

                        <Link href="/signup">
                            <Button className="text-white font-semibold bg-gradient-to-r from-indigo-500 to-pink-500">
                                Sign Up
                            </Button>
                        </Link>

                    </div>

                    {/* MOBILE */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl text-white/80"
                    >
                        {isOpen ? <RxCross1 /> : <IoIosMenu />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={`md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[400px]" : "max-h-0"}`}>
                <div className="px-6 py-8 flex flex-col gap-6 text-base">

                    <Link href="/" onClick={closeMenu} className={navLinkClass("/")}>Home</Link>
                    <Link href="/courses" onClick={closeMenu} className={navLinkClass("/courses")}>Courses</Link>
                    <Link href="/add-course" onClick={closeMenu} className={navLinkClass("/add-course")}>Add Course</Link>
                    <Link href="/admin" onClick={closeMenu} className={navLinkClass("/admin")}>Admin</Link>

                    <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                        <Button fullWidth variant="light" className="text-white/80" onClick={closeMenu}>
                            Login
                        </Button>

                        <Button fullWidth className="bg-gradient-to-r from-indigo-500 to-pink-500" onClick={closeMenu}>
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;