'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Modal from '../components/Addmodal'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowform] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    console.log(openModal)
    const navItems = [
        { name: 'Home', href: '/#home' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Process', href: '/#process' },
        { name: 'FAQ', href: '/#faq' },
        { name: 'Contact', href: '/#contact' },
    ];

    useEffect(()=>{
        // this dectect if it auto pop afer landing of user then it take 1.5 sec to pop out else if its bt btn click te isnatlt pop out
        setTimeout(()=> setOpenModal(true),3000)
    },[])
     
    //open modal form
    const handleModal=()=>{
        setOpenModal(true); 
        setShowform(true)
    }

    return (
        <>
            <Modal isOpen={openModal} showFormview={showForm} onClosemodal={(state:boolean)=>{setOpenModal(state); setShowform(false)}}/>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal backdrop-blur-sm border-b border-emerald/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-2"
                        >
                            <div className="w-10 h-10 bg-emerald/20 rounded-lg flex items-center justify-center">
                                {/* <span className="text-2xl font-bold text-emerald">T</span> */}
                                <img  className='object-fit' src='/logo.svg'/>
                            </div>
                            <span className="font-serif text-xl font-bold text-offwhite">
                                S & R <span className="text-emerald">Associates</span>
                            </span>
                            
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-offwhite/70 hover:text-emerald transition-colors duration-300 font-medium"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                onClick={handleModal}
                                transition={{ delay: 0.6 }}
                                className="px-6 py-2.5 bg-emerald text-charcoal font-semibold rounded-lg hover:bg-emerald/90 transition-all duration-300 hover:shadow-lg hover:shadow-emerald/20"
                            >
                                Get Started
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-offwhite hover:text-emerald transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden overflow-hidden border-t border-emerald/10"
                            >
                                <div className="py-4 space-y-4">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-offwhite/70 hover:text-emerald transition-colors duration-300 font-medium py-2"
                                        >
                                            {item.name}
                                        </motion.a>
                                    ))}
                                    <motion.button
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        onClick={handleModal}
                                        className="w-full px-6 py-2.5 bg-emerald text-charcoal font-semibold rounded-lg hover:bg-emerald/90 transition-all duration-300"
                                    >
                                        Get Started
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </>
    );
}
