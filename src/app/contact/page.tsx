import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen text-black font-sans">
            <Header />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-24 md:pt-48 md:pb-32">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 md:mb-24 text-center">CONTACT</h1>

                {/* Contact Info List */}
                <div className="flex flex-col space-y-16 md:space-y-0 md:flex-row md:justify-between border-b border-black/10 pb-16 md:pb-24">

                    {/* Location Info */}
                    <div className="flex flex-col md:flex-row md:gap-16 w-full">
                        <div className="md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">WHITE LIGHT<br />STUDIO</h2>
                        </div>

                        <div className="md:w-1/3 flex flex-col gap-2 mb-8 md:mb-0">
                            <div className="flex items-start gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 text-black/40">
                                    <path d="M12 21C16 16.8 19 12.8467 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.8467 8 16.8 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div>
                                    <p className="text-sm md:text-base font-medium text-[#111] break-keep leading-relaxed tracking-tight">
                                        서울특별시 광진구 능동로 413-1 지하1층
                                    </p>
                                    <p className="text-sm font-normal text-[#666] mt-2 tracking-wide">
                                        B1, 413-1, Neungdong-ro, Gwangjin-gu, Seoul, Republic of Korea
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/3 flex items-start gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 text-black/40">
                                <path d="M22 16.92V19.92C22.0032 20.1978 21.944 20.4735 21.826 20.7302C21.7081 20.987 21.5337 21.2193 21.313 21.3996C21.0924 21.5799 20.8302 21.7042 20.5422 21.7645C20.2542 21.8248 19.9575 21.8197 19.67 21.75C16.5934 20.7412 13.7842 19.1176 11.45 16.98C9.25595 14.9912 7.48777 12.5925 6.27003 9.94002C5.99824 9.65431 5.79723 9.35624 5.67919 9.07223C5.56116 8.78822 5.53127 8.48701 5.59124 8.19777C5.65121 7.90853 5.79848 7.6432 6.01524 7.43283C6.232 7.22246 6.50571 7.0784 6.79003 7.02002L9.79003 6.02002C10.043 5.92842 10.3204 5.92055 10.5784 5.99827C10.8365 6.07599 11.0592 6.23438 11.2103 6.45002L13.4303 9.61002C13.5786 9.81395 13.6545 10.0577 13.6483 10.3066C13.6421 10.5555 13.5542 10.7963 13.3903 10.99L12.1203 12.51C13.0645 14.173 14.4173 15.5258 16.0803 16.47L17.6003 15.2C17.794 15.0361 18.0348 14.9482 18.2837 14.942C18.5326 14.9358 18.7764 15.0117 18.9803 15.16L22.1403 17.38C22.3559 17.5311 22.5143 17.7538 22.592 18.0119C22.6698 18.27 22.6619 18.5473 22.5703 18.8L22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm md:text-base font-medium text-[#111]">
                                0507-1331-7285
                            </p>
                        </div>
                    </div>
                </div>

                {/* Map Area */}
                <div className="mt-16 w-full aspect-square md:aspect-[21/9] bg-neutral-100 rounded-lg overflow-hidden relative border border-black/5 group">
                    <iframe
                        src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EB%8A%A5%EB%8F%99%EB%A1%9C%20413-1&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full border-0 absolute top-0 left-0 grayscale opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                        title="White Light Studio Location Map"
                    ></iframe>

                    {/* External Link Buttons */}
                    <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-10">
                        <a
                            href="https://map.naver.com/p/entry/place/1935361517?lng=127.0841546&lat=37.5660654&placePath=%2Fhome&entry=plt&searchType=place"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-black hover:text-white transition-colors border border-black/10 flex items-center gap-2"
                        >
                            Open in Naver Map ↗
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
