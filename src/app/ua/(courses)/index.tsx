import { CourseCard } from 'packages/components/courseCard';
import courses from './courses.json';

export default function Courses() {
    return (
        <div className="border-t-2 border-gray-300 py-14">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-12 text-center text-4xl font-bold">
                    Our <span className="text-orange-500">Courses</span>
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {courses.map((course) => (
                        <CourseCard key={course.title} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
