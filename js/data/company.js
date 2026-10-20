/**
 * Company Profile & Customer Experience Data - RELASI SUKSES (relasisukses.co.id)
 * PT Relasi Sukses Bersama - Food Processing Machinery & Industrial Packaging Solutions
 */

export const companyData = {
  name: "RELASI SUKSES",
  shortName: "RSB",
  legalName: "PT Relasi Sukses Bersama",
  tagline: "Industrial Food Processing Machinery & Smart Packaging Systems",
  domain: "relasisukses.co.id",
  email: "sales@relasisukses.co.id",
  established: 1986,
  
  // WhatsApp Contact Configuration
  whatsapp: {
    number: "6281295254747", // Official WhatsApp
    displayNumber: "+62 812-9525-4747",
    representative: "Ir. Hendra Wijaya (Technical & Sales Consultant)",
    defaultMessage: {
      id: "Halo Tim Relasi Sukses, saya tertarik berkonsultasi mengenai mesin industri makanan & pengemasan untuk usaha saya. Mohon informasi katalog & jadwal demo.",
      en: "Hello Relasi Sukses Team, I am interested in consulting about food processing & packaging machinery for my business. Please share catalog specs & demo schedule."
    }
  },

  // Locations, Showroom & Warehouses
  locations: [
    {
      city: "Jakarta Utara (Head Office & Master Showroom)",
      address: "Arcade Business Center Lt. 6 Unit 6-03, Jl. Pantai Indah Utara 2 Kav. C1, Pantai Indah Kapuk, Jakarta Utara 14460",
      phone: "+62 21 5596 8800",
      hours: "Senin - Sabtu: 08.30 - 17.30 WIB",
      facilities: ["Showroom 50+ Unit Demo", "Test Kitchen & Baking Lab", "Pusat Konsultasi Mesin"]
    },
    {
      city: "Tangerang (Central Warehouse & Workshop)",
      address: "Jl. Kavling DPR No. 05 Blok A, Tangerang, Banten 15141",
      phone: "+62 812-9525-4747",
      hours: "Senin - Sabtu: 08.00 - 17.00 WIB",
      facilities: ["Gudang Sparepart Sentral", "Bengkel Perakitan & Kalibrasi", "Ready-Stock Unit"]
    },
    {
      city: "Surabaya (East Java Branch & Service Hub)",
      address: "Komplek Rungkut Industri Megah Blok D-12, Jl. Raya Rungkut No. 88, Surabaya, Jawa Timur 60293",
      phone: "+62 31 843 7200",
      hours: "Senin - Sabtu: 08.30 - 17.00 WIB",
      facilities: ["Unit Demo Populer", "Workshop Reparasi & Bengkel Bubut", "Stok Fast-Moving Parts"]
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      author: "Hj. Ratna Sukowati",
      role: "Founder & Owner",
      company: "Roti Manis Nusantara (Semarang)",
      machineUsed: "Spiral Mixer 60L & Deck Oven 3 Deck",
      avatarInitials: "RS",
      rating: 5,
      quote: {
        id: "Dulu sebelum pakai mesin dari Relasi Sukses, adonan roti kami sering bantat kalau karyawan kecapekan menguleni manual. Begitu pakai Spiral Mixer 60L dan Oven Deck mereka, kapasitas naik 4x lipat dalam sebulan. Yang paling tenang, teknisinya ramah banget ngajarin staf dapur kami sampai lancar.",
        en: "Before Relasi Sukses, our dough was inconsistent due to manual kneading fatigue. Once we installed their 60L Spiral Mixer and 3-Deck Oven, output quadrupled within a month. Best of all, their engineers patiently coached our kitchen staff until full confidence."
      }
    },
    {
      author: "Kevin Christian",
      role: "Operations Director",
      company: "Kencana Snack & Chips (Malang)",
      machineUsed: "Automatic Horizontal Flow Wrapper VP-FL350",
      avatarInitials: "KC",
      rating: 5,
      quote: {
        id: "Tantangan terbesar snack kami adalah segel kemasan yang bocor halus sehingga keripik melempem. Flow wrapper dari Relasi Sukses menyelesaikan masalah ini 100%. Kemasan kami jadi sangat rapi, kedap udara, dan sekarang tembus rak ritel modern nasional.",
        en: "Our biggest headache was micro-leakages causing soggy chips. Relasi Sukses' Flow Wrapper completely solved this. Our packages look crisp, airtight, and now proudly sit on national modern hypermarket shelves."
      }
    },
    {
      author: "Dra. Elvira Kusuma",
      role: "Production Lead",
      company: "Mochi Heritage Pastry (Bandung)",
      machineUsed: "Encrusting Machine VM-EN500",
      avatarInitials: "EK",
      rating: 5,
      quote: {
        id: "Bikin mochi dan bakpia butuh gramatur isian yang presisi agar kulitnya tidak bocor saat dipanggang. Mesin Encrusting Relasi Sukses presisi sampai 0.5 gram! Hemat tenaga kerja, higienitas terjaga, dan kami bisa ekspor pesanan dengan standar ketat.",
        en: "Mochi crafting demands micro-level filling precision so the skin doesn't tear. Relasi Sukses' encrusting unit delivers 0.5-gram accuracy! It saves labor, maintains HACCP hygiene, and allowed us to fulfill strict export orders."
      }
    }
  ],

  // FAQ Items
  faqs: [
    {
      q: {
        id: "Apakah saya bisa mencoba uji coba mesin dengan resep saya sendiri sebelum beli?",
        en: "Can I test run the machine with my own recipe ingredients before purchasing?"
      },
      a: {
        id: "Sangat bisa dan sangat kami anjurkan! Anda cukup jadwalkan kunjungan ke Test Kitchen Showroom kami di Arcade Business Center PIK Jakarta atau workshop Tangerang/Surabaya. Bawa adonan atau produk Anda, dan kita jalankan mesin bersama teknisi sampai Anda puas dengan hasilnya.",
        en: "Absolutely, and we strongly encourage it! Simply schedule a visit to our Test Kitchen Showroom in Arcade Business Center PIK Jakarta or Tangerang/Surabaya workshop. Bring your dough or product, and run the machine alongside our engineers until satisfied."
      }
    },
    {
      q: {
        id: "Bagaimana jika daya listrik tempat usaha saya masih 220V 1 Phase (bukan 380V)?",
        en: "What if my kitchen only has single-phase 220V power (not 3-phase 380V)?"
      },
      a: {
        id: "Banyak lini mesin Relasi Sukses (seperti Sheeter, Mixer skala UMKM, Encrusting, dan Deck Oven gas) dirancang khusus beroperasi normal dengan listrik 220V standar rumahan. Untuk mesin industri 380V, teknisi kami siap bantu audit kelistrikan dan solusi inverter.",
        en: "Many of Relasi Sukses' machinery units operate seamlessly on standard 220V single-phase power. For 3-phase equipment, our engineers provide complimentary electrical audits."
      }
    },
    {
      q: {
        id: "Apakah ada garansi resmi dan bagaimana ketersediaan suku cadang (sparepart)?",
        en: "Is there an official warranty and how available are spare parts in Indonesia?"
      },
      a: {
        id: "Seluruh mesin dari PT Relasi Sukses Bersama dilindungi Garansi Servis Resmi 2 Tahun dan Garansi Sparepart 1 Tahun. Gudang sentral kami di Tangerang & Jakarta menyimpan ribuan komponen orisinil ready-stock sehingga Anda tidak perlu menunggu impor berbulan-bulan.",
        en: "All machinery from PT Relasi Sukses Bersama comes with an official 2-Year Service Warranty and 1-Year Parts Warranty. Our central warehouses stock thousands of genuine parts for immediate dispatch without import delays."
      }
    },
    {
      q: {
        id: "Bagaimana pengiriman ke luar pulau Jawa?",
        en: "How does delivery and technician installation work outside Java island?"
      },
      a: {
        id: "Kami melayani pengiriman ke seluruh Nusantara (Sumatera, Kalimantan, Sulawesi, Bali, hingga Papua) menggunakan ekspedisi kargo kayu terlindungi asuransi. Teknisi kami dapat diterbangkan langsung ke lokasi Anda untuk perakitan dan training operator.",
        en: "We ship nationwide across all Indonesian islands with insured wooden crate logistics. Our certified technicians can be dispatched directly to your facility for commissioning and hands-on operator training."
      }
    }
  ]
};
