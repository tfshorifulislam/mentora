import React from "react";
import { Card, Button, Link } from "@heroui/react";

const CoursesCard = ({ course }) => {
    return (
        <Card className="w-full bg-white/5 border border-white/10 backdrop-blur-md text-white hover:scale-[1.02] transition-transform shadow-lg">

            {/* IMAGE */}
            <div className="w-full h-48 overflow-hidden rounded-t-xl">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* HEADER */}
            <Card.Header className="flex flex-col gap-2 p-4">

                {/* Badge */}
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 w-fit">
                    {course.badge}
                </span>

                {/* Title */}
                <Card.Title className="text-lg font-semibold text-white">
                    {course.title}
                </Card.Title>

                {/* Description */}
                <Card.Description className="text-white/60 text-sm line-clamp-3">
                    {course.description}
                </Card.Description>

            </Card.Header>

            {/* FOOTER */}
            <Card.Footer className="flex items-center justify-between p-4 border-t border-white/10">

                {/* PRICE */}
                <div className="flex items-center gap-2 text-white/80">
                
                    <span className="font-semibold">
                        ${course.price}
                    </span>
                </div>

                {/* BUTTON */}
                <Link
                    href={`/courses/${course._id}`}
                    className="no-underline"
                >
                    <Button
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium"
                    >
                        View Course
                    </Button>
                </Link>

            </Card.Footer>

        </Card>
    );
};

export default CoursesCard;