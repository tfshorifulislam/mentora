import { CourseDelete } from '@/components/CourseDeleteAlert';
import { UpdateCourseDetailsModal } from '@/components/UpdateCourseDetailsModal';
import { Button } from '@heroui/react';
import React from 'react';

const CoursesDetails = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/mentora/${id}`, {
        cache: "no-store"
    });

    const course = await res.json();

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

                        <img
                            src={course?.image}
                            alt={course?.title}
                            className="w-full h-[400px] object-cover"
                        />

                        {/* BADGE */}
                        <div className="absolute top-5 left-5">
                            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-sm font-medium capitalize shadow-lg">
                                {course?.badge}
                            </span>
                        </div>

                    </div>

                    {/* CONTENT */}
                    <div>

                        <p className="text-indigo-300 text-sm uppercase tracking-[4px] mb-3">
                            Premium Course
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">

                            {course?.title}

                        </h1>

                        <p className="text-white/60 mt-6 leading-relaxed text-lg">

                            {course?.description}

                        </p>

                        {/* PRICE CARD */}
                        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-sm text-white/50">
                                        Course Price
                                    </p>

                                    <h2 className="text-3xl font-bold mt-1">
                                        ${course?.price}
                                    </h2>
                                </div>

                                <button
                                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-indigo-500/20"
                                >
                                    Enroll Now
                                </button>

                            </div>

                        </div>

                        {/* FEATURES */}
                        <div className="grid grid-cols-2 gap-4 mt-8">

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <p className="text-sm text-white/50">
                                    Level
                                </p>

                                <h3 className="text-lg font-semibold mt-1">
                                    Beginner Friendly
                                </h3>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <p className="text-sm text-white/50">
                                    Access
                                </p>

                                <h3 className="text-lg font-semibold mt-1">
                                    Lifetime Access
                                </h3>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <p className="text-sm text-white/50">
                                    Projects
                                </p>

                                <h3 className="text-lg font-semibold mt-1">
                                    Real World Builds
                                </h3>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <p className="text-sm text-white/50">
                                    Support
                                </p>

                                <h3 className="text-lg font-semibold mt-1">
                                    Community Access
                                </h3>
                            </div>
                            {/* ACTION BUTTONS */}
                            <div className="flex gap-4 mt-6">
                                {/* UPDATE BUTTON */}
                                <UpdateCourseDetailsModal course={course} />

                                {/* DELETE BUTTON */}
                                <CourseDelete course={course} />

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CoursesDetails;