'use client'

import React from "react";
import {
    FieldError,
    Input,
    Select,
    Label,
    TextField,
    ListBox,
    TextArea
} from "@heroui/react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function AddCoursesPage() {


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const mentora = Object.fromEntries(formData.entries());

        const { data: token } = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/mentora`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token.token}`
            },
            body: JSON.stringify(mentora)
        })
        const data = await res.json();
        // console.log(data);
        toast.success('New course successfully added')
        redirect('/courses')
    }



    return (
        <div className="min-h-screen bg-slate-950 text-white px-6 py-12 flex justify-center relative overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full" />

            <div className="relative w-full max-w-4xl">

                {/* CARD */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

                    {/* TITLE */}
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Add New <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Course</span>
                    </h1>

                    {/* FORM */}
                    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* TITLE */}
                        <div className="md:col-span-2">
                            <TextField name="title" isRequired>
                                <Label className="text-white/80 mb-1">Title</Label>
                                <Input
                                    placeholder="Modern Portfolio Website"
                                    className="text-white bg-white/5 border border-white/10 rounded-xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label className="text-white/80 mb-1">Description</Label>
                                <TextArea
                                    placeholder="A fully responsive modern portfolio course..."
                                    className="text-white bg-white/5 border border-white/10 rounded-xl min-h-[120px]"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* IMAGE */}
                        <div className="md:col-span-2">
                            <TextField name="image" isRequired>
                                <Label className="text-white/80 mb-1">Image URL</Label>
                                <Input
                                    placeholder="https://picsum.photos/800/600"
                                    className="text-white bg-white/5 border border-white/10 rounded-xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* PRICE */}
                        <TextField name="price" isRequired>
                            <Label className="text-white/80 mb-1">Price</Label>
                            <Input
                                type="number"
                                placeholder="29"
                                className="text-white bg-white/5 border border-white/10 rounded-xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* BADGE */}
                        <Select name="badge" className="w-full" placeholder="Select badge">
                            <Label className="text-white/80">Badge</Label>

                            <Select.Trigger className="bg-white/5 border border-white/10 rounded-xl text-white">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="frontend">Frontend Development</ListBox.Item>
                                    <ListBox.Item id="backend">Backend Development</ListBox.Item>
                                    <ListBox.Item id="web">Web Development</ListBox.Item>
                                    <ListBox.Item id="design">UI/UX Design</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        {/* BUTTONS */}
                        <div className="md:col-span-2 flex gap-4 pt-4">

                            <button
                                type="submit"
                                className="flex-1 py-3 cursor-pointer rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold hover:scale-[1.02] transition"
                            >
                                Add Course
                            </button>

                            <button
                                type="reset"
                                className="flex-1 cursor-pointer py-3 rounded-xl border border-white/15 text-white/70 hover:bg-white/5 transition"
                            >
                                Reset
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
}