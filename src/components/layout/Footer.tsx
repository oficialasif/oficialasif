"use client";

import React from "react";
import { Github, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12 relative z-50">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-6">

                <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        Connect With Me
                    </h3>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-6">
                    <SocialLink href="https://github.com/oficialasif" icon={Github} label="GitHub" />
                    <SocialLink href="https://facebook.com/OficialAsif2" icon={Facebook} label="Facebook" />
                    <SocialLink href="https://twitter.com/oficialasif" icon={Twitter} label="Twitter" />
                    <SocialLink href="https://instagram.com/oficialasif" icon={Instagram} label="Instagram" />
                    <SocialLink href="https://linkedin.com/in/oficialasif" icon={Linkedin} label="LinkedIn" />
                </div>

                {/* Copyright */}
                <div className="text-gray-500 text-sm mt-4 border-t border-white/5 pt-4 w-full text-center">
                    <p>© 2026 oficialasif. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        aria-label={label}
    >
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
    </a>
);
