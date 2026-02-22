"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WithYouPage() {
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
                        n@di
                    </h2>
                    <a href="https://instagram.com/n_adi1124" target="_blank" rel="noopener noreferrer" className="mt-2 text-xs md:text-sm font-bold text-neutral-400 hover:text-neutral-800 transition-colors tracking-widest">
                        @n_adi1124
                    </a>
                    <h1 className="text-3xl md:text-5xl font-black mt-4 tracking-tighter text-black break-keep">사랑의 형태</h1>
                </motion.div>

                {/* Album Artwork */}
                <motion.a
                    href="https://www.youtube.com/watch?v=kfWIkoDliak&list=OLAK5uy_nSUwXtoRGhOwLMfqpA6RhUZSZDe78RhDM"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="group relative block w-full max-w-sm aspect-square shadow-2xl overflow-hidden mb-6"
                >
                    <img
                        src="/images/With you_n@di.jpg"
                        alt="사랑의 형태"
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
                    <p>2024. 05. 21.</p>
                </motion.div>

                {/* Vertical Line & Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col items-center w-full max-w-3xl"
                >
                    <div className="w-[1px] h-12 bg-neutral-300 mb-12"></div>

                    <div className="text-center font-medium leading-relaxed md:leading-loose text-sm md:text-base text-neutral-800 space-y-6 px-4 break-keep">
                        <p>
                            나의 사랑은 어떤 모양들을 가지고 있다<br />
                            제각기 크고 작은 사랑의 형태들<br />
                            그런 사랑들을 담은 앨범
                        </p>

                        <div className="text-left max-w-md mx-auto mt-8 space-y-4">
                            <p><strong>1. 너와</strong><br />너와 함께라면 난 어디까지나</p>
                            <p><strong>2. 너의 모든 걸 사랑해서인 걸까</strong><br />너는 날 잔혹하게 떠났다<br />그게 슬퍼 늘.</p>
                            <p><strong>3. 은비야</strong><br />나의 소원은 너가 죽지 않는 거야<br />그래서 같이 소나기를 맞으며 사는 거야</p>
                            <p><strong>4. 곁</strong><br />언제나 네 곁에 있을게</p>
                        </div>
                    </div>

                    <div className="text-center font-medium leading-relaxed md:leading-loose text-sm text-neutral-500 space-y-6 px-4 break-keep mt-12 bg-neutral-50 p-6 rounded-xl">
                        <p>
                            그냥 노래를 녹음 했다고 피드를 올리고 싶지 않았습니다.<br />
                            천천히 들어보고 제가 운영하는 스튜디오의 사운드를 진지하게 들어보고, 아티스트의 입장에서 스튜디오를 준비하고 싶었습니다.
                        </p>
                        <p>
                            n@di의 EP 사랑의형태 전곡(4곡)을 WL Studio에서 Vocal Recording을 진행했습니다. 프로듀서로는 처음 음악을 시작할때 만났던 Scon(민수)가 디렉을 진행해줬습니다.
                        </p>
                        <p>
                            아름답고 따뜻한 곡들의 Recording을 함께 해드릴 수 있어 감사했습니다. n@di의 사랑의형태, 많이 사랑해주세요. 감사합니다.
                        </p>
                    </div>

                    <div className="w-[1px] h-20 md:h-28 bg-neutral-300 mt-12 mb-12"></div>
                </motion.div>

            </section>

            {/* Credits Section */}
            <section className="bg-white pb-24 pt-8 md:pt-16 border-t-0">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-xs md:text-sm">
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Lyrics</span>n@di(나디)</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Composed</span>n@di(나디)</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Arranged</span>Bflat(전준)(Track1) , 김재욱(Track2,3,4)</div>

                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Guitar</span>김재욱 <a href="https://instagram.com/jay_g_guitar" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors">@jay_g_guitar</a></div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Piano</span>Bflat(전준)</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Synthe</span>Bflat(전준)</div>

                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Mixed & Mastered</span>Bflat(전준)(Track1) , Scon(Track2,3,4)</div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Vocal Recording</span><a href="https://instagram.com/boxscon" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors">@boxscon</a> <a href="https://instagram.com/wl_musicstudio" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors ml-1">@wl_musicstudio</a></div>
                    <div><span className="block text-neutral-400 mb-1 uppercase text-[10px] font-bold">Artwork</span>n@di(나디)</div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
