# Bali Besi Murah

Katalog statis awal untuk proyek material besi dan konstruksi di Bali. Situs ini saat ini disiapkan sebagai **katalog dan alur permintaan penawaran**, bukan checkout pembayaran otomatis.

## Website
Target GitHub Pages: https://baguskristiansianturi.github.io/basi-bali-murah/

URL publik baru dianggap terverifikasi setelah deployment berhasil dan halaman dicek langsung di browser.

## Status implementasi
- [x] Katalog produk dengan pencarian dan filter kategori
- [x] Tampilan responsif dasar dan panel detail produk
- [x] Daftar permintaan material dan estimasi berat katalog
- [x] Form permintaan penawaran dengan kolom material, jumlah, lokasi, dan catatan
- [x] Metadata SEO dasar, canonical, Open Graph, dan JSON-LD WebSite
- [x] robots.txt, sitemap awal, dan workflow deploy GitHub Pages
- [x] Dokumen riset kompetitor dan strategi SEO
- [ ] Konfirmasi nomor WhatsApp resmi dan isi konstanta `WHATSAPP_NUMBER` di `index.html`
- [ ] Sambungkan dan uji pengiriman formulir setelah nomor resmi dikonfirmasi
- [ ] Verifikasi seluruh nama produk, spesifikasi, satuan, berat, merek, foto, stok, dan harga
- [ ] Konfirmasi identitas usaha, alamat/area operasional, jam layanan, ongkir, dan metode pembayaran
- [ ] Uji tampilan di perangkat nyata pada lebar 320px, 360px, 390px, tablet, dan desktop
- [ ] Aktifkan Google Search Console dan kirim sitemap setelah deployment diverifikasi
- [ ] Buat halaman kategori mendalam setelah data produk dan area layanan valid

## Penting sebelum menerima pesanan
Nomor WhatsApp resmi belum dikonfirmasi. Untuk mencegah pesan dikirim ke nomor contoh, tautan WhatsApp langsung tidak diaktifkan. Fungsi pengiriman akan menampilkan pemberitahuan sampai konstanta `WHATSAPP_NUMBER` diisi dengan nomor resmi format internasional tanpa tanda plus atau spasi. Form belum mengirim data ke server; jangan menganggap permintaan terkirim otomatis.

Harga katalog sebelumnya belum diverifikasi, jadi tampilan pelanggan menggunakan “Minta penawaran” dan total harga menunggu penawaran. Berat katalog juga harus diperlakukan sebagai perkiraan sampai pemasok mengonfirmasi spesifikasi dan berat aktual.

Jangan mengklaim distributor resmi, sertifikat SNI/Mill Test, harga termurah, stok, armada sendiri, gratis potong, pengiriman ke seluruh Bali, alamat fisik, jam operasional, atau testimoni sebelum klaim tersebut benar dan dapat dibuktikan.

## Deployment GitHub Pages
1. Buka repository Settings → Pages.
2. Pilih Source: GitHub Actions jika belum diatur.
3. Buka tab Actions dan pastikan workflow deploy selesai dengan status sukses.
4. Buka URL website di atas lewat browser ponsel; commit GitHub saja belum membuktikan halaman publik telah diperbarui.

## SEO
Lihat [SEO-STRATEGY.md](SEO-STRATEGY.md) dan [dokumen riset kompetitor dan strategi SEO Bali](docs/riset-seo-kompetitor-bali.md). Keyword di dokumen adalah hipotesis intent, bukan volume pencarian terukur. Peringkat halaman pertama Google tidak dapat dijamin.
