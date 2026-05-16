import CoursesCard from "@/components/CoursesCard";
import { Label, SearchField } from "@heroui/react";

const CoursesPage = async () => {
    const res = await fetch("http://localhost:5000/mentora", {
        cache: "no-store",
    });

    const data = await res.json();

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Explore{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                            Courses
                        </span>
                    </h1>

                    <p className="text-white/60 mt-4 text-base md:text-lg">
                        Find the best courses to upgrade your skills
                    </p>
                </div>

                {/* SEARCH BOX */}
                <div className="flex justify-center mb-12">
                    <div className="w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg">

                        <SearchField name="search">

                            <Label className="text-white/70 text-sm mb-2 block">
                                Search Courses
                            </Label>

                            <SearchField.Group className="flex items-center gap-2">

                                <SearchField.SearchIcon />

                                <SearchField.Input
                                    className="w-full text-white placeholder:text-white/40 bg-transparent outline-none"
                                    placeholder="Search by title, category..."
                                />

                                <SearchField.ClearButton className="text-white/60 hover:text-white" />

                            </SearchField.Group>

                        </SearchField>

                    </div>
                </div>

                {/* GRID */}
                {data?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((course) => (
                            <CoursesCard key={course._id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-white/60 mt-20">
                        No courses found
                    </div>
                )}

            </div>
        </div>
    );
};

export default CoursesPage;