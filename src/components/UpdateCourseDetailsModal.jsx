"use client";

import React from "react";

import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Modal,
    Select,
    Surface,
    TextArea,
    TextField
} from "@heroui/react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

export function UpdateCourseDetailsModal({ course }) {
    const { _id } = course;


    const onSubmit = async (e) => {
        e.preventDefault();
        const details = new FormData(e.currentTarget);
        const updateData = Object.fromEntries(details.entries());
        const res = await fetch(`http://localhost:5000/mentora/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(updateData)
        })

        const courseUpdate = await res.json();
        console.log(courseUpdate, 'course update data');
        toast.success('Course Details successfully Updated')
        redirect('/courses')
    }

    return (

        <Modal>

            {/* OPEN BUTTON */}
            <Button
                className="
                    h-14
                    rounded-sm
                    bg-gradient-to-r
                    from-indigo-500
                    to-pink-500
                    text-white
                    font-semibold
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-indigo-500/20
                "
            >
                Update Details
            </Button>

            {/* MODAL */}
            <Modal.Backdrop className="bg-black/70 backdrop-blur-sm">

                <Modal.Container placement="center">

                    <Modal.Dialog
                        className="
                            w-full
                            max-w-5xl
                            rounded-3xl
                            border
                            border-white/10
                            bg-slate-950
                            text-white
                            backdrop-blur-2xl
                            shadow-2xl
                        "
                    >

                        <Modal.CloseTrigger className="text-white00 hover:text-white" />

                        {/* HEADER */}
                        <Modal.Header className="border-b border-white/10 pb-6">

                            <div>

                                <Modal.Heading className="text-3xl text-white/80 font-bold">

                                    Update{" "}

                                    <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                        Course
                                    </span>

                                </Modal.Heading>

                                <p className="mt-2 text-sm text-white/60">
                                    Update your course information and publish changes instantly.
                                </p>

                            </div>

                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="py-4 md:p-6">

                            <Surface
                                className="
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-6
                                    backdrop-blur-xl
                                "
                            >

                                {/* FORM */}
                                <form
                                    onSubmit={onSubmit}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >

                                    {/* TITLE */}
                                    <div className="md:col-span-2">

                                        <TextField defaultValue={course.title} name="title" isRequired>

                                            <Label className="text-white/80 mb-1">
                                                Title
                                            </Label>

                                            <Input
                                                placeholder="Modern Portfolio Website"
                                                className="
                                                    text-white
                                                    bg-white/5
                                                    border
                                                    border-white/10
                                                    rounded-xl
                                                "
                                            />

                                            <FieldError />

                                        </TextField>

                                    </div>

                                    {/* DESCRIPTION */}
                                    <div className="md:col-span-2">

                                        <TextField defaultValue={course.description} name="description" isRequired>

                                            <Label className="text-white/80 mb-1">
                                                Description
                                            </Label>

                                            <TextArea
                                                placeholder="A fully responsive modern portfolio course..."
                                                className="
                                                    text-white
                                                    bg-white/5
                                                    border
                                                    border-white/10
                                                    rounded-xl
                                                    min-h-[140px]
                                                "
                                            />

                                            <FieldError />

                                        </TextField>

                                    </div>

                                    {/* IMAGE */}
                                    <div className="md:col-span-2">

                                        <TextField defaultValue={course.image} name="image" isRequired>

                                            <Label className="text-white/80 mb-1">
                                                Image URL
                                            </Label>

                                            <Input
                                                className="
                                                    text-white
                                                    bg-white/5
                                                    border
                                                    border-white/10
                                                    rounded-xl
                                                "
                                            />

                                            <FieldError />

                                        </TextField>

                                    </div>

                                    {/* PRICE */}
                                    <TextField defaultValue={course.price} name="price" isRequired>

                                        <Label className="text-white/80 mb-1">
                                            Price
                                        </Label>

                                        <Input
                                            type="number"
                                            placeholder="29"
                                            className="
                                                text-white
                                                bg-white/5
                                                border
                                                border-white/10
                                                rounded-xl
                                            "
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* BADGE */}
                                    <Select
                                        isRequired
                                        name="badge"
                                        className="w-full"
                                        placeholder="Select badge"
                                    >

                                        <Label className="text-white/80">
                                            Badge
                                        </Label>

                                        <Select.Trigger
                                            className="
                                            bg-white/5
                                            border
                                            border-white/10
                                            rounded-xl
                                            text-white
                                            "
                                        >
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>

                                        <Select.Popover>

                                            <ListBox>
                                                <ListBox.Item id="frontend">
                                                    Frontend Development
                                                </ListBox.Item>

                                                <ListBox.Item id="backend">
                                                    Backend Development
                                                </ListBox.Item>

                                                <ListBox.Item id="web">
                                                    Web Development
                                                </ListBox.Item>

                                                <ListBox.Item id="design">
                                                    UI/UX Design
                                                </ListBox.Item>

                                            </ListBox>

                                        </Select.Popover>

                                    </Select>

                                    {/* BUTTONS */}
                                    <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">

                                        <button
                                            type="submit"
                                            className="
                                                flex-1
                                                py-3
                                                cursor-pointer
                                                rounded-xl
                                                bg-gradient-to-r
                                                from-indigo-500
                                                to-pink-500
                                                font-semibold
                                                hover:scale-[1.02]
                                                transition
                                                duration-300
                                                shadow-lg
                                                shadow-indigo-500/20
                                                text-white/80
                                            "
                                        >
                                            Save Changes
                                        </button>

                                        <button
                                            type="reset"
                                            className="
                                                flex-1
                                                py-3
                                                cursor-pointer
                                                rounded-xl
                                                border
                                                border-white/15
                                                text-white/70
                                                hover:bg-white/5
                                                transition
                                            "
                                        >
                                            Reset
                                        </button>

                                    </div>

                                </form>

                            </Surface>

                        </Modal.Body>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
}