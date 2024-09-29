import Image from 'next/image'
import Link from 'next/link'
import * as motion from "framer-motion/client"
import PageTransition from '@/components/page-transition'

const apartments = [
    { id: 1, name: 'The Meridian', size: '2 Bedroom', price: '£500,000', image: '/images/meridian.webp' },
    { id: 2, name: 'The Horizon', size: '3 Bedroom', price: '£750,000', image: '/images/horizon.webp' },
    { id: 3, name: 'The Skyline', size: 'Penthouse', price: '£1,200,000', image: '/images/skyline.webp' },
]

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
}

export default function Apartments() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-black text-white">
                <div className="relative h-[50vh]">
                    <Image
                        src="/images/apartments-hero.webp"
                        alt="Luxury Apartments"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <motion.h1
                            className="text-5xl font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Our Apartments
                        </motion.h1>
                    </div>
                </div>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-12"
                            variants={{
                                animate: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            initial="initial"
                            animate="animate"
                        >
                            {apartments.map((apartment) => (
                                <motion.div key={apartment.id} className="group" variants={fadeInUp}>
                                    <div className="relative h-[300px] mb-6 overflow-hidden">
                                        <Image
                                            src={apartment.image}
                                            alt={apartment.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2">{apartment.name}</h3>
                                    <p className="text-gray-300 mb-2">{apartment.size}</p>
                                    <p className="text-xl font-semibold mb-4">{apartment.price}</p>
                                    <Link href={`/apartments/${apartment.id}`} className="text-blue-400 hover:text-blue-300">
                                        View Details
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <motion.section
                    className="py-20 bg-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-semibold mb-6">Experience Luxury Living</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Our apartments are designed to provide the ultimate in comfort and style.
                            From breathtaking views to high-end finishes, every detail has been carefully considered.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/contact" className="inline-block bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition duration-300">
                                Schedule a Viewing
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </PageTransition>
    )
}
