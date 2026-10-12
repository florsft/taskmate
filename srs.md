<div align="center">

# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)

## WEBSITE DAFTAR TUGAS KULIAH "TASKMATE"

**Disusun oleh:**

Flo Raras Fathin

NIM 25091397132

**Program Studi Manajemen Informatika**

**Fakultas Vokasi**

**2026**

</div>

---

## DAFTAR ISI

- [BAB I PENDAHULUAN](#bab-i-pendahuluan)
  - [1.1 Latar Belakang](#11-latar-belakang)
  - [1.2 Tujuan](#12-tujuan)
  - [1.3 Ruang Lingkup](#13-ruang-lingkup)
  - [1.4 Definisi dan Istilah](#14-definisi-dan-istilah)
- [BAB II DESKRIPSI UMUM](#bab-ii-deskripsi-umum)
  - [2.1 Gambaran Sistem](#21-gambaran-sistem)
  - [2.2 Pengguna Sistem](#22-pengguna-sistem)
  - [2.3 Batasan Sistem](#23-batasan-sistem)
- [BAB III KEBUTUHAN SISTEM](#bab-iii-kebutuhan-sistem)
  - [3.1 Kebutuhan Fungsional](#31-kebutuhan-fungsional)
  - [3.2 Kebutuhan Non-Fungsional](#32-kebutuhan-non-fungsional)
  - [3.3 Kebutuhan Antarmuka](#33-kebutuhan-antarmuka)
- [BAB IV PENUTUP](#bab-iv-penutup)
  - [4.1 Kesimpulan](#41-kesimpulan)
---

## BAB I PENDAHULUAN

### 1.1 Latar Belakang

Mahasiswa umumnya menerima banyak tugas dari berbagai mata kuliah dengan waktu pengumpulan yang berbeda-beda. Apabila tugas tersebut tidak dicatat dengan baik, mahasiswa berisiko lupa atau terlambat mengerjakannya. Oleh karena itu, dibutuhkan sebuah alat sederhana yang dapat membantu mahasiswa mencatat tugas sekaligus mengetahui tugas mana yang sudah selesai dan mana yang belum.

TaskMate adalah website daftar tugas kuliah yang dibuat untuk memenuhi kebutuhan tersebut. Website ini dirancang agar mudah digunakan dan dapat langsung dibuka melalui browser tanpa perlu instalasi.

### 1.2 Tujuan

Dokumen Software Requirements Specification (SRS) ini disusun untuk menjelaskan kebutuhan website TaskMate, yaitu fitur apa saja yang harus tersedia dan kualitas seperti apa yang harus dimiliki. Dokumen ini diharapkan dapat menjadi acuan bagi pembuat dan dosen dalam memahami sistem yang dikembangkan.

### 1.3 Ruang Lingkup

TaskMate adalah website yang berjalan langsung di browser tanpa memerlukan server maupun database. Melalui website ini, pengguna dapat mencatat tugas kuliah, menandai tugas yang sudah selesai, dan menyimpan daftar tugas di browser agar tidak hilang ketika halaman ditutup. Selain itu, tersedia halaman biodata yang berisi informasi singkat tentang pengguna.

Pada versi ini, TaskMate belum mencakup fitur akun pengguna, penghapusan tugas, pengeditan tugas, tenggat waktu, dan notifikasi.

### 1.4 Definisi dan Istilah

| No | Istilah | Penjelasan |
|---|---|---|
| 1 | SRS | Dokumen yang berisi kebutuhan sebuah perangkat lunak |
| 2 | HTML | Bahasa untuk membuat struktur halaman website |
| 3 | CSS | Bahasa untuk mengatur tampilan website |
| 4 | JavaScript | Bahasa pemrograman agar website bisa berinteraksi |
| 5 | localStorage | Tempat penyimpanan data kecil di dalam browser |
| 6 | Browser | Aplikasi untuk membuka website, misalnya Chrome atau Firefox |

---

## BAB II DESKRIPSI UMUM

### 2.1 Gambaran Sistem

TaskMate terdiri atas dua halaman utama. Halaman Beranda digunakan untuk menambah dan melihat daftar tugas, sedangkan halaman Biodata digunakan untuk menampilkan informasi tentang pengguna. Kedua halaman dihubungkan oleh menu navigasi di bagian atas website.

| No | Halaman | File | Isi |
|---|---|---|---|
| 1 | Beranda | `index.html` | Tempat menambah dan melihat daftar tugas |
| 2 | Biodata | `about.html` | Informasi tentang pembuat/pengguna |

Selain kedua halaman tersebut, website ini didukung oleh dua file lain yang bekerja bersama.

| No | File | Fungsi |
|---|---|---|
| 1 | `style.css` | Mengatur tampilan |
| 2 | `script.js` | Menjalankan fitur daftar tugas |

### 2.2 Pengguna Sistem

Pengguna TaskMate adalah mahasiswa yang ingin mencatat tugas kuliahnya. Pengguna tidak memerlukan keahlian khusus karena cukup mampu mengoperasikan browser untuk dapat menggunakan website ini.

### 2.3 Batasan Sistem

TaskMate menyimpan data tugas di dalam browser, sehingga data hanya tersedia pada browser dan perangkat yang digunakan saat mencatat. Data tidak dapat dibuka dari browser atau perangkat lain, dan akan hilang apabila pengguna menghapus data browser. Selain itu, pada versi ini belum tersedia fitur untuk menghapus maupun mengedit tugas yang sudah dicatat.

---

## BAB III KEBUTUHAN SISTEM

### 3.1 Kebutuhan Fungsional

Kebutuhan fungsional adalah hal-hal yang dapat dilakukan oleh website. Fitur yang tersedia pada TaskMate dijelaskan pada tabel berikut.

| No | Fitur | Penjelasan |
|---|---|---|
| 1 | Tambah tugas | Pengguna mengetik nama tugas, lalu klik **Tambah Tugas**. |
| 2 | Cek input kosong | Jika kolom kosong, tugas tidak ditambahkan dan muncul pesan "Nama tugas harus diisi." |
| 3 | Tandai selesai | Pengguna mencentang kotak di samping tugas. Tugas yang selesai teksnya dicoret. Centang bisa dibatalkan. |
| 4 | Simpan otomatis | Tugas disimpan di browser sehingga tidak hilang saat halaman dimuat ulang. |
| 5 | Pesan daftar kosong | Jika belum ada tugas, muncul pesan "Belum ada tugas. Tambahkan tugas pertamamu!" |
| 6 | Lihat biodata | Halaman Biodata menampilkan nama, NIM, program studi, fakultas, dan angkatan. |
| 7 | Pindah halaman | Menu di bagian atas untuk berpindah antara Beranda dan Biodata. |

### 3.2 Kebutuhan Non-Fungsional

Kebutuhan non-fungsional adalah kualitas yang harus dimiliki website, bukan fitur yang dijalankan pengguna. Kualitas yang diharapkan dari TaskMate dijelaskan pada tabel berikut.

| No | Kebutuhan | Penjelasan |
|---|---|---|
| 1 | Mudah dipakai | Tampilan sederhana dan tidak perlu panduan khusus. |
| 2 | Responsif | Tampilan menyesuaikan layar laptop, tablet, dan HP. |
| 3 | Kompatibel | Dapat dibuka di Chrome, Firefox, Edge, dan Safari. |
| 4 | Tanpa instalasi | Cukup membuka `index.html`, tanpa server atau database. |
| 5 | Cepat | Tugas langsung muncul tanpa memuat ulang halaman. |
| 6 | Data pribadi aman | Data hanya ada di browser pengguna dan tidak dikirim ke mana pun. |

### 3.3 Kebutuhan Antarmuka

Antarmuka adalah bagian website yang dilihat dan digunakan langsung oleh pengguna. Bagian-bagian antarmuka TaskMate dijelaskan pada tabel berikut.

| No | Bagian | Penjelasan |
|---|---|---|
| 1 | Menu navigasi | Berisi logo TaskMate serta tautan Beranda dan Biodata. Halaman yang sedang dibuka diberi penanda. |
| 2 | Form tugas | Kolom input dan tombol **Tambah Tugas**. |
| 3 | Daftar tugas | Menampilkan semua tugas beserta kotak centang. |
| 4 | Kartu biodata | Menampilkan inisial dan data diri pengguna. |
| 5 | Footer | Keterangan hak cipta di bagian bawah setiap halaman. |

---

## BAB IV PENUTUP

### 4.1 Kesimpulan

TaskMate adalah website daftar tugas kuliah yang sederhana dan mudah digunakan. Fitur utamanya meliputi menambah tugas, menandai tugas yang sudah selesai, dan menyimpan daftar tugas di browser. Dokumen SRS ini menjelaskan kebutuhan sistem sebagai acuan dalam pembuatan dan pengembangan website.
