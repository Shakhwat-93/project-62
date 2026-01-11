import React from 'react';
import { Button } from '../ui/Button';

export const Navbar = () => {
    return (
        <nav className="absolute top-0 w-full z-50 px-6 py-2 transition-all duration-300" id="navbar">
            <div className="max-w-7xl mx-auto flex items-start justify-between">
                <a href="#" className="transition-opacity duration-300 hover:opacity-80 -mt-2 md:-mt-4" id="nav-logo">
                    <img
                        src="/assets/logo-main.png"
                        alt="Ascent Logo"
                        className="h-28 md:h-40 w-auto object-contain brightness-0 invert origin-left"
                    />
                </a>
                <div className="hidden md:flex items-center gap-6 mt-3 md:mt-4">
                    <Button variant="glass" href="#book" className="px-6 py-2.5 font-medium rounded-full">
                        Contact Us
                    </Button>
                </div>
            </div>
        </nav>
    );
};
