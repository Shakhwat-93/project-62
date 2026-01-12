import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({
    children,
    variant = 'primary',
    className,
    href,
    type = 'button',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none px-6 py-3 text-base md:px-8 md:py-4 md:text-lg";

    const variants = {
        primary: "bg-brand-navy text-white hover:scale-105 shadow-xl shadow-blue-500/20",
        white: "bg-white text-brand-navy hover:scale-105 shadow-xl",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-navy",
        form: "w-full py-5 bg-gradient-to-r from-brand-navy to-slate-900 text-white shadow-lg hover:-translate-y-1 group"
    };

    const combinedClasses = twMerge(baseStyles, variants[variant], className);

    if (href) {
        return (
            <a href={href} className={combinedClasses} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={combinedClasses} {...props}>
            {children}
        </button>
    );
};
