# TaskMate

**TaskMate** adalah website sederhana untuk mencatat dan mengelola daftar tugas kuliah. Pengguna dapat menambahkan tugas, menandainya jika sudah selesai, dan data tugas tetap tersimpan meskipun halaman ditutup atau dimuat ulang.

## Fitur

- Menambahkan tugas baru melalui form input
- Validasi input: tugas tidak boleh kosong
- Menandai tugas sebagai selesai dengan checkbox (teks dicoret saat selesai)
- Data tersimpan otomatis di browser menggunakan `localStorage`
- Pesan informasi saat daftar tugas masih kosong
- Halaman biodata pengguna
- Tampilan responsif untuk desktop, tablet, dan ponsel

## Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| HTML | Struktur halaman |
| CSS | Tampilan dan responsivitas |
| JavaScript | Logika daftar tugas dan penyimpanan data |

Tidak memerlukan framework, library, maupun server tambahan.

## Struktur Folder

```
taskmate/
├── index.html    # Halaman utama (daftar tugas)
├── about.html    # Halaman biodata
├── script.js     # Logika aplikasi
├── style.css     # Gaya tampilan
├── SRS.md        # Dokumen spesifikasi kebutuhan perangkat lunak
└── README.md     # Dokumentasi proyek
```

## Cara Menjalankan

### Cara 1: Buka langsung di browser

1. Unduh seluruh file repository ini (klik **Code**, lalu **Download ZIP**).
2. Ekstrak file ZIP tersebut.
3. Buka file `index.html` dengan browser (Chrome, Firefox, Edge, dll).

### Cara 2: Lewat GitHub Pages

Website dapat diakses secara online di:

```
https://florsft.github.io/taskmate/
```

## Cara Penggunaan

1. Buka halaman **Beranda**.
2. Ketik nama tugas pada kolom input, lalu klik **Tambah Tugas**.
3. Centang kotak di sebelah tugas untuk menandainya selesai. Hilangkan centang untuk membatalkan.
4. Buka halaman **Biodata** lewat menu navigasi untuk melihat informasi pengguna.

## Catatan

- Data tugas disimpan di `localStorage` pada browser yang digunakan. Data tidak berpindah antar browser atau perangkat, dan akan hilang jika data browser dihapus.

## Rencana Pengembangan

- Fitur menghapus tugas
- Fitur mengedit nama tugas
- Tenggat waktu dan kategori tugas

## Dokumentasi

Spesifikasi kebutuhan lengkap tersedia di [SRS.md](SRS.md).

## Pembuat

| | |
|---|---|
| **Nama** | Flo Raras Fathin |
| **NIM** | 25091397132 |
| **Program Studi** | Manajemen Informatika |
| **Fakultas** | Fakultas Vokasi |
| **Angkatan** | 2025 |
