/**
 * Industrial Knowledge & Educational Articles Data - VECTRO INDUSTRIAL
 * Marketing 5.0: Value-First Technical Education & Practical Sizing Guides
 */

export const articlesData = {
  categories: [
    { id: "all", label: { id: "Semua Topik", en: "All Topics" } },
    { id: "bakery", label: { id: "Bakery & Adonan Roti", en: "Bakery & Dough" } },
    { id: "packaging", label: { id: "Teknologi Kemasan", en: "Packaging Tech" } },
    { id: "processing", label: { id: "Pengolahan & Pastry", en: "Food Processing" } },
    { id: "engineering", label: { id: "Kelistrikan & Dapur", en: "Plant Engineering" } }
  ],

  articles: [
    {
      id: "art-1",
      category: "bakery",
      date: "14 Oktober 2026",
      dateEn: "October 14, 2026",
      readTime: "5 Menit Baca",
      readTimeEn: "5 Min Read",
      author: "Ir. Hendra Wijaya (Lead Bakery Engineer)",
      title: {
        id: "Panduan Memilih Spiral Mixer: Kenapa Kapasitas 20L vs 60L Sangat Menentukan Tekstur Roti Anda",
        en: "Guide to Choosing Spiral Mixers: Why 20L vs 60L Capacity Dictates Your Bread Texture"
      },
      excerpt: {
        id: "Kunci roti empuk dan berserat halus bukan hanya ragi, melainkan pencegahan kenaikan suhu adonan (friction factor) saat proses pengadukan cepat. Pelajari cara menghitung kapasitas mangkuk agar motor mixer tidak overheat.",
        en: "The secret to soft, finely textured loaves is not just yeast, but controlling dough temperature friction during high-speed kneading. Learn how to calculate bowl volume to avoid motor strain and gluten tearing."
      },
      keyTakeaways: [
        { id: "Mangkuk spiral mixer harus terisi minimal 30% dan maksimal 80% dari kapasitas total untuk pembentukan gluten optimal.", en: "Spiral bowl should be loaded between 30% to 80% capacity for optimal gluten stretch." },
        { id: "Sistem dual-speed motor mempermudah transisi dari tahap hidrasi tepung ke pemekaran serat gluten elastis.", en: "Dual-speed motors facilitate seamless transition from initial flour hydration to elastic gluten webbing." }
      ],
      waConsultMsg: {
        id: "Halo Pak Hendra, saya membaca artikel tentang pemilihan Spiral Mixer dan ingin konsultasi kapasitas mixer yang cocok untuk resep adonan saya.",
        en: "Hello Mr. Hendra, I read your article on Spiral Mixers and would like to consult on the right mixer capacity for my recipe."
      }
    },
    {
      id: "art-2",
      category: "packaging",
      date: "02 Oktober 2026",
      dateEn: "October 2, 2026",
      readTime: "6 Menit Baca",
      readTimeEn: "6 Min Read",
      author: "Bambang S., S.T. (Packaging Specialist)",
      title: {
        id: "Mengatasi Keripik Melempem & Bocor Halus dengan Teknologi Gas Flushing Nitrogen",
        en: "Preventing Stale Snacks & Micro-Leaks with Nitrogen Gas Flushing Technology"
      },
      excerpt: {
        id: "Banyak produsen snack mengeluhkan keripik cepat tengik di rak ritel. Menghilangkan oksigen dan menggantinya dengan 99% gas nitrogen inert adalah standar emas memperpanjang masa simpan hingga 12 bulan tanpa bahan kimia pengawet.",
        en: "Snack processors often struggle with rancidity on retail shelves. Displacing residual oxygen with 99% pure inert nitrogen is the gold standard for achieving 12-month shelf life without preservatives."
      },
      keyTakeaways: [
        { id: "Gas flushing melindungi snack rapuh dari benturan fisik selama proses distribusi kargo antarpulau.", en: "Nitrogen cushioning protects delicate crisps from physical transit crushing during inter-island distribution." },
        { id: "Teflon sealing band berkualitas tinggi menjamin kerapatan segel tanpa kerutan mikro (micro-pinholes).", en: "High-grade PTFE sealing belts ensure airtight integrity without micro-wrinkles or pinholes." }
      ],
      waConsultMsg: {
        id: "Halo Pak Bambang, saya membaca artikel tentang teknologi Gas Flushing Nitrogen dan ingin konsultasi mesin sealer kemasan untuk produk snack saya.",
        en: "Hello Mr. Bambang, I read your article on Nitrogen Gas Flushing and would like to consult on automated sealing machines for our snack line."
      }
    },
    {
      id: "art-3",
      category: "processing",
      date: "18 September 2026",
      dateEn: "September 18, 2026",
      readTime: "4 Menit Baca",
      readTimeEn: "4 Min Read",
      author: "Chef Maya Santoso (Pastry & Food Consultant)",
      title: {
        id: "Rahasia Presisi Gramatur Isian Nastar, Mochi & Bakpia (±0.5 Gram) Tanpa Kulit Robek",
        en: "Secrets to Precision Filling Ratios for Nastar, Mochi & Mooncakes (±0.5g) Without Skin Tearing"
      },
      excerpt: {
        id: "Pencetakan manual kue berisian sering menyebabkan variasi berat dan kulit meledak saat dioven. Mesin encrusting otomatis modern menggunakan screw ganda berkecepatan variabel yang menjaga kelembutan tekstur selai dan adonan kulit.",
        en: "Manual pastry forming results in inconsistent weight and oven blowout. Modern dual-screw encrusting units preserve delicate jam and dough textures with micro-gram accuracy."
      },
      keyTakeaways: [
        { id: "Rasio perbandingan kulit dan isian dapat disesuaikan bebas mulai dari 20:80 hingga 80:20.", en: "Dough-to-filling ratios are fully adjustable from 20:80 to 80:20 with digital touch memory." },
        { id: "Kapasitas hingga 60 - 100 butir per menit menghemat tenaga kerja hingga 4 orang di dapur persiapan.", en: "Output of 60 - 100 pcs/min frees up to 4 manual prep workers for higher-value finishing tasks." }
      ],
      waConsultMsg: {
        id: "Halo Chef Maya, saya membaca artikel tentang mesin Encrusting otomatis dan ingin konsultasi cetak isian kue untuk produk pastry usaha saya.",
        en: "Hello Chef Maya, I read your article on automated Encrusting machinery and would like to consult on pastry filling forming for my bakery."
      }
    },
    {
      id: "art-4",
      category: "engineering",
      date: "05 September 2026",
      dateEn: "September 5, 2026",
      readTime: "7 Menit Baca",
      readTimeEn: "7 Min Read",
      author: "Tim Engineering Relasi Sukses",
      title: {
        id: "Checklist Daya Listrik 220V vs 380V: Apa yang Wajib Dipersiapkan Sebelum Membeli Mesin Industri?",
        en: "Electrical Readiness Checklist (220V vs 380V): What Every Food Entrepreneur Must Know"
      },
      excerpt: {
        id: "Salah satu penyebab mesin industri mangkrak adalah ketidaksiapan daya listrik atau kabel instalasi yang terlalu kecil. Simak panduan praktis menghitung total Ampere, pembagian MCB, dan pentingnya grounding di bawah 2 Ohm.",
        en: "A primary cause of machinery downtime is inadequate electrical lines or undersized cables. Learn how to calculate full-load amperage, balance breaker phases, and ground equipment below 2 Ohms."
      },
      keyTakeaways: [
        { id: "Oven deck gas hanya membutuhkan daya listrik rendah (~100-300 Watt) karena sumber panas utama berasal dari gas LPG.", en: "Gas deck ovens require minimal electricity (~100-300W) as thermal energy is supplied by LPG burners." },
        { id: "Motor 3-Phase 380V menawarkan efisiensi torsi lebih tinggi dan masa pakai motor yang jauh lebih panjang untuk pemakaian di atas 8 jam nonstop.", en: "3-Phase 380V motors provide superior torque stability and longer operational lifespan for continuous 8+ hour runs." }
      ],
      waConsultMsg: {
        id: "Halo Tim Engineering Relasi Sukses, saya ingin konsultasi mengenai kesiapan daya listrik tempat usaha saya berdasarkan artikel checklist kelistrikan yang saya baca.",
        en: "Hello Relasi Sukses Engineering, I would like to consult on our facility's electrical readiness based on your electrical checklist guide."
      }
    }
  ]
};
