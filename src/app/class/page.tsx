"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Consolidated Instructor Data
const CLASSES = [
    {
        id: "acoustic-kimsa-t",
        category: "ACOUSTIC GUITAR CLASS",
        instructor: "김수안 (Kim Su-an)",
        image: "/images/KimSA_T.jpg",
        bgImage: "/images/Kim_SA_T_N.png",
        imagePosition: "object-[center_30%]",
        bgScale: "h-[180%]",
        bgPosition: "right-0 md:right-32 top-1/2 -translate-y-[55%]",
        subtitle: "코드를 넘어, 음악을 이해하는 기타",
        lessonInfo: "1:1 Private & Group Lesson",
        about: [
            "취미로 기타를 처음 시작하는 분부터, 노래 반주•CCM 연주•감성 팝 스타일을 완성하고 싶은 분까지.",
            "7080 포크 감성부터 Kpop•Pop•CCM까지. 세대와 장르를 아우르는 맞춤형 레슨을 제공합니다."
        ],
        process: [
            "기타를 처음 잡는 분도 부담 없이 시작할 수 있도록 기초부터 차근히 안내합니다.",
            "실전형 코드와 리듬을 통해 바로 '좋은 소리'가 나는 반주를 만듭니다.",
            "원하는 곡을 수준에 맞게 재편곡하여 음악적 해석을 완성합니다.",
            "목표 곡을 완주하고 디테일 피드백으로 연주의 완성도를 높입니다."
        ],
        portfolioUrl: "https://on.soundcloud.com/AKa6eWbaRZL2tQhzJX",
        portfolioText: "김수안 강사님의 통기타 연주와 스튜디오 작업물들을 사운드클라우드 채널에서 직접 확인해보세요.",
        portfolioBtn: "작업물 듣기"
    },
    {
        id: "bass-minkc-t",
        category: "BASS GUITAR CLASS",
        instructor: "민경찬 (Min Kyung-chan)",
        image: "/images/Minkc_T.png",
        bgImage: "/images/Minkc_T_N.png",
        imagePosition: "object-top",
        bgScale: "h-[180%]",
        bgPosition: "right-0 md:right-28 top-1/2 -translate-y-[55%]",
        subtitle: "리듬과 화성의 중심, 베이스 솔루션",
        lessonInfo: "1:1 Private & Group Lesson",
        about: ["레슨 소개 내용은 추후 업데이트될 예정입니다."],
        process: ["준비 중입니다."],
        portfolioUrl: "https://www.youtube.com/watch?v=6D-NeCV4mEY",
        portfolioText: "민경찬 강사님의 베이스 연주와 작업물들을 유튜브 채널에서 직접 확인해보세요.",
        portfolioBtn: "작업물 보기"
    },
    {
        id: "vocal-leeyj-t",
        category: "VOCAL CLASS",
        instructor: "이윤진 (Lee Yun-jin)",
        image: "/images/LeeYJ_T.jpg",
        bgImage: "/images/LeeYJ_T_N.png",
        imagePosition: "object-top",
        bgScale: "h-[180%]",
        bgPosition: "right-0 md:right-32 top-1/2 -translate-y-[55%]",
        subtitle: "조금 더 나답게, 조금 더 빛나게",
        lessonInfo: "1:1 Private & Group Lesson",
        about: ["노래를 시작하며 내 목소리를 찾고 싶은 분들부터 더 깊은 표현이 필요하신 분들까지, 기본기 위에 나다움을 더합니다."],
        process: [
            "나의 상태를 천천히 점검합니다.",
            "호흡과 발성, 공명등 기본기를 만듭니다.",
            "가장 자연스러운 톤을 찾아갑니다.",
            "녹음 수업으로 작은 디테일까지 만들어갑니다."
        ],
        portfolioUrl: "https://www.youtube.com/@%EC%9D%B4%EC%A7%84%EC%A7%9C%EC%A7%84%EC%A7%9C",
        portfolioText: "이윤진 강사님의 보컬 커버와 작업물들을 유튜브 채널에서 직접 확인해보세요.",
        portfolioBtn: "작업물 보기"
    }
];

