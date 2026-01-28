// import { WithSideBar } from "@/context/withSidebar";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex'>
            {/* <WithSideBar /> */}
            <div className="w-full">

                {children}
            </div>
        </div>
    );
}
