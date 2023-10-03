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
        <div className="fixed bottom-2 flex w-full justify-center">
            <nav className="rounded-full h-16 bg-[#de9b8a] px-2">
                <ul className="py-2 flex flex-row gap-6 [&>li]:flex [&>li]:items-center">
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
        </div>
    )
}
