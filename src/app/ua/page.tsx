import { Metadata } from "next";
import DashBoard from "./(dashBoard)/page";
import AboutServices from "./(about)";
import Courses from "./(courses)";
import Contact from "./(contact)";
export const metadata: Metadata = {
    title: 'Murano Edutech',
    description:
        'Murano Edutech - Empowering Minds, Shaping Futures',
};
export default function Page() {
    return (
        <>
            <DashBoard />
            <section
                id="about"
                className="scroll-mt-[120px]"
            >
                <AboutServices />
            </section>
            <section
                id="course"
                className="scroll-mt-[120px]"
            >
                <Courses />
            </section>
            <section
                id="contact"
                className="scroll-mt-[120px]"
            >
                <Contact />
            </section>
        </>

    );
}
