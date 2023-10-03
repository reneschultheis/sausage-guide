"use client"

import {usePathname} from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const linkMap = [
    {
        href: "/",
        label: "Home",
        icon: "/list.svg",
    },
    {
        href: "/favorites",
        label: "Favorites",
        icon: "/sparkles.svg",
    },
    {
        href: "/blog",
        label: "About",
        icon: "/bubble.svg",
    },
    {
        href: "/contact",
        label: "Contact",
        icon: "/message.svg",
    },
]

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav className="w-full h-16 fixed bg-[#de9b8a] bottom-0">
            <ul className="w-full py-2 flex flex-row justify-evenly [&>li]:flex [&>li]:items-center">
                {linkMap.map((link, index) => (
                    <li key={index} className="flex items-center">
                        <Link
                            href={link.href}
                            className={
                                pathname === link.href
                                    ? "p-2 bg-white rounded-full"
                                    : "p-2 rounded-full"
                            }
                        >
                            <Image
                                priority
                                src={link.icon}
                                height={32}
                                width={32}
                                alt={link.label}
                                className={
                                    pathname === link.href ? "invert" : ""
                                }
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
