import { Metadata } from "next";
import { About } from "packages/screens/about";
import { Contact } from "packages/screens/contact";
import { Courses } from "packages/screens/courses";
import { DashBoard } from "packages/screens/dashBoard";
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
                <About />
            </section>
            <section
                id="course"
                className="scroll-mt-[120px]"
            >
                <Courses />
            </section>
            <section
                id="contact"
                className="scroll-mt-[50px]"
            >
                <Contact />
            </section>
        </>

    );
}
