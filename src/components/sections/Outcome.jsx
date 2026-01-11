import React from 'react';

import { ArrowRight } from 'lucide-react';

export const Outcome = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-[#F0F9FF]">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">What changes</h2>
                    <p className="text-xl text-[#64748B] font-medium">The outcome:</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Item 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-center gap-6 group cursor-default">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-lg font-medium text-[#0F172A]">A steady outbound rhythm</span>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-center gap-6 group cursor-default">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-lg font-medium text-[#0F172A]">Cleaner conversations with the right buyers</span>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-center gap-6 group cursor-default">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-lg font-medium text-[#0F172A]">Less guesswork around pipeline</span>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-center gap-6 group cursor-default">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-lg font-medium text-[#0F172A]">More control over growth</span>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-2xl py-6 md:text-3xl text-[#334155] leading-tight font-medium" style={{ whiteSpace: 'nowrap' }}>
                        Outbound stops feeling random and starts feeling reliable.
                    </p>
                </div>
            </div>
        </section>
    );
};
