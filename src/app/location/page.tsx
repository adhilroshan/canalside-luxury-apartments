import Image from 'next/image'
import * as motion from "framer-motion/client"
import PageTransition from '@/components/page-transition'

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
}

export default function Location() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-black text-white">
                <div className="relative h-[50vh]">
                    <Image
                        src="/images/manchester-skyline.webp"
                        alt="Manchester Skyline"
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
                            Prime Location
                        </motion.h1>
                    </div>
                </div>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                variants={fadeInUp}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.3 }}
                            >
                                <h2 className="text-3xl font-semibold mb-6">The Heart of Manchester</h2>
                                <p className="text-gray-300 mb-4">
                                    Canalside is perfectly situated in the vibrant heart of Manchester, offering residents the best of urban living with the tranquility of waterside views.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    With excellent transport links, world-class shopping, and a thriving cultural scene just steps away, Canalside puts you at the center of it all.
                                </p>
                            </motion.div>
                            <motion.div
                                className="relative h-[400px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Image
                                    src="/images/canalside-map.webp"
                                    alt="Canalside Location Map"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-3xl font-semibold mb-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Nearby Attractions
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                            {['Shopping', 'Dining', 'Culture'].map((title) => (
                                <motion.div
                                    key={title}
                                    className="text-center"
                                    variants={fadeInUp}
                                >
                                    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                                    <p className="text-gray-300">Enjoy premium shopping at the nearby Manchester Arndale and luxury boutiques in Spinningfields.</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <motion.section
                    className="py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-semibold mb-6">Transport Links</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Canalside benefits from excellent transport connections, with Deansgate station just a short walk away, providing easy access to the rest of the city and beyond.
                        </p>
                        <motion.ul
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
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
                            {['Manchester Piccadilly: 10 minutes', 'Manchester Airport: 20 minutes', 'Liverpool: 45 minutes', 'London: 2 hours by train'].map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="bg-gray-800 p-4 rounded"
                                    variants={fadeInUp}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </motion.section>
            </div>
        </PageTransition>
    )
}
