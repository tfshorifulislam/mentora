"use client";

import React, { useState } from "react";
import { Button, Link } from "@heroui/react";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <div className="">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            Mentora
                        </h1>
                    </div>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:flex items-center gap-8 text-[13px]  text-gray-700">
                        <Link href="/" className="no-underline hover:text-primary transition-colors duration-200">Home</Link>
                        <Link href="/courses" className="no-underline hover:text-primary transition-colors duration-200">Courses</Link>
                        <Link href="/add-course" className="no-underline hover:text-primary transition-colors duration-200">Add Course</Link>
                        <Link href="/admin" className="no-underline hover:text-primary transition-colors duration-200">Admin</Link>
                    </div>

                    {/* DESKTOP AUTH BUTTONS */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            variant="light"
                            className="font-medium px-7 py-2 text-sm"
                        >
                            Login
                        </Button>
                        <Button
                            color="primary"
                            className="font-semibold px-7 py-2 text-sm shadow-md"
                        >
                            Sign Up
                        </Button>
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-2xl text-gray-700 hover:text-gray-900 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <RxCross1 /> : <IoIosMenu />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-100' : 'max-h-0'}`}>
                <div className="px-6 py-8 flex flex-col gap-6 text-[17px]">
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="hover:text-primary  transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/courses"
                        onClick={closeMenu}
                        className="hover:text-primary  transition-colors"
                    >
                        Courses
                    </Link>
                    <Link
                        href="/add-course"
                        onClick={closeMenu}
                        className="hover:text-primary  transition-colors"
                    >
                        Add Course
                    </Link>
                    <Link
                        href="/admin"
                        onClick={closeMenu}
                        className="hover:text-primary  transition-colors"
                    >
                        Admin
                    </Link>

                    {/* Mobile Buttons */}
                    <div className="flex flex-col gap-3 pt-6 border-t">
                        <Button

                            fullWidth
                            size="lg"
                            onClick={closeMenu}
                        >
                            Login
                        </Button>
                        <Button
                            variant="outline"
                            fullWidth
                            size="lg"
                            onClick={closeMenu}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;