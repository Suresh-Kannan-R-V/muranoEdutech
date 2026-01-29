"use client";
import { ServiceCard } from "packages/components/ServiceCard";
import * as LucideIcons from "lucide-react";


export function About() {
    const services = [
        {
            title: "Our Mission",
            desc: "To equip students and professionals with industry-relevant technical skills, hands-on experience, and career guidance that enables them to succeed in the competitive technology landscape.",
            icon: "Send",
            image: "https://img.freepik.com/premium-photo/man-touching-mission-text-screen_218381-4228.jpg",
        },
        {
            title: "Our Vision",
            desc: "To become a trusted global EdTech brand recognized for excellence in software training, innovation, and career transformation.",
            icon: "BrainCircuit",
            image: "data:image/jpeg;base64,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",
        },
        {
            title: "Our Values",
            desc: "Integrity, Quality Education, Continuous Learning, Student Success, and Industry Alignment form the foundation of everything we do.",
            icon: "HandCoins",
            image: "https://p-gpb8fhd4b9fbh6fy.z01.azurefd.net/cms/e6ba6aae-63bf-4023-8c3a-862466828e71/b3e7b1c4-025d-44a9-af65-b46ef7526fac-lg.jpg",
        },
    ];

    const data = [
        {
            title: "Industry-Aligned Curriculum",
            desc: "Courses designed based on current market and IT company requirements.",
        },
        {
            title: "Expert Mentorship",
            desc: "Learn directly from experienced professionals working in the industry.",
        },
        {
            title: "Career-Focused Approach",
            desc: "From resume building to mock interviews and placement assistance."
        }
    ]

    return (
        <div className="mx-auto max-w-7xl px-6 py-20 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-fit sm:h-96 ">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <img
                        src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="About Murano Edutech"
                        className="h-full w-full object-cover"
                    />
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-tr-xl rounded-bl-xl shadow-lg absolute bottom-0 left-0">
                        <h3 className="font-semibold text-lg">Join Murano Edutech Today!</h3>
                        <p className="text-sm">Transform your career with industry-focused training.</p>
                    </div>
                </div>
                <div className="space-y-9">
                    <h2 className="text-3xl sm:text-4xl font-bold leading-none">
                        About Murano Edutech
                        <br /> <span className="text-base sm:text-xl leading-none text-gray-500"> Empowering Careers Through Industry-Focused Learning </span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-lg">
                        Murano Edutech is a premier Software Training & Career Development institute dedicated
                        to bridging the gap between academic education and real-world IT industry demands.
                        We focus on delivering practical, job-oriented training that transforms students into
                        confident professionals.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {services.map((item, i) => (
                    <ServiceCard key={i} {...item} icon={item.icon as keyof typeof LucideIcons} />
                ))}
            </div>
            <div className="flex flex-col items-center gap-10">
                <h2 className="font-bold text-2xl">Why Students Trust Murano Edutech </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {data.map((item, i) => (
                        <div key={i}
                            className="h-fit border-2 shadow-md rounded-xl px-5 py-4
                                transition-transform duration-300 ease-out hover:scale-105">
                            <h3 className="font-semibold text-lg text-orange-500">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
