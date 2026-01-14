"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Placeholder data
const projects = [
    {
        title: "The Retro Life",
        description: "A premium t-shirt brand featuring retro and pop-culture designs with a modern shopping experience.",
        tags: ["E-commerce", "Brand", "Next.js", "React"],
        image: "/projects/the_retro_life_cover.png",
        github: "#",
        demo: "https://retrolifebd.vercel.app/",
        color: "from-cyan-500 to-purple-600"
    },
    {
        title: "Diu Esports Community",
        description: "Official platform for DIU Esports Community with tournament management and team registration.",
        tags: ["Next.js", "React", "Node.js", "Tailwind"],
        image: "/projects/diu_esports_preview_1767598478325.png",
        github: "https://github.com/oficialasif/diuec",
        demo: "https://diuec.vercel.app/",
        color: "from-blue-600 to-purple-600"
    },
    {
        title: "Lagbe Kichu",
        description: "A comprehensive e-commerce platform for general products with a modern shopping interface.",
        tags: ["React", "Node.js", "E-commerce", "Stripe"],
        image: "/projects/lagbe_kichu_preview_1767598494841.png",
        github: "https://github.com/oficialasif/lagbe-kichu-ecommerce",
        demo: "https://lagbe-kichu-six.vercel.app/",
        color: "from-orange-500 to-yellow-500"
    },
    {
        title: "ORBIT",
        description: "Second-hand product selling platform built with Flutter. Mobile-first marketplace experience.",
        tags: ["Flutter", "Mobile App", "Dart", "Firebase"],
        image: "/projects/orbit_app_preview_1767598513936.png",
        github: "https://github.com/oficialasif/ORBIT",
        demo: "https://orbit-app-bd-25.web.app/",
        color: "from-purple-600 to-pink-500"
    },
    {
        title: "Stylora 2",
        description: "Advanced online shopping platform focusing on fashion and lifestyle products.",
        tags: ["React", "E-commerce", "Redux", "API"],
        image: "/projects/stylora_2_preview_1767598531850.png",
        github: "https://github.com/oficialasif/STYLORA-Ecommerce-2",
        demo: "https://oficialasif.github.io/STYLORA-Ecommerce-2/",
        color: "from-gray-800 to-gray-500"
    },
    {
        title: "Hotel BD",
        description: "A clean and intuitive hotel booking frontend application for browsing and reserving rooms.",
        tags: ["HTML/CSS", "JavaScript", "Booking", "Frontend"],
        image: "/projects/hotel_bd_preview_1767598559363.png",
        github: "#",
        demo: "https://oficialasif.github.io/HotelBD/",
        color: "from-blue-400 to-cyan-400"
    },
    {
        title: "Stylora",
        description: "The original Stylora e-commerce solution offering a seamless shopping experience.",
        tags: ["Web Dev", "E-commerce", "UI/UX", "JavaScript"],
        image: "/projects/stylora_1_preview_1767598579847.png",
        github: "https://github.com/oficialasif/STYLORA-Ecommerce",
        demo: "https://oficialasif.github.io/Stylora-Ecommerce/",
        color: "from-pink-500 to-rose-400"
    },
    {
        title: "Photographer Portfolio",
        description: "A minimalist portfolio showcase for photographers to display their work in high quality.",
        tags: ["Portfolio", "Gallery", "Minimalist", "Design"],
        image: "/projects/photographer_portfolio_preview_1767598597325.png",
        github: "https://github.com/oficialasif/photographer-portfolio",
        demo: "https://sifats.netlify.app/",
        color: "from-stone-700 to-stone-900"
    },
    {
        title: "Sar-LAB",
        description: "Research-based website for Daffodil International University teachers and labs.",
        tags: ["Academic", "Research", "Education", "Next.js"],
        image: "/projects/sar_lab_preview_1767598616925.png",
        github: "https://github.com/oficialasif/SAR-LAB",
        demo: "https://sar-lab.vercel.app/",
        color: "from-blue-700 to-indigo-800"
    }
];

