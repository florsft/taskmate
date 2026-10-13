# TaskMate: Website Daftar Tugas Kuliah

Proyek **UTS Pemrograman Web**, dibuat dengan HTML, CSS, dan JavaScript murni (tanpa framework).

| | |
|---|---|
| **Mata kuliah** | Pemrograman Web |
| **Program studi** | Manajemen Informatika |
| **Dosen** | Faris Abdi El Hakim, S.Kom., M.Tr.Kom. |
| **Nama** | Flo Raras Fathin |
| **NIM** | 25091397132 |
| **Fakultas** | Fakultas Vokasi |

---

## 1. Alamat Website dan Cara Melihatnya

**Alamat website (GitHub Pages):**

> https://github.com/florsft/taskmate

**Cara 1: lewat internet.** Buka alamat di atas di browser (Chrome, Edge, Firefox, dll).

**Cara 2: lewat komputer sendiri.**
1. Unduh semua file proyek (klik tombol hijau **Code** → **Download ZIP**), lalu ekstrak.
2. Pastikan semua file berada dalam satu folder.
3. Klik dua kali `index.html`. Website langsung terbuka di browser.

**Cara menaruh website di GitHub (hosting):**
1. Buat repositori baru di GitHub, lalu unggah semua file (`index.html`, `about.html`, `style.css`, `script.js`, `foto.jpeg`, `README.md`, `srs.md`).
2. Buka **Settings** → **Pages**.
3. Pada *Source*, pilih **Deploy from a branch**, pilih branch **main** dan folder **/ (root)**, lalu klik **Save**.
4. Tunggu 1 sampai 2 menit. Alamat website akan muncul di halaman yang sama.

---

## 2. Tentang Website

TaskMate adalah catatan tugas kuliah. Pengguna bisa menambah tugas, mencentang tugas yang sudah selesai, dan datanya tetap tersimpan walaupun halaman ditutup. Ada juga halaman Biodata berisi profil pembuat.

**Struktur folder**

```
├── index.html   → Halaman Beranda (daftar tugas)
├── about.html   → Halaman Biodata
├── style.css    → Seluruh tampilan dan animasi
├── script.js    → Seluruh interaksi JavaScript
├── foto.jpeg    → Foto profil untuk halaman Biodata
├── README.md    → Penjelasan proyek (file ini)
└── srs.md       → Dokumen SRS
```

---

## 3. Penjelasan Struktur HTML

HTML adalah "kerangka" halaman. Kedua halaman memakai susunan yang sama, dan saya memakai elemen yang **sesuai artinya** (disebut *semantic HTML*) agar kode rapi, mudah dibaca, dan ramah untuk pembaca layar.

| Elemen | Dipakai untuk | Alasan |
|--------|---------------|--------|
| `<!DOCTYPE html>` dan `<html lang="id">` | Pembuka dokumen dan penanda bahasa Indonesia | Browser tahu ini HTML5 dan bahasanya Indonesia |
| `<meta charset="UTF-8">` | Pengkodean huruf | Agar semua karakter tampil benar |
| `<meta name="viewport" ...>` | Pengaturan layar HP | Agar tampilan responsif di HP |
| `<title>` | Judul tab browser | Tiap halaman punya judul sendiri |
| `<header>` + `<nav>` | **Header** dan **menu navigasi** | Berisi logo dan dua menu: *Beranda* dan *Biodata* |
| `<main>` | Isi utama halaman | Memisahkan isi utama dari menu dan footer |
| `<section>` | Pengelompokan bagian | Dipakai untuk bagian sambutan, bagian daftar tugas, dan kartu biodata |
| `<h1>`, `<h2>` | Judul dan sub judul | `h1` hanya satu per halaman, `h2` untuk bagian di dalamnya |
| `<form>`, `<label>`, `<input>`, `<button>` | Form tambah tugas | `label` terhubung ke `input` lewat `for`/`id`, jadi klik tulisan "Nama tugas" langsung mengaktifkan kolom |
| `<ul>` dan `<li>` | Daftar tugas | Tugas adalah daftar, jadi memakai elemen daftar |
| `<img alt="...">` | Foto profil | Atribut `alt` menjelaskan gambar bagi yang tidak bisa melihatnya |
| `<footer>` | Bagian bawah halaman | Berisi hak cipta |

