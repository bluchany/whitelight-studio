"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WorksPage() {
    return (
        <main className="relative bg-white min-h-screen w-full overflow-hidden text-black font-sans">
            <Header />

            <section className="pt-40 pb-0 px-4 flex flex-col items-center justify-center">

                {/* Title Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-xl md:text-3xl font-black uppercase tracking-widest text-[#222]">포크폴리오</h2>
                    <h1 className="text-3xl md:text-5xl font-black mt-2 tracking-tighter text-black">오빠야 강변살자</h1>
                </motion.div>

                {/* Album Artwork */}
                <motion.a
                    href="https://www.youtube.com/watch?v=R86SFBXqEdM"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="group relative block w-full max-w-sm aspect-square shadow-2xl overflow-hidden mb-6"
                >
                    <img
                        src="/images/folkfolio_1.png"
                        alt="오빠야 강변살자"
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
                    <p>2025. 09. 19.</p>
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
                        <p>‘Folk’ 음악의 따뜻한 감성과 ‘Portfolio’의 집약된 기록을 담은 이 이름은, 함께 노래하고 오래 기억될 수 있는 음악을 지향하며, 잊혀졌던 포크음악의 놀이문화를 복원하고자 하는 목적과 정체성이 담겨있습니다.</p>
                        <p>데뷔곡 〈오빠야 강변 살자〉는 지역과 언어, 세대를 뛰어넘는 사랑의 이야기를 노래합니다. 정겨운 경상도 사투리의 매력을 소재로 한 가사와 강변의 목가적 풍경을 배경으로, 통기타와 화음, 멜로디카 연주 등으로 어우러지는 포크 사운드가 청바지와 통기타 세대의 감성을 오늘의 멜로디로 다시금 되살려냅니다.</p>
                    </div>

                    <div className="w-[1px] h-20 md:h-28 bg-neutral-300 mt-12 mb-12"></div>
                </motion.div>

            </section>

            {/* Credits Section */}
            <section className="bg-white pb-24 pt-8 md:pt-16 border-t-0">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-xs md:text-sm">
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Project</span>포크폴리오(Folk-Folio)</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Lyrics & Composed by</span>김은총</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Arranged by</span>포크폴리오</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Vocal</span>김은총, 백광흠</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Chorus</span>김은총, 백광흠</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">A. Guitar</span>김은총, 박경재</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Keyboard</span>백광흠</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Melodica&Tambourine</span>박경재</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Recording Engineer</span>박경재 <a href="https://instagram.com/이상한작업실" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors">@이상한작업실</a></div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Mixing & Mastering</span>White Light Studio(오승환) <a href="https://instagram.com/shcord_re" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors">@shcord_re</a></div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Photography</span>천승환</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Production</span>포크폴리오(Folk-Folio) <a href="https://instagram.com/이상컴퍼니" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors">@이상컴퍼니</a></div>
                </div>
                <div className="max-w-4xl mx-auto px-6 mt-12 text-xs md:text-sm text-neutral-500">
                    <p className="mb-2 text-neutral-400 uppercase text-[10px] font-bold">Thanks to</p>
                    <p>“2024 청춘마이크 전라권 쥬스컴퍼니, 촬영팀 바닐라씨, 전보영 매니저, 이상한계절 팬클럽 이데아, 군산시청, 군산에서 함께 노래불렀던 모든 분들”</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
