import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Results } from '../components/sections/Results';
import { Process } from '../components/sections/Process';
import { CommercialStructure } from '../components/sections/CommercialStructure';
import { Outcome } from '../components/sections/Outcome';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Footer } from '../components/layout/Footer';

export const Home = () => {
    return (
        <div className="bg-white min-h-screen text-slate-900 selection:bg-brand-blue/30 selection:text-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <Results />
            <Process />
            <CommercialStructure />
            <Outcome />
            <FinalCTA />
            <Footer />
        </div>
    );
};
