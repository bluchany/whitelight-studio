"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MaskPage() {
    return (
        <main className="relative bg-white min-h-screen w-full overflow-hidden text-black font-sans">
            <Header />

            <section className="pt-40 pb-0 px-4 flex flex-col items-center justify-center">

                {/* Title Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 flex flex-col items-center"
                >
                    <h2 className="text-xl md:text-3xl font-black uppercase tracking-widest text-[#222]">
                        김희준
                    </h2>
                    <a href="https://instagram.com/he3jun_01" target="_blank" rel="noopener noreferrer" className="mt-2 text-xs md:text-sm font-bold text-neutral-400 hover:text-neutral-800 transition-colors tracking-widest">
                        @he3jun_01
                    </a>
                    <h1 className="text-3xl md:text-5xl font-black mt-4 tracking-tighter text-black">가면</h1>
                </motion.div>

                {/* Album Artwork */}
                <motion.a
                    href="https://www.youtube.com/watch?v=lCBBs6H_9iM"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="group relative block w-full max-w-sm aspect-square shadow-2xl overflow-hidden mb-6"
                >
                    <img
                        src="/images/Mask_HeeJun.jpg"
                        alt="가면"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay - JYP Style */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="relative w-10 h-10">
                            {/* Vertical line */}
                            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white -translate-x-1/2"></div>
                            {/* Horizontal line */}
                            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white -translate-y-1/2"></div>
                        </div>
                    </div>
                </motion.a>

                {/* Release Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-center text-xs md:text-sm text-neutral-500 mb-12"
                >
                    <p>Release Date</p>
                    <p>2025. 11. 14.</p>
                </motion.div>

                {/* Vertical Line & Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col items-center w-full max-w-3xl"
                >
                    <div className="w-[1px] h-12 bg-neutral-300 mb-12"></div>

                    <div className="text-center font-medium leading-relaxed md:leading-loose text-sm md:text-base text-neutral-800 space-y-6 px-4">
                        <p>희준님의 내면의 고민을 담은 ‘가면’에 보컬, 업라이트 레코딩과 편곡, 믹스, 마스터링으로 함께 했습니다.</p>
                    </div>

                    <div className="w-[1px] h-20 md:h-28 bg-neutral-300 mt-12 mb-12"></div>
                </motion.div>

            </section>

            {/* Credits Section */}
            <section className="bg-white pb-24 pt-8 md:pt-16 border-t-0">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-xs md:text-sm">
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Executive Producer</span>김희준</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Composed by</span>김희준</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Lyrics by</span>김희준</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Arranged by</span>김희준, 오승환</div>

                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Vocal</span>정우</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Bass</span>김희준</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Piano</span>김현지</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">A.Guitar</span>신유철</div>

                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Recording</span>White Light Studio</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Recording engineer</span>오승환</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Mixed & Mastered by</span>White Light Studio(오승환) <a href="https://instagram.com/shcord_re" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors">@shcord_re</a></div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Artwork by</span>이시지</div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