**Hal yang memenuhi instruksi tugas:**

- **Header berisi judul dan deskripsi singkat.** Tiap halaman punya bagian sambutan dengan judul dan satu paragraf deskripsi (misalnya "Catat tugas kuliah dan tandai jika sudah selesai...").
- **Navigasi minimal dua pilihan.** Menu *Beranda* dan *Biodata*. Menu halaman yang sedang dibuka diberi class `active` agar terlihat jelas.
- **Aksesibilitas.** Kotak centang diberi `aria-label`, dan pesan error memakai `aria-live="polite"` sehingga dibacakan otomatis oleh pembaca layar.
- **File CSS dan JS dipisah** dari HTML (`<link>` dan `<script defer>`), sehingga HTML tetap bersih. Atribut `defer` membuat script berjalan setelah halaman selesai dimuat.

---

## 4. Penjelasan Desain CSS

CSS mengatur tampilan. Semua gaya ada di `style.css`, dan kodenya dibagi per bagian dengan komentar agar mudah dicari.

### 4.1 Pengaturan Dasar
- `box-sizing: border-box` untuk semua elemen, supaya ukuran kotak tidak "membengkak" karena padding.
- Huruf **Book Antiqua**.
- `line-height: 1.6`.

### 4.2 Palet Warna
Warna dipilih hangat dan lembut agar tidak melelahkan mata.

| Warna | Kode | Dipakai untuk |
|-------|------|---------------|
| Krem | `#f5f1ed` | Latar halaman |
| Putih | `#ffffff` | Kartu, navigasi, footer |
| Cokelat kemerahan | `#664845` | Judul, logo, tombol |
| Mauve | `#af8d8b` | Garis menu aktif dan sorotan input |
| Abu kecokelatan | `#6e6662` | Teks pendukung |
| Merah | `#a33333` | Pesan error |

### 4.3 Tata Letak
- **Flexbox** untuk navigasi (logo di kiri, menu di kanan), baris input + tombol, item tugas, dan kartu biodata.
- **Grid** untuk daftar tugas (`display: grid; gap: 12px`) agar jarak antar tugas seragam.
- `.container` dibatasi `max-width: 1000px` dan diletakkan di tengah (`margin: 0 auto`) supaya tidak terlalu lebar di layar besar.
- **Kartu** memakai putih, garis tipis, dan sudut membulat (`border-radius: 12px`) untuk memisahkan bagian-bagian isi.

### 4.4 Efek Interaksi (Hover, Focus, Active)
- Menu: garis bawah berwarna muncul saat disorot atau aktif.
- Logo membesar sedikit saat disorot.
- Tombol berubah warna lebih gelap saat disorot dan mengecil sedikit saat ditekan (`transform: scale(0.95)`).
- Kolom input bercahaya (*glow*) saat diklik.
- Kartu terangkat dengan bayangan saat disorot.
- Item tugas bergeser ke kanan saat disorot.
- Foto profil membesar dan berputar sedikit saat disorot.

### 4.5 Animasi (`@keyframes`)

| Nama | Efek | Dipakai pada |
|------|------|--------------|
| `turunAtas` | Turun dari atas | Bar navigasi |
| `naik` | Naik sambil muncul perlahan | Teks sambutan dan kartu |
| `muncul` | Memantul dan berubah warna latar | Tugas baru |
| `getar` | Bergetar kiri-kanan | Pesan error |
| `membal` | Membesar lalu kembali | Kotak centang |
| `denyut` | Berkedip pelan tanpa henti | Pesan "belum ada tugas" |
| `zoomMasuk` | Muncul dari kecil | Foto profil |
| `geserMasuk` | Masuk dari kiri | Baris biodata (bergantian lewat `animation-delay`) |
| `munculPelan` | Muncul perlahan | Footer |

