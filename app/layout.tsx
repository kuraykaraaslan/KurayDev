import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kuray karaaslan - kuray.dev',
  description: 'Full Stack Developer proficient in PHP, Java, Python, and React, I am dedicated to delivering advanced and efficient solutions. In back-end development, I specialize in crafting robust systems using PHP and Java, ensuring a seamless interplay of functionality and reliability. On the front end, I leverage React to create immersive interfaces for a compelling user experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className="lowercase min-h-screen antialiased bg-base-300">
        {children}</body>
    </html>
  )
}
