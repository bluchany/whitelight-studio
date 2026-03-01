"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClassDetailPage() {
    return (
        <main className="relative bg-white min-h-screen w-full overflow-hidden text-black font-sans">
            <Header />

            {/* Hero Profile Section */}
            <section className="pt-40 lg:pt-48 pb-8 px-4 flex flex-col items-center justify-center bg-neutral-50 border-b border-black/5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center max-w-4xl text-center"
                >
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl mb-8 border-4 border-white">
                        <img
                            src="/images/LeeYJ_T.jpg"
                            alt="Instructor Lee Yun-jin"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    <h2 className="text-sm font-bold tracking-[0.3em] text-neutral-500 uppercase mb-4">VOCAL CLASS</h2>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-black mb-6 break-keep">
                        조금 더 나답게,<br className="md:hidden" /> 조금 더 빛나게
                    </h1>

                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold tracking-widest">강사 이윤진</p>
                    </div>
                </motion.div>
            </section>

            {/* Curriculum Section */}
            <section className="border-t border-black/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* About Lesson */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-16 py-24 border-b border-black/10"
                    >
                        <div className="lg:col-span-1">
                            <h3 className="text-lg md:text-xl font-black tracking-widest uppercase text-black mb-6 lg:mb-0 border-l-[3px] border-black pl-4 flex items-center h-full max-h-8">ABOUT LESSON</h3>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="text-[16px] sm:text-lg text-neutral-800 font-light leading-relaxed break-keep space-y-8 max-w-3xl font-pretendard">
                                <p>노래를 시작하며 내 목소리를 찾고 싶은 분들부터<br className="hidden md:block" /> 더 깊은 표현이 필요하신 분들까지, 기본기 위에 나다움을 더합니다.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Process */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-16 py-24"
                    >
                        <div className="lg:col-span-1">
                            <h3 className="text-lg md:text-xl font-black tracking-widest uppercase text-black mb-6 lg:mb-0 border-l-[3px] border-black pl-4 flex items-center h-full max-h-8">PROCESS</h3>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="space-y-12 max-w-3xl font-pretendard">
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                                    <div className="text-xs font-bold tracking-widest text-neutral-400 w-8 mt-1.5 shrink-0">01</div>
                                    <p className="text-[16px] sm:text-lg text-neutral-800 font-light leading-relaxed">나의 상태를 천천히 점검합니다.</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                                    <div className="text-xs font-bold tracking-widest text-neutral-400 w-8 mt-1.5 shrink-0">02</div>
                                    <p className="text-[16px] sm:text-lg text-neutral-800 font-light leading-relaxed">호흡과 발성, 공명등 기본기를 만듭니다.</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                                    <div className="text-xs font-bold tracking-widest text-neutral-400 w-8 mt-1.5 shrink-0">03</div>
                                    <p className="text-[16px] sm:text-lg text-neutral-800 font-light leading-relaxed">가장 자연스러운 톤을 찾아갑니다.</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                                    <div className="text-xs font-bold tracking-widest text-neutral-400 w-8 mt-1.5 shrink-0">04</div>
                                    <p className="text-[16px] sm:text-lg text-neutral-800 font-light leading-relaxed">녹음 수업으로 작은 디테일까지 만들어갑니다.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Audio Link Banner & CTA */}
            <section className="bg-neutral-50 py-16 border-t border-black/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center w-full"
                    >
                        <span className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase mb-6 block">Portfolio</span>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-6 text-black">Instructor's Works</h3>
                        <p className="text-neutral-500 text-[15px] mb-12 break-keep max-w-lg mx-auto leading-relaxed">
                            이윤진 강사님의 보컬 커버와 작업물들을<br className="hidden sm:block" />
                            유튜브 채널에서 직접 확인해보세요.
                        </p>
                        <a
                            href="https://www.youtube.com/@%EC%9D%B4%EC%A7%84%EC%A7%9C%EC%A7%84%EC%A7%9C"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-4 border-2 border-black text-black font-bold tracking-widest text-sm hover:bg-black hover:text-white transition-colors uppercase group mb-16"
                        >
                            영상 보기
                            <span className="ml-3 group-hover:translate-x-1 transition-transform">↗</span>
                        </a>

                        {/* Class Info CTA */}
                        <div className="flex justify-center items-center w-full max-w-md mx-auto pt-16 border-t border-black/10">
                            <a href="https://map.naver.com/p/entry/place/1935361517?placePath=/ticket?selectedReview=6993d71a9654b90f984b4b64&selectedReview=6993d71a9654b90f984b4b64&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202602220831&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0841546&lat=37.5660654&c=15.00,0,0,0,dh" target="_blank" rel="noopener noreferrer" className="inline-block w-full px-16 py-5 bg-black text-white font-bold tracking-[0.2em] text-sm hover:bg-neutral-800 transition-colors uppercase text-center">
                                수강 안내 및 신청 ↗
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
