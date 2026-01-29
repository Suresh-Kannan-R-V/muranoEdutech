import { getYoutubeUrls } from "@/context/helper";
import { Hourglass, Play } from "lucide-react";

interface Course {
    title: string;
    subtitle: string;
    duration: string;
    price: string;
    oldPrice: string;
    careers: string[];
    isPopular: boolean;
    image: string;
    videoUrl?: string;
}
// export function CourseCard({ course }: { course: Course }) {
//     return (
//         <div
//             className="
//         group relative overflow-hidden rounded-2xl
//         bg-white shadow-lg
//         transition-all duration-500 ease-out
//         hover:-translate-y-3 hover:shadow-2xl
//         h-full
//       "
//         >
//             {/* IMAGE */}
//             <div className="relative h-44 overflow-hidden">
//                 <img
//                     src={course.image}
//                     alt={course.title}
//                     className="
//             h-full w-full object-cover
//             transition-transform duration-700
//             group-hover:scale-110
//           "
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//             </div>

//             {/* CONTENT */}
//             <div className="flex h-[calc(100%-11rem)] flex-col p-6">
//                 {/* TOP CONTENT */}
//                 <div className="space-y-4 mb-4">
//                     <h3 className="text-xl font-bold">{course.title}</h3>

//                     <p className="text-sm text-gray-600">
//                         {course.subtitle}
//                     </p>

//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-1 text-sm text-gray-500">
//                             <Hourglass size={16} />
//                             <span>{course.duration}</span>
//                         </div>
//                         {course.isPopular && (

//                             <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
//                                 Popular
//                             </span>
//                         )}
//                     </div>

//                     {/* PRICE */}
//                     <div className="flex items-end gap-2">
//                         <span className="text-2xl font-bold text-orange-600">
//                             {course.price}
//                         </span>
//                         <span className="text-sm text-gray-400 line-through">
//                             {course.oldPrice}
//                         </span>
//                     </div>

//                     {/* CAREERS */}
//                     <div className="flex flex-wrap gap-2">
//                         {course.careers.map((c) => (
//                             <span
//                                 key={c}
//                                 className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
//                             >
//                                 {c}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* BUTTON — STUCK TO BOTTOM */}
//                 <button
//                     className="
//             mt-auto w-full rounded-xl
//             bg-gradient-to-r from-orange-500 to-amber-400
//             py-2 font-semibold text-white
//             transition-all duration-300
//             hover:shadow-lg hover:brightness-110
//           "
//                 >
//                     Enroll Now
//                 </button>
//             </div>

//             {/* GLOW */}
//             <div
//                 className="
//           pointer-events-none absolute inset-0
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-500
//           bg-gradient-to-br from-orange-400/20 via-transparent to-amber-300/20
//         "
//             />
//         </div>
//     );
// }

export function CourseCard({ course }: { course: Course }) {
    const { embedUrl, watchUrl } = getYoutubeUrls(course.videoUrl);

    return (
        <div className="
      group relative overflow-hidden rounded-2xl
      bg-white shadow-lg
      transition-all duration-500 ease-out
      hover:-translate-y-3 hover:shadow-2xl
      h-full
    ">
            {/* MEDIA SECTION */}
            <div className="relative h-44 overflow-hidden cursor-pointer">

                {/* IMAGE */}
                <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 h-full z-10 w-full object-cover
                            transition-all duration-500
                            group-hover:opacity-0 group-hover:scale-110"
                />


                {/* VIDEO PREVIEW */}
                {embedUrl && (<>
                    <a
                        href={watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-40
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-500"
                    >
                        <iframe
                            src={`${embedUrl}?controls=0&modestbranding=1&rel=0&iv_load_policy=3&autoplay=1&mute=1`}
                            className="h-full w-full pointer-events-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </a>
                    <div className="block sm:hidden absolute bottom-0 left-0 bg-white px-2 py-1 z-30 text-xs text-orange-500 font-semibold rounded-tr-md">Demo video Click Image</div>
                </>
                )}

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/50 to-transparent" />

                {/* PLAY ICON */}
                {embedUrl && (
                    <div
                        className="absolute inset-0 z-50 pointer-events-none
                                    flex items-center justify-center
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-500"
                    >
                        <div className="rounded-full bg-white/90 p-3">
                            <Play className="text-orange-500" size={28} />
                        </div>
                    </div>
                ) || (<div className="size-full flex justify-center items-center">
                    <p>No Video Available</p>
                </div>)}
            </div>

            {/* CONTENT */}
            <div className="flex h-[calc(100%-11rem)] flex-col p-6">
                <div className="space-y-4 mb-4">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.subtitle}</p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Hourglass size={16} />
                            <span>{course.duration}</span>
                        </div>

                        {course.isPopular && (
                            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                                Popular
                            </span>
                        )}
                    </div>

                    <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-orange-600">
                            {course.price}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                            {course.oldPrice}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {course.careers.map((c) => (
                            <span
                                key={c}
                                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                            >
                                {c}
                            </span>
                        ))}
                    </div>
                </div>

                <button className="
          mt-auto w-full rounded-xl
          bg-gradient-to-r from-orange-500 to-amber-400
          py-2 font-semibold text-white
          transition-all duration-300
          hover:shadow-lg hover:brightness-110
        ">
                    Enroll Now
                </button>
            </div>
        </div>
    );
}

