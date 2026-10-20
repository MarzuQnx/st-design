/**
 * Solutions & Technical Engineering Data - VECTRO INDUSTRIAL
 * Marketing 5.0: Production Line Audits, On-Site Commissioning & Electrical Simulator
 */

export const solutionsData = {
  // 4-Stage Partnership Lifecycle
  lifecycleStages: [
    {
      stepNumber: "01",
      badge: "Pre-Purchase",
      icon: "audit",
      title: {
        id: "Audit Alur Kerja & Daya Listrik",
        en: "Workflow & Electrical Audit"
      },
      tagline: {
        id: "Analisis layout dapur & kecukupan daya PLN sebelum transaksi",
        en: "Kitchen layout analysis & PLN electrical capacity validation"
      },
      desc: {
        id: "Sales engineer kami membantu Anda mengukur kapasitas riil, ketersediaan daya listrik (220V atau 380V), dan alur perpindahan bahan baku agar mesin yang dipilih tidak menimbulkan bottleneck di dapur Anda.",
        en: "Our sales engineers analyze your true output targets, power availability (220V or 380V), and raw material flow so the machinery purchased never causes bottlenecking in your kitchen."
      },
      keyDeliverable: {
        id: "Laporan Estimasi Kapasitas & Rekomendasi Kelistrikan",
        en: "Capacity Estimate Report & Electrical Sizing Recommendations"
      }
    },
    {
      stepNumber: "02",
      badge: "Test Kitchen Lab",
      icon: "testRun",
      title: {
        id: "Uji Coba Resep Bahan Baku Asli",
        en: "Real Recipe Trial in Test Kitchen"
      },
      tagline: {
        id: "Bawa adonan & saus Anda langsung ke lab kami di PIK & Surabaya",
        en: "Bring your raw dough & sauces to our PIK & Surabaya demo labs"
      },
      desc: {
        id: "Sebelum mesin dikirim, kami mengundang Anda menguji adonan resep sendiri pada unit demo. Kami memverifikasi tekstur, waktu mixing, kerataan pemanggangan, atau kerapatan segel kemasan hingga sesuai ekspektasi Anda.",
        en: "Prior to delivery, test your proprietary recipes on our functional demo units. We verify crumb texture, mixing speed, baking evenness, or pouch airtightness until you are 100% satisfied."
      },
      keyDeliverable: {
        id: "Verifikasi Tekstur & Uji Ketahanan Segel Kemasan",
        en: "Texture Validation & Packaging Seal Integrity Clearance"
      }
    },
    {
      stepNumber: "03",
      badge: "Commissioning",
      icon: "installation",
      title: {
        id: "Instalasi & Pelatihan Operator di Dapur Anda",
        en: "On-Site Installation & Operator Coaching"
      },
      tagline: {
        id: "Teknisi datang langsung, menyetel parameter & membimbing staf",
        en: "Engineers visit your kitchen, calibrate parameters & train your staff"
      },
      desc: {
        id: "Teknisi Relasi Sukses hadir di lokasi usaha Anda untuk perakitan presisi, kalibrasi sensor, pengujian kelistrikan awal, dan mendampingi operator dapur sampai benar-benar mandiri mengoperasikan serta merawat mesin.",
        en: "Certified Relasi Sukses technicians visit your facility for precision alignment, sensor calibration, initial electrical load checks, and hands-on staff coaching until your team operates with autonomy."
      },
      keyDeliverable: {
        id: "Sertifikat Pelatihan Operator & Standard Operating Procedure (SOP)",
        en: "Operator Training Certification & Laminated Kitchen SOP Sheets"
      }
    },
    {
      stepNumber: "04",
      badge: "SLA 48 Jam",
      icon: "support",
      title: {
        id: "Jaminan Sparepart & Tanggap Darurat Servis",
        en: "Domestic Spare Parts & Rapid Response Service"
      },
      tagline: {
        id: "Siaga teknisi lapangan dan ribuan suku cadang orisinil ready-stock",
        en: "Rapid emergency field dispatch & thousands of domestic genuine parts"
      },
      desc: {
        id: "Downtime mesin adalah kerugian nyata. Kami memberikan Garansi Servis Resmi 2 Tahun, Garansi Suku Cadang 1 Tahun, dan komitmen pengiriman suku cadang orisinil dari gudang Jakarta & Surabaya tanpa menunggu impor berbulan-bulan.",
        en: "Machine downtime burns real profit. We provide an Official 2-Year Service Warranty, 1-Year Parts Warranty, and rapid spare parts dispatch from our domestic hubs without import delays."
      },
      keyDeliverable: {
        id: "Jaminan Tanggap Darurat 48 Jam & Kartu Servis Resmi Relasi Sukses",
        en: "48-Hour Service SLA Commitment & Official Warranty Passport"
      }
    }
  ],

  // Interactive Production & Electrical Calculator Data
  calculatorRules: {
    sectors: [
      {
        id: "bakery",
        title: { id: "Peralatan Bakery & Toko Roti", en: "Bakery & Bread Equipment" },
        icon: "bread",
        scales: {
          umkm: {
            outputLabel: { id: "50 - 150 kg adonan / hari (500 - 1.200 roti)", en: "50 - 150 kg dough / day (500 - 1,200 loaves)" },
            recommendedMachines: [
              { name: "Heavy-Duty Spiral Mixer 20L (VM-SP20)", power: "1.1 kW" },
              { name: "Luxury Gas Deck Oven 1-Deck 2-Tray (VO-DK12)", power: "0.1 kW (Gas Utama)" }
            ],
            totalPowerKw: 1.2,
            recommendedPhase: "220V",
            compatible220V: true,
            laborReductionPct: "60%",
            batchOutputBoost: "+250%",
            engineeringNote: {
              id: "Sangat aman untuk meteran listrik rumahan standar (2.200 VA). Oven menggunakan pemanas gas LPG dengan konsumsi listrik minimal hanya untuk pengapian digital.",
              en: "Safe for standard residential power connections (2,200 VA). The oven utilizes LPG gas burners with minimal electricity only for digital ignition controls."
            }
          },
          medium: {
            outputLabel: { id: "200 - 500 kg adonan / hari (2.000 - 5.000 roti)", en: "200 - 500 kg dough / day (2,000 - 5,000 loaves)" },
            recommendedMachines: [
              { name: "Commercial Spiral Mixer 60L (VM-SP60)", power: "2.4 kW" },
              { name: "Gas Deck Oven 3-Deck 6-Tray (VO-DK36)", power: "0.3 kW (Gas Utama)" },
              { name: "Digital Humidity Dough Proofer 16 Tray (VP-PF16)", power: "1.8 kW" }
            ],
            totalPowerKw: 4.5,
            recommendedPhase: "220V atau 380V",
            compatible220V: true,
            laborReductionPct: "75%",
            batchOutputBoost: "+400%",
            engineeringNote: {
              id: "Dapat beroperasi pada 220V 1-Phase (minimal daya 5.500 VA) atau 380V 3-Phase. Kami merekomendasikan pembagian MCB terpisah untuk mixer dan proofer.",
              en: "Operates smoothly on 220V single-phase (min 5,500 VA) or 380V 3-phase. We advise dedicated sub-breakers for the mixer and proofer."
            }
          },
          factory: {
            outputLabel: { id: "> 800 kg adonan / hari (> 8.000 roti skala pabrik)", en: "> 800 kg dough / day (> 8,000 loaves commercial)" },
            recommendedMachines: [
              { name: "Double Motion Spiral Mixer 120L (VM-SP120)", power: "5.5 kW" },
              { name: "Commercial Rotary Rack Oven 32-Tray (VO-RT32)", power: "3.5 kW (Gas + Blower)" },
              { name: "Continuous Automated Dough Moulder & Slicer Line", power: "3.0 kW" }
            ],
            totalPowerKw: 12.0,
            recommendedPhase: "380V",
            compatible220V: false,
            laborReductionPct: "85%",
            batchOutputBoost: "+700%",
            engineeringNote: {
              id: "Kapasitas ini membutuhkan instalasi listrik 380V 3-Phase (minimal 16.500 VA). Tim sales engineer kami siap membantu perhitungan kabel dan instalasi panel induk.",
              en: "This industrial volume requires a dedicated 380V 3-phase line (min 16,500 VA). Our engineers assist in load balancing and main electrical panel design."
            }
          }
        }
      },
      {
        id: "packaging",
        title: { id: "Pengemasan & Sealing Makanan", en: "Packaging & Sealing Machines" },
        icon: "package",
        scales: {
          umkm: {
            outputLabel: { id: "1.000 - 3.000 kemasan / hari (Snack / Keripik)", en: "1,000 - 3,000 pouches / day (Snacks / Chips)" },
            recommendedMachines: [
              { name: "Continuous Band Sealer with Gas Flushing (VP-BS900)", power: "0.65 kW" },
              { name: "Solid Ink Coding Machine (VP-CD200)", power: "0.15 kW" }
            ],
            totalPowerKw: 0.8,
            recommendedPhase: "220V",
            compatible220V: true,
            laborReductionPct: "50%",
            batchOutputBoost: "+200%",
            engineeringNote: {
              id: "Sangat hemat daya (hanya 800 Watt total). Dapat langsung dicolokkan ke stopkontak 220V biasa. Sudah dilengkapi injeksi nitrogen gas flushing.",
              en: "Extremely energy efficient (only 800W total). Plugs directly into standard 220V wall outlets. Equipped with integrated nitrogen gas flush."
            }
          },
          medium: {
            outputLabel: { id: "5.000 - 15.000 kemasan / hari (Roti / Biskuit)", en: "5,000 - 15,000 packs / day (Bread / Confectionery)" },
            recommendedMachines: [
              { name: "Automatic Horizontal Flow Wrapper (VP-FL350)", power: "2.8 kW" },
              { name: "Thermal Transfer Overprinter (TTO Coder)", power: "0.2 kW" }
            ],
            totalPowerKw: 3.0,
            recommendedPhase: "220V atau 380V",
            compatible220V: true,
            laborReductionPct: "80%",
            batchOutputBoost: "+500%",
            engineeringNote: {
              id: "Mampu membungkus 40 - 180 kemasan per menit. Kompatibel dengan listrik 220V 1-Phase (daya 3.500 VA ke atas). Segel kedap udara siap rak ritel modern.",
              en: "Packs 40 - 180 units/minute. Fully compatible with single-phase 220V (3,500 VA and above). Yields airtight retail-ready seals."
            }
          },
          factory: {
            outputLabel: { id: "> 25.000 kemasan / hari (Lini Pabrik Kecepatan Tinggi)", en: "> 25,000 packs / day (High-Speed Plant Line)" },
            recommendedMachines: [
              { name: "Servo-Driven Multi-Lane Flow Wrapper (VP-FL600S)", power: "5.5 kW" },
              { name: "Rotary Premade Pouch Doypack Machine (VP-DP8)", power: "4.5 kW" },
              { name: "Checkweigher & Metal Detector Integration", power: "1.2 kW" }
            ],
            totalPowerKw: 11.2,
            recommendedPhase: "380V",
            compatible220V: false,
            laborReductionPct: "90%",
            batchOutputBoost: "+850%",
            engineeringNote: {
              id: "Wajib menggunakan suplai 380V 3-Phase. Sudah terintegrasi sensor servo berkecepatan tinggi, conveyor penimbang otomatis, dan proteksi metal detector HACCP.",
              en: "Requires dedicated 380V 3-phase line. Integrates high-speed multi-axis servos, automated reject checkweighers, and HACCP metal detectors."
            }
          }
        }
      },
      {
        id: "processing",
        title: { id: "Pengolahan Makanan & Pastry", en: "Food Processing & Pastry" },
        icon: "casserole",
        scales: {
          umkm: {
            outputLabel: { id: "30 - 100 kg isian kue / saus / bakso per hari", en: "30 - 100 kg fillings / sauces / meat per day" },
            recommendedMachines: [
              { name: "Gas Tilting Cooking Mixer 50L (VM-CK50)", power: "0.75 kW (Motor Pengaduk)" },
              { name: "Food Grade Meat Mincer & Slicer (VM-MC12)", power: "0.75 kW" }
            ],
            totalPowerKw: 1.5,
            recommendedPhase: "220V",
            compatible220V: true,
            laborReductionPct: "65%",
            batchOutputBoost: "+300%",
            engineeringNote: {
              id: "Sangat cocok untuk produksi selai nanas nastar, pasta kacang, dan adonan daging. Pengaduk planetari otomatis mencegah adonan gosong di dasar kuali.",
              en: "Ideal for pineapple tart jam, bean paste, and meat blends. Planetary stirrers prevent burning on the kettle base with low electricity."
            }
          },
          medium: {
            outputLabel: { id: "150 - 400 kg / hari (Mochi, Nastar, Bakpia, Sosis)", en: "150 - 400 kg / day (Mochi, Mooncakes, Pastries)" },
            recommendedMachines: [
              { name: "Automatic Encrusting Machine (VM-EN500)", power: "1.8 kW" },
              { name: "Commercial Bowl Cutter / Fine Emulsifier (VM-BC20)", power: "2.2 kW" }
            ],
            totalPowerKw: 4.0,
            recommendedPhase: "220V atau 380V",
            compatible220V: true,
            laborReductionPct: "80%",
            batchOutputBoost: "+550%",
            engineeringNote: {
              id: "Presisi gramatur isian hingga ±0.5 gram. Kompatibel dengan daya 220V 1-Phase (disarankan daya 4.400 VA ke atas) atau 380V 3-Phase.",
              en: "Micro-precision filling ratio within ±0.5 grams. Operates on 220V single-phase (recommended 4,400 VA+) or 380V 3-phase."
            }
          },
          factory: {
            outputLabel: { id: "> 1.000 kg / hari (Lini Otomatis Pembentukan Massal)", en: "> 1,000 kg / day (Continuous Mass Forming Line)" },
            recommendedMachines: [
              { name: "Heavy Duty Multi-Row Encrusting Line (VM-EN800)", power: "6.0 kW" },
              { name: "Industrial Steam Jacketed Cooking Kettle 300L", power: "4.0 kW" },
              { name: "Continuous Automated Cooling & Tunnel Line", power: "5.5 kW" }
            ],
            totalPowerKw: 15.5,
            recommendedPhase: "380V",
            compatible220V: false,
            laborReductionPct: "90%",
            batchOutputBoost: "+900%",
            engineeringNote: {
              id: "Sistem lini kontinu terpusat. Wajib pasokan listrik 380V 3-Phase dengan instalasi grounding mandiri di bawah 2 Ohm untuk kestabilan kontrol PLC digital.",
              en: "Centralized continuous processing line. Requires 380V 3-phase power with dedicated independent ground < 2 Ohms for PLC digital stability."
            }
          }
        }
      }
    ]
  },

  // Service Level Agreements (SLA) & Warranty Breakdown
  protectionPlans: [
    {
      badge: "Garansi Resmi",
      title: { id: "Garansi Servis 2 Tahun Penuh", en: "Full 2-Year Service Warranty" },
      coverage: {
        id: "Mencakup seluruh biaya jasa perbaikan, kalibrasi berkala, dan penanganan problem kelistrikan oleh teknisi bersertifikat Relasi Sukses di lokasi usaha Anda.",
        en: "Covers all labor costs, periodic calibration, and electrical troubleshooting by certified Relasi Sukses technicians at your facility."
      },
      highlight: { id: "Bebas Biaya Jasa Teknisi", en: "Zero Labor Fee Charges" }
    },
    {
      badge: "Ketersediaan Suku Cadang",
      title: { id: "Garansi Suku Cadang 1 Tahun", en: "1-Year Domestic Parts Guarantee" },
      coverage: {
        id: "Penggantian komponen mekanis, motor listrik, pemanas, dan modul kontrol orisinil secara cuma-cuma jika terjadi cacat produksi dalam 12 bulan pertama.",
        en: "Free replacement of genuine mechanical parts, electric motors, heating bands, and control modules during the first 12 months."
      },
      highlight: { id: "Suku Cadang Ready-Stock di RI", en: "Domestic Stocked Genuine Parts" }
    },
    {
      badge: "Tanggap Darurat",
      title: { id: "SLA Respons Cepat 48 Jam", en: "48-Hour Rapid Dispatch SLA" },
      coverage: {
        id: "Saat terjadi kendala di lini produksi, tim teknisi kami di Jakarta dan Surabaya siap diberangkatkan dalam kurun waktu maksimal 48 jam untuk inspeksi langsung.",
        en: "Should line stoppage occur, certified field engineers from Jakarta & Surabaya hubs are dispatched within a maximum of 48 hours."
      },
      highlight: { id: "Prioritas Line Stoppage", en: "Emergency Line Priority" }
    }
  ]
};
