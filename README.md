# Besi Bali Murah

Katalog statis awal untuk proyek bisnis material besi dan konstruksi di Bali.

## Website
Target GitHub Pages: https://baguskristiansianturi.github.io/basi-bali-murah/

URL ini baru menjadi situs publik setelah GitHub Pages berhasil diaktifkan dan deployment selesai.

## Status implementasi
- [x] Halaman katalog responsif untuk ponsel
- [x] Pencarian dan filter kategori produk
- [x] Kalkulator estimasi berat besi beton
- [x] FAQ dasar untuk membantu pembeli menyiapkan permintaan penawaran
- [x] robots.txt dan sitemap awal
- [x] Workflow GitHub Actions untuk deploy ke Pages
- [x] Dokumen riset kompetitor dan strategi SEO Bali
- [ ] Konfirmasi nomor WhatsApp bisnis yang benar
- [ ] Konfirmasi identitas usaha, alamat/area operasional, dan jam layanan
- [ ] Verifikasi produk, pemasok, spesifikasi, stok, harga, margin, serta ongkir
- [ ] Aktifkan Google Search Console dan kirim sitemap
- [ ] Tambah halaman produk mendalam setelah data produk diverifikasi

## Mengaktifkan GitHub Pages
1. Buka repository Settings.
2. Pilih Pages.
3. Pada Build and deployment, pilih Source: GitHub Actions jika belum dipilih.
4. Buka tab Actions dan pastikan workflow “Deploy static site to GitHub Pages” selesai dengan status sukses.
5. Setelah sukses, buka target URL di atas lewat browser HP.

Jika GitHub Pages sudah disetel untuk deploy dari branch, pastikan konfigurasi hanya memakai satu metode deployment agar tidak bertabrakan dengan workflow.

## Sebelum menerima order
Nomor WhatsApp contoh dari desain awal sengaja tidak digunakan. Tombol penawaran sekarang memberi tahu bahwa kontak bisnis belum diatur. Isi nomor WhatsApp format internasional pada konstanta WHATSAPP_NUMBER di index.html setelah nomor bisnis resmi dikonfirmasi. Jangan memakai nomor contoh.

Jangan mengklaim distributor resmi, produk bersertifikat SNI, harga termurah, stok tersedia, gratis potong, pengiriman ke seluruh Bali, alamat fisik, atau testimoni sebelum klaim tersebut benar dan bisa dibuktikan.

## SEO
Lihat [dokumen riset kompetitor dan strategi SEO Bali](docs/riset-seo-kompetitor-bali.md). Kata kunci dalam dokumen adalah hipotesis intent, bukan volume pencarian terukur. Peringkat halaman pertama Google tidak dapat dijamin.
