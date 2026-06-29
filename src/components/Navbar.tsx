import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
  /**
   * Saat true, navbar dipaksa memakai tampilan solid + blur (class 'scrolled glass')
   * terlepas dari posisi scroll. Dipakai supaya navbar tidak transparan/tembus
   * ketika modal project (mobile) sedang terbuka.
   */
  forceSolid?: boolean;
  /**
   * Dipanggil tepat sebelum navigasi terjadi (klik logo/menu/hamburger link).
   * Dipakai App untuk menutup modal project yang sedang terbuka, supaya user
   * tidak menavigasi sambil modal masih kebuka di belakang.
   */
  onBeforeNavigate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick, forceSolid = false, onBeforeNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for applying a shadow/border on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile navbar drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onBeforeNavigate?.();
    onNavClick(id);
  };

  // Navbar tampil solid+blur jika sudah di-scroll ATAU dipaksa solid dari luar (modal terbuka)
  const showSolid = scrolled || forceSolid;

  return (
    <header className={`navbar-header ${showSolid ? 'scrolled glass' : ''}`}>
      <div className="navbar-container">
        {/* Brand Name Left */}
        <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          Ricky Moreno A.R.
        </a>

        {/* Desktop Navbar Right */}
        <nav className="navbar-desktop">
          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar-mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-mobile-links">
          {navItems.map((item) => (
            <li key={item.id} className="navbar-mobile-item">
              <a
                href={`#${item.id}`}
                className={`navbar-mobile-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};