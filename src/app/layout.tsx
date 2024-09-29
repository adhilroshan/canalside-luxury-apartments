import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AnimationWrapper from '@/components/animation-wrapper'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Canalside Luxury Apartments',
    description: 'Experience luxury living in the heart of Manchester',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${playfair.className} bg-black text-white`}>
                <Header />
                <AnimationWrapper>
                    {children}
                </AnimationWrapper>
                <Footer />
            </body>
        </html>
    )
}
