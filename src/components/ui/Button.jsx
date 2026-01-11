import React from 'react';
import { cn } from '../../lib/utils';

export const Button = ({ className, variant = 'primary', href, children, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 cursor-pointer";

    const variants = {
        primary: "bg-brand-orange text-white hover:bg-brand-orange/90",
        white: "bg-white text-brand-navy hover:bg-gray-100",
        glass: "bg-white/10 backdrop-blur-md text-white border border-white/10 hover:bg-white/20",
        form: "w-full bg-brand-orange text-white hover:bg-brand-orange/90 py-3 rounded-lg"
    };

    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </Component>
    );
};
