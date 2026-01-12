import React from 'react';

export const Results = () => {
    return (
        <section className="py-24 md:py-48 bg-white border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-6">
                {/* Centered Heading */}
                <div className="text-center mb-16 md:mb-24 relative">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                        What we own end to end
                    </h2>
                    <div className="h-1.5 w-24 bg-slate-900 mx-auto mt-8 rounded-full"></div>
                </div>

                {/* Content - Vertical Flow */}
                <div className="space-y-12">
                    {/* Block 1: The Problem */}
                    <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100/80">
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                            Outbound fails when ownership is diluted. Strategy, execution, and response handling are treated as separate tasks, distributed across people and tools, with no single party accountable for pipeline performance. <br /> <br />
                            We assume full ownership of the outbound function. We define the ICP, prioritise target accounts, establish prospect logic, develop positioning and messaging aligned to your offer and buying context, and execute outreach across LinkedIn and email. We manage responses, follow-ups, and qualification, and adjust execution based on direct prospect engagement.
                        </p>
                    </div>
                    {/* Block 3: The Result (Highlights) */}
                    <div className="text-center p-8 md:p-12 text-black transform md:scale-105 transition-transform duration-500 hover:scale-[1.07]">
                        <p className="text-xl md:text-3xl leading-relaxed">
                            You remain focused on closing. We take responsibility for everything upstream.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
