"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Connection established. How can I facilitate your request today?",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false); // New state
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, showSuccess]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate network delay and bot response
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: "Message transmitted successfully. Asif has been notified and will respond via secure channel shortly.",
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 right-6 z-[60] w-[350px] md:w-[400px] h-[500px] flex flex-col bg-black/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden font-sans"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse absolute -right-0.5 -bottom-0.5" />
                                <Bot className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm tracking-wide">SECURE UPLINK</h3>
                                <p className="text-[10px] text-blue-300/80 font-mono">ENCRYPTED // V.2.0.4</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={cn(
                                    "flex items-start gap-3 max-w-[85%]",
                                    msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                                )}
                            >
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10",
                                    msg.sender === "user" ? "bg-purple-600/20" : "bg-blue-600/20"
                                )}>
                                    {msg.sender === "user" ? <User className="w-4 h-4 text-purple-400" /> : <Bot className="w-4 h-4 text-blue-400" />}
                                </div>
                                <div className={cn(
                                    "p-3 rounded-2xl text-sm leading-relaxed",
                                    msg.sender === "user"
                                        ? "bg-purple-600/20 border border-purple-500/30 text-purple-100 rounded-tr-sm"
                                        : "bg-blue-600/10 border border-blue-500/20 text-blue-100 rounded-tl-sm"
                                )}>
                                    {msg.text}
                                    <div className="text-[10px] opacity-50 mt-1 font-mono">
                                        {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {isTyping && (
                            <div className="flex items-center gap-2 text-gray-500 text-xs ml-12 animate-pulse">
                                <span className="w-1 h-1 bg-blue-500 rounded-full" />
                                <span className="w-1 h-1 bg-blue-500 rounded-full animation-delay-75" />
                                <span className="w-1 h-1 bg-blue-500 rounded-full animation-delay-150" />
                            </div>
                        )}
                        {showSuccess && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="flex justify-center my-4"
                            >
                                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 border border-green-500/30 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    TRANSMISSION COMPLETE
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/10 bg-black/50">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            className="flex items-center gap-2 relative group"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-mono"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim()}
                                className="absolute right-2 p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all shadow-lg shadow-purple-900/20"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    {/* Decorative Corner Glows */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
