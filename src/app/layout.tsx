import "./globals.css"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import Navigation from "./components/navigation"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Sausage Guide",
    description: "Sausage Guide by René & Tiffany",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header>
                    <Navigation />
                </header>
                {children}
            </body>
        </html>
    )
}
