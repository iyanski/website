import * as React from "react"
import { useEffect } from "react"
import * as styles from "./index.module.css"

const Header = () => {
  useEffect(() => {
    // Mobile menu toggle with accessibility tweaks
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    const handleMenuToggle = () => {
      const open = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = open ? 'none' : 'flex';
      mobileMenu.setAttribute('aria-hidden', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
    };

    menuBtn?.addEventListener('click', handleMenuToggle);

    // Smooth in-page scroll for older browsers
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) { 
          e.preventDefault(); 
          el.scrollIntoView({behavior:'smooth', block:'start'}); 
        }
      });
    });

    return () => {
      menuBtn?.removeEventListener('click', handleMenuToggle);
    };
  }, []);

  return (
    <header>
      <div className={`${styles.container} ${styles.nav}`} role="navigation" aria-label="Primary">
        <a href="#" className={styles.logo} aria-label="Home">
          <span className={styles.logoBadge} aria-hidden="true">N</span> IanTusil
        </a>
        <nav className={styles.navLinks} aria-label="Main">
          <a href="/#work">Work</a>
          <a href="/#services">Services</a>
          <a href="/#process">Process</a>
          <a href="/blog">Blog</a>
          <a href="/#contact">Contact</a>
        </nav>
          <div className={styles.navCta}>
          <a className={styles.btn} href="https://calendly.com/your-username" target="_blank" rel="noopener noreferrer">Book a call</a>
          </div>
        <button className={styles.hamburger} aria-label="Open menu" id="menuBtn">☰</button>
      </div>
      <div className={`${styles.container} ${styles.mobileMenu}`} id="mobileMenu" aria-hidden="true">
        <a href="/#work">Work</a>
        <a href="/#services">Services</a>
        <a href="/#process">Process</a>
        <a href="/blog">Blog</a>
        <a href="/#contact">Contact</a>
      </div>
    </header>
  )
}

export default Header
