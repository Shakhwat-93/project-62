import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export const SuccessModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-brand-navy border border-white/10 p-8 rounded-2xl max-w-md w-full text-center relative"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Request Received</h3>
                        <p className="text-white/60 mb-6">We'll be in touch shortly.</p>
                        <Button variant="white" onClick={onClose}>Close</Button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