export default function ClassIndexPage() {
    const [selectedInstructor, setSelectedInstructor] = useState<typeof CLASSES[0] | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedInstructor) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedInstructor]);

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

                {/* Editorial List Layout for Classes */}
                <div className="flex flex-col border-t-2 border-black">
                    {CLASSES.map((cls, index) => (
                        <motion.li
                            key={cls.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group border-b border-black/10 cursor-pointer relative overflow-hidden bg-white hover:bg-neutral-50 transition-colors duration-700 list-none"
                            onClick={() => setSelectedInstructor(cls)}
                        >
                            {/* Atmospheric Background Image (Right side - Using Instructor's Photo) */}
                            <div
                                className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0 opacity-15 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none overflow-hidden"
                                style={{ WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 80%)', maskImage: 'linear-gradient(to left, black 20%, transparent 80%)' }}
                            >
                                <img src={cls.bgImage || cls.image} alt="" className={`absolute ${cls.bgPosition} ${cls.bgScale} max-w-none w-auto filter grayscale mix-blend-multiply`} />
                            </div>

                            <div className="py-10 md:py-12 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between relative z-10 w-full">

                                {/* Left Content */}
                                <div className="flex flex-col md:flex-row md:items-center w-full relative">
                                    <div
                                        className="w-20 sm:w-24 md:w-28 aspect-[3/4] rounded-sm overflow-hidden bg-neutral-100 flex-shrink-0 relative group cursor-pointer border-[3px] border-white shadow-md z-20 mb-6 md:mb-0 md:mr-10"
                                    >
                                        <img
                                            src={cls.image}
                                            alt={cls.instructor}
                                            className={`w-full h-full object-cover ${cls.imagePosition || 'object-center'} filter grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply`}
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col flex-grow z-10 relative">
                                        <div className="flex flex-col md:flex-row md:items-baseline mb-2">
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter mr-6 group-hover:text-black text-neutral-800 transition-colors uppercase">
                                                {cls.category}
                                            </h3>
                                        </div>
                                        <p className="text-neutral-600 font-semibold text-sm md:text-lg tracking-wide">
                                            Inst. {cls.instructor}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-auto md:relative opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block text-neutral-400">
                                        <span className="text-4xl font-light">→</span>
                                    </div>
                                </div>
                            </div>
                        </motion.li>
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

            {/* Instructor Detail Modal (AnimatePresence) */}
            <AnimatePresence>
                {selectedInstructor && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedInstructor(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-xl shadow-2xl relative flex flex-col"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedInstructor(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-20 w-10 h-10 bg-neutral-100 hover:bg-black text-neutral-500 hover:text-white rounded-full flex items-center justify-center transition-colors"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Layout - Split View */}
                            <div className="flex flex-col lg:flex-row w-full min-h-[60vh] lg:min-h-[70vh]">

                                {/* Left: Typography & Info (White Region) */}
                                <div className="w-full lg:w-3/5 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between order-2 lg:order-1">
                                    <div>
                                        {/* Header */}
                                        <div className="mb-10 sm:mb-12">
                                            <h2 className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase mb-4 sm:mb-6 flex items-center">
                                                <span className="w-6 sm:w-8 h-px bg-neutral-300 mr-3 sm:mr-4"></span>
                                                {selectedInstructor.category}
                                            </h2>
                                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-black mb-6 sm:mb-8 leading-[1.2] break-keep">
                                                {selectedInstructor.subtitle.split(', ').map((line, i, arr) => (
                                                    <span key={i}>
                                                        {line}
                                                        {i < arr.length - 1 && <>,<br className="md:hidden lg:block lg:pb-1" /> </>}
                                                    </span>
                                                ))}
                                            </h1>
                                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
                                                <p className="text-lg sm:text-xl md:text-2xl font-black tracking-widest text-neutral-800">
                                                    Inst. {selectedInstructor.instructor.split(' ')[0]}
                                                </p>
                                            </div>
                                        </div>

                                        {/* About */}
                                        <div className="mb-10 sm:mb-12">
                                            <h3 className="text-xs sm:text-sm font-black tracking-widest uppercase text-black mb-4 sm:mb-5 border-l-[3px] border-black pl-3 flex items-center h-4">
                                                ABOUT LESSON
                                            </h3>
                                            <div className="space-y-4">
                                                {selectedInstructor.about.map((p, i) => (
                                                    <p key={i} className="text-sm sm:text-[15px] md:text-base text-neutral-700 font-light leading-relaxed break-keep font-pretendard">
                                                        {p}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Process */}
                                        <div className="mb-8 lg:mb-0">
                                            <h3 className="text-xs sm:text-sm font-black tracking-widest uppercase text-black mb-4 sm:mb-5 border-l-[3px] border-black pl-3 flex items-center h-4">
                                                PROCESS
                                            </h3>
                                            <div className="space-y-5 sm:space-y-6">
                                                {selectedInstructor.process.map((step, i) => (
                                                    <div key={i} className="flex gap-3 sm:gap-5">
                                                        <div className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 mt-1 shrink-0">0{i + 1}</div>
                                                        <p className="text-sm sm:text-[15px] md:text-base text-neutral-700 font-light leading-relaxed font-pretendard break-keep">
                                                            {step}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Media & CTA (Gray Region) */}
                                <div className="w-full lg:w-2/5 bg-neutral-50 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col items-center border-b lg:border-b-0 lg:border-l border-black/5 order-1 lg:order-2">

                                    {/* Portrait */}
                                    <div className="w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 bg-white rounded-sm overflow-hidden shadow-2xl border-[6px] border-white mb-8 sm:mb-10 shrink-0 relative mt-6 lg:mt-0">
                                        <img
                                            src={selectedInstructor.image}
                                            alt={selectedInstructor.instructor}
                                            className={`w-full h-full object-cover ${selectedInstructor.imagePosition || 'object-center'} mix-blend-multiply`}
                                        />
                                    </div>

                                    {/* Portfolio */}
                                    <div className="text-center mb-8 sm:mb-12 w-full flex-grow flex flex-col items-center justify-center">
                                        <h4 className="text-sm sm:text-base font-black tracking-[0.2em] uppercase text-black mb-3">
                                            Instructor&apos;s Works
                                        </h4>
                                        <p className="text-neutral-500 text-[11px] sm:text-xs mb-6 sm:mb-8 break-keep leading-relaxed max-w-xs">
                                            {selectedInstructor.portfolioText}
                                        </p>
                                        <a
                                            href={selectedInstructor.portfolioUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-[10px] sm:text-xs border border-black text-black font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-colors uppercase group"
                                        >
                                            {selectedInstructor.portfolioBtn}
                                            <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform">↗</span>
                                        </a>
                                    </div>

                                    {/* CTA Bottom Button */}
                                    <div className="w-full pt-6 sm:pt-8 border-t border-black/10 mt-auto">
                                        <a
                                            href="https://map.naver.com/p/entry/place/1935361517?placePath=/ticket?selectedReview=6993d71a9654b90f984b4b64&selectedReview=6993d71a9654b90f984b4b64&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202602220831&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0841546&lat=37.5660654&c=15.00,0,0,0,dh"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full px-6 sm:px-8 py-4 sm:py-5 bg-black text-white font-bold tracking-[0.2em] text-[10px] sm:text-xs hover:bg-neutral-800 transition-colors uppercase text-center"
                                        >
                                            수강 안내 및 신청 ↗
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
