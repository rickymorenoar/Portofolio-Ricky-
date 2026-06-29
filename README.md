<h1 align="center">Portofolio Ricky Moreno</h1>

<p align="center">
  Personal portfolio website yang dibangun dengan <strong>React</strong>, <strong>TypeScript</strong>, dan <strong>Tailwind CSS</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-3-38bdf8" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-Build-purple" alt="Vite">
</p>

---

## 📖 About

Website portofolio pribadi yang menampilkan informasi tentang saya, proyek-proyek yang pernah dikerjakan, serta fitur kontak yang terintegrasi langsung dengan **EmailJS**.

---

## 🛠 Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | React (Vite) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Notifications | React Hot Toast |
| Form Service | EmailJS Browser |

---

## 🚀 Setup & Installation

Ikuti langkah-langkah berikut agar project dapat berjalan di environment baru (laptop/device lain).

### 1. Persiapan

Pastikan **Node.js** (versi LTS) sudah terinstall. Cek dengan perintah:

```bash
node -v
npm -v
```

### 2. Kloning Repository & Instalasi

Buka terminal, lakukan kloning repository ini, lalu install semua dependensi yang dibutuhkan:

```bash
git clone https://github.com/rickymorenoar/Portofolio-Ricky-.git
cd Portofolio-Ricky-
npm install
```

### 3. Menjalankan Development Server

Untuk mencoba website secara lokal dan melihat hasil kodingan secara *live*, jalankan:

```bash
npm run dev
```

Setelah itu, buka browser dan akses URL lokal yang muncul di terminal (biasanya `http://localhost:5173`).

### 4. Build & Deployment (Production)

Untuk memproduksi file statis yang siap di-deploy ke hosting, jalankan:

```bash
npm run build
```

Hasil build akan tersedia di folder `dist/`, yang dapat langsung di-deploy ke layanan hosting seperti Vercel, Netlify, atau GitHub Pages.

---

## 📂 Project Structure

```text
Portofolio-Ricky-/
├── dist/                   # Hasil build production
├── node_modules/
├── public/                 # Aset statis publik
├── src/
│   ├── assets/             # Gambar, ikon, dan media
│   ├── components/         # Komponen halaman & UI
│   │   ├── About.tsx
│   │   ├── About.css
│   │   ├── Contact.tsx
│   │   ├── Contact.css
│   │   ├── Footer.tsx
│   │   ├── Footer.css
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── Navbar.tsx
│   │   ├── Navbar.css
│   │   ├── Projects.tsx
│   │   ├── Projects.css
│   │   ├── Skills.tsx
│   │   └── Skills.css
│   ├── App.tsx             # Root komponen aplikasi
│   ├── main.tsx            #