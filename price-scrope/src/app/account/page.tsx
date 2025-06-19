"use client";

import { GoHomeFill } from "react-icons/go";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { MdEngineering, MdOutlineFavorite, MdOutlineSupportAgent, MdTipsAndUpdates } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IoIosSettings } from "react-icons/io";
import { FaFaceRollingEyes } from "react-icons/fa6";

const Account = () => {
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
        {
            name: "Setting",
            href: "/setting",
            icon: <IoIosSettings />
        },
        {
            name: "Product Watch",
            href: "/watch",
            icon: <FaFaceRollingEyes />
        },
        {
            name: "Support",
            href: "https://t.me/Siam_shekh_n",
            icon: <MdOutlineSupportAgent />
        },
        {
            name: "Developer",
            href: "https://siam-sheikh.xyz/",
            icon: <MdEngineering />
        },
    ]

    const pathname = usePathname();

    return (
        <div className="min-h-screen relative">
            <div className="flex gap-3 items-center">
                <img
                    src={"https://siam-sheikh.xyz/assets/siam_portfulio_images-C_MRsGWa.webp"}
                    className="size-10 bg-white/60 rounded-full" />
                <div>
                    <p className="text-xl font-semibold text-white">Siam Sheikh</p>
                    <p className="text-xs text-white/70">siam62349@gmail.com</p>
                </div>
            </div>

            <div className="mt-5">
                {
                    pages?.map((page) => (
                        <Link key={page?.href} href={page?.href}>
                            <div className={`${page?.href === pathname && "bg-blue-500/10"} py-3 rounded-xl flex items-center gap-3`}>
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

export default Account;