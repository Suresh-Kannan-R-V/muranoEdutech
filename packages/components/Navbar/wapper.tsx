'use client';

import NavBar from ".";


export default function NavBarWrapper() {
    return (
        <div className="flex gap-10">
            <NavBar />

            <button
                onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth',
                    })
                }
                className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold hover:bg-orange-600 transition"
            >
                Contact us
            </button>
        </div>
    );
}
