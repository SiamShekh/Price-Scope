"use client";

import { GoHomeFill } from "react-icons/go";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { MdEngineering, MdOutlineFavorite, MdOutlineSupportAgent, MdTipsAndUpdates } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IoIosSettings } from "react-icons/io";
import { FaFaceRollingEyes } from "react-icons/fa6";

const Sidebar = () => {
    const pages = [
        {
            name: "Home",
            href: "/",
            icon: <GoHomeFill />
        },
        {
            name: "Most Demand",
            href: "/demand",
            icon: <FaRegEye />
        },
        {
            name: "Favorite",
            href: "/favorite",
            icon: <MdOutlineFavorite />
        },
        {
            name: "Update",
            href: "/update",
            icon: <MdTipsAndUpdates />
        },
    ]

    const pathname = usePathname();

    const utils = [
        {
            name: "Setting",
            href: "/setting",
            icon: <IoIosSettings />
        },
        {
            name: "Product Watch",
            href: "/demand",
            icon: <FaFaceRollingEyes />
        },
        {
            name: "Support",
            href: "/support",
            icon: <MdOutlineSupportAgent />
        },
        {
            name: "Developer",
            href: "/developer",
            icon: <MdEngineering />
        },
    ]

    return (
        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Site Identity */}
            <div className="flex gap-3 text-white">
                <div className="size-12 bg-white/60 rounded-full"></div>
                <div>
                    <p className="text-xl font-semibold">Price scrope</p>
                    <p className="text-xs text-white/70">Get the cheapest price high quality product</p>
                </div>
            </div>

            {/* Navigation Items */}
            <div className="mt-10">
                {
                    pages?.map((page) => (
                        <Link key={page?.href} href={page?.href}>
                            <div className={`${page?.href === pathname && "bg-blue-500/10"}  mt-2 p-3 rounded-xl flex items-center gap-3`}>
                                <span className="text-2xl text-white">{page?.icon}</span>
                                <p className="text-[16px] font-light font-sans">{page?.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>

            {/* Social Identity */}


            <div className="absolute left-0 p-3 bottom-0 w-full">
                <Link href={"/#"}>
                    <button className="bg-blue-500 w-full p-3 font-semibold rounded-xl text-sm">
                        New Report
                    </button>
                </Link>
                {
                    utils?.map((page) => (
                        <Link key={page?.href} href={page?.href}>
                            <div className={`${page?.href === pathname && "bg-blue-500/10"}  mt-2 p-3 rounded-xl flex items-center gap-3`}>
                                <span className="text-2xl text-white">{page?.icon}</span>
                                <p className="text-[16px] font-light font-sans">{page?.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;