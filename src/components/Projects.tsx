import React, { useState, useMemo, useEffect } from 'react';
import { ExternalLink, Calendar, ChevronRight, X } from 'lucide-react';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Backend';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  stack: string[];
  demoUrl: string;
  githubUrl: string;
  date: string;
  image: string;
}

interface ProjectsProps {
  /**
   * Status modal dikontrol dari parent (App). Saat parent meng-set ini
   * jadi false (misalnya karena user klik navbar), modal akan ikut tertutup.
   * App juga memakai nilai ini untuk memberi tahu Navbar agar tampil solid
   * (tidak transparan) selama modal terbuka.
   */
  isModalOpen: boolean;
  /** Setter dari parent untuk mengubah status modal. */
  setIsModalOpen: (open: boolean) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Full Stack' | 'Frontend' | 'Backend'>('All');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('p1');
  const isMobileModalOpen = isModalOpen;
  const setIsMobileModalOpen = setIsModalOpen;

  // DISABLE BODY SCROLL TANPA MERUSAK POSISI SCROLL DI MOBILE
  // Simpan scrollY saat ini, kunci body dengan position: fixed + top: -scrollY
  // (visual tidak berubah), lalu saat modal ditutup, lepas lock dan kembalikan
  // scroll ke posisi yang disimpan.
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileModalOpen]);

  const projectsData: Project[] = [
    {
      id: 'p1',
      title: 'Website Top Up Game Nakys Store',
      category: 'Full Stack',
      shortDesc: 'Sistem top up game online dengan manajemen stok otomatis dan dashboard admin yang intuitif.',
      fullDesc: 'Platform top-up game otomatis yang dirancang untuk memberikan pengalaman transaksi yang cepat, aman, dan user-friendly bagi para gamers. Website ini mengintegrasikan sistem pembayaran real-time untuk memproses pembelian in-game currency secara instan.',
      features: [
        'Integrasi Payment Gateway untuk transaksi instan',
        'Manajemen stok produk dengan pembaruan otomatis setelah setiap transaksi',
        'Dashboard admin untuk memantau penjualan, mengelola produk, dan melihat laporan keuangan',
        'Dashboard pengguna untuk melihat riwayat pembelian dan status transaksi secara real-time',
        'Keamanan terjamin dengan ssl dan validasi input yang ketat untuk mencegah serangan umum seperti SQL Injection dan XSS',
      ],
      stack: ['Laravel', 'PHP', 'MySQL DB', 'Tailwind CSS', 'JavaScript', 'React'],
      demoUrl: 'https://nakys-store.vercel.app/',
      githubUrl: 'https://github.com/rickymorenoar',
      date: 'November 2025',
      image: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    },
    {
      id: 'p2',
      title: 'Website QR based attendance system',
      category: 'Full Stack',
      shortDesc: 'Sistem absensi digital berbasis QR Code untuk efisiensi administrasi kehadiran.',
      fullDesc: 'Platform absensi digital yang menggantikan metode manual dengan pemindaian QR Code yang cepat dan aman. Sistem ini dirancang untuk meminimalisir kecurangan absensi dan mempercepat proses rekapitulasi data kehadiran secara real-time dengan integrasi database yang terstruktur.',
      features: [
        'Sistem pemindaian QR Code yang responsif and akurat',
        'Validasi kehadiran real-time untuk mencegah manipulasi data',
        'Dashboard rekapitulasi kehadiran untuk admin',
        'Antarmuka yang dioptimalkan untuk perangkat mobile dan desktop',
      ],
      stack: ['PHP', 'MySQL', 'Laravel', 'Vue.js', 'CSS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/rickymorenoar/website-absensi-qr',
      date: 'Juni 2026',
      image: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    },
    {
      id: 'p3',
      title: 'Website Kelas Attractive SMP Negeri 1 Buduran',
      category: 'Frontend',
      shortDesc: 'Platform informasi dan pusat administrasi digital untuk kebutuhan kelas.',
      fullDesc: 'Website yang dikembangkan untuk menjadi pusat informasi kelas, mencakup profil siswa, jadwal pelajaran, serta integrasi manajemen data kelas. Proyek ini bertujuan untuk mendigitalisasi kebutuhan administrasi kelas menjadi sistem yang mudah diakses dan terstruktur.',
      features: [
        'Profil siswa yang dikelola secara dinamis',
        'Sistem manajemen jadwal pelajaran',
        'Antarmuka yang bersih dan mudah digunakan oleh seluruh warga kelas',
      ],
      stack: ['HTML', 'Javascript', 'React', 'Tailwind CSS'],
      demoUrl: 'https://class-attractive-40.vercel.app/',
      githubUrl: 'https://github.com/rickymorenoar/website-kelas',
      date: 'November 2025',
      image: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    },
    {
      id: 'p4',
      title: 'Sistem Manajemen Kas Kelas',
      category: 'Full Stack',
      shortDesc: 'Aplikasi manajemen keuangan kelas untuk transparansi pencatatan iuran dan pengeluaran.',
      fullDesc: 'Sistem berbasis web yang dirancang khusus untuk mempermudah bendahara dalam mengelola dana kelas. Aplikasi ini mencatat iuran rutin siswa, melacak riwayat pengeluaran, dan mengkalkulasi saldo akhir secara otomatis. Fokus utama dari proyek ini adalah transparansi data dan akurasi perhitungan keuangan berskala kecil.',
      features: [
        'Dashboard rekapitulasi untuk memantau total saldo dan pengeluaran bulanan',
        'Sistem pelacakan status pembayaran (Lunas/Menunggak) tiap siswa',
        'Log riwayat transaksi masuk dan keluar yang mendetail',
        'Pembatasan hak akses antara Bendahara (Admin) dan Warga Kelas (Viewer)',
      ],
      stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Javascript'],
      demoUrl: '#',
      githubUrl: 'https://github.com/rickymorenoar/kas-kelas',
      date: 'Oktober 2025',
      image: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    },
 {
      id: 'p6', 
      title: 'KYYS Workout - Mobile Sports Tracker',
      category: 'Full Stack',
      shortDesc: 'Aplikasi pelacak aktivitas olahraga mobile berbasis koordinat peta untuk memantau progres kebugaran.',
      fullDesc: 'Aplikasi asisten kebugaran pribadi berbasis mobile yang dirancang untuk mencatat kemajuan fisik dan melacak aktivitas olahraga secara real-time. Menggunakan integrasi sensor perangkat dan API geolokasi, aplikasi ini dapat memetakan rute latihan pengguna secara presisi serta menyimpan riwayat statistik perkembangan kebugaran pengguna dari waktu ke waktu.',
      features: [
        'Real-Time Activity Tracking untuk mencatat durasi, jarak tempuh dan jumlah langkah kaki',
        'Integrasi Peta Koordinat (GPS Mapping) untuk merekam dan menggambar rute lari, bersepeda, atau jalan santai secara langsung',
        'Workout History & Statistics untuk menyimpan dan menganalisis grafik perkembangan kebugaran dari latihan sebelumnya',
      ],
      stack: ['React Native', 'TypeScript', 'Tailwind CSS', 'Leaflet API', 'Node.js'], 
      demoUrl: 'https://expo.dev/accounts/rickymorenoo/projects/kyys-workout/builds/0dbd5f93-af1c-477b-b4cd-453022cbd23b',
      githubUrl: 'https://github.com/rickymorenoar/Tracker-Olahraga', 
      date: 'Juni 2026',
      image: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const selectedProject = useMemo(() => {
    return projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];
  }, [selectedProjectId]);

  const handleCardClick = (id: string) => {
    setSelectedProjectId(id);
    if (window.innerWidth <= 768) {
      setIsMobileModalOpen(true);
    }
  };

  const tabs: Array<'All' | 'Full Stack' | 'Frontend' | 'Backend'> = [
    'All',
    'Full Stack',
    'Frontend',
    'Backend',
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

        {/* Desktop Split Layout */}
        <div className="projects-grid animate-fade">
          {/* Left Side: Cards */}
          <div className="projects-list">
            {filteredProjects.length === 0 ? (
              <div className="no-projects">Tidak ada project untuk kategori ini.</div>
            ) : (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`project-card-item ${selectedProjectId === project.id ? 'active' : ''}`}
                  onClick={() => handleCardClick(project.id)}
                >
                  <div className="card-color-strip" style={{ background: project.image }}></div>
                  <div className="project-card-body">
                    <div className="project-card-meta">
                      <span className="project-card-cat">{project.category}</span>
                      <span className="project-card-date">{project.date}</span>
                    </div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.shortDesc}</p>
                    <div className="project-card-arrow">
                      <span>Lihat Detail</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Side: Detail Panel */}
          <div className="project-detail-panel">
            <div className="detail-header-bg" style={{ background: selectedProject.image }}>
              <span className="detail-header-badge">{selectedProject.category}</span>
            </div>
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

              <div className="detail-actions">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Source Code
                </a>
                <a href={selectedProject.demoUrl} className="btn btn-primary btn-sm">
                  Live Demo <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Detail Modal Overlay */}
        {isMobileModalOpen && (
          <div className="mobile-detail-modal-overlay" onClick={() => setIsMobileModalOpen(false)}>
            <div className="mobile-detail-modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setIsMobileModalOpen(false)}>
                <X size={24} />
              </button>

              <div className="detail-header-bg" style={{ background: selectedProject.image }}>
                <span className="detail-header-badge">{selectedProject.category}</span>
              </div>

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

                <div className="detail-actions">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    GitHub
                  </a>
                  <a href={selectedProject.demoUrl} className="btn btn-primary">
                    Demo <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};