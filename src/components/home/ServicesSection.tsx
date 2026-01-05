"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Smartphone, Palette, Globe, BarChart, Server, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "01",
        title: "Web Dev",
        fullTitle: "Web Development",
        description: "Building scalable, high-performance web applications using modern frameworks like Next.js and React. We focus on speed, SEO, and maintainability.",
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        bgGradient: "bg-blue-500/10",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
    },
    {
        id: "02",
        title: "Mobile Apps",
        fullTitle: "Mobile Applications",
        description: "Cross-platform mobile applications enabling your business to reach users on both iOS and Android with a single efficient codebase.",
        icon: Smartphone,
        color: "from-purple-500 to-pink-500",
        bgGradient: "bg-purple-500/10",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
        id: "03",
        title: "UI/UX",
        fullTitle: "UI/UX Design",
        description: "Crafting intuitive and visually stunning user interfaces. We map user journeys to ensure every interaction is meaningful and delightful.",
        icon: Palette,
        color: "from-orange-500 to-red-500",
        bgGradient: "bg-orange-500/10",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
        id: "04",
        title: "SEO",
        fullTitle: "SEO Optimization",
        description: "Improving your website's visibility and ranking on search engines. We use data-driven strategies to drive organic traffic to your brand.",
        icon: Globe,
        color: "from-green-500 to-emerald-500",
        bgGradient: "bg-green-500/10",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
        id: "05",
        title: "Analytics",
        fullTitle: "Data Analytics",
        description: "Transforming raw data into actionable insights. Our custom dashboards help you make informed decisions based on real-time metrics.",
        icon: BarChart,
        color: "from-yellow-500 to-amber-500",
        bgGradient: "bg-yellow-500/10",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    }
];

export function ServicesSection() {
    const [activeId, setActiveId] = useState<string | null>("01");

    return (
        <section className="relative py-20 bg-black overflow-hidden flex flex-col justify-center">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-10 text-center max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base"
                    >
                        Interactive solutions for the digital age. Hover to expand.
                    </motion.p>
                </div>

                {/* Mobile Horizontal Card Slider */}
                <div className="lg:hidden relative w-full overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 pb-8 no-scrollbar">
                    {services.map((service) => {
                        const isActive = activeId === service.id;
                        return (
                            <motion.div
                                key={service.id}
                                onClick={() => setActiveId(service.id)}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-10% 0px -10% 0px", once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={cn(
                                    "snap-center flex-shrink-0 w-[80vw] h-[400px] rounded-3xl overflow-hidden relative border border-white/10 transition-all duration-300",
                                    isActive ? "scale-100 ring-2 ring-blue-500/50" : "scale-95 opacity-70"
                                )}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover opacity-60"
                                />
                                {/* Gradient Overlay - similar to project cards */}
                                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 mix-blend-overlay", service.bgGradient)} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    {/* Top decoration - like project cards */}
                                    <div className="absolute top-6 right-6 flex gap-2">
                                        <div className="w-12 h-1 bg-white/20 rounded-full" />
                                        <div className="w-2 h-1 bg-white/50 rounded-full" />
                                    </div>

                                    {/* Icon - larger and more prominent */}
                                    <div className="mb-4">
                                        <service.icon className="w-12 h-12 text-white/90" />
                                    </div>

                                    {/* Title - gradient style like projects */}
                                    <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 uppercase tracking-tighter">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {service.description}
                                    </p>

                                    {/* Learn More Button - always visible like project buttons */}
                                    <Button
                                        size="sm"
                                        className="w-fit rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-none shadow-lg shadow-blue-900/20"
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                {/* Desktop Flex Layout (Hidden on Mobile) */}
                <div className="hidden lg:flex flex-row gap-2 h-[350px] w-full max-w-6xl mx-auto">
                    {services.map((service) => {
                        const isActive = activeId === service.id;
                        return (
                            <motion.div
                                key={service.id}
                                layout
                                onClick={() => setActiveId(service.id)}
                                onMouseEnter={() => setActiveId(service.id)}
                                className={cn(
                                    "relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border border-white/10",
                                    isActive
                                        ? "flex-[3]"
                                        : "flex-[0.5] hover:flex-[0.7]"
                                )}
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className={cn(
                                            "object-cover transition-all duration-700",
                                            isActive ? "scale-110 opacity-40 blur-sm" : "scale-100 opacity-60 hover:opacity-100"
                                        )}
                                        sizes="(max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/60" />
                                </div>

                                {/* Background Gradient for Active State */}
                                <div className={cn(
                                    "absolute inset-0 opacity-0 transition-opacity duration-500 z-10",
                                    isActive ? "opacity-100" : "opacity-0",
                                    `bg-gradient-to-br ${service.bgGradient} backdrop-blur-[2px]`
                                )} />

                                {/* Content Container */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">

                                    {/* Top: ID and Icon */}
                                    <div className="flex items-center justify-between">
                                        <span className={cn(
                                            "text-xl font-mono transition-colors duration-300 drop-shadow-md",
                                            isActive ? "text-white" : "text-white/60"
                                        )}>{service.id}</span>
                                        <div className={cn(
                                            "p-2 rounded-full transition-all duration-300 backdrop-blur-md",
                                            isActive ? `bg-gradient-to-r ${service.color} text-white box-shadow-lg` : "bg-black/40 text-gray-300"
                                        )}>
                                            <service.icon className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Middle: Expanded Content */}
                                    <div className="relative flex-grow flex flex-col justify-center">
                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                    exit={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                                                    transition={{ duration: 0.4, delay: 0.1 }}
                                                    className="space-y-3"
                                                >
                                                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">{service.fullTitle}</h3>
                                                    <p className="text-gray-200 leading-relaxed max-w-md drop-shadow-md">
                                                        {service.description}
                                                    </p>
                                                    <button className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors group/btn">
                                                        Learn more <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                                    </button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Bottom: Vertical Title (Collapsed Desktop) */}
                                    {!isActive && (
                                        <div className="flex absolute inset-0 items-center justify-center">
                                            <span className="text-xl font-bold text-white tracking-wider whitespace-nowrap uppercase drop-shadow-lg shadow-black -rotate-90">
                                                {service.title}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        </section>
    );
}

