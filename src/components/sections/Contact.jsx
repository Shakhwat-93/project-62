import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { SuccessModal } from '../ui/SuccessModal';

export const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        e.target.reset();
    };

    return (
        <section id="contact" className="relative z-10 py-24 px-6 md:px-12 bg-creamy-gradient">
            <div className="max-w-4xl mx-auto">
                {/* Headline */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl mb-10 font-bold text-[#060645]">Request a Conversation</h2>
                    <p className="text-lg text-[#0e1b2a] max-w-2xl mx-auto">
                        Please share a few details below. This allows us to review context before scheduling time together.
                    </p>
                </div>

                {/* Form Card */}
                <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 mb-16 relative overflow-hidden group">
                    <form onSubmit={handleSubmit} className="clean-form relative z-10 space-y-6">
                        {/* Identity */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Name</label>
                                <input type="text" id="name" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none placeholder:text-slate-400" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Email</label>
                                <input type="email" id="email" placeholder="john@company.com" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none placeholder:text-slate-400" required />
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Company name</label>
                                <input type="text" id="company" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none placeholder:text-slate-400" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="role" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Your role</label>
                                <input type="text" id="role" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none placeholder:text-slate-400" required />
                            </div>
                        </div>

                        {/* Targeting */}
                        <div className="space-y-2">
                            <label htmlFor="icp" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Primary ICP or target market</label>
                            <input type="text" id="icp" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none placeholder:text-slate-400" required />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Message</label>
                            <textarea id="message" rows="4" placeholder="Briefly describe your current situation or goals..." className="w-full px-6 py-4 rounded-xl bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none placeholder:text-slate-400 resize-none" required></textarea>
                        </div>

                        <div className="pt-2 text-center">
                            <p className="text-sm text-slate-500 mb-6 font-medium">We review each request personally and will follow up if there is alignment.</p>
                            <button type="submit" className="w-full py-5 btn-premium rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group">
                                Submit Request
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};
