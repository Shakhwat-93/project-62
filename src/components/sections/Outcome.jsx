import React from 'react';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Outcome = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-[#f7f4eb]">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">What changes</h2>
                    <p className="text-xl text-[#64748B] font-medium">The outcome:</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Item 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-center gap-6 group cursor-default">
                        <div className="w-12 h-12 rounded-full bg-[#87BAC3] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-medium text-[#0F172A]">Outbound operates without consuming internal operational bandwidth.</span>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-center gap-6 group cursor-default">
                        <div className="w-12 h-12 rounded-full bg-[#87BAC3] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-medium text-[#0F172A]">Prospect conversations arrive pre-qualified against defined commercial criteria.</span>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-center gap-6 group cursor-default">
                        <div className="w-12 h-12 rounded-full bg-[#87BAC3] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-medium text-[#0F172A]">Pipeline becomes infrastructure, predictable, measurable, and controlled.</span>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-center gap-6 group cursor-default">
                        <div className="w-12 h-12 rounded-full bg-[#87BAC3] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-medium text-[#0F172A]">Growth shifts from reactive execution to intentional management.</span>
                    </div>
                </div>

                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-xl py-6 md:text-2xl text-[#334155] leading-tight font-medium px-4 md:whitespace-nowrap"
                    >
                        Outbound stops feeling inconsistent and begins operating as a system.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};
