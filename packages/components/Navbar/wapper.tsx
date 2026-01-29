'use client';

import NavBar from ".";


export default function NavBarWrapper() {
    return (
        <div className="md:flex gap-10 hidden">
            <NavBar />

            <button
                onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth',
                    })
                }
                className="hidden sm:block rounded-full bg-orange-500 px-3 py-2 text-xs md:text-sm font-semibold hover:bg-orange-600 transition whitespace-nowrap truncate"
            >
                Contact us
            </button>
        </div>
    );
}
