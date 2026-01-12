import React from 'react';

export const Footer = () => {
    return (
        <footer className="mx-4 md:mx-8 mb-6 rounded-3xl py-6 md:py-8 overflow-hidden bg-brand-navy text-white/80 border border-white/10 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 md:gap-4 mb-6 md:mb-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <img
                            src="/assets/logo-main.png"
                            alt="Ascent"
                            className="h-32 md:h-48 w-auto object-contain brightness-0 invert -ml-2 -mt-10 md:-mt-16"
                        />
                        <p className="text-[10px] md:text-xs font-medium text-center md:text-left text-white/60 max-w-xs">
                            Outbound growth partner for scaling B2B companies.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
                        <div className="flex items-center gap-4 md:gap-6">
                            <a href="#" className="text-[10px] md:text-xs font-medium text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-[10px] md:text-xs font-medium text-white/60 hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="text-[10px] md:text-xs font-medium text-white/60 hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2">
                    <div className="font-medium text-[10px] text-white/40">
                        © 2026 Ascent. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
