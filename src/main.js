import './style.css'
import { createIcons, icons } from 'lucide'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

// Initialize Icons
createIcons({ icons })

// Initialize Smooth Scroll (Lenis)
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle')
const htmlElement = document.documentElement

// Check local storage or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  htmlElement.classList.add('dark')
} else {
  htmlElement.classList.remove('dark')
}

themeToggleBtn.addEventListener('click', () => {
  htmlElement.classList.toggle('dark')

  if (htmlElement.classList.contains('dark')) {
    localStorage.theme = 'dark'
  } else {
    localStorage.theme = 'light'
  }
})




// GSAP Animations

// Hero Parallax on Scroll
gsap.to('#hero-container', {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: "#hero-container",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
})

// Hero Container Hover Effect (3D Tilt)
const heroContainer = document.getElementById('hero-container')

if (heroContainer) {
  // Set initial perspective
  gsap.set(heroContainer, { transformPerspective: 1000, transformStyle: "preserve-3d" })

  heroContainer.addEventListener('mousemove', (e) => {
    const rect = heroContainer.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Map mouse position to rotation (Subtle tilt range: -2 to 2 degrees)
    // When mouse is Left, rotateY is negative (tilts left side back? No, rotateY(-deg) moves left side *forward* usually, let's test logic)
    // Actually:
    // Mouse Left -> We want Left side to push BACK? "corner moves back"
    // If Left side pushes back, that looks like rotateY being negative?
    // Let's stick to standard 3D tilt: Mouse Left -> Tilt Left (Left goes down/away).
    // RotateY: Positive moves Right side away (Left side close). Negative moves Left side away (Right side close).
    // So if Mouse is on Left (x < center), we want Left side away -> RotateY should be Negative.

    // Correction:
    // Standard tilt: Mouse Top-Left -> Object tilts Top-Left back.
    // rotationX: + tilts top closer, - tilts top away. So Mouse Top -> rotationX positive? No, Mouse at Top -> Top should go AWAY -> RotationX Positive (Top moves into screen). 
    // Wait, CSS coords:
    // rotateX(pos) -> top moves AWAY into screen.
    // rotateY(pos) -> right moves AWAY into screen.

    // So:
    // Mouse X (0 to width) -> mapped to rotateY (-5 to 5). 
    // 0 (Left) -> -5 (Left moves away? No wait).
    // Let's use standard logic:
    // percentX = (x - centerX) / centerX
    // percentY = (y - centerY) / centerY

    // rotateY = percentX * strength (e.g. 5)
    // If mouse is Right (positive percent), rotateY is positive (Right moves away).
    // rotateX = -1 * percentY * strength
    // If mouse is Bottom (positive percent), rotateX is negative (Bottom moves away/up? No, usually Bottom Back is rotateX negative).

    // Let's try:
    // Mouse Top (y small): We want Top Away -> rotateX (>0)
    // Mouse Bottom (y large): We want Bottom Away -> rotateX (<0)

    const rotateY = ((mouseX - centerX) / centerX) * 3 // Max 3 deg
    const rotateX = -((mouseY - centerY) / centerY) * 3 // Max 3 deg

    gsap.to(heroContainer, {
      rotationY: rotateY,
      rotationX: rotateX,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    })
  })

  heroContainer.addEventListener('mouseleave', () => {
    gsap.to(heroContainer, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)'
    })
  })
}


// Global Button Scale Effect
gsap.utils.toArray('button, a[href^="#"]').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'back.out(1.7)' })
  })
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' })
  })
})

// Hero CTA Button 3D Tilt
const heroBtn = document.getElementById('hero-cta')

if (heroBtn) {
  gsap.set(heroBtn, { transformPerspective: 800, transformStyle: "preserve-3d" })

  heroBtn.addEventListener('mousemove', (e) => {
    const rect = heroBtn.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Stronger tilt for button (max 10deg)
    const rotateY = ((mouseX - centerX) / centerX) * 12
    const rotateX = -((mouseY - centerY) / centerY) * 12

    gsap.to(heroBtn, {
      rotationY: rotateY,
      rotationX: rotateX,
      scale: 1.1, // Slight scale up
      duration: 0.1,
      ease: 'power1.out',
      overwrite: 'auto'
    })
  })

  heroBtn.addEventListener('mouseleave', () => {
    gsap.to(heroBtn, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    })
  })
}

// Section Text Reveal Animations (Headings & Paragraphs)
const sections = document.querySelectorAll('section')

sections.forEach(section => {
  // Animate Headings
  const headings = section.querySelectorAll('h2, h3')
  headings.forEach(h => {
    gsap.fromTo(h,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: h,
          start: 'top 85%',
        }
      }
    )
  })

  // Animate Paragraphs
  const paras = section.querySelectorAll('p')
  paras.forEach(p => {
    gsap.fromTo(p,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2, // slight delay after heading
        ease: 'power3.out',
        scrollTrigger: {
          trigger: p,
          start: 'top 90%',
        }
      }
    )
  })

  // Animate Grid Items / Cards (Staggered)
  const gridItems = section.querySelectorAll('.grid > div, .flex > div.group')
  if (gridItems.length > 0) {
    gsap.fromTo(gridItems,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section, // animate when section starts entering
          start: 'top 75%',
        }
      }
    )
  }
})



