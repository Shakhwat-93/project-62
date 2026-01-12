import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { SuccessModal } from '../components/ui/SuccessModal';
import { Footer } from '../components/layout/Footer';
import { Linkedin, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-[#11112b] text-white flex flex-col font-sans selection:bg-blue-500/30">
            {/* Navbar Placeholder - Minimal */}
            <nav className="absolute top-0 w-full z-50 px-6 py-4 md:py-2 md:px-12 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 -mt-6 md:-mt-10">
                    {/* Assuming SVG or text logo if image not available, but user has image. Using text for now to match style or image if imported. */}
                    {/* Using simple text for clean look on this page or the logo image if global. Let's use text 'Ascent' or logo img if we import it. */}
                    <img src="/assets/logo-main.png" alt="Ascent" className="h-32 md:h-48 w-auto object-contain brightness-0 invert origin-left" />
                </a>
                <div className="hidden md:block -mt-6 md:-mt-10">
                    {/* Menu icon placeholder or simple link back */}
                    <a href="/" className="text-white/70 hover:text-white transition-colors">Back to Home</a>
                </div>
            </nav>

            <main className="flex-grow flex items-center justify-center relative px-6 pt-32 pb-12 md:pt-48 md:pb-20 min-h-screen">
                <div className="max-w-4xl w-full mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

                    {/* Left: Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Request a<br />Conversation</h1>
                            <p className="text-base text-white/60 leading-relaxed max-w-sm">
                                Please share a few details below. This allows us to review context before scheduling time together.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-white">Email</h3>
                                <p className="text-white/60">jamil@getascent.co</p>
                            </div>
                        </div>

                        {/* Social Icons */}

                    </div>

                    {/* Right: Get In Touch Card */}
                    <div className="bg-[#1a1a40] p-6 rounded-[1.5rem] shadow-2xl shadow-black/20">
                        <h2 className="text-xl font-bold mb-6 text-center text-white">GET IN TOUCH</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50 ml-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white/20 py-2 px-1 text-sm text-white placeholder-white/20 outline-none focus:border-white transition-colors"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50 ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-white/20 py-2 px-1 text-sm text-white placeholder-white/20 outline-none focus:border-white transition-colors"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50 ml-1">Company name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/20 py-2 px-1 text-sm text-white placeholder-white/20 outline-none focus:border-white transition-colors"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50 ml-1">Your role</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/20 py-2 px-1 text-sm text-white placeholder-white/20 outline-none focus:border-white transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50 ml-1">Primary ICP or target market</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white/20 py-2 px-1 text-sm text-white placeholder-white/20 outline-none focus:border-white transition-colors"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50 ml-1">Message</label>
                                <textarea
                                    rows="3"
                                    placeholder="Briefly describe your current situation or goals..."
                                    className="w-full bg-transparent border-b border-white/20 py-2 px-1 text-sm text-white placeholder-white/20 outline-none focus:border-white transition-colors resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-2 text-center">
                                <p className="text-[10px] text-white/40 mb-3">We review each request personally and will follow up if there is alignment.</p>
                                <button type="submit" className="w-full py-3 bg-[#11112b] hover:bg-[#1c1c3d] text-white text-sm font-medium rounded-lg shadow-lg border border-white/10 transition-all transform active:scale-95 flex items-center justify-center gap-2 group">
                                    Submit Request
                                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
            <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};
