import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code2, FolderKanban, Mail } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
  forceSolid?: boolean;
  onBeforeNavigate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick, forceSolid = false, onBeforeNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { id: 'home', label: 'Home', icon: <Home size={16} />, mobileIcon: <Home size={22} /> },
    { id: 'about', label: 'About Me', icon: <User size={16} />, mobileIcon: <User size={22} /> },
    { id: 'skills', label: 'Skills', icon: <Code2 size={16} />, mobileIcon: <Code2 size={22} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={16} />, mobileIcon: <FolderKanban size={22} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} />, mobileIcon: <Mail size={22} /> },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onBeforeNavigate?.();
    onNavClick(id);
  };

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
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
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
                <span className="nav-mobile-icon">{item.mobileIcon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};