/**
 * Contact Hub & Dynamic FAQ Knowledge Data - VECTRO INDUSTRIAL
 * Marketing 5.0: Consultative Showroom Booking, Direct Hotlines & Structured Buyer FAQs
 */

export const contactData = {
  // Official Showrooms & Service Hubs
  showrooms: [
    {
      id: "jkt-pik",
      city: { id: "Jakarta Utara (Kantor Pusat & Master Showroom)", en: "North Jakarta (Headquarters & Master Showroom)" },
      complex: "Kawasan Industri & Pergudangan Elang Laut",
      address: "Sentra Bisnis Elang Laut Blok B No. 18-20, Pantai Indah Kapuk, Jakarta Utara 14470",
      phone: "+62 21 5596 8800",
      whatsapp: "628118899234",
      hours: {
        id: "Senin - Sabtu: 08.30 - 17.30 WIB",
        en: "Monday - Saturday: 08:30 - 17:30 WIB"
      },
      features: [
        { id: "50+ Unit Mesin Siap Demo & Uji Coba", en: "50+ Fully Operational Demo Units" },
        { id: "Test Kitchen & Baking Studio Lengkap", en: "Full Test Kitchen & Baking Lab" },
        { id: "Gudang Sentral Suku Cadang Ready-Stock", en: "Central Domestic Spare Parts Warehouse" }
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0989063234125!2d106.7456784!3d-6.1173921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d47913cf677%3A0xbcf03a71b12b58d0!2sElang%20Laut%20Pantai%20Indah%20Kapuk!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
    },
    {
      id: "bks-mustika",
      city: { id: "Bekasi (Kantor & Workshop Servis)", en: "Bekasi (Office & Service Workshop)" },
      complex: "Mustika Jaya Industrial Area",
      address: "Jln. Mawar 141, Mustika Sari, Mustika Jaya, Bekasi",
      email: "info@relasisukses.co.id",
      phone: "+62 812-9525-4747",
      whatsapp: "6281295254747",
      hours: {
        id: "Senin - Sabtu: 08.30 - 17.00 WIB",
        en: "Monday - Saturday: 08:30 - 17:00 WIB"
      },
      features: [
        { id: "Workshop Perakitan & Rekayasa Mesin Presisi", en: "Machine Assembly & Precision Engineering Hub" },
        { id: "Depo Suku Cadang Resmi Ready-Stock", en: "Official Domestic Spare Parts Depot" },
        { id: "Layanan Servis & Kalibrasi Mesin Pangan", en: "Food Machinery Calibration & Service Center" }
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9456784!2d107.0123456!3d-6.3012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69910000000000%3A0x0!2sMustika%20Jaya%20Bekasi!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
    }
  ],

  // Direct Communication Channels
  channels: [
    {
      id: "sales-engineering",
      badge: "Konsultasi Alur Produksi",
      title: { id: "Sales Engineering & Spesifikasi", en: "Sales Engineering & Sizing" },
      desc: {
        id: "Diskusi kapasitas harian, rekomendasi tipe mesin, dan perhitungan efisiensi alur dapur.",
        en: "Discuss daily volume targets, machine model recommendations, and line layout efficiency."
      },
      phone: "+62 812-9525-4747",
      waPhone: "6281295254747",
      prefill: {
        id: "Halo Tim Sales Engineer Relasi Sukses, saya ingin konsultasi pemilihan mesin industri yang cocok untuk kapasitas usaha saya.",
        en: "Hello Relasi Sukses Sales Engineers, I would like to consult on machinery options suited for our production capacity."
      }
    },
    {
      id: "demo-booking",
      badge: "Test Kitchen Lab",
      title: { id: "Reservasi Demo & Uji Resep", en: "Test Kitchen & Recipe Trial" },
      desc: {
        id: "Jadwalkan uji coba bahan baku asli Anda di showroom Jakarta PIK atau workshop Bekasi.",
        en: "Book a hands-on trial run using your own raw recipe ingredients at Jakarta PIK or Bekasi workshop."
      },
      phone: "+62 812-9525-4747",
      waPhone: "6281295254747",
      prefill: {
        id: "Halo Tim Showroom Relasi Sukses, saya ingin menjadwalkan kunjungan & uji coba resep bahan baku langsung di showroom.",
        en: "Hello Relasi Sukses Showroom Team, I would like to schedule a visit and live recipe trial at your showroom."
      }
    },
    {
      id: "service-emergency",
      badge: "SLA Tanggap 48 Jam",
      title: { id: "Layanan Suku Cadang & Servis", en: "Spare Parts & Emergency Field Service" },
      desc: {
        id: "Permintaan teknisi panggilan darurat pabrik, klaim garansi resmi, dan order suku cadang ready-stock.",
        en: "Emergency field service dispatch, official warranty support, and ready-stock parts orders."
      },
      phone: "+62 812-9525-4747",
      waPhone: "6281295254747",
      prefill: {
        id: "Halo Layanan Servis Relasi Sukses, saya membutuhkan bantuan teknis / suku cadang untuk mesin industri kami.",
        en: "Hello Relasi Sukses Technical Service, I need engineering support / spare parts for our machinery."
      }
    }
  ],

  // FAQ Categories for Dynamic Filtering
  faqCategories: [
    { id: "all", label: { id: "Semua Pertanyaan", en: "All Questions" } },
    { id: "trial", label: { id: "Uji Coba & Resep Dapur", en: "Demo & Recipe Trials" } },
    { id: "electrical", label: { id: "Daya Listrik & Instalasi", en: "Electrical & Setup" } },
    { id: "warranty", label: { id: "Garansi & Suku Cadang", en: "Warranty & Spare Parts" } },
    { id: "shipping", label: { id: "Pengiriman Nusantara & Kargo", en: "Nationwide Shipping" } }
  ],

  // Dynamic FAQs List
  faqs: [
    {
      id: "faq-1",
      category: "trial",
      q: {
        id: "Apakah saya bisa membawa bahan baku resep sendiri untuk uji coba mesin sebelum membeli?",
        en: "Can I bring my own recipe ingredients to test run the machines prior to purchasing?"
      },
      a: {
        id: "Sangat bisa dan sangat kami anjurkan! Setiap adonan tepung, kekentalan saus, dan kelembapan biskuit memiliki sifat unik. Di Test Kitchen Showroom kami di Pantai Indah Kapuk (Jakarta) dan workshop Bekasi, Anda dipersilakan membawa bahan baku asli dan mencoba mesin didampingi sales engineer kami tanpa dipungut biaya sepeser pun dan tanpa paksaan membeli.",
        en: "Absolutely, and we strongly encourage it! Every flour dough, sauce viscosity, and snack texture behaves differently. In our Jakarta (PIK) and Bekasi Test Kitchens, bring your proprietary ingredients and run the machines alongside certified engineers at zero fee and with no purchase obligation."
      }
    },
    {
      id: "faq-2",
      category: "trial",
      q: {
        id: "Bagaimana prosedur penjadwalan demo mesin di showroom?",
        en: "What is the procedure for scheduling a live machine demo at the showroom?"
      },
      a: {
        id: "Cukup hubungi tim kami via WhatsApp atau isi formulir reservasi kunjungan di halaman ini minimal 1 hari kerja sebelumnya. Beritahukan tipe mesin yang ingin diuji coba dan perkiraan jumlah bahan yang Anda bawa agar tim engineer kami dapat menyiapkan unit demo dalam kondisi prima dan terkalibrasi.",
        en: "Simply contact us on WhatsApp or fill out the booking form on this page at least 1 business day in advance. Let us know which models you want to test and your sample batch size so our engineers can prep and calibrate the demo machinery."
      }
    },
    {
      id: "faq-3",
      category: "electrical",
      q: {
        id: "Bagaimana jika tempat usaha saya masih menggunakan daya listrik 220V 1-Phase (bukan 380V)?",
        en: "What if our kitchen only has single-phase 220V power (not 3-phase 380V)?"
      },
      a: {
        id: "Banyak lini mesin Relasi Sukses (seperti Spiral Mixer 20L, Dough Sheeter, Encrusting Machine UMKM, Band Sealer, dan Deck Oven gas) dirancang khusus beroperasi efisien pada daya 220V standar rumahan (2.200 - 4.400 VA). Jika Anda berencana menggunakan mesin kapasitas besar 380V, sales engineer kami siap memberikan konsultasi gratis mengenai instalasi inverter pengubah fase atau panduan penambahan daya PLN.",
        en: "Many of our units (including 20L Spiral Mixers, Dough Sheeters, SME Encrusting units, Band Sealers, and Gas Deck Ovens) operate seamlessly on standard 220V single-phase power (2,200 - 4,400 VA). For larger 380V machinery, our engineers provide complimentary guidance on phase-converter inverters or utility power upgrades."
      }
    },
    {
      id: "faq-4",
      category: "electrical",
      q: {
        id: "Apakah teknisi Relasi Sukses membantu instalasi kelistrikan awal saat mesin tiba di tempat saya?",
        en: "Do Relasi Sukses technicians assist with on-site electrical commissioning upon machine delivery?"
      },
      a: {
        id: "Ya, betul. Tim teknisi kami akan turun langsung ke lokasi dapur Anda untuk memeriksa instalasi grounding, kestabilan voltase, penyetelan arah putaran motor listrik, kalibrasi kontrol digital suhu/kecepatan, serta memastikan seluruh sistem safety interlock beroperasi dengan aman.",
        en: "Yes. Our certified technicians visit your facility to inspect electrical grounding, voltage stability, motor rotation direction, digital temperature/speed calibration, and verify all safety interlock guards."
      }
    },
    {
      id: "faq-5",
      category: "warranty",
      q: {
        id: "Berapa lama masa garansi resmi dan apa saja cakupannya?",
        en: "How long is the official warranty and what does it cover?"
      },
      a: {
        id: "Seluruh mesin industri dari PT Relasi Sukses Bersama dilindungi Garansi Servis Resmi 2 Tahun Penuh (bebas biaya jasa perbaikan & kalibrasi) dan Garansi Suku Cadang Orisinil 1 Tahun untuk komponen mekanis utama, motor penggerak, elemen pemanas, serta modul kontrol PLC jika terjadi cacat produksi.",
        en: "All industrial machinery from PT Relasi Sukses Bersama is backed by an Official 2-Year Service Warranty (zero labor fees for repairs & calibration) and a 1-Year Genuine Parts Warranty covering drive motors, mechanical gears, heating bands, and digital PLC controllers against manufacturing defects."
      }
    },
    {
      id: "faq-6",
      category: "warranty",
      q: {
        id: "Apakah suku cadang (spare parts) selalu ready-stock di Indonesia?",
        en: "Are replacement spare parts always in-stock domestically in Indonesia?"
      },
      a: {
        id: "Pasti. Kami mengoperasikan gudang sentral suku cadang di Tangerang dan Jakarta Utara serta depo pendukung di Bekasi. Ribuan komponen fast-moving seperti belt, bearing, seal kedap udara, elemen pemanas, thermocouple, dan gear motor selalu tersedia ready-stock sehingga Anda tidak perlu menunggu impor berbulan-bulan saat membutuhkan penggantian.",
        en: "Absolutely. We operate central parts distribution centers in Tangerang and North Jakarta as well as Bekasi. Thousands of fast-moving items like conveyor belts, food-grade bearings, heating elements, thermocouples, and gearmotors are stocked domestically for same-day or next-day dispatch."
      }
    },
    {
      id: "faq-7",
      category: "shipping",
      q: {
        id: "Bagaimana proses pengiriman untuk pelanggan di luar pulau Jawa?",
        en: "How does nationwide shipping work for clients outside Java island?"
      },
      a: {
        id: "Kami melayani pengiriman ke seluruh Indonesia (Sumatera, Kalimantan, Sulawesi, Bali, NTB/NTT, hingga Papua). Setiap mesin dipacking menggunakan peti kayu ekspor kokoh (solid wooden crate) berlapis foam anti-guncangan dan dilindungi asuransi kargo penuh. Teknisi kami juga dapat diterbangkan ke lokasi Anda untuk pemasangan dan pelatihan operator.",
        en: "We ship nationwide across all Indonesian provinces. Every machine is crated in heavy-duty export-grade solid wood with high-density shock absorbent liners and 100% transit insurance. Certified technicians can be dispatched to your city for on-site commissioning and line training."
      }
    },
    {
      id: "faq-8",
      category: "shipping",
      q: {
        id: "Apakah ada pelatihan (training) operasional untuk staf dapur kami?",
        en: "Is hands-on operational coaching provided for our kitchen staff?"
      },
      a: {
        id: "Tentu. Setiap pembelian mesin Relasi Sukses sudah termasuk sesi pelatihan langsung di lokasi usaha Anda. Teknisi kami melatih staf Anda cara pengoperasian yang benar, tips menjaga konsistensi resep, prosedur pembersihan higienis harian, dan perawatan preventif mandiri agar mesin awet belasan tahun.",
        en: "Yes. Every Relasi Sukses machine delivery includes comprehensive on-site operator coaching. Our technicians train your team on proper startup procedures, recipe consistency adjustments, daily sanitation protocols, and preventive maintenance routines."
      }
    }
  ]
};
