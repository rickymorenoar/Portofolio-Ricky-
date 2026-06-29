import React from 'react';
import './Skills.css';

interface Skill {
  name: string;
  category: string;
  level: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const Skills: React.FC = () => {
  const skillsData: Skill[] = [
    {
      name: 'React',
      category: 'Frontend Library',
      level: 'Advanced',
      description: 'Membangun Single Page Application (SPA) yang cepat dengan state management modern.',
      color: '#00d8ff',
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#00d8ff" strokeWidth="1.2">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          <circle r="2" fill="#00d8ff"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      category: 'Language',
      level: 'Advanced',
      description: 'Menulis kode JavaScript yang aman dan terstruktur dengan static typing yang kuat.',
      color: '#3178c6',
      icon: (
        <svg viewBox="0 0 100 100" fill="#3178c6">
          <rect width="100" height="100" rx="16"/>
          <text x="50" y="72" fill="white" fontSize="42" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" textAnchor="middle">TS</text>
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      category: 'Language',
      level: 'Expert',
      description: 'Menguasai ES6+, manipulasi DOM, pemrograman asinkronus, dan logika bisnis frontend.',
      color: '#f7df1e',
      icon: (
        <svg viewBox="0 0 100 100" fill="#f7df1e">
          <rect width="100" height="100" rx="16"/>
          <text x="50" y="72" fill="black" fontSize="42" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" textAnchor="middle">JS</text>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      category: 'CSS Framework',
      level: 'Expert',
      description: 'Mendesain layout yang responsif dengan cepat menggunakan pendekatan utility-first.',
      color: '#38bdf8',
      icon: (
        <svg viewBox="0 0 256 256" fill="none">
          {/* Background Kotak Tailwind Blue (rx=40 pas dengan skala 256) */}
          <rect width="256" height="256" rx="40" fill="#0ea5e9" stroke="none"/>
          
          {/* Wrapper Group untuk nge-shift koordinat gelombang biar pas di tengah kotak */}
          <g transform="translate(0, 51)" fill="#ffffff">
            {/* Path Resmi Double Wave Tailwind CSS */}
            <path d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z" />
          </g>
        </svg>
      ),
    },
    {
      name: 'Laravel',
      category: 'Backend Framework',
      level: 'Advanced',
      description: 'Membangun arsitektur backend MVC, sistem routing, autentikasi aman, dan middleware.',
      color: '#ff2d20',
      icon: (
      <svg viewBox="0 0 1888 1888" fill="none">
          {/* Background Kotak Merah (rx=300 biar skala kelengkungannya pas sama ukuran 1888) */}
          <rect width="1888" height="1888" rx="300" fill="#ff2d20" stroke="none"/>
          
          {/* Path Asli Resmi dari GitHub yang udah diconvert jadi warna putih */}
          <path 
            fill="#ffffff" 
            d="M791.5 1714L215 1381.5c-8.5-5.5-15-8.5-15-19.5V357.5c0-8.158 5-13.5 9.5-16L502 173c9.5-5.5 17.5-5.5 26.5 0L819 340c11.5 6.5 12 15 12 22.5v622L1073.5 845V527c0-11 5-17.5 17-24.5L1380 336c7-4 12.5-4 19.5 0l295 170c9.5 5.5 10.5 12 10.5 21.5V858c0 10.5-2.5 16-13 22.5l-278.5 160v317c0 12.5-3 17.5-14 24L821 1714c-11 6-18.5 6-29.5 0zm-9-61.5v-279l-276-156c-9-5.5-15.5-9.5-15.5-23V543L248 403.5V1345zm583-307.5v-277L831 1373.5v279zm-25.528-318.167L1098 886.5 565 1194l241 137zM782.5 1012V403L540 543v609zm583-28V708l-243-140v277zm291-139V568l-243 140v276zm-267-179.5l242-139.5-242-139.5L1147 526zM757.635 361.004L515 221.5 273 361l242 140z"
          />
        </svg>
      ),
    },
    {
      name: 'PHP',
      category: 'Language',
      level: 'Expert',
      description: 'Mengembangkan logika backend tangguh dan integrasi database relasional.',
      color: '#777bb4',
      icon: (
        <svg viewBox="0 0 100 100" fill="#777bb4">
          <rect width="100" height="100" rx="16"/>
          <ellipse cx="50" cy="50" rx="36" ry="22" fill="none" stroke="white" strokeWidth="5" />
          <text x="50" y="58" fill="white" fontSize="24" fontFamily="Georgia, serif" fontWeight="bold" fontStyle="italic" textAnchor="middle">php</text>
        </svg>
      ),
    },
    {
      name: 'MySQL DB',
      category: 'Database',
      level: 'Advanced',
      description: 'Merancang skema database relasional, menulis query SQL kompleks, dan optimasi database.',
      color: '#00758f',
      icon: (
      <svg viewBox="0 0 490.667 490.667" fill="none">
          {/* Background Kotak Biru MySQL (rx=80 biar lengkungan sudutnya proporsional di skala 490) */}
          <rect width="490.667" height="490.667" rx="80" fill="#4479a1" stroke="none"/>
          
          {/* Grouping warna putih murni untuk semua elemen icon bawaan GitHub */}
          <g fill="#ffffff">
            {/* Logo Silinder Tumpuk (Database) */}
            <path d="M245.333,0C172.928,0,96,22.421,96,64v192c0,42.027,75.115,64,149.333,64s149.333-21.973,149.333-64V64
              C394.667,22.421,317.739,0,245.333,0z M373.333,256c0,20.181-52.565,42.667-128,42.667s-128-22.485-128-42.667v-29.909
              c27.883,19.584,78.933,29.909,128,29.909s100.117-10.325,128-29.909V256z M373.333,192c0,17.813-48.704,42.667-128,42.667
              s-128-24.853-128-42.667v-29.909c27.883,19.584,78.933,29.909,128,29.909s100.117-10.325,128-29.909V192z M373.333,128
              c0,17.813-48.704,42.667-128,42.667s-128-24.853-128-42.667V98.091c27.883,19.584,78.933,29.909,128,29.909
              s100.117-10.325,128-29.909V128z M245.333,106.667c-79.296,0-128-24.853-128-42.667c0-17.813,48.704-42.667,128-42.667
              s128,24.853,128,42.667C373.333,81.813,324.629,106.667,245.333,106.667z"/>
            
            {/* Huruf S */}
            <path d="M248.661,384.405l-3.157-0.533C226.795,380.821,224,375.957,224,373.333c0-4.245,8.512-10.667,21.355-10.667
              c12.608,0,20.928,5.995,21.355,10.304c0.555,5.867,5.739,10.389,11.627,9.6c5.867-0.555,10.155-5.76,9.6-11.627
              c-1.621-16.896-19.925-29.632-42.603-29.632c-23.936,0-42.688,14.059-42.688,32c0,16.704,13.248,27.328,39.403,31.595
              l1.728-10.517l1.429,11.051c17.728,2.923,21.44,7.36,21.44,10.56c0,4.245-8.512,10.667-21.355,10.667
              c-12.608,0-20.928-6.016-21.355-10.325c-0.555-5.867-5.611-10.24-11.627-9.6c-5.867,0.555-10.155,5.76-9.6,11.627
              C204.331,435.264,222.635,448,245.312,448C269.248,448,288,433.941,288,416C288,399.317,274.773,388.693,248.661,384.405z"/>
            
            {/* Huruf Q */}
            <path d="M394.667,373.333c0-17.643-14.357-32-32-32h-21.333c-17.643,0-32,14.357-32,32V416c0,17.643,14.357,32,32,32h21.333
              c4.928,0,9.536-1.216,13.696-3.2l0.085,0.085c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.115
              c4.16-4.16,4.16-10.923,0-15.083l-0.085-0.085c2.005-4.16,3.221-8.789,3.221-13.717V373.333z M373.333,411.605l-3.136-3.136
              c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l3.115,3.115h-16.896c-5.888,0-10.667-4.779-10.667-10.667
              v-42.667c0-5.888,4.779-10.667,10.667-10.667h21.333c5.888,0,10.667,4.779,10.667,10.667V411.605z"/>
            
            {/* Huruf L */}
            <path d="M469.333,426.667h-32V352c0-5.888-4.779-10.667-10.667-10.667c-5.888,0-10.667,4.779-10.667,10.667v85.333
              c0,5.888,4.779,10.667,10.667,10.667h42.667c5.888,0,10.667-4.779,10.667-10.667C480,431.445,475.221,426.667,469.333,426.667z"/>
            
            {/* Huruf X / S */}
            <path d="M175.445,385.109c-5.291-2.624-11.669-0.491-14.315,4.779l-11.797,23.616l-11.797-23.595
              c-2.645-5.269-9.045-7.403-14.315-4.779c-5.269,2.645-7.424,9.045-4.779,14.315l18.965,37.909l-18.944,37.867
              c-2.624,5.269-0.491,11.669,4.779,14.315c1.536,0.768,3.157,1.131,4.757,1.131c3.904,0,7.659-2.155,9.557-5.909l42.667-85.333
              C182.848,394.155,180.715,387.755,175.445,385.109z"/>
            
            {/* Huruf M */}
            <path d="M88.704,341.888c-4.331-1.472-9.152,0.043-11.904,3.712l-23.467,31.275L29.867,345.6
              c-2.752-3.669-7.509-5.184-11.904-3.712c-4.352,1.451-7.296,5.525-7.296,10.112v85.333c0,5.888,4.779,10.667,10.667,10.667
              S32,443.221,32,437.333V384l12.8,17.067c4.032,5.376,13.056,5.376,17.067,0L74.667,384v53.333c0,5.888,4.779,10.667,10.667,10.667
              S96,443.221,96,437.333V352C96,347.413,93.056,343.339,88.704,341.888z"/>
          </g>
        </svg>
      ),
    },
    {
      name: 'Angular',
      category: 'Frontend Framework',
      level: 'Advanced',
      description: 'Membangun aplikasi web single-page (SPA) yang scalable dengan arsitektur TypeScript yang kuat.',
      color: '#dd0031',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="#dd0031" strokeWidth="5">
          <rect width="100" height="100" rx="16" fill="#dd0031" stroke="none"/>
          {/* Angular Shield */}
          <path 
            d="M 50 22 L 76 30 L 70 68 L 50 82 L 30 68 L 24 30 Z" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinejoin="round"
          />
          {/* Inner 'A' */}
          <path 
            d="M 37 64 L 50 36 L 63 64 M 41 54 L 59 54" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title animate-fade">Skills & Expertise</h2>
        
        <div className="skills-intro animate-fade">
          <p>
            Berikut adalah beberapa bahasa pemrograman, framework, dan alat pengembangan yang saya kuasai serta sering saya gunakan dalam membangun ekosistem aplikasi web, mobile apps, hingga sistem perangkat keras IoT.
            </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card animate-fade" 
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="skill-card-top">
                <div className="skill-icon-container" style={{ borderColor: `${skill.color}25` }}>
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                </div>
                <div className="skill-badge" style={{ backgroundColor: `${skill.color}15`, color: skill.color }}>
                  {skill.level}
                </div>
              </div>

              <div className="skill-card-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
