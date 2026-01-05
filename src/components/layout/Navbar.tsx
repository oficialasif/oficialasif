"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, Download } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { ChatWidget } from "@/components/features/ChatWidget";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);
    const [activeSection, setActiveSection] = React.useState<string>("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isChatOpen, setIsChatOpen] = React.useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection("#" + entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -20% 0px", // Active when 60% of viewport is covered or centered
                threshold: 0.1
            }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.href.substring(1));
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none",
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
                <div className={cn(
                    "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl shadow-purple-900/10 transition-all duration-300",
                    isScrolled ? "w-[90%] md:w-[70%] lg:w-[60%] py-2 bg-black/60" : "w-[95%] md:w-[85%] lg:w-[75%]"
                )}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group mr-8">
                        <div className="relative">
                            <Rocket className="h-6 w-6 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-primary/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">OFICIALASIF</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav
                        className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5"
                        onMouseLeave={() => setHoveredPath(null)}
                    >
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors rounded-full duration-300",
                                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                                    )}
                                    onMouseEnter={() => setHoveredPath(item.href)}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector(item.href)?.scrollIntoView({
                                            behavior: "smooth"
                                        });
                                        setActiveSection(item.href);
                                    }}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {(hoveredPath === item.href || (isActive && !hoveredPath)) && (
                                        <motion.div
                                            className={cn(
                                                "absolute inset-0 rounded-full -z-0",
                                                isActive && !hoveredPath ? "bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "bg-white/10"
                                            )}
                                            layoutId="navbar-hover"
                                            transition={{
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.6
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3 ml-8">
                        <a href="/resume.pdf" download="Asif_Mahmud_Resume.pdf">
                            <Button variant="ghost" size="sm" className="hidden lg:flex hover:bg-white/10 text-sm font-medium rounded-full text-gray-300 hover:text-white">
                                Resume <Download className="ml-2 h-3 w-3" />
                            </Button>
                        </a>
                        <Button
                            onClick={() => setIsChatOpen(true)}
                            size="sm"
                            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform shadow-lg shadow-purple-500/20 text-white border-0"
                        >
                            Lets Talk
                        </Button>
                    </div>

                    {/* Mobile Menu - Compact Dropdown */}
                    <div className="md:hidden relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/10 rounded-full group"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu className="h-6 w-6 group-hover:scale-110 transition-transform" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>

                        <AnimatePresence>
                            {isMobileMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 top-full mt-2 w-[280px] bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                                >
                                    {/* Stylish underline decoration */}
                                    <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                                    <div className="p-4 space-y-2">
                                        {navItems.map((item, index) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setIsMobileMenuOpen(false);
                                                        document.querySelector(item.href)?.scrollIntoView({
                                                            behavior: "smooth"
                                                        });
                                                    }}
                                                    className="block px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium text-right"
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.div>
                                        ))}

                                        {/* Divider */}
                                        <div className="h-px bg-white/10 my-2" />

                                        {/* CTAs */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                                            className="space-y-2"
                                        >
                                            <a href="/resume.pdf" download="Asif_Mahmud_Resume.pdf" className="block">
                                                <Button variant="ghost" size="sm" className="w-full justify-end hover:bg-white/5 text-gray-300 hover:text-white">
                                                    <Download className="mr-2 h-4 w-4" />
                                                    Resume
                                                </Button>
                                            </a>
                                            <Button
                                                onClick={() => {
                                                    setIsChatOpen(true);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                size="sm"
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform text-white border-0"
                                            >
                                                Let's Talk
                                            </Button>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.header>

            <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </>
    );
}
