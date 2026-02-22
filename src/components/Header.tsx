"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Determine if the current page should have a dark header text (light background pages)
    const isLightThemePage = pathname === "/class" || pathname === "/works" || pathname === "/contact" || pathname.startsWith("/crew");
    const headerTextColor = isLightThemePage ? "text-black" : "text-white mix-blend-difference";
    const navItemColor = isLightThemePage ? "text-neutral-500 hover:text-black" : "text-neutral-300 hover:text-white";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isLightThemePage ? "bg-white/90 shadow-sm" : "bg-black/90") + " backdrop-blur-md py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <div className="z-50 relative">
                        <Link href="/">
                            <h1 className={`text-2xl font-black uppercase tracking-widest whitespace-nowrap hover:opacity-80 transition-opacity ${headerTextColor}`}>
                                WHITE LIGHT STUDIO
                            </h1>
                        </Link>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center space-x-6 md:space-x-8">
                        <a href="https://www.instagram.com/wl_musicstudio/" target="_blank" rel="noopener noreferrer" className={`hidden md:block hover:opacity-60 transition-opacity ${isMenuOpen ? "text-white" : headerTextColor}`}>
                            <Instagram strokeWidth={1.5} size={24} />
                        </a>
                        <button
                            className={`z-50 hover:opacity-60 transition-opacity ${isMenuOpen ? "text-white" : headerTextColor}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={34} strokeWidth={1.5} /> : <Menu size={34} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Full Screen Menu overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-40 bg-black flex flex-col pt-40 pb-32 px-6 lg:px-24 overflow-y-auto"
                    >
                        {/* Top Categories Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full max-w-7xl mx-auto content-start mt-8">

                            {/* Category 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                                className="flex flex-col"
                            >
                                <div className="flex items-center gap-6 mb-8 w-full">
                                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight whitespace-nowrap">WHITE LIGHT STUDIO</h3>
                                    <div className="flex-grow border-t-[1.5px] border-neutral-700/80"></div>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide">ABOUT W.L STUDIO</Link>
                                    <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide">CONTACT</Link>
                                </div>
                            </motion.div>

                            {/* Category 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                                className="flex flex-col"
                            >
                                <div className="flex items-center gap-6 mb-8 w-full">
                                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight whitespace-nowrap">STUDIO</h3>
                                    <div className="flex-grow border-t-[1.5px] border-neutral-700/80"></div>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <Link href="/studio#equipment" onClick={() => setIsMenuOpen(false)} className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">EQUIPMENT</Link>
                                    <Link href="/studio#membership" onClick={() => setIsMenuOpen(false)} className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">MEMBERSHIP</Link>
                                    <Link href="/studio#spaces" onClick={() => setIsMenuOpen(false)} className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">SPACE</Link>
                                </div>
                            </motion.div>

                        </div>

                        {/* Bottom Giant Links */}
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                            className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16 mt-16 md:mt-24 mb-auto"
                        >
                            <Link href="/works" onClick={() => setIsMenuOpen(false)} className="flex flex-1 items-center gap-6 w-full group cursor-pointer">
                                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-neutral-400 transition-colors uppercase tracking-tight whitespace-nowrap">WORKS</span>
                                <div className="flex-grow border-t-[1.5px] border-neutral-700/80"></div>
                            </Link>

                            <Link href="/crew" onClick={() => setIsMenuOpen(false)} className="flex flex-1 items-center gap-6 w-full group cursor-pointer">
                                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-neutral-400 transition-colors uppercase tracking-tight whitespace-nowrap">CREW</span>
                                <div className="flex-grow border-t-[1.5px] border-neutral-700/80"></div>
                            </Link>

                            <Link href="/class" onClick={() => setIsMenuOpen(false)} className="flex flex-1 items-center gap-6 w-full group cursor-pointer">
                                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-neutral-400 transition-colors uppercase tracking-tight whitespace-nowrap">CLASS</span>
                                <div className="flex-grow border-t-[1.5px] border-neutral-700/80"></div>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
