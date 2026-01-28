'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Course', id: 'course' },
    { label: 'Contact', id: 'contact' },
];

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-80px 0px -50% 0px',
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav
            className="flex gap-10">
            {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;

                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`
              group relative cursor-pointer
              uppercase tracking-widest
              transition-all duration-300
              ${isActive ? 'text-orange-500 font-bold' : 'text-gray-300 hover:text-orange-500'}
              sm:flex sm:items-center sm:justify-center
              sm:h-9 sm:w-9 sm:rounded-full
            `}
                    >
                        <span
                            className={`
                hidden sm:hidden md:inline
                text-xs
                ${isActive ? 'font-semibold' : 'font-normal'}
              `}
                        >
                            {item.label}
                        </span>
                        {isActive && (
                            <span className="absolute -bottom-0 hidden md:block h-[2px] w-full bg-orange-500 rounded-full" />
                        )}
                    </a>
                );
            })}
        </nav>
    );
}
