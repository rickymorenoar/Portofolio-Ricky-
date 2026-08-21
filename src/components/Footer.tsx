import React from 'react';
import { ArrowUp, Home, User, Code2, FolderKanban, Mail } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ activeSection, onNavClick }) => {
  const footerItems = [
    { id: 'home', label: 'Home', icon: <Home size={15} /> },
    { id: 'about', label: 'About Me', icon: <User size={15} /> },
    { id: 'skills', label: 'Skills', icon: <Code2 size={15} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={15} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={15} /> },
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
            <p>Pelajar SMK Negeri 2 Buduran</p>
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
                    <span className="footer-nav-icon">{item.icon}</span>
                    <span>{item.label}</span>
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
