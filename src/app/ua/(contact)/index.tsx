/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import {
    AtSign,
    Mail,
    Phone,
    X
} from "lucide-react";
import React from "react";

export default function Contact() {
    const [formData, setFormData] = React.useState({
        from_name: "",
        from_mobile: "",
        from_email: "",
        message: "",
    });

    const [errors, setErrors] = React.useState({});
    const [successAlert, setSuccessAlert] = React.useState(false);

    interface FormData {
        from_name: string;
        from_mobile: string;
        from_email: string;
        message: string;
    }

    interface Errors {
        [key: string]: string;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Email logic will be added later
        setSuccessAlert(true);
    };

    return (
        <section
            id="contact"
            className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-black"
        >
            {/* SUCCESS ALERT */}
            {successAlert && (
                <div className="fixed top-20 z-50 flex items-center gap-3 rounded-lg border border-green-500 bg-green-100 px-5 py-3 text-green-700 shadow-lg">
                    <span className="font-semibold">Message sent successfully!</span>
                    <button onClick={() => setSuccessAlert(false)}>
                        <X size={16} />
                    </button>
                </div>
            )}

            {/* HEADING */}
            <h1 className="relative mb-12 px-20 text-center text-4xl font-bold text-white">
                Contact Us
            </h1>

            {/* FORM CONTAINER */}
            <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl md:flex-row">

                {/* LEFT FORM */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-orange-500">
                        Contact US
                    </h2>
                    <p className="mt-2 text-gray-600">
                        We are here for you! How can I help?
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            value={formData.from_name}
                            onChange={handleChange}
                            className="rounded-lg border-2 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                        />

                        <input
                            type="text"
                            name="from_mobile"
                            placeholder="Your Phone Number"
                            value={formData.from_mobile}
                            onChange={handleChange}
                            className="rounded-lg border-2 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                        />

                        <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            value={formData.from_email}
                            onChange={handleChange}
                            className="rounded-lg border-2 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                        />

                        <textarea
                            rows={3}
                            name="message"
                            placeholder="Your Message..."
                            value={formData.message}
                            onChange={handleChange}
                            className="rounded-lg border-2 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                        />

                        <button
                            type="submit"
                            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:brightness-110"
                        >
                            Connect                       </button>
                    </form>
                </div>

                {/* RIGHT INFO */}
                <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center gap-6">
                    <img
                        src="/Contact.png"
                        alt="Contact"
                        className="hidden h-80 w-80 rounded-xl object-cover md:block"
                    />

                    <div className="flex flex-col gap-4 font-semibold text-lg">
                        <div className="flex items-center gap-3">
                            <Phone className="text-orange-500" />
                            <span>+91 12345 67890</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="text-orange-500" />
                            <span>murano@gamil.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <AtSign className="text-orange-500" />
                            <span>muranoedutech@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};