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
            <nav className="rounded-full bg-gray-400 bg-opacity-60 backdrop-blur-lg px-1">
                <ul className="py-1 flex flex-row gap-2 [&>li]:flex [&>li]:items-center">
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
                                    height={26}
                                    width={26}
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
