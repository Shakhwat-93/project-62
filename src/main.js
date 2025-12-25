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


// Navbar Scroll Effect
const navbar = document.getElementById('navbar')
const navLogo = document.getElementById('nav-logo')
const navButton = navbar.querySelector('a[href="#book"]')
const themeToggleIcon = navbar.querySelector('button i')

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('bg-white/90', 'shadow-sm', 'backdrop-blur-md')
    navbar.classList.remove('border-transparent')
    if (document.documentElement.classList.contains('dark')) {
      navbar.classList.add('dark:bg-slate-900/90', 'dark:border-slate-800')
    }

    // Switch Text to Dark (or White in Dark Mode)
    navLogo.classList.remove('text-white')
    navLogo.classList.add('text-brand-text', 'dark:text-white')

    // Button styling update
    navButton.classList.remove('bg-white', 'text-blue-600')
    navButton.classList.add('bg-blue-600', 'text-white')

  } else {
    navbar.classList.remove('bg-white/90', 'shadow-sm', 'backdrop-blur-md', 'dark:bg-slate-900/90', 'dark:border-slate-800')
    navbar.classList.add('border-transparent')

    // Revert to White Text
    navLogo.classList.add('text-white')
    navLogo.classList.remove('text-brand-text', 'dark:text-white')

    // Revert Button
    navButton.classList.add('bg-white', 'text-blue-600')
    navButton.classList.remove('bg-blue-600', 'text-white')
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

// Hero Container Hover Effect (Preserved)
const heroContainer = document.getElementById('hero-container')

if (heroContainer) {
  heroContainer.addEventListener('mousemove', (e) => {
    const rect = heroContainer.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const width = rect.width
    const height = rect.height

    const isTop = y < height / 2
    const isLeft = x < width / 2

    // Default radius
    const defaults = {
      borderTopLeftRadius: '2.5rem',
      borderTopRightRadius: '2.5rem',
      borderBottomRightRadius: '2.5rem',
      borderBottomLeftRadius: '2.5rem',
      duration: 0.5,
      ease: 'power2.out'
    }

    // Target radius for the active corner
    const activeRadius = '100px'

    const targets = { ...defaults }

    if (isTop && isLeft) targets.borderTopLeftRadius = activeRadius
    if (isTop && !isLeft) targets.borderTopRightRadius = activeRadius
    if (!isTop && !isLeft) targets.borderBottomRightRadius = activeRadius
    if (!isTop && isLeft) targets.borderBottomLeftRadius = activeRadius

    // Slightly faster duration for responsiveness with smooth ease
    targets.duration = 0.4

    gsap.to(heroContainer, targets)
  })

  heroContainer.addEventListener('mouseleave', () => {
    gsap.to(heroContainer, {
      borderTopLeftRadius: '2.5rem',
      borderTopRightRadius: '2.5rem',
      borderBottomRightRadius: '2.5rem',
      borderBottomLeftRadius: '2.5rem',
      duration: 0.5,
      ease: 'power2.out'
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



