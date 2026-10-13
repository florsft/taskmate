# Software Requirements Specification (SRS)

## TaskMate: Website Daftar Tugas Kuliah

| | |
|---|---|
| **Mata kuliah** | Pemrograman Web |
| **Program studi** | Sarjana Terapan Manajemen Informatika|
| **Dosen** |Faris Abdi El Hakim, S.Kom., M.Tr.Kom. |
| **Penyusun** | Flo Raras Fathin, NIM 25091397132 |

## Daftar Isi

1. Pendahuluan
2. Deskripsi Umum
3. Kebutuhan Fungsional
4. Kebutuhan Antarmuka
5. Kebutuhan Non-Fungsional
6. Alur Penggunaan
7. Struktur Data
8. Pengujian
9. Batasan dan Pengembangan Lanjutan

---

## 1. Pendahuluan

### 1.1 Tujuan Dokumen
Menjelaskan kebutuhan website **TaskMate** dengan bahasa yang mudah dipahami, agar pembuat, dosen, dan pembaca umum punya gambaran yang sama tentang cara kerja website ini.

### 1.2 Latar Belakang
Mahasiswa sering punya banyak tugas dari berbagai mata kuliah sehingga mudah ada yang terlupa. TaskMate dibuat sebagai catatan tugas yang sederhana dan bisa dipakai tanpa daftar akun maupun instal aplikasi. Website ini juga dibuat sebagai tugas UTS Pemrograman Web untuk menunjukkan kemampuan membuat antarmuka yang interaktif dengan HTML, CSS, dan JavaScript.

### 1.3 Ruang Lingkup
TaskMate berjalan di browser dan mampu:
- mencatat tugas kuliah,
- menandai tugas yang sudah selesai,
- menyimpan daftar tugas di browser,
- menampilkan biodata pembuat website.

**Di luar ruang lingkup versi ini:** akun/login, penyimpanan di server, pengingat atau notifikasi, serta hapus dan edit tugas.

### 1.4 Istilah Penting

| Istilah | Arti sehari-hari |
|---------|------------------|
| **Browser** | Aplikasi untuk membuka website (Chrome, Edge, Firefox) |
| **HTML** | Bahasa untuk menyusun isi halaman |
| **CSS** | Bahasa untuk mengatur tampilan: warna, ukuran, animasi |
| **JavaScript** | Bahasa yang membuat website bisa bereaksi saat diklik atau diisi |
| **LocalStorage** | "Laci kecil" di browser untuk menyimpan data agar tidak hilang saat halaman ditutup |
| **Responsif** | Tampilan menyesuaikan ukuran layar |
| **GitHub Pages** | Layanan gratis GitHub untuk menaruh website agar bisa dibuka lewat internet |
| **Pengguna** | Orang yang memakai TaskMate |

---

## 2. Deskripsi Umum

### 2.1 Gambaran Produk
TaskMate adalah website **mandiri**. Semua proses berjalan di browser pengguna, tanpa server khusus. Website ditaruh di GitHub Pages.

| Halaman | File | Isi |
|---------|------|-----|
| Beranda | `index.html` | Form tambah tugas dan daftar tugas |
| Biodata | `about.html` | Profil singkat pembuat |

File pendukung: `style.css` (tampilan), `script.js` (logika), `foto.jpeg` (foto profil).

### 2.2 Fungsi Utama
1. Menambah tugas baru
2. Menampilkan daftar tugas
3. Menandai tugas selesai atau belum selesai
4. Menyimpan tugas secara otomatis
5. Berpindah antara halaman Beranda dan Biodata

### 2.3 Karakteristik Pengguna

| Pengguna | Penjelasan |
|----------|------------|
| Mahasiswa | Pengguna utama yang mencatat tugas kuliah |
| Pengguna umum / penilai | Cukup bisa mengetik dan mengklik, tanpa keahlian teknis |

### 2.4 Lingkungan Pengoperasian
- Perangkat: laptop/PC, tablet, atau HP
- Browser modern yang mendukung JavaScript dan LocalStorage
- Koneksi internet hanya diperlukan untuk membuka alamat GitHub Pages. Setelah halaman terbuka, semua fitur berjalan tanpa internet.

### 2.5 Batasan Perancangan
- Hanya memakai HTML, CSS, dan JavaScript murni (tanpa framework).
- Data disimpan di LocalStorage sehingga hanya berlaku di satu browser pada satu perangkat.
- Bahasa tampilan: Bahasa Indonesia.
- Kode HTML dan CSS mengikuti standar W3C.

### 2.6 Asumsi dan Ketergantungan
- JavaScript aktif di browser pengguna.
- Penyimpanan data (LocalStorage) tidak dinonaktifkan.
- File `foto.jpeg` ada di folder yang sama dengan `about.html`.

---

## 3. Kebutuhan Fungsional

Kebutuhan fungsional adalah hal-hal yang **harus bisa dilakukan** website.

