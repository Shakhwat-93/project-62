import React from 'react';
import { Button } from '../ui/Button';

export const FinalCTA = () => {
    return (
        <section className="py-24 md:py-48 text-center bg-white" id="book">
            <div className="w-full mx-auto px-6">
                <p className="text-xl md:text-2xl font-medium text-slate-900 mb-10 leading-relaxed max-w-7xl mx-auto" style={{ textWrap: 'balance' }}>
                    When outbound underperforms, the cause is rarely channel saturation or messaging fatigue.
                    <br className="block my-6" />
                    It is almost always structural misalignment. We design for structure first.
                </p>
                <div className="flex flex-col items-center gap-6">
                    <Button
                        href="/contact"
                        variant="primary"
                        className="px-10 py-5 bg-[#18194a] text-white rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-blue-500/20 w-full sm:w-auto hover:bg-slate-800"
                    >
                        Request a Conversation
                    </Button>
                </div>
            </div>
        </section>
    );
};
