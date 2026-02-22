"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClassDetailPage() {
    return (
        <main className="relative bg-white min-h-screen w-full overflow-hidden text-black font-sans">
            <Header />

            {/* Hero Profile Section */}
            <section className="pt-40 lg:pt-48 pb-16 px-4 flex flex-col items-center justify-center bg-neutral-50 border-b border-black/5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center max-w-4xl text-center"
                >
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl mb-8 border-4 border-white">
                        <img
                            src="/images/ABOUT.jpg" // placeholder
                            alt="Instructor Profile"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>

                    <h2 className="text-sm font-bold tracking-[0.3em] text-neutral-500 uppercase mb-4">VOCAL CLASS</h2>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-6 break-keep">
                        "내 안의 진짜 목소리를 찾는 여정"
                    </h1>

                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-xl font-bold tracking-widest">강사 민수 (Scon)</p>
                        <a href="https://instagram.com/boxscon" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-neutral-400 hover:text-black transition-colors tracking-widest">
                            @boxscon
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Video & Curriculum Section */}
            <section className="py-24 px-4 max-w-5xl mx-auto space-y-32">

                {/* Intro Video */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="w-full aspect-video bg-neutral-200 shadow-2xl relative"
                >
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/kfWIkoDliak" // placeholder, replace with instructor's video
                        title="Instructor Intro"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>

                {/* Information / Process */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-black/10 py-16"
                >
                    {/* Class Info Pillar */}
                    <div>
                        <h3 className="text-lg font-black tracking-widest uppercase mb-6 border-l-2 border-black pl-3">Target</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                            취미로 노래를 시작하고 싶은 분부터, 디테일한 레코딩 기법과 오디션 준비가 필요한 전문반까지. 개개인의 성향과 톤을 분석하여 맞춤형 레슨을 제공합니다.
                        </p>
                    </div>

                    {/* Class Info Pillar */}
                    <div>
                        <h3 className="text-lg font-black tracking-widest uppercase mb-6 border-l-2 border-black pl-3">Process</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                            1. 발성 및 호흡 기본기 진단<br />
                            2. 톤 메이킹 및 곡 카피 스킬 향상<br />
                            3. WHITE LIGHT 스튜디오에서의 실제 레코딩 경험<br />
                            4. 세밀한 디렉팅과 모니터링
                        </p>
                    </div>

                    {/* Class Info Pillar */}
                    <div className="flex justify-center items-center">
                        <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-black text-white font-bold tracking-widest text-sm hover:bg-neutral-800 transition-colors uppercase w-full text-center">
                            수강 안내 및 신청 ↗
                        </a>
                    </div>
                </motion.div>

            </section>

            <Footer />
        </main>
    );
}
