import "./globals.css"
import type {Metadata} from "next"
import Navigation from "./components/navigation"
import localFont from "next/font/local"

const font = localFont({
    src: [
        {
            path: "../../public/fonts/ClashDisplay-Regular.woff2",
            weight: "400",
            style: "normal",
        },

        {
            path: "../../public/fonts/ClashDisplay-Medium.woff2",
            weight: "500",
            style: "bold",
        },
        {
            path: "../../public/fonts/ClashDisplay-Bold.woff2",
            weight: "700",
            style: "bold",
        },
    ],
})

export const metadata: Metadata = {
    title: "Sausage Guide",
    description: "Sausage Guide by René & Tiffany",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <header>
                    <Navigation />
                </header>
                {children}
            </body>
        </html>
    )
}