| Kode | Kebutuhan | Penjelasan |
|------|-----------|------------|
| **FR-01** | Menambah tugas | Pengguna mengetik nama tugas lalu menekan *Tambah Tugas* (atau Enter) untuk memasukkannya ke daftar. |
| **FR-02** | Validasi input kosong | Jika kolom kosong atau hanya berisi spasi, tugas **tidak** ditambahkan dan muncul pesan "Nama tugas harus diisi." Kursor kembali ke kolom. |
| **FR-03** | Membersihkan form | Setelah tugas berhasil ditambah, kolom dikosongkan, pesan error dihapus, dan kursor kembali ke kolom. |
| **FR-04** | Menampilkan daftar tugas | Semua tugas tampil sebagai daftar, berurutan dari yang pertama ditambahkan. |
| **FR-05** | Pesan daftar kosong | Jika belum ada tugas, tampil "Belum ada tugas. Tambahkan tugas pertamamu!" Pesan hilang saat tugas pertama ditambahkan. |
| **FR-06** | Menandai tugas selesai | Pengguna mencentang kotak di samping tugas. Teks menjadi abu-abu dan dicoret. |
| **FR-07** | Membatalkan tanda selesai | Pengguna menghilangkan centang. Tampilan kembali normal. |
| **FR-08** | Menyimpan otomatis | Setiap tugas ditambah atau status centang berubah, daftar langsung disimpan ke LocalStorage. |
| **FR-09** | Memuat data tersimpan | Saat halaman dibuka atau di-refresh, tugas tersimpan tampil kembali lengkap dengan status selesainya. |
| **FR-10** | Navigasi halaman | Menu atas berpindah antara Beranda dan Biodata. Menu halaman aktif diberi penanda. Klik logo membuka Beranda. |
| **FR-11** | Menampilkan biodata | Halaman Biodata menampilkan foto, nama, program studi, NIM, fakultas, dan angkatan. |
| **FR-12** | Animasi interaksi | Elemen halaman tampil dengan animasi (muncul, bergeser, membal, bergetar) untuk memberi umpan balik kepada pengguna. |

---

## 4. Kebutuhan Antarmuka

### 4.1 Antarmuka Pengguna

**Di semua halaman**
- **Header/navigasi** di atas: logo TaskMate dan menu (Beranda, Biodata).
- **Footer** di bawah: "TaskMate © 2026 | Website Daftar Tugas Kuliah".
- Bagian sambutan berisi judul dan deskripsi singkat halaman.

**Halaman Beranda**
- Judul: "Atur tugasmu, satu per satu."
- Kartu *Daftar Tugas*: kolom input, tombol *Tambah Tugas*, area pesan error, dan daftar tugas.
- Setiap tugas berisi kotak centang dan nama tugas.

**Halaman Biodata**
- Judul: "Biodata Mahasiswa".
- Kartu berisi foto bulat dan data diri.

### 4.2 Gaya Visual

| Unsur | Pilihan |
|-------|---------|
| Warna | Krem lembut (latar), putih (kartu), cokelat kemerahan (judul dan tombol) |
| Huruf | Book Antiqua, cadangan Georgia |
| Bentuk | Kartu dengan sudut membulat dan bayangan halus |

### 4.3 Animasi
- Navigasi turun dari atas saat halaman dibuka.
- Teks sambutan dan kartu naik dengan halus.
- Tugas baru muncul dengan efek memantul.
- Kotak centang membal saat dicentang.
- Tugas bergeser saat disorot kursor.
- Pesan error bergetar.
- Pesan "belum ada tugas" berdenyut pelan.
- Foto profil membesar dan berputar sedikit saat disorot.
- Animasi **dimatikan** bagi pengguna yang mengaktifkan pengaturan *reduce motion*.

### 4.4 Antarmuka Perangkat Keras dan Lunak
- Perangkat keras: tidak ada kebutuhan khusus selain perangkat yang bisa membuka browser.
- Perangkat lunak: browser modern. Data disimpan di LocalStorage dengan kunci `tasks`.

---

## 5. Kebutuhan Non-Fungsional

Kebutuhan non-fungsional adalah **mutu** website: seberapa nyaman, cepat, dan aman.

| Kode | Aspek | Kebutuhan |
|------|-------|-----------|
| **NFR-01** | Kemudahan penggunaan | Tampilan sederhana dan berbahasa mudah dipahami. Pengguna bisa memakainya tanpa panduan. |
| **NFR-02** | Responsif | Menyesuaikan layar: laptop, tablet (maks. 768 px), dan HP (maks. 480 px). Di HP, menu tersusun ke bawah dan tombol selebar layar. |
| **NFR-03** | Kecepatan | Respons cepat karena proses berjalan di perangkat pengguna. |
| **NFR-04** | Keandalan data | Data tidak hilang saat refresh atau ditutup, selama data browser tidak dibersihkan. |
| **NFR-05** | Aksesibilitas | Kotak centang punya `aria-label`, pesan error dibacakan otomatis (`aria-live`), gambar punya `alt`, kolom aktif diberi garis sorot. |
| **NFR-06** | Kompatibilitas | Berjalan di Chrome, Edge, Firefox, dan Safari versi terbaru. |
| **NFR-07** | Keamanan | Teks tugas ditampilkan sebagai teks biasa (bukan kode), sehingga aman dari penyisipan kode berbahaya. Tidak ada data yang dikirim ke internet. |
| **NFR-08** | Kemudahan perawatan | Kode dipisah menjadi isi (HTML), tampilan (CSS), dan logika (JS), serta diberi komentar. |
| **NFR-09** | Kesesuaian standar | HTML dan CSS dapat divalidasi lewat validator W3C. |
| **NFR-10** | Kenyamanan visual | Animasi tidak mengganggu dan dapat dimatikan lewat pengaturan perangkat. |

