import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const socialLinks = [
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'rickymoren851@gmail.com',
      url: 'mailto:rickymoreno851@gmail.com',
    },
    {
      icon: <MapPin size={22} />,
      label: 'Lokasi',
      value: 'Sidoarjo, Jawa Timur, Indonesia',
      url: 'https://www.google.com/maps/place/Jl.+Surya+Residence+Blok+4C+No.36,+Suko,+Damarsi,+Kec.+Buduran,+Kabupaten+Sidoarjo,+Jawa+Timur+61252/@-7.4243786,112.7587645,21z/data=!4m15!1m8!3m7!1s0x2dd7e5d090996e27:0x8ccbdbd29a572ee9!2sDamarsi,+Kec.+Buduran,+Kabupaten+Sidoarjo,+Jawa+Timur!3b1!8m2!3d-7.4193666!4d112.7658623!16s%2Fg%2F121fws44!3m5!1s0x2dd7e53560ad8293:0xa482ed678a93756e!8m2!3d-7.4243375!4d112.7590169!16s%2Fg%2F11j4w0zwpt?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      label: 'GitHub',
      value: '@rickymorenoar',
      url: 'https://github.com/rickymorenoar',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'ricky moreno',
      url: 'https://www.linkedin.com/in/ricky-moreno-527840416/',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      label: 'Instagram',
      value: '@ricky_techn',
      url: 'https://www.instagram.com/ricky_techn?igsh=MTdrMXY5bzM3cW44aQ==',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Mohon isi nama, email, dan pesan Anda.');
      return;
    }

    setIsSubmitting(true);

    emailjs.send(
      'service_rzv3cpj', // Ganti dengan ID service Anda
      'template_4gmqel9', // Ganti dengan ID template Anda
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Pesan dari Portofolio',
        message: formData.message,
      },
      'TRtxrTHGlefxueeVr' // Ganti dengan user ID Anda
    ) 
    .then(() => {
      setIsSuccess(true),
      setFormData({ name: '', email: '', subject: '', message: '' });
  }) 
  .catch((error) => {
    console.error('EmailJS Error:', error);
    toast.error('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.');
  })
  .finally(() => {
    setIsSubmitting(false);
  });
};

  return (
    <section id="contact" className="contact-section">
      <Toaster />
      <div className="container">
        <h2 className="section-title animate-fade">Contact Me</h2>

        <div className="contact-grid">
          {/* Left Column: Contact info and Socials */}
          <div className="contact-left animate-left">
            <h3 className="contact-subtitle">Mari Terhubung!</h3>
            <p className="contact-description">
              Punya pertanyaan, ide proyek, atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini atau kirimkan pesan langsung melalui formulir.
            </p>

            <div className="contact-links-list">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card"
                >
                  <div className="contact-icon-box">{link.icon}</div>
                  <div className="contact-link-info">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-right animate-right">
            <div className="contact-form-card">
              {isSuccess ? (
                <div className="form-success-state">
                  <CheckCircle size={56} className="success-icon" />
                  <h3>Pesan Terkirim!</h3>
                  <p>Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda ke email yang telah Anda berikan.</p>
                  <button className="btn btn-primary" onClick={() => setIsSuccess(false)}>
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-title">Kirim Pesan</h3>
                  
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="name">Nama Lengkap</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nama Anda"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="nama@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subjek (Opsional)</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Topik pesan"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Pesan</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tuliskan pesan Anda di sini..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Mengirimkan...</>
                    ) : (
                      <>
                        Kirim Pesan <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
