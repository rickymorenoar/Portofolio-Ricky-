import { ArrowRight } from 'lucide-react';
import './Home.css';

interface HomeProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onContactClick, onProjectsClick }) => {
  return (
    <section id="home" className="home-section">
      <div className="container home-container">
        {/* Left Side: Text and Bio */}
        <div className="home-content animate-left">
          <span className="home-greeting">Halo, selamat datang! Saya</span>
          <h1 className="home-name">Ricky Moreno A.R.</h1>
          <div className="home-role-wrapper">
            <span className="home-role">Pelajar SMK Negeri 2 Buduran</span>
          </div>
          <p className="home-description">
           Seorang pelajar dari SMK Negeri 2 Buduran yang memiliki ketertarikan dalam bidang web development, UI/UX design, dan teknologi terbaru.
          </p>
          <div className="home-cta-group">
            <button className="btn btn-primary" onClick={onProjectsClick}>
              Lihat Project <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary" onClick={onContactClick}>
              Hubungi Saya
            </button>
          </div>
        </div>

        {/* Right Side: Portrait Photo */}
        <div className="home-image-area animate-right">
          <div className="home-image-wrapper">
            {/* Elegant non-neon clean border decor */}
            <div className="home-image-decor-1"></div>
            <div className="home-image-decor-2"></div>
            <img 
              src="/ricky.webp" 
              alt="Ricky Moreno A.R." 
              className="home-portrait"
              onError={(e) => {

                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
