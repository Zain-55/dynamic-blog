import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../src/app/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Colorful Dynamic Blog',
  description: 'A vibrant and dynamic blog with Next.js and React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Header />
        {/* <header className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-4 text-white">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Colorful Blog</h1>
          </div>
        </header> */}

        <main>
          {children}
        </main>
      
        <footer className="bg-gradient-to-r from-green-400 to-blue-500 p-4 text-white mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Colorful Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}