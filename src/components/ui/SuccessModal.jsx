import React from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SuccessModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-white rounded-2xl p-8 max-w-sm w-full relative z-10 shadow-2xl text-center"
                    >
                        <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-6 h-6 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-slate-800">Thank you!</h3>
                        <p className="text-slate-500 mb-6 text-sm">
                            Your request has been received and will be reviewed.
                        </p>
                        <button
                            onClick={onClose}
                            className="bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg px-6 py-2 hover:bg-slate-50 transition-colors shadow-sm text-sm"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
