import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Canalside</h3>
                        <p className="text-gray-300">Luxury living in the heart of Manchester</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                            <li><Link href="/apartments" className="text-gray-300 hover:text-white">Apartments</Link></li>
                            <li><Link href="/location" className="text-gray-300 hover:text-white">Location</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-300">Canalside, Ridgefield Street, Manchester, M2 6EQ</p>
                        <p className="text-gray-300">Email: info@canalside.com</p>
                        <p className="text-gray-300">Phone: +44 161 123 4567</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white"><FaFacebook size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin size={24} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p>&copy; 2024 Canalside Luxury Apartments. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
