'use client';

import styles from './Sidebar.module.css';

interface SidebarProps {
  collapsed: boolean;
  mobileMenuOpen: boolean;
  activeSection: string;
  onToggle: () => void;
  onMobileMenuClose: () => void;
}

export default function Sidebar({ collapsed, mobileMenuOpen, activeSection, onToggle, onMobileMenuClose }: SidebarProps) {
  const navItems = [
    { id: 'intro', label: 'Introduction', section: 'Getting Started' },
    { id: 'getting-started', label: 'Get Started', section: 'Getting Started' },
    { id: 'learning', label: 'Learning Tips', section: 'Getting Started' },
    { id: 'chapter1', label: 'Ch 1: Introduction to C', section: 'Chapters' },
    { id: 'chapter2', label: 'Ch 2: Arithmetic Operations', section: 'Chapters' },
    { id: 'chapter3', label: 'Ch 3: Mathematical Formulas', section: 'Chapters' },
    { id: 'chapter4', label: 'Ch 4: Conditional Logic', section: 'Chapters' },
    { id: 'chapter5', label: 'Ch 5: Loops & Iteration', section: 'Chapters' },
    { id: 'chapter6', label: 'Ch 6: Advanced Numbers', section: 'Chapters' },
    { id: 'chapter7', label: 'Ch 7: Number Manipulation', section: 'Chapters' },
    { id: 'chapter8', label: 'Ch 8: Pattern Printing', section: 'Chapters' },
    { id: 'chapter9', label: 'Ch 9: Arrays', section: 'Chapters' },
    { id: 'chapter10', label: 'Ch 10: Functions', section: 'Chapters' },
    { id: 'chapter11', label: 'Ch 11: Strings', section: 'Chapters' },
    { id: 'reference', label: 'Quick Reference', section: 'Resources' },
    { id: 'faq', label: 'FAQ', section: 'Resources' },
    { id: 'resources', label: 'Additional Resources', section: 'Resources' },
  ];

  const sections = ['Getting Started', 'Chapters', 'Resources'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Close mobile sidebar
    if (window.innerWidth <= 768) {
      onMobileMenuClose();
    }
  };

  return (
    <>
      <button 
        className={`${styles.sidebarToggle} ${collapsed ? styles.collapsed : ''}`}
        onClick={onToggle}
        aria-label="Toggle sidebar"
      >
        {collapsed ? '▶' : '◀'}
      </button>

      <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''} ${mobileMenuOpen ? styles.show : ''}`} id="sidebar">
        <div className={styles.sidebarHeader}>
          <h2>📚 Table of Contents</h2>
        </div>
        <nav>
          <ul className={styles.navMenu}>
            {sections.map((section) => (
              <div key={section}>
                <li className={styles.navSectionTitle}>{section}</li>
                {navItems
                  .filter((item) => item.section === section)
                  .map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={activeSection === item.id ? styles.active : ''}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
              </div>
            ))}
          </ul>
        </nav>
      </aside>

      <div 
        className={`${styles.overlay} ${mobileMenuOpen ? styles.show : ''}`}
        onClick={onMobileMenuClose}
      />
    </>
  );
}
