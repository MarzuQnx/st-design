/**
 * Categories Data - VECTRO INDUSTRIAL
 * Layer 1: Category Architecture for Industrial Food & Packaging Equipment
 */

export const categoriesData = [
  {
    id: "catBakery",
    code: "BKR",
    badge: {
      id: "Solusi Roti & Pastry",
      en: "Bakery & Pastry Solutions"
    },
    title: {
      id: "Peralatan Bakery & Toko Roti",
      en: "Bakery & Bread Equipment"
    },
    tagline: {
      id: "Dari mixer adonan lembut, oven gas hemat bakar, hingga mesin pelapis pastry renyah.",
      en: "From high-torque spiral mixers to energy-efficient deck ovens and pastry sheeters."
    },
    description: {
      id: "Koleksi lengkap mesin pembuat roti untuk artisan bakery, toko roti modern, kafe pastry, hingga pabrik roti berskala besar. Menghasilkan adonan kalis lebih cepat dengan tekstur pori-pori roti yang lembut dan seragam.",
      en: "Comprehensive lineup of bakery machinery for artisan shops, commercial patisseries, and industrial bread lines. Accelerates gluten development while guaranteeing delicate crumb structure."
    },
    typeIcon: "mixer",
    popularModels: ["VK-SP60", "VO-DK36", "VS-DS520"],
    stats: {
      machineCount: 3,
      avgSpeed: "12 - 15 Menit / Batch",
      hygieneGrade: "SUS 304 Food Grade"
    },
    applications: [
      { id: "Roti Manis & Roti Tawar", en: "Sweet Bread & Loaf" },
      { id: "Croissant & Danish Pastry", en: "Croissants & Danish Pastries" },
      { id: "Cake, Bolu & Brownies", en: "Cakes, Sponge & Brownies" },
      { id: "Donat & Pizza Base", en: "Donuts & Pizza Crusts" }
    ]
  },
  {
    id: "catPackaging",
    code: "PKG",
    badge: {
      id: "Segel Kedap & Ritel Standar",
      en: "Airtight & Retail Ready"
    },
    title: {
      id: "Mesin Pengemas & Packaging Otomatis",
      en: "Packaging & Sealing Machinery"
    },
    tagline: {
      id: "Bungkus satuan maupun kantong standing pouch berkecepatan tinggi dengan hasil higienis.",
      en: "High-speed pillow pack flow wrappers and automatic rotary standing pouch packaging."
    },
    description: {
      id: "Solusi kemasan modern untuk melindungi kesegaran makanan, mencegah jamur, dan meningkatkan nilai jual produk di rak supermarket. Tersedia opsi pengisian gas nitrogen (gas flushing) dan printer tanggal kadaluarsa.",
      en: "Industrial packaging solutions engineered to extend shelf-life, prevent contamination, and elevate shelf presence in retail hypermarkets. Supports nitrogen gas flushing and inline date coding."
    },
    typeIcon: "wrapper",
    popularModels: ["VP-FL350", "VP-DY200"],
    stats: {
      machineCount: 2,
      avgSpeed: "Up to 180 Pcs / Menit",
      hygieneGrade: "SUS 304 / HACCP Ready"
    },
    applications: [
      { id: "Roti Satuan & Biskuit", en: "Single-Serve Buns & Cookies" },
      { id: "Standing Pouch Keripik & Biji Kopi", en: "Standing Pouch Chips & Coffee" },
      { id: "Sachet Saus & Minuman Serbuk", en: "Sauce & Powder Sachets" },
      { id: "Frozen Food & Bakso Beku", en: "Frozen Foods & Meatballs" }
    ]
  },
  {
    id: "catProcessing",
    code: "PRC",
    badge: {
      id: "Otomasi Isian & Pengolahan",
      en: "Encrusting & Food Processing"
    },
    title: {
      id: "Mesin Pengolahan Makanan & Snack",
      en: "Food Processing & Forming Equipment"
    },
    tagline: {
      id: "Cetak kue berisian presisi, kuali masak aduk otomatis, dan pencampur bumbu konsisten.",
      en: "Automated encrusting for filled pastries, planetary cooking kettles, and snack forming."
    },
    description: {
      id: "Memangkas ketergantungan tenaga kerja manual yang melelahkan dalam membentuk kue berisian (nastar, mochi, bakpia) dan memasak selai/bumbu tanpa gosong. Gramatur isian terkontrol presisi hingga hitungan gram.",
      en: "Eliminates labor-intensive manual shaping for filled delicacies (nastar, mochi, mooncakes) and automatic scrap-stirring kettles for sauces and jams with zero scorch risk."
    },
    typeIcon: "encrusting",
    popularModels: ["VM-EN500", "VC-MX200"],
    stats: {
      machineCount: 2,
      avgSpeed: "Hingga 6.000 Pcs / Jam",
      hygieneGrade: "SUS 304 Solid 3mm"
    },
    applications: [
      { id: "Nastar, Mochi & Bakpia", en: "Pineapple Tarts, Mochi & Bakpia" },
      { id: "Selai Nanas, Dodol & Saus", en: "Fruit Spreads, Toffee & Sauces" },
      { id: "Bakso Daging & Nugget", en: "Meatballs & Savory Nuggets" },
      { id: "Mooncake & Pastry Isi Daging", en: "Mooncakes & Filled Pastries" }
    ]
  },
  {
    id: "catLines",
    code: "LNE",
    badge: {
      id: "Pabrik Terintegrasi",
      en: "Turnkey Plant Solution"
    },
    title: {
      id: "Lini Produksi Pabrik Otomatis",
      en: "Automated Production Lines"
    },
    tagline: {
      id: "Sistem alur produksi terintegrasi penuh dari pembagian adonan sampai keluar oven.",
      en: "Fully synchronized turnkey lines from automated dividing to proofer and packaging."
    },
    description: {
      id: "Solusi terpadu turnkey untuk perusahaan makanan yang ingin memproduksi ribuan produk per jam secara kontinu. Dilengkapi kendali PLC terpusat, sensor pemantau kecepatan otomatis, dan standar keamanan internasional.",
      en: "Turnkey continuous manufacturing lines for large food processors targeting thousands of units per hour. Powered by synchronized PLC controllers and optical pacing sensors."
    },
    typeIcon: "conveyor",
    popularModels: ["VL-BD1200"],
    stats: {
      machineCount: 1,
      avgSpeed: "1.200 - 3.600 Pcs / Jam",
      hygieneGrade: "CE Marked / ISO 9001"
    },
    applications: [
      { id: "Pabrik Roti Tawar Kemasan", en: "Commercial Sliced Bread Plants" },
      { id: "Pabrik Burger Bun Cepat Saji", en: "Quick-Service Burger Bun Bakeries" },
      { id: "Lini Biskuit & Cookies", en: "Automated Biscuit & Cookie Lines" },
      { id: "Lini Croissant Laminated Otomatis", en: "Continuous Laminated Pastry Lines" }
    ]
  }
];
