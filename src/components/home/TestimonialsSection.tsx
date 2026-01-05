"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jen",
        role: "Product Manager at TechFlow",
        content: "The attention to detail is simply unmatched. The animations feel so organic and the performance is incredible.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Founder of StartUp X",
        content: "Transformed our rough ideas into a polished, world-class product. A true partner in the development process.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Creative Director",
        content: "I've never seen a developer with such a strong eye for design. The holographic effects blew our team away.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
        rating: 5
    },
    {
        id: 4,
        name: "James Wilson",
        role: "CTO at FutureScale",
        content: "Code quality is top-notch. Clean, scalable, and built to last. Highly recommended for complex projects.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        rating: 5
    }
];

const testimonials2 = [
    {
        id: 5,
        name: "Jessica Lee",
        role: "Marketing Head",
        content: "Our conversion rates doubled after the redesign. The user experience flow is intuitive and engaging.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
        rating: 5
    },
    {
        id: 6,
        name: "David Kim",
        role: "Lead Developer",
        content: "A joy to collaborate with. Deep technical knowledge combined with excellent communication skills.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
        rating: 5
    },
    {
        id: 7,
        name: "Anna Polina",
        role: "UI Designer",
        content: "The implementation of the glassmorphism theme was pixel-perfect. Simply beautiful work.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
        rating: 5
    },
    {
        id: 8,
        name: "Robert Fox",
        role: "CEO at Agency",
        content: "Delivered ahead of schedule and exceeded all expectations. The smooth scrolling is a game changer.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80",
        rating: 5
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="relative w-[85vw] sm:w-[350px] md:w-[450px] p-6 rounded-2xl bg-neutral-900/50 backdrop-blur-md border border-white/5 group hover:bg-neutral-800/60 transition-colors duration-300 flex-shrink-0">
        {/* Neon Glow on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-400/50 transition-colors">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                    />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm tracking-wide">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
            </div>
            <Quote className="text-white/10 w-8 h-8 group-hover:text-blue-500/50 transition-colors duration-300" />
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">"{testimonial.content}"</p>

        <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            ))}
        </div>
    </div>
);

export function TestimonialsSection() {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                >
                    Client Stories
                </motion.h2>
                <p className="text-gray-400 text-lg max-w-xl mx-auto">
                    Trusted by innovators and visionaries across the globe.
                </p>
            </div>

            {/* Row 1 - Left to Right */}
            <div className="flex mb-8 overflow-hidden mask-linear-gradient py-4">
                <motion.div
                    className="flex flex-nowrap gap-8"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Duplicate 3 times for seamless loop on large screens */}
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
                    ))}
                </motion.div>
            </div>

            {/* Row 2 - Right to Left */}
            <div className="flex overflow-hidden mask-linear-gradient py-4">
                <motion.div
                    className="flex flex-nowrap gap-8"
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                >
                    {[...testimonials2, ...testimonials2, ...testimonials2].map((t, i) => (
                        <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
                    ))}
                </motion.div>
            </div>

            {/* Vignette Effect for Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}
