'use client';

import { useEffect, useState } from 'react';

const HERO_SLIDES = [
  {
    image: '/home/image1.jpg',
    title: 'Cloud consulting and development',
    description:
      'Speed up your cloud migration to increase scalability, optimize costs and create new revenue streams.',
  },
  {
    image: '/home/image2.jpg',
    title: 'Digital transformation services',
    description:
      'Reimagine business processes with modern digital platforms and agile engineering.',

  },
  {
    image: '/home/image3.jpg',
    title: 'Scalable software solutions',
    description:
      'Build secure, high-performance applications tailored for long-term scalability.',
  },
];

export default function DashBoard() {
  const [current, setCurrent] = useState(0);

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center" id="home">
        {/* Background Images */}
        {HERO_SLIDES.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt="Hero Background"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2000ms] ease-in-out
              ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            `}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl gap-14 px-6 ">
          {/* Left Content */}
          <div className="flex flex-col justify-center transition-all duration-700">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
              {slide.title.split(' ').slice(0, 3).join(' ')} <br />
              {slide.title.split(' ').slice(3).join(' ')}
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 text-lg">
              {slide.description}
            </p>

            <button
              onClick={() =>
                document.getElementById('course')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
              className="mt-8 w-fit rounded-full bg-orange-500 px-7 py-3 font-semibold hover:bg-orange-600 transition"
            >
              Learn more
            </button>

          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {HERO_SLIDES.map((_, index) => (
            <div
              key={index}
              className={`h-[3px] w-10 rounded-full transition-all duration-500
                ${index === current ? 'bg-orange-500' : 'bg-white/30'}
              `}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
