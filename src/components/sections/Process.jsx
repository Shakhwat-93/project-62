import React from 'react';

import { ScanSearch, MessageSquareText, Send, MessageCircle, TrendingUp } from 'lucide-react';

export const Process = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-24 text-slate-900">How outbound runs at Ascent</h2>

                <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">

                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center flex-none w-full md:w-32 relative z-10 group">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-200 dark:shadow-none mb-6 transition-transform group-hover:scale-110 duration-300">
                            <ScanSearch className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">ICP Research & Targeting</h3>
                        <p className="text-xs text-slate-600 leading-relaxed w-full max-w-[260px] mx-auto md:w-[220px] md:max-w-none md:absolute md:left-1/2 md:-translate-x-1/2 md:top-full md:mt-2">
                            Accounts, roles, and buying context defined through research
                        </p>
                    </div>

                    {/* Connector 1 */}
                    <div className="hidden md:flex flex-1 items-center justify-center relative h-0.5 mt-8 md:mt-10 border-t-2 border-dotted border-purple-300 dark:border-purple-800/60">
                        <div className="absolute -left-1 top-[-5px] w-2.5 h-2.5 rounded-full bg-purple-500 shadow-sm shadow-purple-500/50"></div>
                        <div className="absolute -right-1 top-[-5px] w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center flex-none w-full md:w-32 relative z-10 group">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-none mb-6 transition-transform group-hover:scale-110 duration-300">
                            <MessageSquareText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">Messaging & Positioning</h3>
                        <p className="text-xs text-slate-600 leading-relaxed w-full max-w-[260px] mx-auto md:w-[220px] md:max-w-none md:absolute md:left-1/2 md:-translate-x-1/2 md:top-full md:mt-2">
                            Messaging aligned to your offer, market, and buyer intent
                        </p>
                    </div>

                    {/* Connector 2 */}
                    <div className="hidden md:flex flex-1 items-center justify-center relative h-0.5 mt-8 md:mt-10 border-t-2 border-dotted border-cyan-300 dark:border-cyan-800/60">
                        <div className="absolute -left-1 top-[-5px] w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50"></div>
                        <div className="absolute -right-1 top-[-5px] w-2.5 h-2.5 rounded-full bg-teal-500 shadow-sm shadow-teal-500/50"></div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center flex-none w-full md:w-32 relative z-10 group">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-3xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-200 dark:shadow-none mb-6 transition-transform group-hover:scale-110 duration-300">
                            <Send className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">LinkedIn & Email Outreach</h3>
                        <p className="text-xs text-slate-600 leading-relaxed w-full max-w-[260px] mx-auto md:w-[220px] md:max-w-none md:absolute md:left-1/2 md:-translate-x-1/2 md:top-full md:mt-2">
                            Daily outbound executed with discipline across channels
                        </p>
                    </div>

                    {/* Connector 3 */}
                    <div className="hidden md:flex flex-1 items-center justify-center relative h-0.5 mt-8 md:mt-10 border-t-2 border-dotted border-teal-300 dark:border-teal-800/60">
                        <div className="absolute -left-1 top-[-5px] w-2.5 h-2.5 rounded-full bg-teal-500 shadow-sm shadow-teal-500/50"></div>
                        <div className="absolute -right-1 top-[-5px] w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm shadow-green-500/50" style={{ backgroundColor: '#22c55e' }}></div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center flex-none w-full md:w-32 relative z-10 group">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-3xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-200 dark:shadow-none mb-6 transition-transform group-hover:scale-110 duration-300" style={{ backgroundColor: '#22c55e' }}>
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">Conversations & Qualification</h3>
                        <p className="text-xs text-slate-600 leading-relaxed w-full max-w-[260px] mx-auto md:w-[220px] md:max-w-none md:absolute md:left-1/2 md:-translate-x-1/2 md:top-full md:mt-2">
                            Inbound responses handled, qualified, and progressed
                        </p>
                    </div>

                    {/* Connector 4 */}
                    <div className="hidden md:flex flex-1 items-center justify-center relative h-0.5 mt-8 md:mt-10 border-t-2 border-dotted border-green-300 dark:border-green-800/60" style={{ borderColor: '#86efac' }}>
                        <div className="absolute -left-1 top-[-5px] w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm shadow-green-500/50" style={{ backgroundColor: '#22c55e' }}></div>
                        <div className="absolute -right-1 top-[-5px] w-2.5 h-2.5 rounded-full bg-pink-500 shadow-sm shadow-pink-500/50"></div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col items-center text-center flex-none w-full md:w-32 relative z-10 group">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-200 dark:shadow-none mb-6 transition-transform group-hover:scale-110 duration-300">
                            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">Pipeline</h3>
                        <p className="text-xs text-slate-600 leading-relaxed w-full max-w-[260px] mx-auto md:w-[220px] md:max-w-none md:absolute md:left-1/2 md:-translate-x-1/2 md:top-full md:mt-2">
                            A steady flow of qualified buyer conversations created
                        </p>
                    </div>
                </div>

                <div className="text-center mt-32">
                    <p className="text-2xl md:text-3xl font-medium py-12 text-slate-800">
                        Strategy and execution operating as one system
                    </p>
                </div>
            </div>
        </section>
    );
};
