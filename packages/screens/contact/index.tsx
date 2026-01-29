'use client';
import {
    AtSign,
    Clock4,
    MapPin,
    Phone,
    PhoneCall,
    X
} from "lucide-react";
import React from "react";

export function Contact() {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch("https://formsubmit.co/ajax/info@murano-edutech.com", {
                method: "POST",
                body: formData,
            });

            setSuccess(true);
            form.reset(); // ✅ clears all inputs
        } catch (error) {
            console.error("Form submission error", error);
        }
    };

    return (
        <section
            id="contact"
            className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-10 bg-black"
        >
            {/* SUCCESS ALERT */}
            {success && (
                <div className="fixed top-24 z-50 flex items-center gap-3 rounded-lg bg-green-100 px-5 py-3 text-green-700 shadow-lg">
                    <span>Enquiry sent successfully!</span>
                    <button onClick={() => setSuccess(false)}>
                        <X size={16} />
                    </button>
                </div>
            )}

            <h1 className="mb-8 text-center text-4xl font-bold text-white">
                Contact Us
            </h1>

            <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl md:flex-row">

                {/* LEFT FORM */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-orange-500">
                        Contact Us
                    </h2>
                    <p className="mt-2 text-gray-600">
                        We are here for you! How can we help?
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 flex flex-col gap-4"
                    >
                        {/* FORM SUBMIT CONFIG */}
                        <input type="hidden" name="_subject" value="New Student Enquiry - Murano Edutech" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

                        <input
                            type="text"
                            name="name"
                            placeholder="Student Name"
                            required
                            className="rounded-lg border-2 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            className="rounded-lg border-2 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            className="rounded-lg border-2 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                        />

                        <textarea
                            name="message"
                            rows={3}
                            placeholder="Your Message / Course Interest"
                            className="rounded-lg border-2 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                        />

                        <button
                            type="submit"
                            className="mt-4 rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:brightness-110"
                        >
                            Submit Enquiry
                        </button>
                    </form>
                </div>

                {/* RIGHT INFO */}
                <div className="w-full md:w-1/2 p-8 flex flex-col gap-6 bg-gray-50">
                    <div className="map w-full">
                        <iframe
                            src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%" height="230" style={{ border: 0 }} loading="lazy">
                        </iframe>
                    </div>

                    <div className="flex flex-col gap-4 font-semibold text-sm pl-5">

                        <div className="flex items-center gap-3">
                            <Phone className="text-orange-500" />
                            <a href="tel:9025034289">+91 90250 34289</a>
                        </div>

                        <div className="flex items-center gap-3">
                            <PhoneCall className="text-orange-500" />
                            <a href="https://wa.me/919025034289" target="_blank">
                                WhatsApp
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <AtSign className="text-orange-500" />
                            <span className="underline">info@murano-edutech.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock4 className="text-orange-500" />
                            <span>Monday – Saturday | 9:00 AM – 8:00 PM</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="text-orange-500" />
                            <span>
                                Murano Edutech,
                                Chennai, Tamil Nadu, India
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
