import React from 'react';

export const Outcome = () => {
    return (
        <section className="py-20 bg-brand-navy border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">What Changes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <p className="text-white/60">[Card to be restored]</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
