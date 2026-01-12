import React from 'react';
import { Button } from '../ui/Button';

export const FinalCTA = () => {
    return (
        <section className="py-24 md:py-48 text-center bg-white" id="book">
            <div className="max-w-5xl mx-auto px-6">
                <p className="text-xl py-12 md:text-3xl font-medium text-slate-900 mb-10">
                    If outbound feels inconsistent or heavier than it should be, <br className="hidden md:block" /> the issue is almost always structural.
                </p>
                <div className="flex flex-col items-center gap-6">
                    <Button
                        href="/contact"
                        variant="primary"
                        className="px-10 py-5 bg-[#18194a] text-white rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-blue-500/20 w-full sm:w-auto hover:bg-slate-800"
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    );
};