const ProjectCard3D = ({ project }: { project: typeof projects[0] }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);
    const shimmerX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glowOpacity = useTransform(
        [mouseXSpring, mouseYSpring],
        ([currentX, currentY]: number[]) => {
            // Calculate distance from center (0,0) allows glow to fade at edges if needed,
            // or just be present when interacting. Here we make it consistently interactive.
            return 1;
        }
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="group relative w-full h-[400px] md:h-[500px] cursor-pointer perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
            }}
        >
            {/* 3D Container */}
            <motion.div
                className="relative w-full h-full rounded-3xl bg-black/40 border border-white/10 overflow-hidden transition-all duration-300 shadow-2xl"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* 1. Background Image (Lowest Layer) - Parallax effect */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        transform: "translateZ(-50px) scale(1.2)",
                    }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-overlay`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </motion.div>

                {/* 2. Glass Shine Effect */}
                <div
                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.8) 40%, transparent 60%)`,
                        // transform: `translateX(${shimmerX})` // Note: complex to map transform string directly to motion value reference in CSS styles without motion.div binding
                    }}
                />

                {/* 3. Floating Content (Highest Layer) - Pops Out */}
                <div
                    className="absolute inset-0 z-20 flex flex-col justify-end p-8"
                    style={{ transform: "translateZ(60px)" }}
                >
                    {/* Top Right Decoration */}
                    <div className="absolute top-6 right-6 flex gap-2">
                        <div className="w-12 h-1 bg-white/20 rounded-full" />
                        <div className="w-2 h-1 bg-white/50 rounded-full" />
                    </div>

                    {/* Main Text */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <motion.h3
                            className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 uppercase tracking-tighter"
                            layoutId={`title-${project.title}`}
                        >
                            {project.title}
                        </motion.h3>

                        <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded text-blue-300 bg-blue-500/10 backdrop-blur-md">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                            {project.description}
                        </p>

                        <div className="flex items-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all gap-2 group/btn"
                                onClick={() => window.open(project.github, '_blank')}
                            >
                                <Github className="w-4 h-4" /> Code
                            </Button>
                            <Button
                                size="sm"
                                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-none shadow-lg shadow-blue-900/20 gap-2 group/btn"
                                onClick={() => window.open(project.demo, '_blank')}
                            >
                                Live <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Border Glow/Glitch Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-transparent`}
                    style={{
                        background: `linear-gradient(to bottom right, transparent, rgba(255,255,255,0.1), transparent) border-box`,
                        mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude'
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export function ProjectsSection() {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLDivElement>(null);

    React.useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const horizontalScroll = gsap.to(sectionRef.current, {
                x: () => -(sectionRef.current!.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top+=120",
                    end: () => `+=${sectionRef.current!.scrollWidth - window.innerWidth}`,
                    scrub: 1, // Smooth interaction
                    pin: true,
                    invalidateOnRefresh: true,
                },
            });
        });
        return () => ctx.revert();
    }, []);


    return (
        <section className="relative overflow-hidden bg-black pb-20">
            {/* Introduction Title */}
            <div className="container mx-auto px-6 pt-10 pb-2 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                >
                    Project Gallery
                </motion.h2>
            </div>

            {/* Desktop Horizontal Scroll Wrapper */}
            <div ref={triggerRef} className="hidden lg:block h-[550px] overflow-hidden">
                <div
                    ref={sectionRef}
                    className="h-full w-max flex flex-row items-center px-[10vw] gap-8"
                >
                    {/* Horizontal Items */}
                    {projects.map((project, index) => (
                        <div key={index} className="w-[80vw] md:w-[600px] flex-shrink-0 flex items-center justify-center perspective-1000">
                            <ProjectCard3D project={project} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Horizontal Snap-Scroll Carousel */}
            <div className="lg:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-6 px-8 pb-12 pt-4 no-scrollbar">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="snap-center flex-shrink-0 w-[85vw] sm:w-[400px]"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-10% 0px -10% 0px", once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <ProjectCard3D project={project} />
                    </motion.div>
                ))}
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="lg:hidden flex justify-center gap-2 mb-8">
                <div className="text-gray-500 text-xs animate-pulse">
                    Swipe to explore
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
            </div>

        </section>
    );
}

// Add CSS to hide scrollbar but allow functionality
const styles = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
