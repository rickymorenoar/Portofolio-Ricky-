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

  // Scroll Spy Implementation using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    // We adjust the rootMargin to detect the active section when it fills the upper middle part of the viewport
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
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