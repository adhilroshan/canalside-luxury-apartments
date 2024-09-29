import Link from 'next/link'
import FullscreenSlider from '../components/full-screen-slider'
import ScrollingText from '../components/scrolling-text'
import PageTransition from '@/components/page-transition'
import * as motion from "framer-motion/client"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
}

export default function Home() {
    return (
        <PageTransition>
            <div className="min-h-screen">
                <FullscreenSlider />
                <section className="py-20 md:hidden">
                    <div className="container mx-auto px-4">
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
                <ScrollingText text="LUXURY LIVING • PRIME LOCATION • EXQUISITE DESIGN • " />
            </div>

        </PageTransition>
    )
}
