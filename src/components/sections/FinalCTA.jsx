import React from 'react';
import { Button } from '../ui/Button';

export const FinalCTA = () => {
    return (
        <section className="py-24 bg-brand-navy border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Ready to scale?</h2>
                <div className="flex justify-center">
                    <Button variant="white" href="#book" className="px-8 py-4 text-lg">
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    );
};
