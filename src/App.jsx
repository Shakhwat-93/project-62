import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Results } from './components/sections/Results';
import { Process } from './components/sections/Process';
import { CommercialStructure } from './components/sections/CommercialStructure';
import { Outcome } from './components/sections/Outcome';
import { Contact } from './components/sections/Contact';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="bg-white min-h-screen text-slate-900 selection:bg-brand-blue/30 selection:text-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <Results />
            <Process />
            <CommercialStructure />
            <Outcome />
            <Contact />
            <FinalCTA />
            <Footer />
        </div>
    );
}

export default App;
