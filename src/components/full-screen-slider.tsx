'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const images = [
    '/images/apartment1.webp',
    '/images/apartment2.webp',
    '/images/apartment3.webp',
]
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
}
export default function FullscreenSlider() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative h-screen">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        loading="eager"
                        src={images[currentImage]}
                        alt={`Apartment ${currentImage + 1}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <motion.h1
                    className="text-6xl font-bold text-white text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Canalside <br /> Luxury Apartments
                </motion.h1>
            </div>
            <section className="bottom-0 md:block hidden  pb-20 pt-10 absolute mx-auto w-full ">
                <div className="container shadow   mx-auto px-4">
                    <motion.h2
                        className="text-5xl font-bold mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >Enter a world of luxury living at Canalside</motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Elegance', 'Opulence', 'Splendor'].map((title, index) => (
                            <motion.div
                                key={title}
                                className="border-t border-white pt-6"
                                variants={fadeInUp}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                                <p className="text-gray-300">Experience unparalleled sophistication in every detail of our meticulously designed apartments.</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link href="/about" className="text-lg font-semibold border-b border-white pb-1 hover:text-gray-300 transition duration-300">
                            Discover More
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
