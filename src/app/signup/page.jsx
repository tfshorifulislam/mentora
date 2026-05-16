'use client'

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField
} from "@heroui/react";

const SignUpPage = () => {

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10 overflow-hidden relative">

            {/* BACKGROUND BLUR */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full"></div>

            {/* CARD */}
            <div className="relative z-10 w-full max-w-lg">

                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

                    {/* HEADER */}
                    <div className="text-center mb-8">

                        <h1 className="text-3xl font-bold text-white">
                            Join{" "}
                            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                Mentora
                            </span>
                        </h1>

                        <p className="text-sm text-white/60 mt-3">
                            Create your account and start learning modern development skills.
                        </p>

                    </div>

                    {/* FORM */}
                    <Form className="flex flex-col gap-5">

                        {/* NAME */}
                        <TextField
                            isRequired
                            name="name"
                        >
                            <Label className="text-white/80 mb-1">
                                Full Name
                            </Label>

                            <Input
                                placeholder="John Doe"
                                className="text-white"
                            />

                            <FieldError className="text-red-400 text-sm" />
                        </TextField>

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
                            <Label className="text-white/80 mb-1">
                                Email Address
                            </Label>

                            <Input
                                placeholder="john@example.com"
                                className="text-white"
                            />

                            <FieldError className="text-red-400 text-sm" />
                        </TextField>


                        {/* Image */}
                        <TextField
                            name="Image"
                            type="url"
                            
                        >
                            <Label className="text-white/80 mb-1">
                                Image
                            </Label>

                            <Input
                                placeholder="Inter your image url"
                                className="text-white"
                            />

                            <FieldError className="text-red-400 text-sm" />
                        </TextField>

                        {/* PASSWORD */}
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {

                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }

                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }

                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }

                                return null;
                            }}
                        >

                            <Label className="text-white/80 mb-1">
                                Password
                            </Label>

                            <Input
                                placeholder="Enter your password"
                                className="text-white"
                            />

                            <Description className="text-xs text-white/40 mt-1">
                                Must be at least 8 characters with 1 uppercase and 1 number
                            </Description>

                            <FieldError className="text-red-400 text-sm" />

                        </TextField>

                        {/* CONFIRM PASSWORD */}
                        <TextField
                            isRequired
                            name="confirmPassword"
                            type="password"
                            validate={(value, validationResult) => {

                                const password =
                                    validationResult?.formData?.get("password");

                                if (value !== password) {
                                    return "Passwords do not match";
                                }

                                return null;
                            }}
                        >

                            <Label className="text-white/80 mb-1">
                                Confirm Password
                            </Label>

                            <Input
                                placeholder="Confirm your password"
                                className="text-white"
                            />

                            <FieldError className="text-red-400 text-sm" />

                        </TextField>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-3 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-500/20"
                            >
                                Create Account
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

                    {/* FOOTER */}
                    <div className="mt-8 text-center">

                        <p className="text-sm text-white/50">
                            Already have an account?{" "}
                            <span className="text-indigo-400 hover:text-pink-400 cursor-pointer transition">
                                Login
                            </span>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SignUpPage;