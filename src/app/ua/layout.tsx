'use client';
import NavBar from "packages/components/Navbar";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex min-h-screen flex-col'>
            <header className="fixed top-0 left-0 z-50 w-full bg-black/40 text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex gap-2 text-xl font-bold tracking-wide">
                        <img src="/logo2.png" alt="Logo" className="h-20 w-fit mr-2 inline-block" />
                        <p className='text-4xl relative pt-3'>
                            Murano Edutech
                            <span className='absolute right-0 bottom-0 text-[10px] font-normal'>SHARPING SKILLS . BUILDING CAREERS</span>
                        </p>

                    </div>

                    <div className='flex gap-10'>
                        <NavBar />

                        <button
                            onClick={() =>
                                document.getElementById('contact')?.scrollIntoView({
                                    behavior: 'smooth',
                                })
                            }
                            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold hover:bg-orange-600 transition">
                            Contact us
                        </button>

                    </div>
                </div>
            </header>
            <div className="w-full">
                {children}
            </div>
            <footer className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold">
                            Murano Edutech
                        </span>
                        . All rights reserved.
                    </p>

                    <p className="text-xs">
                        Empowering Minds • Shaping Futures
                    </p>
                </div>
            </footer>
        </div>
    );
}
