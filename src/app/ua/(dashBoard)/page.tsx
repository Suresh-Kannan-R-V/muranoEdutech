'use client';

import React from 'react';

export default function DashBoard() {
    return (
        <div className="h-screen w-full bg-black text-white">
            {/* NAVBAR */}
            <header className="fixed top-0 left-0 z-50 w-full">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="text-xl font-bold">SoftwareMind</div>
                    <nav className="hidden gap-8 text-sm md:flex">
                        <a className="hover:text-orange-400">Who we are</a>
                        <a className="hover:text-orange-400">What we do</a>
                        <a className="hover:text-orange-400">Services</a>
                        <a className="hover:text-orange-400">Industries</a>
                        <a className="hover:text-orange-400">Case studies</a>
                        <a className="hover:text-orange-400">Insights</a>
                        <a className="hover:text-orange-400">Careers</a>
                    </nav>
                    <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600">
                        Contact us
                    </button>
                </div>
            </header>

            <section className='felx flex-col'>
                <div className="relative flex min-h-screen items-center overflow-hidden">
                    <img src="/image1.jpg" alt="Background" className="absolute inset-0 h-full w-full object-cover" />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Content */}
                    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                                Cloud consulting and <br /> development
                            </h1>
                            <p className="mt-6 max-w-xl text-gray-300">
                                Speed up your cloud migration to increase scalability, optimize
                                costs and create new revenue streams.
                            </p>
                            <button className="mt-8 w-fit rounded-full bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600">
                                Learn more
                            </button>
                        </div>

                        {/* Decorative network effect */}
                        <div className="relative hidden md:block">
                            <div className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 backdrop-blur" />
                            <div className="relative p-6 text-sm text-gray-200">
                                <p className="mb-2 font-semibold">AI‑Driven Legacy Migrations</p>
                                <p className="text-gray-300">
                                    Modernize infrastructure with scalable cloud‑native solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div className="mx-auto flex max-w-7xl justify-between px-6 text-xs text-gray-400 bg-red-500">
                <span>01 | Discover who we are</span>
                <span>02 | AI‑driven lqegacy migrations</span>
                <span>03 | Optimize cloud strategies</span>
            </div>
        </div >
    );
}
