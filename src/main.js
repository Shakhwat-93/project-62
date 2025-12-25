import './style.css'
import { createIcons, icons } from 'lucide'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Initialize Icons
createIcons({ icons })

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

    // Button styling update if needed, but keeping it white/blue is fine for consistency or switch to blue/white
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
const heroTimeline = gsap.timeline()

// Horizontal Scroll for Value Prop
const track = document.getElementById('value-prop-track')
if (track) {
  // Calculate total width to scroll: Track Width - Viewport Width
  const getScrollAmount = () => {
    let trackWidth = track.scrollWidth
    return -(trackWidth - window.innerWidth)
  }

  const tween = gsap.to(track, {
    x: getScrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: "#value-prop-section",
      start: "top top",
      end: "bottom bottom", // Scroll for the entire duration of the section height
      scrub: 2, // Smoother scrubbing with inertia
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  })
}

// Other Section Animations
gsap.utils.toArray('section h2').forEach(heading => {
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading,
      start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
})

const resultsItems = gsap.utils.toArray('.space-y-4 > div')
resultsItems.forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
    },
    x: 30,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power2.out"
  })
})
