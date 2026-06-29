import React from 'react';
import { User, BookOpen, Compass, Trophy } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const quickFacts = [
    {
      icon: <User size={20} className="fact-icon-img" />,
      label: 'Nama Lengkap',
      value: 'Ricky Moreno A.R.',
    },
    {
      icon: <Compass size={20} className="fact-icon-img" />,
      label: 'Domisili',
      value: 'Sidoarjo, Jawa Timur, Indonesia',
    },
    {
      icon: <BookOpen size={20} className="fact-icon-img" />,
      label: 'Fokus Utama',
      value: 'Frontend & Backend Web Apps, Robotics Engineering',
    },
    {
      icon: <Trophy size={20} className="fact-icon-img" />,
      label: 'Minat',
      value: 'UI/UX Design, Open Source, Clean Code, Robotics, AI',
    },
  ];

  const traits = [
    'Penyelesai Masalah',
    'Cepat Belajar',
    'Kerja Sama Tim',
    'Detail-Oriented',
    'Disiplin Tinggi',
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title animate-fade">About Me</h2>
        
        <div className="about-grid">
          {/* Left Column: Personality Details */}
          <div className="about-left animate-left">
            <h3 className="about-subtitle">Kepribadian & Filosofi Kerja</h3>
            <p className="about-text">
              Saya adalah seorang pelajar web developer yang sangat antusias terhadap teknologi baru dan pemecahan masalah. Dalam setiap proyek yang saya kerjakan, saya selalu mengutamakan penulisan kode yang bersih (clean code), terstruktur, dan mudah dipelihara.
            </p>
            <p className="about-text">
              Kepribadian saya yang tenang, komunikatif, dan senang berkolaborasi membuat saya dapat beradaptasi dengan cepat di lingkungan kerja tim maupun individu. Saya percaya bahwa komunikasi yang jelas dan pemahaman empati terhadap kebutuhan pengguna adalah kunci utama untuk melahirkan produk digital berkualitas.
            </p>
            <p className="about-text">
              Di luar aspek teknis coding, saya sangat menikmati proses mendesain antarmuka pengguna (UI/UX) yang intuitif. Memperhatikan detail kecil seperti micro-interactions dan transisi yang halus adalah hal yang selalu saya upayakan demi meningkatkan kenyamanan pengguna ketika berselancar di website yang saya bangun.
            </p>
            <p className="about-text">
              Sebagai seorang pengembang, filosofi utama saya adalah "apa yang sudah diambil harus diselesaikan". Saya percaya bahwa menyelesaikan sebuah tanggung jawab proyek hingga tuntas—menghadapi setiap bug dan tantangan di dalamnya—adalah kunci utama untuk terus berkembang dan melahirkan produk digital berkualitas.
            </p>
          </div>

          {/* Right Column: Additional Facts & Stats */}
          <div className="about-right animate-right">
            <h3 className="about-subtitle">Informasi Tambahan</h3>
            
            <div className="about-facts-list">
              {quickFacts.map((fact, index) => (
                <div key={index} className="about-fact-card">
                  <div className="fact-icon-wrapper">
                    {fact.icon}
                  </div>
                  <div className="fact-info">
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-traits-area">
              <h4 className="about-traits-title">Karakter Utama</h4>
              <div className="about-traits-tags">
                {traits.map((trait, index) => (
                  <span key={index} className="trait-tag">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
