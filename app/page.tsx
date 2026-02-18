'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for header transparency
      setScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section[id]');
      let current = 'intro';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
          current = section.getAttribute('id') || 'intro';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header onMobileMenuToggle={toggleMobileMenu} scrolled={scrolled} />
      <Sidebar 
        collapsed={sidebarCollapsed}
        mobileMenuOpen={mobileMenuOpen}
        activeSection={activeSection}
        onToggle={toggleSidebar}
        onMobileMenuClose={() => setMobileMenuOpen(false)}
      />
      <main className={`${styles.container} ${sidebarCollapsed ? styles.expanded : ''}`}>
        <MainContent />
      </main>
      <Footer />
    </>
  );
}
