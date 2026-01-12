import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CommercialStructure = () => {
    const container = useRef();
    const headingRef = useRef();
    const text1Ref = useRef();
    const text2Ref = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                end: "bottom bottom",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(headingRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        })
            .from([text1Ref.current, text2Ref.current], {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.4");

    }, { scope: container });

    return (
        <section className="py-24 bg-white" id="work" ref={container}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 ref={headingRef} className="text-3xl md:text-5xl font-bold mt-4 mb-8 text-slate-900">Commercial structure</h2>

                <p ref={text1Ref} className="text-xl md:text-2xl text-slate-800 leading-relaxed mb-6 font-medium">
                    Engagements are structured as a monthly retainer.
                </p>

                <p ref={text2Ref} className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto" style={{ textWrap: 'balance' }}>
                    Scope is defined during an initial strategy session and aligned to your ICP, offer, and sales motion. There are no pre-packaged services or fixed tiers.
                </p>
            </div>
        </section>
    );
};
