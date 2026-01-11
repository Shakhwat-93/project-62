import React from 'react';

export const Results = () => {
    return (
        <section className="py-24 md:py-36 md:px-36 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-12 items-start">
                    {/* Left: Heading */}
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">What we own end to end</h2>
                    </div>

                    {/* Right: Text */}
                    <div className="space-y-8 mt-4 md:mt-0">
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Outbound fails when ownership is diluted. Strategy, execution, and response handling are treated as separate tasks, distributed across people and tools, with no single party accountable for pipeline performance.
                        </p>

                        <p className="text-xl text-slate-600 leading-relaxed">
                            We assume full ownership of the outbound function. We define the ICP, prioritise target accounts, establish prospect logic, develop positioning and messaging aligned to your offer and buying context, and execute outreach across LinkedIn and email. We manage responses, follow-ups, and qualification, and adjust execution based on direct prospect engagement.
                        </p>

                        <p className="text-lg text-slate-900 leading-relaxed font-bold">
                            You remain focused on closing. We take responsibility for everything upstream.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
