import React from 'react';
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
    return (
        <div className="bg-brand-navy min-h-screen text-white font-sans selection:bg-brand-blue/30">
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
