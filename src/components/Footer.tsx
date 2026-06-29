import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ activeSection, onNavClick }) => {
  const footerItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavClick(id);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-area">
      <div className="container footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Ricky Moreno A.R.</h3>
            <p>Full-Stack Engineer</p>
          </div>

          {/* Footer Navigation that moves/highlights active section just like header */}
          <nav className="footer-nav">
            <ul className="footer-nav-links">
              {footerItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`footer-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Scroll to Top Button */}
          <button 
            className="scroll-top-btn" 
            onClick={scrollToTop} 
            aria-label="Kembali ke atas"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Footer Bottom Divider */}
        <hr className="footer-divider" />

        {/* Footer Bottom Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Ricky Moreno A.R. All rights reserved.
          </p>
          <p className="footer-tagline">
            Dibuat dengan dedikasi & keahlian.
          </p>
        </div>
      </div>
    </footer>
  );
};
