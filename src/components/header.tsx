'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="absolute top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-white">Canalside</Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
                        <li><Link href="/apartments" className="text-white hover:text-gray-300">Apartments</Link></li>
                        <li><Link href="/location" className="text-white hover:text-gray-300">Location</Link></li>
                        <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                    </ul>
                </nav>
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    Menu
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-black bg-opacity-90 absolute top-full left-0 right-0">
                    <ul className="py-4">
                        <li><Link href="/about" className="block py-2 px-4 text-white hover:bg-gray-800">About</Link></li>
                        <li><Link href="/apartments" className="block py-2 px-4 text-white hover:bg-gray-800">Apartments</Link></li>
                        <li><Link href="/location" className="block py-2 px-4 text-white hover:bg-gray-800">Location</Link></li>
                        <li><Link href="/contact" className="block py-2 px-4 text-white hover:bg-gray-800">Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    )
}