---

## 6. Alur Penggunaan

### 6.1 Menambah Tugas
1. Pengguna membuka Beranda.
2. Pengguna mengetik nama tugas.
3. Pengguna menekan *Tambah Tugas*.
4. Sistem memeriksa isian:
   - **Kosong:** tampil pesan "Nama tugas harus diisi."
   - **Terisi:** tugas ditambahkan, disimpan, dan kolom dikosongkan.

### 6.2 Menandai Tugas Selesai
1. Pengguna mencentang kotak di samping tugas.
2. Sistem mencoret teks dan mengubah warnanya.
3. Sistem menyimpan perubahan.

### 6.3 Membuka Kembali Website
1. Pengguna membuka website.
2. Sistem membaca data dari LocalStorage.
3. Daftar tugas tampil seperti terakhir kali dipakai.

### 6.4 Melihat Biodata
1. Pengguna menekan menu *Biodata*.
2. Halaman Biodata terbuka menampilkan profil pembuat.

---

## 7. Struktur Data

Setiap tugas disimpan sebagai pasangan **nama** dan **status selesai**. Seluruh tugas disimpan dalam satu daftar di LocalStorage dengan kunci `tasks`.

| Data | Jenis | Contoh | Arti |
|------|-------|--------|------|
| `name` | Teks | "Kerjakan laporan Basis Data" | Nama tugas |
| `completed` | Benar/Salah | `false` | `true` bila sudah dicentang |

Contoh isi penyimpanan:

```json
[
  { "name": "Kerjakan laporan Basis Data", "completed": false },
  { "name": "Baca materi Pemrograman Web", "completed": true }
]
```

---

## 8. Pengujian

Tabel berikut dipakai untuk memeriksa apakah kebutuhan sudah terpenuhi.

| No | Skenario | Langkah | Hasil yang diharapkan | Kebutuhan |
|----|----------|---------|-----------------------|-----------|
| 1 | Tambah tugas | Ketik "Tugas A", klik *Tambah Tugas* | "Tugas A" muncul di daftar, kolom kosong | FR-01, FR-03 |
| 2 | Tambah dengan Enter | Ketik "Tugas B", tekan Enter | "Tugas B" muncul di daftar | FR-01 |
| 3 | Input kosong | Biarkan kolom kosong, klik tambah | Muncul pesan "Nama tugas harus diisi." | FR-02 |
| 4 | Input spasi saja | Ketik beberapa spasi, klik tambah | Pesan error muncul, tugas tidak ditambah | FR-02 |
| 5 | Daftar kosong | Buka website pertama kali | Muncul pesan "Belum ada tugas..." | FR-05 |
| 6 | Pesan kosong hilang | Tambah satu tugas | Pesan "Belum ada tugas" menghilang | FR-05 |
| 7 | Tandai selesai | Centang tugas | Teks abu-abu dan dicoret | FR-06 |
| 8 | Batalkan selesai | Hilangkan centang | Tampilan kembali normal | FR-07 |
| 9 | Data tersimpan | Tambah dan centang tugas, lalu refresh | Tugas dan status centang tetap ada | FR-08, FR-09 |
| 10 | Navigasi | Klik *Biodata*, lalu *Beranda* | Halaman berpindah dengan benar, menu aktif ditandai | FR-10 |
| 11 | Biodata | Buka halaman Biodata | Foto dan data diri tampil lengkap | FR-11 |
| 12 | Responsif HP | Perkecil jendela browser hingga 480 px | Menu tersusun ke bawah, tombol selebar layar | NFR-02 |

---

## 9. Batasan dan Pengembangan Lanjutan

### 9.1 Batasan Versi Ini
- Tugas belum bisa dihapus atau diedit.
- Data hanya tersimpan di satu browser pada satu perangkat dan hilang jika data browser dibersihkan.
- Tugas dengan nama yang sama diperbolehkan.
- AJAX belum dipakai.

### 9.2 Saran Pengembangan

| Prioritas | Fitur |
|-----------|-------|
| Tinggi | Tombol hapus dan edit tugas |
| Sedang | Tanggal tenggat dan mata kuliah per tugas |
| Sedang | Filter: semua, belum selesai, selesai |
| Rendah | Mode gelap |
| Rendah | Sinkronisasi antar perangkat lewat akun |

---

*Dokumen SRS TaskMate versi 1.0*
