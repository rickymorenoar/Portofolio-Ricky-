import React, { useState, useMemo, useEffect } from 'react';
import { ExternalLink, Calendar, ChevronRight, ChevronDown, ChevronUp, X, Globe, Cpu, Smartphone } from 'lucide-react';
import './Projects.css';

export interface Project {
  id: string;
  title: string;
  category: 'Website' | 'IoT' | 'Mobile Apps';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  stack: string[];
  demoUrl: string;
  githubUrl: string;
  date: string;
  image?: string;
}

interface ProjectsProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const GithubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/**
 * Komponen gambar project dengan fallback otomatis ke UI mockup jika foto tidak ada/gagal di-load.
 */
const ProjectImage: React.FC<{ project: Project; className?: string }> = ({ project, className = '' }) => {
  const [imgError, setImgError] = useState(false);

  const hasImage = project.image && project.image.trim() !== '' && !project.image.startsWith('linear-gradient') && !imgError;

  if (hasImage) {
    return (
      <div className={`project-img-wrapper ${className}`}>
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
          onError={() => setImgError(true)}
        />
        <div className="project-img-overlay">
          <span className="project-img-badge">{project.category}</span>
        </div>
      </div>
    );
  }

  // Fallback UI Preview Frame (Modern clean mockup style)
  const getIcon = () => {
    if (project.category === 'IoT') return <Cpu size={28} />;
    if (project.category === 'Mobile Apps') return <Smartphone size={28} />;
    return <Globe size={28} />;
  };

  return (
    <div className={`project-img-fallback ${className}`}>
      <div className="fallback-window-bar">
        <div className="fallback-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="fallback-url-bar">{project.title.toLowerCase().replace(/\s+/g, '-')}.app</div>
      </div>
      <div className="fallback-content">
        <div className="fallback-icon">
          {getIcon()}
        </div>
        <div className="fallback-title">{project.title}</div>
        <div className="fallback-tags">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="fallback-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Website' | 'IoT' | 'Mobile Apps'>('All');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('p1');
  const [isExpanded, setIsExpanded] = useState(false);

  const isMobileModalOpen = isModalOpen;
  const setIsMobileModalOpen = setIsModalOpen;

  useEffect(() => {
    if (isMobileModalOpen) {
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = String(scrollY);

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.classList.add('modal-open');
    } else {
      const storedScrollY = document.body.dataset.scrollY;

      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';

      if (storedScrollY) {
        window.scrollTo(0, parseInt(storedScrollY, 10));
        delete document.body.dataset.scrollY;
      }
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
    };
  }, [isMobileModalOpen]);

  const projectsData: Project[] = [
    {
      id: 'p1',
      title: 'Website Top Up Game Nakys Store',
      category: 'Website',
      shortDesc: 'Sistem top up game online dengan manajemen stok otomatis dan dashboard admin yang intuitif.',
      fullDesc: 'Platform top-up game otomatis yang dirancang untuk memberikan pengalaman transaksi yang cepat, aman, dan user-friendly bagi para gamers. Website ini mengintegrasikan sistem pembayaran real-time untuk memproses pembelian in-game currency secara instan.',
      features: [
        'Integrasi Payment Gateway untuk transaksi instan',
        'Manajemen stok produk dengan pembaruan otomatis setelah setiap transaksi',
        'Dashboard admin untuk memantau penjualan, mengelola produk, dan melihat laporan keuangan',
        'Dashboard pengguna untuk melihat riwayat pembelian dan status transaksi secara real-time',
        'Keamanan terjamin dengan SSL dan validasi input yang ketat',
      ],
      stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'React'],
      demoUrl: 'https://nakys-store.vercel.app/',
      githubUrl: 'https://github.com/rickymorenoar',
      date: 'November 2025',
      image: '/projects/nakys-store.webp',
    },
    {
      id: 'p2',
      title: 'Website QR Based Attendance System',
      category: 'Website',
      shortDesc: 'Sistem absensi digital berbasis QR Code untuk efisiensi administrasi kehadiran.',
      fullDesc: 'Platform absensi digital yang menggantikan metode manual dengan pemindaian QR Code yang cepat dan aman. Sistem ini dirancang untuk meminimalisir kecurangan absensi dan mempercepat proses rekapitulasi data kehadiran secara real-time dengan integrasi database terstruktur.',
      features: [
        'Sistem pemindaian QR Code yang responsif dan akurat',
        'Validasi kehadiran real-time untuk mencegah manipulasi data',
        'Dashboard rekapitulasi kehadiran untuk admin',
        'Antarmuka yang dioptimalkan untuk perangkat mobile dan desktop',
      ],
      stack: ['PHP', 'MySQL', 'Laravel', 'Vue.js', 'CSS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/rickymorenoar/website-absensi-qr',
      date: 'Juni 2026',
      image: '',
    },
    {
      id: 'p3',
      title: 'Website Kelas Attractive SMPN 1 Buduran',
      category: 'Website',
      shortDesc: 'Platform informasi dan pusat administrasi digital untuk kebutuhan kelas.',
      fullDesc: 'Website yang dikembangkan untuk menjadi pusat informasi kelas, mencakup profil siswa, jadwal pelajaran, serta integrasi manajemen data kelas. Proyek ini bertujuan untuk mendigitalisasi kebutuhan administrasi kelas menjadi sistem yang mudah diakses dan terstruktur.',
      features: [
        'Profil siswa yang dikelola secara dinamis',
        'Sistem manajemen jadwal pelajaran interaktif',
        'Antarmuka bersih dan mudah digunakan oleh seluruh warga kelas',
      ],
      stack: ['HTML', 'JavaScript', 'React', 'Tailwind CSS'],
      demoUrl: 'https://class-attractive-40.vercel.app/',
      githubUrl: 'https://github.com/rickymorenoar/website-kelas',
      date: 'November 2025',
      image: '',
    },
    {
      id: 'p4',
      title: 'Sistem Manajemen Kas Kelas',
      category: 'Website',
      shortDesc: 'Aplikasi manajemen keuangan kelas untuk transparansi pencatatan iuran dan pengeluaran.',
      fullDesc: 'Sistem berbasis web yang dirancang khusus untuk mempermudah bendahara dalam mengelola dana kelas. Aplikasi ini mencatat iuran rutin siswa, melacak riwayat pengeluaran, dan mengkalkulasi saldo akhir secara otomatis.',
      features: [
        'Dashboard rekapitulasi saldo dan pengeluaran bulanan',
        'Sistem pelacakan status pembayaran (Lunas/Menunggak)',
        'Log riwayat transaksi masuk dan keluar yang mendetail',
        'Pembatasan hak akses Admin (Bendahara) dan Viewer',
      ],
      stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
      demoUrl: '#',
      githubUrl: 'https://github.com/rickymorenoar/kas-kelas',
      date: 'Oktober 2025',
      image: '',
    },
    {
      id: 'p6',
      title: 'KYYS Workout - Mobile Sports Tracker',
      category: 'Mobile Apps',
      shortDesc: 'Aplikasi pelacak aktivitas olahraga mobile berbasis koordinat peta untuk memantau progres kebugaran.',
      fullDesc: 'Aplikasi asisten kebugaran pribadi berbasis mobile yang dirancang untuk mencatat kemajuan fisik dan melacak aktivitas olahraga secara real-time. Menggunakan sensor perangkat dan API geolokasi untuk memetakan rute latihan.',
      features: [
        'Real-Time Activity Tracking untuk durasi, jarak, dan langkah',
        'Integrasi Peta Koordinat (GPS Mapping) untuk rute lari & bersepeda',
        'Workout History & Statistics untuk grafik perkembangan',
      ],
      stack: ['React Native', 'TypeScript', 'Tailwind CSS', 'Leaflet API', 'Node.js'],
      demoUrl: 'https://expo.dev/accounts/rickymorenoo/projects/kyys-workout/builds/0dbd5f93-af1c-477b-b4cd-453022cbd23b',
      githubUrl: 'https://github.com/rickymorenoar/Tracker-Olahraga',
      date: 'Juni 2026',
      image: '',
    },
    {
      id: 'p7',
      title: 'Smart Monitoring & Control System IoT',
      category: 'IoT',
      shortDesc: 'Sistem pemantauan dan kontrol perangkat keras jarak jauh menggunakan sensor IoT dan dashboard real-time.',
      fullDesc: 'Proyek otomatisasi IoT terintegrasi yang menghubungkan sensor fisik dengan cloud server. Memungkinkan pemantauan suhu, kelembaban, dan kontrol aktuator secara real-time via antarmuka web yang responsif.',
      features: [
        'Telemetri data sensor real-time via protocol MQTT / WebSockets',
        'Dashboard kontrol sakelar & relai jarak jauh',
        'Sistem peringatan otomatis (Threshold Notification)',
      ],
      stack: ['ESP32', 'C++', 'MQTT', 'Node.js', 'React'],
      demoUrl: '#',
      githubUrl: 'https://github.com/rickymorenoar',
      date: 'Mei 2026',
      image: '',
    },
    {
      id: 'p8',
      title: 'Aplikasi Mobile & Solusi Cross-Platform',
      category: 'Mobile Apps',
      shortDesc: 'Pengembangan aplikasi mobile berbasis iOS dan Android dengan performa native tinggi.',
      fullDesc: 'Platform mobile serbaguna yang dirancang menggunakan React Native dan TypeScript untuk memberikan pengalaman aplikasi mobile yang responsif, terintegrasi dengan REST API dan penyimpanan lokal.',
      features: [
        'Performa tinggi dengan arsitektur React Native',
        'Pengelolaan state global dan mode offline (Local Caching)',
        'Antarmuka ramah pengguna (UI/UX Mobile First)',
      ],
      stack: ['React Native', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      demoUrl: '#',
      githubUrl: 'https://github.com/rickymorenoar',
      date: 'Agustus 2026',
      image: '',
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeTab);
  }, [activeTab]);

  // Initial limit: show 2 items initially if not expanded
  const INITIAL_LIMIT = 2;
  const displayedProjects = useMemo(() => {
    if (isExpanded) return filteredProjects;
    return filteredProjects.slice(0, INITIAL_LIMIT);
  }, [filteredProjects, isExpanded]);

  const selectedProject = useMemo(() => {
    return projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];
  }, [selectedProjectId]);

  const handleCardClick = (id: string) => {
    setSelectedProjectId(id);
    if (window.innerWidth <= 768) {
      setIsMobileModalOpen(true);
    }
  };

  const tabs: Array<'All' | 'Website' | 'IoT' | 'Mobile Apps'> = [
    'All',
    'Website',
    'IoT',
    'Mobile Apps',
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title animate-fade">Featured Projects</h2>

        {/* Tab Filters */}
        <div className="projects-tabs-container animate-fade">
          <div className="projects-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab);
                  setIsExpanded(false);
                  const matches = tab === 'All' ? projectsData : projectsData.filter((p) => p.category === tab);
                  if (matches.length > 0) {
                    setSelectedProjectId(matches[0].id);
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop & Tablet Layout */}
        <div className="projects-grid animate-fade">
          {/* Left Column: Project Cards */}
          <div className="projects-list">
            {displayedProjects.length === 0 ? (
              <div className="no-projects">Tidak ada project untuk kategori ini.</div>
            ) : (
              displayedProjects.map((project) => (
                <div
                  key={project.id}
                  className={`project-card-item ${selectedProjectId === project.id ? 'active' : ''}`}
                  onClick={() => handleCardClick(project.id)}
                >
                  <ProjectImage project={project} className="card-thumb" />

                  <div className="project-card-body">
                    <div className="project-card-meta">
                      <span className="project-card-cat">{project.category}</span>
                      <span className="project-card-date">{project.date}</span>
                    </div>

                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.shortDesc}</p>

                    {/* Direct Quick Action Links on Card */}
                    <div className="project-card-footer">
                      <div className="project-card-arrow">
                        <span>Detail Project</span>
                        <ChevronRight size={16} />
                      </div>

                      <div className="card-quick-actions" onClick={(e) => e.stopPropagation()}>
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-action-btn"
                            title="Source Code GitHub"
                          >
                            <GithubIcon size={16} />
                          </a>
                        )}
                        {project.demoUrl && project.demoUrl !== '#' && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-action-btn primary"
                            title="Live Demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Show More / Show Less Toggle Button */}
            {filteredProjects.length > INITIAL_LIMIT && (
              <div className="expand-projects-container">
                <button
                  className="btn btn-secondary expand-toggle-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? (
                    <>
                      Sembunyikan Project <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      Lihat Semua Project ({filteredProjects.length}) <ChevronDown size={18} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Desktop Detail Panel */}
          <div className="project-detail-panel">
            <ProjectImage project={selectedProject} className="detail-panel-img" />

            <div className="detail-content">
              <div className="detail-meta">
                <span className="detail-badge">{selectedProject.category}</span>
                <span className="detail-date">
                  <Calendar size={15} /> {selectedProject.date}
                </span>
              </div>

              <h3 className="detail-title">{selectedProject.title}</h3>
              <p className="detail-desc">{selectedProject.fullDesc}</p>

              <div className="detail-section">
                <h4 className="detail-subheading">Fitur Utama</h4>
                <ul className="detail-features-list">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h4 className="detail-subheading">Teknologi</h4>
                <div className="detail-stack-tags">
                  {selectedProject.stack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="detail-actions">
                {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <GithubIcon size={18} /> Source Code
                  </a>
                )}
                {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Detail Modal */}
        {isMobileModalOpen && (
          <div className="mobile-detail-modal-overlay" onClick={() => setIsMobileModalOpen(false)}>
            <div className="mobile-detail-modal-card" onClick={(e) => e.stopPropagation()}>
              
              {/* Sticky Top Header */}
              <div className="modal-sticky-header">
                <span className="modal-header-category">{selectedProject.category}</span>
                <button
                  className="modal-close-btn"
                  onClick={() => setIsMobileModalOpen(false)}
                  aria-label="Tutup"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Body Content */}
              <div className="modal-body-scrollable">
                <ProjectImage project={selectedProject} className="modal-banner-img" />

                <div className="detail-content">
                  <div className="detail-meta">
                    <span className="detail-date">
                      <Calendar size={15} /> {selectedProject.date}
                    </span>
                  </div>

                  <h3 className="detail-title">{selectedProject.title}</h3>
                  <p className="detail-desc">{selectedProject.fullDesc}</p>

                  <div className="detail-section">
                    <h4 className="detail-subheading">Fitur Utama</h4>
                    <ul className="detail-features-list">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4 className="detail-subheading">Teknologi</h4>
                    <div className="detail-stack-tags">
                      {selectedProject.stack.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Permanent Sticky Bottom Action Bar */}
              <div className="modal-footer-sticky">
                {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary modal-action-btn"
                  >
                    <GithubIcon size={18} /> Source Code
                  </a>
                )}
                {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary modal-action-btn"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

