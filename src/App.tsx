import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Status modal detail project (mobile). Diangkat ke App (bukan state
  // internal di Projects) supaya bisa dibaca oleh Navbar (untuk memaksa
  // tampilan solid+blur, tidak transparan) dan ditutup dari Navbar saat
  // user menekan menu navigasi sementara modal masih terbuka.
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Scroll Spy & Scroll Reveal Observer Implementation
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    // Make home section visible immediately on load
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.classList.add('is-visible');
    }

    // Observer for Active Navbar Section
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -40% 0px', threshold: 0 }
    );

    // Observer for Scroll Reveal Animations
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    sections.forEach((section) => {
      activeObserver.observe(section);
      revealObserver.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        activeObserver.unobserve(section);
        revealObserver.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Temporarily disable the observer or just scroll smoothly.
      // Modern browsers respect html { scroll-padding-top: var(--nav-height) }
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Sticky Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        forceSolid={isProjectModalOpen}
        onBeforeNavigate={() => setIsProjectModalOpen(false)}
      />
      
      {/* Page Sections */}
      <main>
        <Home 
          onContactClick={() => handleNavClick('contact')} 
          onProjectsClick={() => handleNavClick('projects')} 
        />
        <About />
        <Skills />
        <Projects
          isModalOpen={isProjectModalOpen}
          setIsModalOpen={setIsProjectModalOpen}
        />
        <Contact />
      </main>

      {/* Footer Navigation */}
      <Footer activeSection={activeSection} onNavClick={handleNavClick} />
    </>
  );
}

export default App;