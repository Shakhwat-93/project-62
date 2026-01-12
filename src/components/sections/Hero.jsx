import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
    return (
        <div id="hero-static" className="relative w-full overflow-hidden min-h-[90vh] bg-[#18194a] flex items-center justify-center">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-[#18194a]/50 pointer-events-none z-10" />

            <section className="relative pt-24 pb-16 md:pt-52 md:pb-40 w-full z-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="max-w-7xl mx-auto mb-12 md:mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-tight text-white drop-shadow-sm font-display mx-auto max-w-7xl"
                            style={{ textWrap: 'balance' }}
                        >
                            Outbound Growth Partner for B2B Companies
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-xl text-white mb-8 md:mb-12 max-w-3xl mx-auto font-normal leading-relaxed"
                            style={{ textWrap: 'balance' }}
                        >
                            We assume full ownership of outbound, from ICP definition through pipeline creation. Single point of accountability. Disciplined execution. Outbound operated as a core commercial function, not an experiment.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex items-center justify-center"
                        >
                            <Button variant="white" href="/contact" className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg">
                                Request a Conversation
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};
