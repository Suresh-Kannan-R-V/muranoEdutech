import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
    title: string;
    desc: string;
    icon: keyof typeof LucideIcons;
    image: string;
}

export function ServiceCard({ title, desc, icon, image }: ServiceCardProps) {
    const Icon = LucideIcons[icon] as React.ComponentType<{ size: number; strokeWidth: number }>;
    return (
        <div className="group relative h-[250px] w-full overflow-hidden rounded-3xl bg-white shadow-md border-2">
            <div
                className="
          absolute top-0 left-0 h-[75%] w-full
          -translate-y-full
          group-hover:translate-y-0
          transition-transform duration-500 ease-in-out
          z-20
        "
            >
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full"
                />
            </div>

            <div
                className="relative z-10 flex h-full flex-col
                    transition-transform duration-500 ease-in-out
                    group-hover:translate-y-[70%]"
            >
                {/* HEADER */}
                <div className="p-6 rounded-b-3xl">
                    <div className="flex items-center gap-3 text-orange-500">
                        {Icon && <Icon size={35} strokeWidth={1} />}
                        <h3 className="text-lg font-semibold text-black">
                            {title}
                        </h3>
                    </div>
                </div>

                <div
                    className="flex-1 py-3 md:py-6 p-6 text-white h-fit
                        bg-gradient-to-br from-orange-500 via-orange-400 to-amber-300
                        transition-all duration-500 ease-in-out
                        group-hover:opacity-0 text-sm sm:text-base"
                >
                    {desc}
                </div>
            </div>
        </div>
    );
}
