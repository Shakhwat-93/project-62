import React from 'react';
import { motion } from 'framer-motion';

export const Results = () => {
    return (
        <section className="py-16 md:py-48 bg-white border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Centered Heading */}
                <div className="text-center mb-10 md:mb-24 relative">
                    <h2 className="text-2xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                        What we own end to end
                    </h2>
                    <div className="h-1.5 w-16 md:w-24 bg-slate-900 mx-auto mt-6 md:mt-8 rounded-full"></div>
                </div>

                {/* Content - Vertical Flow */}
                <div className="space-y-8 md:space-y-12">
                    {/* Block 1: The Problem */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100/80"
                    >
                        <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-light">
                            Outbound fails when ownership is diluted. Strategy, execution, and response handling are treated as separate tasks, distributed across people and tools, with no single party accountable for pipeline performance. <br /> <br />
                            We assume full ownership of the outbound function. We define the ICP, prioritise target accounts, establish prospect logic, develop positioning and messaging aligned to your offer and buying context, and execute outreach across LinkedIn and email. We manage responses, follow-ups, and qualification, and adjust execution based on direct prospect engagement.
                        </p>
                    </motion.div>
                    {/* Block 3: The Result (Highlights) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center p-6 md:p-12 text-black transform md:scale-105 transition-transform duration-500 hover:scale-[1.07]"
                    >
                        <p className="text-lg md:text-2xl leading-relaxed md:whitespace-nowrap">
                            You remain focused on closing. We take responsibility for everything upstream.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
