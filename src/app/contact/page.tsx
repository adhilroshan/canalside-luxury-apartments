'use client';
import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/page-transition';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData)
        // Reset form after submission
        setFormData({ name: '', email: '', phone: '', message: '' })
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-black text-white">
                <motion.div
                    className="relative h-[50vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <motion.h1
                            className="text-5xl font-bold"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Contact Us
                        </motion.h1>
                    </div>
                </motion.div>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div
                                variants={fadeInUp}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                                <p className="text-gray-300 mb-8">
                                    We&apos;re here to answer any questions you may have about Canalside Luxury Apartments.
                                    Reach out to us and experience our commitment to exceptional service.
                                </p>
                                <motion.div
                                    className="mb-8"
                                    variants={fadeInUp}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                                    <p className="text-gray-300">Canalside, Ridgefield Street, Manchester, M2 6EQ</p>
                                </motion.div>
                                <motion.div
                                    className="mb-8"
                                    variants={fadeInUp}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                                    <p className="text-gray-300">+44 161 123 4567</p>
                                </motion.div>
                                <motion.div
                                    variants={fadeInUp}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ delay: 0.5 }}
                                >
                                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                                    <p className="text-gray-300">info@canalside.com</p>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                variants={fadeInUp}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.6 }}
                            >
                                <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg">
                                    <motion.div
                                        className="mb-4"
                                        variants={fadeInUp}
                                        initial="initial"
                                        animate="animate"
                                        transition={{ delay: 0.7 }}
                                    >
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 bg-gray-800 text-white rounded"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="mb-4"
                                        variants={fadeInUp}
                                        initial="initial"
                                        animate="animate"
                                        transition={{ delay: 0.8 }}
                                    >
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 bg-gray-800 text-white rounded"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="mb-4"
                                        variants={fadeInUp}
                                        initial="initial"
                                        animate="animate"
                                        transition={{ delay: 0.9 }}
                                    >
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-gray-800 text-white rounded"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="mb-6"
                                        variants={fadeInUp}
                                        initial="initial"
                                        animate="animate"
                                        transition={{ delay: 1 }}
                                    >
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-3 py-2 bg-gray-800 text-white rounded"
                                        ></textarea>
                                    </motion.div>
                                    <motion.button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
