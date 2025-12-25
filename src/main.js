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

// Hero Container Hover Effect
const heroContainer = document.getElementById('hero-container')

if (heroContainer) {
  // Add perspective for 3D effect
  gsap.set(heroContainer, { transformPerspective: 1000 })

  heroContainer.addEventListener('mousemove', (e) => {
    const rect = heroContainer.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Tilt Calculation: Pushing the hovered part AWAY (into screen)
    // Mouse Left (x < center) -> rotateY should be negative (Left side goes away)
    // Mouse Right (x > center) -> rotateY should be positive (Right side goes away)
    // Mouse Top (y < center) -> rotateX should be positive (Top goes away)
    // Mouse Bottom (y > center) -> rotateX should be negative (Bottom goes away)

    const rotateY = ((x - centerX) / centerX) * 5 // Max 5 deg rotation
    const rotateX = -((y - centerY) / centerY) * 5 // Max 5 deg rotation

    // Spotlight Effect Calculation
    const spotlightX = (x / rect.width) * 100
    const spotlightY = (y / rect.height) * 100

    gsap.to(heroContainer, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    })

    // Update gradient spotlight via CSS
    heroContainer.style.background = `
      radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%),
      linear-gradient(to bottom, #52a6de 0%, rgba(59,130,246,0) 250px),
      linear-gradient(to right, #e0f2fe 0%, #52a6de 50%, #e0f2fe 100%) no-repeat
    `
    heroContainer.style.backgroundSize = 'cover, cover, cover'
  })

  heroContainer.addEventListener('mouseleave', () => {
    gsap.to(heroContainer, {
      rotationX: 0,
      rotationY: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
    })

    // Reset background to original state smoothly (approximate or just hard reset for now)
    heroContainer.style.background = `
      linear-gradient(to bottom, #52a6de 0%, rgba(59,130,246,0) 250px),
      linear-gradient(to right, #e0f2fe 0%, #52a6de 50%, #e0f2fe 100%) no-repeat
    `
    heroContainer.style.backgroundSize = 'cover'
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



