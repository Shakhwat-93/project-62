import { useLayoutEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export function useGSAP(effect, dependencies = []) {
    const scope = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(effect, scope);
        return () => ctx.revert();
    }, dependencies);

    return { scope };
}
