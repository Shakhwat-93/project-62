/* Agency Script - Interactions & Motion */

console.log('Agency Layer Loaded');

// --- Lenis Smooth Scroll Initialization ---
const initLenis = () => {
    if (typeof Lenis !== 'undefined') {
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
        console.log('Lenis initialized');
    } else {
        console.warn('Lenis not found. Ensure CDN is loaded.');
    }
};

// --- GSAP Animations ---
const initAnimations = () => {
    // ScrollTrigger is registered in index.html to support bundled code
    // We just check if it's available here
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {

        // Ensure defaults
        gsap.defaults({ ease: "power3.out" });

        // Hero Content Reveal
        const heroTimeline = gsap.timeline();

        // ... (rest of animation code)
        heroTimeline
            .fromTo('#hero-static h1', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2 })
            .fromTo('#hero-static p', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
            .fromTo('#hero-cta', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, '-=0.4');

        // Scroll Reveal for Sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            // Check if section actually has children to animate
            if (section.children.length > 0) {
                gsap.fromTo(section.children,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }
        });

        console.log('GSAP animations initialized');

    } else {
        console.warn('GSAP or ScrollTrigger not found.');
    }
};

// --- Initialize on Load ---
document.addEventListener('DOMContentLoaded', () => {
    initLenis();

    // Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
        console.log('Lucide icons initialized');
    } else {
        console.warn('Lucide library not found');
    }

    setTimeout(initAnimations, 100); // Small delay to ensure layout is ready
});
