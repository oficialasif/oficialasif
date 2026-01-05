"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactTyped } from "react-typed";
import { SiReact, SiNextdotjs, SiFlutter, SiFirebase, SiMongodb, SiFigma } from "react-icons/si";
// Use the user provided background image
import heroBg from "@/assets/images/herobg.jpg";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black"
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* Desktop: Cover, object-center */}
                <Image
                    src={heroBg}
                    alt="Hero Background"
                    fill
                    className="hidden md:block object-cover object-center opacity-100"
                    priority
                    quality={100}
                    sizes="100vw"
                />
                {/* Mobile: Center crop */}
                <Image
                    src={heroBg}
                    alt="Hero Background Mobile"
                    fill
                    className="md:hidden object-cover object-[80%_center] opacity-60"
                    priority
                    quality={90}
                />

                {/* Minimal Gradients: Image is already perfectly composed */}
                {/* Subtle left dim for text contrast just in case */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent lg:w-[40%]" />

                {/* Bottom fade: seamless transition to next section */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

                {/* Top fade: subtle darken for navbar */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent h-32" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex h-full items-end md:items-center pb-8 md:pb-0">

                {/* Text Content - Left Aligned on Desktop, Centered on Mobile */}
                <motion.div
                    className="w-full md:w-[60%] lg:w-1/2 text-center md:text-left pl-0 md:pl-16 flex flex-col items-center md:items-start justify-between md:justify-center h-full md:h-auto"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="relative inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover="hover"
                    >
                        <motion.h2
                            className="text-blue-400 font-bold tracking-wider mb-2 text-lg md:text-xl uppercase relative z-10"
                            variants={{
                                hover: {
                                    x: [0, -2, 2, -1, 1, 0],
                                    textShadow: [
                                        "0px 0px 0px rgba(0,0,0,0)",
                                        "-2px 0px 0px #ff00de, 2px 0px 0px #00ffff",
                                        "2px 0px 0px #ff00de, -2px 0px 0px #00ffff",
                                        "0px 0px 0px rgba(0,0,0,0)"
                                    ],
                                    transition: { duration: 0.3, repeat: Infinity, repeatType: "mirror" }
                                }
                            }}
                        >
                            Hello, I am Asif Mahmud
                        </motion.h2>
                    </motion.div>

                    <div className="min-h-[120px] md:min-h-[160px] flex flex-col justify-center items-center md:items-start">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl">
                            <span className="block mb-2 text-white/90">I am a</span>
                            <span className="block">
                                <ReactTyped
                                    strings={[
                                        "Full Stack Web Dev",
                                        "UI/UX Designer",
                                        "Flutter Developer",
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    loop
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 block min-h-[1.2em]"
                                />
                            </span>
                        </h1>
                    </div>

                    <motion.p
                        className="text-base md:text-lg text-gray-300 mb-8 max-w-lg leading-relaxed drop-shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        I craft seamless digital experiences by determining the structure and design of web pages,
                        striking a balance between functional utility and aesthetic appeal.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap items-center gap-6 justify-center md:justify-start mt-8 mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="flex items-center gap-4 md:gap-6 text-gray-400 flex-wrap justify-center md:justify-start">
                            {[
                                { Icon: SiReact, color: "#61DAFB", name: "React" },
                                { Icon: SiNextdotjs, color: "white", name: "Next.js" },
                                { Icon: SiFlutter, color: "#02569B", name: "Flutter" },
                                { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
                                { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
                                { Icon: SiFigma, color: "#F24E1E", name: "Figma" }
                            ].map(({ Icon, color, name }, index) => (
                                <motion.div
                                    key={name}
                                    whileHover={{ scale: 1.2, color: color, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="cursor-pointer relative group p-2 md:p-0"
                                >
                                    <Icon className="w-8 h-8 transition-colors duration-300" />
                                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-20">
                                        {name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}
