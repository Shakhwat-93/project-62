import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { SuccessModal } from '../ui/SuccessModal';

export const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <section id="book" className="py-20 bg-brand-navy border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Request a Conversation</h2>
                        <p className="text-white/60 mb-8">[Content to be restored]</p>
                    </div>
                </div>
                <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </section>
    );
};