Untuk kenyamanan, ada aturan `@media (prefers-reduced-motion: reduce)` yang **mematikan semua animasi** bagi pengguna yang mengaktifkan pengaturan "kurangi gerakan" di perangkatnya.

### 4.6 Responsif (`@media`)

| Lebar layar | Perubahan |
|-------------|-----------|
| Maksimal 768 px (tablet) | Margin menyempit, judul sedikit lebih kecil |
| Maksimal 480 px (HP) | Menu tersusun ke bawah, input dan tombol bertumpuk dan tombol selebar layar, kartu biodata tersusun vertikal, foto lebih kecil |

### 4.7 Kemudahan Dibaca
Teks gelap di atas latar terang menghasilkan kontras yang baik. Tugas yang selesai diberi warna abu dan coretan, jadi statusnya terlihat jelas tanpa bergantung pada warna saja.

---

## 5. Penjelasan Fungsionalitas JavaScript

Semua kode ada di `script.js`. Instruksi tugas meminta beberapa jenis interaksi. Berikut yang sudah diterapkan:

| Jenis interaksi | Status | Penerapan |
|-----------------|--------|-----------|
| **1. Event Handling** | ✅ Ada | `submit` pada form (tambah tugas) dan `change` pada kotak centang (tandai selesai) |
| **2. DOM Manipulation** | ✅ Ada | Membuat elemen dengan `createElement`, memasang dengan `appendChild`, menghapus pesan kosong dengan `remove()`, mengisi teks dengan `innerText` |
| **3. Style & Animation** | ✅ Ada | `classList.add/remove("completed")` mengubah gaya tugas (coret dan abu) dan memicu animasi CSS |
| **4. Form Validation** | ✅ Ada | Input dibersihkan dengan `trim()`. Jika kosong, muncul pesan "Nama tugas harus diisi." dan kursor kembali ke kolom |
| **5. AJAX** | ❌ Belum | Tidak dipakai karena website tidak membutuhkan data dari server |
| **Tambahan: LocalStorage** | ✅ Ada | Data tugas disimpan dan dimuat kembali, jadi tidak hilang saat refresh |

### Fungsi-fungsi utama

| Fungsi | Tugasnya |
|--------|----------|
| `displayTasks()` | Dipanggil saat halaman dibuka. Membaca data dari LocalStorage, menampilkan pesan kosong bila belum ada tugas, lalu menampilkan setiap tugas tersimpan |
| `createTask(nama, selesai)` | Membuat satu baris tugas (kotak centang + teks), memberi tahu apa yang terjadi saat dicentang, lalu memasukkannya ke daftar |
| `saveTasks()` | Membaca semua tugas yang tampil di layar, lalu menyimpannya ke LocalStorage dengan kunci `tasks` |
| *Pendengar `submit`* | Mengecek isian. Bila kosong tampil pesan error. Bila terisi, menambah tugas, menyimpan, mengosongkan kolom |

### Alur singkat
```
Halaman dibuka → displayTasks() → tampilkan tugas tersimpan
Pengguna tambah tugas → cek kosong? → (tidak) createTask() → saveTasks()
Pengguna centang tugas → ubah gaya → saveTasks()
```

---

## 6. Kesesuaian Standar HTML dan CSS

- Memakai `<!DOCTYPE html>` dan struktur HTML yang lengkap.
- Setiap `<img>` punya atribut `alt`, dan setiap `<input>` punya label atau `aria-label`.

---

## 7. Dokumentasi Lain

Spesifikasi kebutuhan perangkat lunak lengkap ada di file [`srs.md`](srs.md).

---

## 8. Batasan Saat Ini

- Belum ada tombol hapus dan edit tugas.
- Data hanya tersimpan di satu browser pada satu perangkat, dan hilang jika data browser dibersihkan.
- AJAX belum diterapkan.

---

TaskMate © 2026 | Karya sendiri untuk UTS Pemrograman Web
