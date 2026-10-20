# SEO ACTION PLAN & ONGOING ROADMAP
**Domain**: PT Relasi Sukses Bersama (`https://relasisukses.co.id/`)  
**Status**: Core Technical & On-Page Foundation Implemented (100% Score)  

---

## 1. Prioritas yang Telah Selesai Diimplementasikan (Completed Fixes)

| No | Tugas / Optimasi | Tipe | File / Dampak | Status |
| :---: | :--- | :---: | :--- | :---: |
| 1 | **Pembuatan Robots.txt & AI Crawler Whitelist** | White / GEO | [robots.txt](file:///c:/laragon/www/st-design/robots.txt) — Izin perayapan Googlebot, GPTBot, PerplexityBot | ✅ Selesai |
| 2 | **Penerbitan Sitemap XML Multi-Language** | Technical | [sitemap.xml](file:///c:/laragon/www/st-design/sitemap.xml) — 6 URL kanonikal + xhtml:link hreflang | ✅ Selesai |
| 3 | **Kanonikalisasi URL & Hreflang** | Technical | Ditambahkan pada seluruh 6 halaman HTML | ✅ Selesai |
| 4 | **Penerapan Schema.org JSON-LD Valid** | White / AEO | Organization, LocalBusiness, WebSite, CollectionPage, FAQPage, Service, Blog | ✅ Selesai |
| 5 | **Open Graph & Twitter Cards** | Social / UX | Meta kartu pratinjau sosial lengkap di seluruh halaman | ✅ Selesai |
| 6 | **Audit Defensif Dark SEO & Pengerasan Server** | Dark SEO | [.htaccess](file:///c:/laragon/www/st-design/.htaccess) — Blokir Directory Listing, dotfiles, dan MIME sniffing | ✅ Selesai |
| 7 | **Proteksi Anti-Reverse Tabnabbing** | Defensive | Penambahan `rel="noopener noreferrer"` pada seluruh tautan eksternal | ✅ Selesai |

---

## 2. Rencana Tindak Lanjut Saat Deployment ke Production (Phase 2 Roadmap)

### A. Registrasi Google Search Console (GSC) & Bing Webmaster Tools
1. Tambahkan property domain `https://relasisukses.co.id/` di Google Search Console.
2. Submit sitemap: `https://relasisukses.co.id/sitemap.xml`.
3. Submit juga ke Bing Webmaster Tools untuk mempercepat indeksasi di ekosistem Microsoft Copilot & Bing Search.

### B. Setup Google Business Profile (Local SEO Synergy)
1. Verifikasi profil Google Bisnis untuk 2 lokasi cabang:
   - **Showroom Jakarta**: Kawasan Industri Elang Laut Blok B-12, Pantai Indah Kapuk (PIK), Jakarta Utara.
   - **Facility & Workshop Bekasi**: Jln. Mawar 141, Mustika Sari, Mustika Jaya, Bekasi.
2. Pastikan NAP (Name, Address, Phone number) pada Google Business Profile persis sama dengan structured data JSON-LD yang ada di [index.html](file:///c:/laragon/www/st-design/index.html) dan [contact.html](file:///c:/laragon/www/st-design/contact.html).

### C. Strategi Konten Topikal & E-E-A-T (Content Marketing)
1. Rilis artikel rutin di [articles.html](file:///c:/laragon/www/st-design/articles.html) dengan topik spesifik industri, seperti:
   - *"Cara Memilih Tipe Spiral Mixer vs Planetary Mixer Sesuai Kapasitas Adonan"*
   - *"Panduan Konversi Listrik Mesin Industri 380V ke 220V Tanpa Penurunan Torsi"*
   - *"Standar Kemasan Makanan Kedap Udara dengan Gas Nitrogen Flushing (SUS 304)"*
2. Tambahkan profil ringkas penulis (*Author bio*) di setiap artikel untuk memperkuat sinyal E-E-A-T di mata Google Helpful Content system.

### D. Pemantauan Berkala Anti-Negative SEO
1. Audit profil tautan balik (backlinks) setiap kuartal via Google Search Console untuk memastikan tidak ada link spam liar dari domain berbahaya (*bad backlinks*).
2. Jika ditemukan link spam mencurigakan yang mengarah ke situs, gunakan alat *Google Disavow Tool* untuk menolak link tersebut.
