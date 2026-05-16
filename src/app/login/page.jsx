'use client'

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField
} from "@heroui/react";

import Link from "next/link";

const LoginPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            name: user.name,
        })
        console.log(data, error)
        if (data) {
            redirect('/')
        } else {
            toast('Something went Wrong')
        }
    }


    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10 overflow-hidden relative">

            {/* BACKGROUND EFFECT */}
            <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl"></div>

            {/* CARD */}
            <div className="relative z-10 w-full max-w-lg">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

                    {/* HEADER */}
                    <div className="mb-8 text-center">

                        <h1 className="text-3xl font-bold text-white">
                            Welcome Back to{" "}
                            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                Mentora
                            </span>
                        </h1>

                        <p className="mt-3 text-sm text-white/60">
                            Login to continue your learning journey and access premium courses.
                        </p>

                    </div>

                    {/* FORM */}
                    <Form onSubmit={onSubmit} className="flex flex-col gap-5">

                        {/* EMAIL */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {

                                if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        value
                                    )
                                ) {
                                    return "Please enter a valid email address";
                                }

                                return null;
                            }}
                        >

                            <Label className="mb-1 text-white/80">
                                Email Address
                            </Label>

                            <Input
                                placeholder="john@example.com"
                                className="text-white"
                            />

                            <FieldError className="text-sm text-red-400" />

                        </TextField>

                        {/* PASSWORD */}
                        <TextField
                            isRequired
                            name="password"
                            type="password"
                            minLength={8}
                            validate={(value) => {

                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }

                                return null;
                            }}
                        >

                            <div className="mb-1 flex items-center justify-between">

                                <Label className="text-white/80">
                                    Password
                                </Label>

                                <button
                                    type="button"
                                    className="text-xs text-indigo-400 hover:text-pink-400 transition"
                                >
                                    Forgot Password?
                                </button>

                            </div>

                            <Input
                                placeholder="Enter your password"
                                className="text-white"
                            />

                            <Description className="mt-1 text-xs text-white/40">
                                Enter your secure account password
                            </Description>

                            <FieldError className="text-sm text-red-400" />

                        </TextField>

                        {/* BUTTONS */}
                        <div className="flex w-full flex-col gap-3 pt-2 sm:flex-row">

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02]"
                            >
                                Login
                            </Button>

                            <Button
                                type="reset"
                                variant="bordered"
                                className="w-full border-white/15 text-white/70 hover:bg-white/5"
                            >
                                Reset
                            </Button>

                        </div>

                    </Form>

                    {/* DIVIDER */}
                    <div className="my-7 flex items-center gap-4">

                        <div className="h-px flex-1 bg-white/10"></div>

                        <span className="text-xs uppercase tracking-widest text-white/40">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-white/10"></div>

                    </div>

                    {/* SOCIAL LOGIN */}
                    <Button
                        variant="bordered"
                        className="w-full border-white/10 bg-white/5 py-6 text-white hover:bg-white/10"
                    >
                        Continue with Google
                    </Button>

                    {/* FOOTER */}
                    <div className="mt-8 text-center">

                        <p className="text-sm text-white/50">
                            Don’t have an account?{" "}

                            <Link
                                href="/signup"
                                className="text-indigo-400 transition hover:text-pink-400"
                            >
                                Create Account
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default LoginPage;