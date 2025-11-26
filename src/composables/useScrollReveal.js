import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable composable for scroll reveal animations.
 * @param {import('vue').Ref<HTMLElement | null>} elementRef - The template ref of the element to animate.
 * @param {Object} [options] - Optional configuration for the animation.
 * @param {Object} [options.from] - GSAP 'from' vars (default: { opacity: 0, y: 40 }).
 * @param {Object} [options.to] - GSAP 'to' vars (default: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }).
 * @param {Object} [options.scrollTrigger] - ScrollTrigger configuration.
 */
export function useScrollReveal(elementRef, options = {}) {
  let animation = null;

  onMounted(() => {
    if (!elementRef.value) return;

    // Ensure we are on the client
    if (typeof window === 'undefined') return;

    // Find the scroll container (the right panel with custom-scrollbar class)
    const scrollContainer = document.querySelector('.custom-scrollbar');
    
    // Set initial state to visible to prevent blank sections
    gsap.set(elementRef.value, { opacity: 1, y: 0 });

    // Only apply scroll animation if we have a scroll container
    if (scrollContainer) {
      animation = gsap.fromTo(
        elementRef.value,
        {
          opacity: 0,
          y: 40,
          ...options.from
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.value,
            scroller: scrollContainer, // Use the custom scroll container
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            markers: false, // Set to true for debugging
            ...options.scrollTrigger
          },
          ...options.to
        }
      );
    }
  });

  onUnmounted(() => {
    if (animation) {
      animation.kill();
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
    }
  });
}
