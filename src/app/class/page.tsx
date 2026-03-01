"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const CLASSES = [
    {
        id: "acoustic-kimsa-t",
        category: "ACOUSTIC GUITAR CLASS",
        instructor: "김수안 (Kim Su-an)",
        title: "통기타 맞춤형 레슨 과정",
        image: "/images/KimSA_T.jpg",
        link: "/class/kimsa_t",
    },
    {
        id: "bass-minkc-t",
        category: "BASS GUITAR CLASS",
        instructor: "민경찬 (Min Kyung-chan)",
        title: "베이스 맞춤형 레슨 과정",
        image: "/images/Minkc_T.jpg",
        link: "/class/minkc_t",
    }
];

export default function ClassIndexPage() {
    return (
        <main className="relative bg-white min-h-screen w-full overflow-hidden text-black font-sans">
            <Header />

            {/* Hero / Curriculum Section */}
            <section className="pt-40 pb-24 px-4 lg:px-12 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 mt-12 pl-4 md:pl-0 border-l-4 border-black"
                >
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter ml-4">
                        MUSIC CLASS
                    </h1>
                    <p className="text-neutral-500 font-medium tracking-widest mt-4 ml-4">배움을 넘어, 당신의 음악을 완성하는 과정</p>
                </motion.div>

                {/* Curriculum Details (Light Premium Aesthetic) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 md:p-12 lg:p-16 mb-32 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden text-black"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <div className="mb-10 border-b border-black/10 pb-6 relative z-10">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter break-keep">CURRICULUM</h3>
                        <p className="mt-4 text-neutral-500 font-medium text-sm md:text-base">Contact for Info</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 relative z-10">
                        {/* 1:1 Classes */}
                        <div className="md:pr-16 md:border-r border-black/10">
                            <h4 className="flex items-center text-black font-bold mb-6 tracking-[0.2em] text-base md:text-lg uppercase">
                                <span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
                                1:1 Private Class
                            </h4>
                            <ul className="text-neutral-500 space-y-4 font-medium text-sm md:text-base pl-4 md:pl-5 border-l-2 border-transparent">
                                <li className="flex items-start"><span className="mr-3 mt-1.5 text-[8px] text-neutral-300">◼</span> <span className="pt-0.5">작사, 작곡, 편곡</span></li>
                                <li className="flex items-start"><span className="mr-3 mt-1.5 text-[8px] text-neutral-300">◼</span> <span className="pt-0.5">통기타, 일렉기타</span></li>
                                <li className="flex items-start"><span className="mr-3 mt-1.5 text-[8px] text-neutral-300">◼</span> <span className="pt-0.5">클래식 피아노 & 실용음악 피아노</span></li>
                                <li className="flex items-start"><span className="mr-3 mt-1.5 text-[8px] text-neutral-300">◼</span> <span className="pt-0.5">플룻</span></li>
                                <li className="flex items-start"><span className="mr-3 mt-1.5 text-[8px] text-neutral-300">◼</span> <span className="pt-0.5">로직 프로그램</span></li>
                            </ul>
                        </div>

                        {/* Group Classes */}
                        <div className="md:pl-16">
                            <h4 className="flex items-center text-black font-bold mb-6 tracking-[0.2em] text-base md:text-lg uppercase inline-flex">
                                <span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
                                Group Class <span className="font-sans text-neutral-400 normal-case tracking-normal ml-2 font-semibold text-sm">(2-5인)</span>
                            </h4>
                            <ul className="text-neutral-500 space-y-4 font-medium text-sm md:text-base pl-4 md:pl-5 border-l-2 border-transparent">
                                <li className="flex items-start"><span className="mr-3 mt-1.5 text-[8px] text-neutral-300">◼</span> <span className="pt-0.5">통기타 기초 단체수업</span></li>
                                <li className="flex items-start"><span className="mr-3 mt-1.5 text-[8px] text-neutral-300">◼</span> <span className="pt-0.5">싱어송라이터 & 단체수업</span></li>
                                <li className="flex items-start"><span className="mr-3 mt-1.5 text-[8px] text-neutral-300">◼</span> <span className="pt-0.5">보컬 수업 & 단체수업</span></li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Instructors List Header */}
                <div className="mb-12 border-b border-black/10 pb-4">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-black">Instructors</h2>
                </div>

                {/* Grid Layout for Classes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                    {CLASSES.map((cls, index) => (
                        <Link
                            key={cls.id}
                            href={cls.link}
                            className="group block relative cursor-pointer"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden mb-6 shadow-xl border border-black/5">
                                    <img
                                        src={cls.image}
                                        alt={cls.title}
                                        className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 mix-blend-multiply"
                                    />

                                    {/* Subtler Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                        <div className="flex items-center text-white/90 text-[10px] uppercase font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            <span className="w-8 h-px bg-white/50 mr-3"></span>
                                            View Details
                                            <span className="w-8 h-px bg-white/50 ml-3"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start text-left px-2">
                                    <p className="text-xs tracking-widest text-neutral-500 mb-2 font-bold select-none">[{cls.category}]</p>
                                    <h3 className="text-xl md:text-2xl font-black tracking-tighter shrink-0 mb-1">
                                        {cls.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-neutral-600">Inst. {cls.instructor}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-32 text-center"
                >
                    <a href="https://map.naver.com/p/entry/place/1935361517?placePath=/ticket?selectedReview=6993d71a9654b90f984b4b64&selectedReview=6993d71a9654b90f984b4b64&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202602220831&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0841546&lat=37.5660654&c=15.00,0,0,0,dh" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-4 bg-black text-white font-bold tracking-widest text-sm hover:bg-neutral-800 transition-colors uppercase">
                        레슨 문의 ↗
                    </a>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
