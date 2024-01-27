import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'privacy policy - kuray.dev',
  description: 'Privacy Policy for kuray.dev',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <article className="mx-4 md:mx-8 bg-base-100 rounded-box px-4 py-2 mb-4">
      <div className="pt-4 pb-8 px-8">
        {children}
      </div>
    </article>
  </>
  )
}
