"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, User, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import profileImage from "@/assets/images/my-photo.jpg";

const tabs = [
    { id: "overview", label: "Identity", icon: User },
    { id: "experience", label: "Timeline", icon: Briefcase },
];

export function AboutSection() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <section id="about" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-10 md:py-20 px-4">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

            <div className="container mx-auto relative z-10">
                <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                    >
                        About Me
                    </motion.h2>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">

                    {/* Navigation Rail - Mobile Horizontal Scroll, Desktop Vertical */}
                    <div className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide snap-x px-1 mx-[-1rem] md:mx-0 w-[calc(100%+2rem)] md:w-auto justify-start md:justify-start pl-4 md:pl-0">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "relative group flex items-center justify-center md:justify-start gap-2 md:gap-3 p-3 md:p-4 rounded-xl transition-all duration-300 border border-transparent flex-shrink-0 snap-center",
                                        isActive ? "bg-white/10 border-white/10" : "hover:bg-white/5"
                                    )}
                                >
                                    <div className={cn(
                                        "relative z-10 p-2 rounded-lg transition-all duration-300",
                                        isActive ? "bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "bg-white/5 group-hover:bg-white/10"
                                    )}>
                                        <tab.icon className={cn("w-4 h-4 md:w-5 md:h-5", isActive ? "text-white" : "text-gray-400")} />
                                    </div>
                                    <span className={cn(
                                        "block text-sm font-medium tracking-wide transition-colors",
                                        isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                                    )}>
                                        {tab.label}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabRail"
                                            className="absolute inset-0 bg-blue-500/5 rounded-xl border border-blue-500/20"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Main Content Terminal */}
                    <div className="flex-1 min-h-[auto] md:h-auto lg:min-h-[400px] relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 md:p-10 overflow-hidden shadow-2xl flex flex-col">

                        {/* Decorative HUD Elements */}
                        <div className="absolute top-4 right-6 flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-75" />
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150" />
                        </div>
                        <div className="absolute bottom-4 left-6 text-[10px] text-gray-600 font-mono hidden md:block">
                            SYS.STATUS: OPTIMAL // ID: 8472-X
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col justify-center py-4 md:py-0"
                            >
                                {activeTab === "overview" && (
                                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 h-auto">
                                        <div className="relative group flex-shrink-0">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />


                                            <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-black ring-2 ring-white/20">
                                                <Image
                                                    src={profileImage}
                                                    alt="Asif Mahmud"
                                                    fill
                                                    className="object-cover"
                                                    priority
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center md:text-left space-y-3 md:space-y-4">
                                            <div>
                                                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-1 md:mb-2">
                                                    ASIF <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">MAHMUD</span>
                                                </h2>
                                                <p className="text-blue-400/80 font-mono text-xs md:text-sm tracking-widest uppercase">Full Stack Developer</p>
                                            </div>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
                                                Based in the digital realm. I craft pixel-perfect web experiences with modern architecture.
                                                Currently building the future at <span className="text-white font-semibold">CholoJS</span>.
                                            </p>

                                            <div className="space-y-2 md:space-y-3 pt-2">
                                                <div className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 flex-shrink-0">
                                                        <span className="text-sm">🎓</span>
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-white font-medium text-sm leading-tight">M. Sc in SWE (Major in Cyber Security)</p>
                                                        <p className="text-[10px] md:text-xs text-gray-500">Daffodil International University</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                                                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 flex-shrink-0">
                                                        <span className="text-sm">🎓</span>
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-white font-medium text-sm leading-tight">B. Sc in CSE</p>
                                                        <p className="text-[10px] md:text-xs text-gray-500">Daffodil International University</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                                                <a href="tel:+8801737183436" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors bg-white/5 px-3 py-2 rounded-lg border border-white/10 hover:border-blue-500/30">
                                                    <span className="text-base">📞</span>
                                                    <span className="font-mono text-xs md:text-sm">+8801737183436</span>
                                                </a>
                                                <a href="mailto:asifmahmud053@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors bg-white/5 px-3 py-2 rounded-lg border border-white/10 hover:border-purple-500/30">
                                                    <span className="text-base">✉️</span>
                                                    <span className="font-mono text-xs md:text-sm">asifmahmud053@gmail.com</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "experience" && (
                                    <div className="relative border-l border-white/10 ml-2 md:ml-4 space-y-8 pl-6 md:pl-8 py-2">
                                        <div className="relative group">
                                            <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-black group-hover:scale-125 transition-transform" />
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Senior Developer</h3>
                                            <p className="text-sm text-gray-400 mb-2">CholoJS • Present</p>
                                            <p className="text-gray-300 text-sm">Leading the frontend team, architecting scalable solutions, and shipping production-grade applications.</p>
                                        </div>

                                        <div className="relative group">
                                            <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-gray-600 border-4 border-black group-hover:bg-purple-500 group-hover:scale-125 transition-transform" />
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">Frontend Developer</h3>
                                            <p className="text-sm text-gray-400 mb-2">Freelance • 2021-2023</p>
                                            <p className="text-gray-300 text-sm">Collaborated with global clients to build responsive websites and interactive user interfaces.</p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
