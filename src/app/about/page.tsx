import Image from 'next/image'
import *as motion from 'framer-motion/client'
import PageTransition from '@/components/page-transition'

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
}

export default function About() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-black text-white">
                <div className="relative h-[50vh]">
                    <Image
                        src="/images/canalside-exterior.webp"
                        alt="Canalside Exterior"
                        layout="fill"
                        loading="eager"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <motion.h1
                            className="text-5xl font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            About Canalside
                        </motion.h1>
                    </div>
                </div>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div
                                variants={fadeInUp}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.3 }}
                            >
                                <h2 className="text-3xl font-semibold mb-6">A New Standard of Luxury</h2>
                                <p className="text-gray-300 mb-4">
                                    Canalside represents the pinnacle of luxury living in Manchester. Our meticulously designed apartments offer an unparalleled blend of style, comfort, and sophistication.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Nestled along the picturesque canals of Manchester, Canalside provides a tranquil oasis in the heart of the city. Every detail has been carefully considered to create a living experience that exceeds expectations.
                                </p>
                            </motion.div>
                            <motion.div
                                className="relative h-[400px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Image
                                    src="/images/canalside-interior.webp"
                                    alt="Canalside Interior"
                                    layout="fill"

                                    loading="eager"
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
                            Our Commitment
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {['Quality', 'Sustainability', 'Community'].map((title, index) => (
                                <motion.div
                                    key={title}
                                    className="text-center"
                                    variants={fadeInUp}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                                    <p className="text-gray-300">We use only the finest materials and work with renowned designers to ensure every aspect of Canalside exudes quality.</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
