/**
 * Products Catalog Data - VECTRO INDUSTRIAL
 * Inspired by industrial food machinery & packaging solutions (Bakery, Processing, Packaging, Production Lines)
 * Formatted with bilingual text, spec tables, business scale categorization, and dynamic WhatsApp deep-links.
 */

export const productsData = [
  {
    id: "vec-bakery-01",
    modelCode: "VK-SP60",
    category: "catBakery",
    scale: "scaleMedium",
    popular: true,
    badge: {
      id: "Terlaris di Toko Roti",
      en: "Bakery Best Seller"
    },
    title: {
      id: "Heavy Duty Spiral Dough Mixer 60L",
      en: "60L Heavy Duty Spiral Dough Mixer"
    },
    tagline: {
      id: "Adonan kalis sempurna hanya dalam 12 menit tanpa merusak gluten.",
      en: "Flawless dough development in 12 minutes with zero gluten strain."
    },
    description: {
      id: "Dirancang khusus untuk artisan bakery dan pabrik roti manis. Memiliki mangkuk putar sinkron dua kecepatan yang menjaga temperatur adonan tetap stabil agar ragi mengembang optimal.",
      en: "Engineered specifically for artisan bakeries and commercial sweet bread lines. Dual-speed synchronized bowl rotation maintains dough temperature to ensure optimal fermentation."
    },
    specs: [
      { label: { id: "Kapasitas Tepung", en: "Flour Capacity" }, value: "25 - 30 kg tepung kering" },
      { label: { id: "Kapasitas Adonan", en: "Dough Yield" }, value: "Up to 50 kg adonan basah" },
      { label: { id: "Daya Listrik", en: "Power Consumption" }, value: "2.2 kW / 380V (3 Phase) / 220V Opsional" },
      { label: { id: "Kecepatan Spiral", en: "Spiral Speed" }, value: "Dual Speed (120 / 240 RPM)" },
      { label: { id: "Material Kontak", en: "Food Contact Material" }, value: "Stainless Steel SUS 304 Food Grade" },
      { label: { id: "Fitur Keselamatan", en: "Safety Features" }, value: "Emergency Auto-Stop & Safety Grid Switch" }
    ],
    suitableFor: {
      id: "Roti Manis, Baguette, Donat Lembut, Pizza Crust, dan Roti Tawar.",
      en: "Sweet bread, crusty baguettes, soft donuts, pizza bases, and sliced loafs."
    },
    features: [
      { id: "Motor inverter hemat listrik dengan getaran minimal", en: "Energy-efficient inverter motor with low acoustic vibration" },
      { id: "Mangkuk stainless tebal tidak mudah aus tahan puluhan tahun", en: "Heavy-gauge stainless steel bowl engineered for industrial lifespan" },
      { id: "Dual timer otomatis memudahkan operasional staf", en: "Dual programmable auto-timers for effortless line operator control" }
    ],
    roiHighlight: {
      id: "Menghemat 4 jam proses menguleni harian, mengurangi 2 staf dapur manual, dan menjamin konsistensi kelembutan roti di setiap batch.",
      en: "Saves 4 hours of daily kneading labor, cuts 2 manual kitchen shifts, and guarantees uniform crumb fluffiness in every batch."
    },
    relatedProductIds: ["vec-bakery-02", "vec-umkm-01"],
    accentColor: "#f7c02d",
    typeIcon: "mixer"
  },
  {
    id: "vec-bakery-02",
    modelCode: "VO-DK36",
    category: "catBakery",
    scale: "scaleMedium",
    popular: false,
    badge: {
      id: "Panas Merata & Hemat Gas",
      en: "Uniform Heat & Eco Gas"
    },
    title: {
      id: "Industrial Gas Deck Oven 3 Deck 6 Loyang",
      en: "Industrial Gas Deck Oven 3-Deck 6-Tray"
    },
    tagline: {
      id: "Pengapian digital independen tiap deck untuk hasil panggangan keemasan.",
      en: "Micro-digital independent top & bottom fire for golden-crust baking."
    },
    description: {
      id: "Oven gas presisi tinggi dengan teknologi burner inframerah terisolasi rapat batu wool tebal. Panas stabil dari sudut ke sudut loyang tanpa perlu bolak-balik memanggang.",
      en: "High-precision gas oven equipped with infrared radiant burners and thick rock-wool insulation. Guaranteed uniform thermal distribution across every baking tray."
    },
    specs: [
      { label: { id: "Kapasitas Loyang", en: "Tray Capacity" }, value: "6 Loyang standar (40 x 60 cm)" },
      { label: { id: "Rentang Suhu", en: "Temperature Range" }, value: "20°C - 400°C Digital Control" },
      { label: { id: "Konsumsi Gas", en: "Gas Consumption" }, value: "LPG 0.45 kg/jam (Super Irit)" },
      { label: { id: "Daya Kontrol Listrik", en: "Control Board Power" }, value: "300 Watt (Hanya untuk modul timer/digital)" },
      { label: { id: "Material Luar & Dalam", en: "Body Construction" }, value: "Stainless Steel Anti-Karat Heavy Duty" },
      { label: { id: "Dimensi Luar", en: "Dimensions" }, value: "1.340 x 900 x 1.700 mm" }
    ],
    suitableFor: {
      id: "Bolu Gulung, Pastry Puff, Roti Sisir, Chiffon Cake, dan Roti Sobek.",
      en: "Roll cakes, flaky pastries, laminated dough, chiffon cakes, and artisan bread."
    },
    features: [
      { id: "Kaca ganda tempered tahan panas dilengkapi lampu halogen internal", en: "Double-pane tempered observation glass with bright internal halogen illumination" },
      { id: "Sistem alarm kebakaran dan auto shut-off otomatis jika gas habis", en: "Automated gas cut-off failsafe and audio-visual cycle completion chime" },
      { id: "Dilengkapi roda heavy duty pengunci memudahkan reposisi ruangan", en: "Heavy-duty locking castor wheels for easy bakery kitchen rearrangement" }
    ],
    roiHighlight: {
      id: "Panggang 6 loyang sekaligus dengan efisiensi gas 35% lebih hemat dibanding oven konvensional tanpa hotspot gosong.",
      en: "Bakes 6 full trays simultaneously with 35% lower gas consumption than conventional ovens without burnt hotspots."
    },
    relatedProductIds: ["vec-bakery-01", "vec-pack-01"],
    accentColor: "#2098d1",
    typeIcon: "oven"
  },
  {
    id: "vec-bakery-03",
    modelCode: "VB-PR16",
    category: "catBakery",
    scale: "scaleMedium",
    popular: false,
    badge: {
      id: "Kontrol Suhu & Kelembaban",
      en: "Precision Humidity Control"
    },
    title: {
      id: "Automatic Dough Proofer 16 Trays",
      en: "16-Tray Automatic Dough Proofer"
    },
    tagline: {
      id: "Fermentasi adonan mengembang optimal dengan kelembaban digital otomatis.",
      en: "Optimal dough fermentation with micro-controlled thermal humidity circulation."
    },
    description: {
      id: "Lemari pengembang adonan profesional dengan sirkulasi udara hangat dan uap air mikro. Mencegah kulit adonan kering dan memastikan ragi bekerja konsisten sepanjang tahun.",
      en: "Commercial proofing cabinet featuring convective warm air circulation and fine atomized steam. Prevents crust drying and stabilizes fermentation cycles year-round."
    },
    specs: [
      { label: { id: "Kapasitas Loyang", en: "Tray Capacity" }, value: "16 Loyang (40 x 60 cm)" },
      { label: { id: "Rentang Kelembaban", en: "Humidity Range" }, value: "60% - 95% RH Digital" },
      { label: { id: "Rentang Suhu", en: "Temperature Range" }, value: "Ruang - 50°C" },
      { label: { id: "Daya Listrik", en: "Power Rating" }, value: "1.8 kW / 220V 1 Phase" },
      { label: { id: "Material Dinding", en: "Wall Insulation" }, value: "Double Wall Polyurethane Foam + SUS 304" }
    ],
    suitableFor: {
      id: "Roti Manis, Donat, Baguette, Croissant Proofing, dan Roti Tawar.",
      en: "Sweet bread, donuts, artisan baguettes, croissants, and loaf breads."
    },
    features: [
      { id: "Pemanas tubular stainless dengan tangki air terintegrasi", en: "Stainless tubular heater element with integrated water reservoir" },
      { id: "Pintu kaca full-view memudahkan inspeksi tanpa membuka pintu", en: "Full-view observation glass door for inspection without humidity loss" },
      { id: "Hemat daya dan siap operasional non-stop 24 jam", en: "Energy-efficient thermal insulation designed for 24/7 continuous operation" }
    ],
    roiHighlight: {
      id: "Memangkas waktu fermentasi hingga 40% dan mengeliminasi risiko roti bantat akibat cuaca dingin.",
      en: "Cuts proofing cycle duration by up to 40% and eliminates ruined batches caused by cold rainy weather."
    },
    relatedProductIds: ["vec-bakery-01", "vec-bakery-02"],
    accentColor: "#3c763d",
    typeIcon: "oven"
  },
  {
    id: "vec-pack-01",
    modelCode: "VP-FL350",
    category: "catPackaging",
    scale: "scaleFactory",
    popular: true,
    badge: {
      id: "High Speed Packaging",
      en: "High Speed Packaging"
    },
    title: {
      id: "Automatic Horizontal Flow Wrapping Machine",
      en: "Automatic Horizontal Flow Wrapping Machine"
    },
    tagline: {
      id: "Bungkus hingga 180 pcs per menit dengan segel kedap udara rapat.",
      en: "Hermetically wrap up to 180 pcs/min with laser-aligned precision sealing."
    },
    description: {
      id: "Solusi otomatis kemasan pillow pack untuk roti, biskuit, wafer, sabun, dan snack. Dilengkapi servo motor ganda dan sensor photocell pendeteksi mata ikan kemasan agar branding logo selalu presisi di tengah.",
      en: "Automated pillow-pack solution for bakery items, biscuits, confectionery, and snack bars. Powered by dual servo drives and high-sensitivity optical eye mark tracking."
    },
    specs: [
      { label: { id: "Kecepatan Kemas", en: "Wrapping Speed" }, value: "40 - 180 kemasan / menit (Adjustable)" },
      { label: { id: "Lebar Plastik Film", en: "Film Roll Width" }, value: "Maksimal 350 mm" },
      { label: { id: "Panjang Kemasan", en: "Bag Length" }, value: "65 - 330 mm (Digital Touchscreen Setup)" },
      { label: { id: "Daya Listrik", en: "Power Rating" }, value: "2.4 kW / 220V 50Hz" },
      { label: { id: "Sistem Kontrol", en: "Control Interface" }, value: "7-Inch Full Color Touchscreen PLC" },
      { label: { id: "Opsi Tambahan", en: "Available Add-Ons" }, value: "Gas Flushing (Nitrogen) & Date Coder Printer" }
    ],
    suitableFor: {
      id: "Roti Satuan, Kue Lapis, Biskuit, Cokelat Bar, Masker, dan Mochi Kemasan.",
      en: "Single-serve buns, layer cakes, cookies, snack bars, and individually packed confections."
    },
    features: [
      { id: "Sensor No Product - No Bag menghindari pemborosan gulungan plastik", en: "No Product - No Bag automated logic to prevent costly packaging film waste" },
      { id: "Penyetelan panjang kantong otomatis dalam hitungan detik via layar sentuh", en: "Instant bag length adjustment in seconds directly on the color touchscreen" },
      { id: "Bisa diintegrasikan dengan mesin coding tanggal kadaluarsa otomatis", en: "Plug-and-play integration with inline hot-stamp or thermal date coding systems" }
    ],
    roiHighlight: {
      id: "Menggantikan 8 tenaga pembungkus manual sekaligus meningkatkan kerapian segel kemasan kelas supermarket.",
      en: "Replaces up to 8 manual packing operators while delivering supermarket-grade hermetic packaging seal quality."
    },
    relatedProductIds: ["vec-bakery-02", "vec-proc-01"],
    accentColor: "#f7c02d",
    typeIcon: "wrapper"
  },
  {
    id: "vec-pack-02",
    modelCode: "VP-DY200",
    category: "catPackaging",
    scale: "scaleFactory",
    popular: false,
    badge: {
      id: "Stand Up Pouch Spesialis",
      en: "Stand Up Pouch Specialist"
    },
    title: {
      id: "Rotary Premade Pouch & Doypack Packing Machine",
      en: "Rotary Premade Pouch & Doypack Packing Machine"
    },
    tagline: {
      id: "Isi otomatis cairan, biji-bijian, maupun serbuk ke kantong standing pouch.",
      en: "Automated opening, filling, and sealing for ziplock & stand-up pouches."
    },
    description: {
      id: "Mesin kemasan rotary 8 stasiun untuk kantong siap pakai (premade pouch / zipper doypack). Mengambil kantong, membuka resleting, menimbang, mengisi, dan menyegel secara rapi dengan tampilan premium siap jual ke supermarket.",
      en: "8-station rotary indexing packaging system tailored for premade pouches and stand-up ziplock bags. Picks, opens, fills, and heat-seals retail-ready pouches for hypermarkets."
    },
    specs: [
      { label: { id: "Kecepatan Kerja", en: "Operational Speed" }, value: "25 - 55 kantong / menit" },
      { label: { id: "Ukuran Kantong", en: "Pouch Dimensions" }, value: "Lebar 100 - 210 mm, Panjang 100 - 350 mm" },
      { label: { id: "Tipe Kemasan", en: "Compatible Pouches" }, value: "Stand-Up Pouch, Ziplock, Gusset Bag, Kraft Paper" },
      { label: { id: "Konsumsi Tekanan Udara", en: "Air Consumption" }, value: "0.6 m³/menit (0.6 - 0.8 MPa)" },
      { label: { id: "Tingkat Higienitas", en: "Hygiene Compliance" }, value: "SUS 304 & SUS 316 untuk bagian kontak makanan" },
      { label: { id: "Daya Listrik", en: "Power Specification" }, value: "3.5 kW / 380V (3 Phase)" }
    ],
    suitableFor: {
      id: "Biji Kopi, Keripik Buah, Bubuk Susu, Saus Sambal, Granola, dan Frozen Meatball.",
      en: "Roasted coffee beans, artisan chips, milk powders, gourmet sauces, and frozen foods."
    },
    features: [
      { id: "Stasiun pendeteksi kantong gagal buka agar isi tidak tumpah", en: "Optical open-pouch verify sensors preventing product drop if pouch fails to open" },
      { id: "Sistem buka zipper otomatis terintegrasi", en: "Integrated automatic zipper opener mechanism for reclosable bags" },
      { id: "Bisa dikombinasikan dengan Multihead Weigher atau Auger Powder Filler", en: "Modular coupling with multihead weighers, piston fillers, or auger screw dosers" }
    ],
    roiHighlight: {
      id: "Meningkatkan daya saing produk premium di pasar modern dengan kemasan zipper rapi bebas tumpah.",
      en: "Propels your brand into upscale retail tiers with pristine standing pouch zipper sealing."
    },
    relatedProductIds: ["vec-proc-02", "vec-pack-01"],
    accentColor: "#3c763d",
    typeIcon: "pouch"
  },
  {
    id: "vec-pack-03",
    modelCode: "VP-VS420",
    category: "catPackaging",
    scale: "scaleMedium",
    popular: false,
    badge: {
      id: "Kemas Snack & Butiran",
      en: "Snack & Granule Packaging"
    },
    title: {
      id: "Vertical Form Fill Seal (VFFS) Packaging Machine",
      en: "Vertical Form Fill Seal (VFFS) Packaging Machine"
    },
    tagline: {
      id: "Membentuk kantong dari gulungan plastik, menimbang, dan menyegel otomatis.",
      en: "Continuous bag forming from roll stock, precision dosing, and airtight heat-sealing."
    },
    description: {
      id: "Mesin kemas vertikal serbaguna untuk snack, kerupuk, kacang, permen, dan biji-bijian. Dilengkapi belt servo penarik plastik yang mulus serta sealing jaw berteknologi panas konstan.",
      en: "Continuous vertical packaging platform ideal for potato chips, nuts, confectionery, and granular foods. Equipped with servo film-pulling belts and constant-heat sealing jaws."
    },
    specs: [
      { label: { id: "Kecepatan Kemas", en: "Packaging Speed" }, value: "20 - 70 kantong / menit" },
      { label: { id: "Lebar Maksimal Kantong", en: "Max Bag Width" }, value: "200 mm (Panjang hingga 300 mm)" },
      { label: { id: "Daya Listrik", en: "Power Consumption" }, value: "2.8 kW / 220V 50Hz" },
      { label: { id: "Kontrol Layar", en: "HMI Interface" }, value: "Siemens 7\" Touchscreen Display" }
    ],
    suitableFor: {
      id: "Keripik Singkong, Makaroni Pedas, Kacang Goreng, Permen, dan Beras 1kg.",
      en: "Potato chips, spicy snacks, roasted nuts, hard candy, and 1kg portioned rice."
    },
    features: [
      { id: "Sistem penarik plastik film dengan dual servo motor presisi", en: "Dual servo motorized film transport for smooth, slip-free roll pulling" },
      { id: "Alarm otomatis jika rol plastik habis atau suhu segel belum siap", en: "Automated alert chime for low film supply or temperature deviation" },
      { id: "Bisa ditambahkan gas nitrogen untuk keripik renyah tahan lama", en: "Nitrogen gas flushing connection ready for ultra-crispy snack preservation" }
    ],
    roiHighlight: {
      id: "Menghemat biaya kemasan hingga 45% dibanding membeli kantong satuan siap pakai.",
      en: "Saves up to 45% on packaging consumable cost compared to pre-formed bags."
    },
    relatedProductIds: ["vec-pack-01", "vec-proc-02"],
    accentColor: "#2098d1",
    typeIcon: "wrapper"
  },
  {
    id: "vec-proc-01",
    modelCode: "VM-EN500",
    category: "catProcessing",
    scale: "scaleMedium",
    popular: true,
    badge: {
      id: "Multifungsi Kue & Snack",
      en: "Confectionery Workhorse"
    },
    title: {
      id: "Automatic Encrusting & Filling Forming Machine",
      en: "Automatic Encrusting & Filling Forming Machine"
    },
    tagline: {
      id: "Cetak nastar, bakpia, mochi, dan meatball dengan isian pasta presisi.",
      en: "Form & encrust nastar, mooncakes, mochi, and meat croquettes with exact fill ratio."
    },
    description: {
      id: "Mesin pencetak dan pengisi adonan otomatis berkemampuan membungkus isian (pasta nanas, kacang hijau, keju, cokelat, hingga daging cincang) ke dalam kulit adonan dengan ketebalan merata dan berat gramatur konsisten.",
      en: "High-versatility encrusting machine that wraps fillings (fruit jams, bean pastes, cheese, meat fillings) inside dough with micron-level consistency and uniform skin thickness."
    },
    specs: [
      { label: { id: "Kapasitas Output", en: "Productivity Rate" }, value: "20 - 100 pcs / menit (Hingga 6.000 pcs/jam)" },
      { label: { id: "Rentang Berat Produk", en: "Product Weight" }, value: "10 gram - 180 gram per pcs" },
      { label: { id: "Rasio Isian : Kulit", en: "Skin-To-Filling Ratio" }, value: "Dapat diatur bebas dari 1:9 hingga 9:1" },
      { label: { id: "Daya Listrik", en: "Power Consumption" }, value: "1.5 kW / 220V 1 Phase (Bisa listrik rumahan)" },
      { label: { id: "Memori Resep PLC", en: "PLC Recipe Memory" }, value: "Menyimpan hingga 99 varian resep" },
      { label: { id: "Berat Mesin", en: "Net Weight" }, value: "280 kg (Dilengkapi roda portabel)" }
    ],
    suitableFor: {
      id: "Nastar Nanas, Bakpia Pathok, Mochi Isi Cokelat, Mooncake, Coxinha, dan Bakso Keju.",
      en: "Pineapple tarts, filled mochi, mooncakes, arancini, cheese balls, and meat dumplings."
    },
    features: [
      { id: "Sistem pemotong shutter presisi tidak merusak bentuk adonan lunak", en: "Ultra-smooth reciprocating shutter cutter preserving soft dough integrity" },
      { id: "Mudah dibongkar pasang dan dicuci bersih dalam 10 menit (HACCP Ready)", en: "Quick-release hopper and auger screw for 10-minute sanitation compliance" },
      { id: "Bisa dihubungkan ke mesin stamping motif otomatis", en: "Syncs directly with automated inline flower stamping & tray aligner units" }
    ],
    roiHighlight: {
      id: "Mencetak 6.000 pcs kue per jam dengan gramatur isian seragam 100%, menaikkan kapasitas musim hari raya hingga 5x lipat.",
      en: "Produces 6,000 filled confections/hr with 100% uniform weight, scaling holiday peak output 5x."
    },
    relatedProductIds: ["vec-bakery-02", "vec-pack-01"],
    accentColor: "#f7c02d",
    typeIcon: "encrusting"
  },
  {
    id: "vec-proc-02",
    modelCode: "VC-MX200",
    category: "catProcessing",
    scale: "scaleUMKM",
    popular: false,
    badge: {
      id: "Solusi Masak Selai & Rendang",
      en: "Sauce & Paste Cooking"
    },
    title: {
      id: "Planetary Stirred Gas Cooking Mixer 200L",
      en: "Planetary Stirred Gas Cooking Mixer 200L"
    },
    tagline: {
      id: "Aduk selai buah, dodol, dan pasta bumbu otomatis tanpa takut gosong.",
      en: "Automatic scrap-stirring for jams, gravies, and paste fillings with zero scorching."
    },
    description: {
      id: "Kuali masak industri berputar otomatis dengan pengaduk teflon food-grade yang menyapu dasar wajan 360 derajat. Sangat ideal untuk usaha sambal kemasan, selai roti, bumbu rempah, dan saus kuliner.",
      en: "Industrial tilting cooking kettle fitted with food-grade Teflon scraper blades that hug the bowl contour 360°. Ideal for commercial sambal, fruit spreads, curry sauces, and pastes."
    },
    specs: [
      { label: { id: "Kapasitas Volume", en: "Gross Volume" }, value: "200 Liter (Efektif aduk 150 kg)" },
      { label: { id: "Metode Pemanas", en: "Heating Medium" }, value: "Gas LPG Burner Tekanan Tinggi / Steam Opsional" },
      { label: { id: "Pengaduk (Scraper)", en: "Scraper Material" }, value: "PTFE Teflon Tahan Panas hingga 280°C" },
      { label: { id: "Kemiringan Kuali", en: "Kettle Tilting" }, value: "Hidrolik Otomatis 90° untuk tuang hasil masak" },
      { label: { id: "Daya Motor Aduk", en: "Stirring Motor" }, value: "1.5 kW / 220V Variable Speed Inverter" },
      { label: { id: "Material Wajan", en: "Wok Construction" }, value: "Stainless Steel SUS 304 Solid 3 mm" }
    ],
    suitableFor: {
      id: "Selai Nanas & Stroberi, Sambal Kemasan, Dodol, Pasta Kacang Merah, dan Rendang Daging.",
      en: "Fruit fillings, bottled chili sauce, toffee, bean pastes, and simmered gravies."
    },
    features: [
      { id: "Sapu dasar kuali tanpa celah memastikan bahan tidak berkerak", en: "Continuous contour scraping preventing bottom burning and uneven caramelization" },
      { id: "Tuang adonan matang hanya dengan menekan tuas tombol hidrolik", en: "One-touch hydraulic tilt mechanism for effortless pouring into collection trolleys" },
      { id: "Mengurangi kebutuhan 3 orang juru masak menjadi 1 orang operator", en: "Reduces cooking labor from 3 workers to a single line supervisor" }
    ],
    roiHighlight: {
      id: "Menggantikan kerja fisik 3 juru masak berdiri di depan wajan panas seharian dan mengeliminasi produk gosong.",
      en: "Replaces strenuous manual stirring of 3 chefs, guaranteeing zero batch waste from scorched pots."
    },
    relatedProductIds: ["vec-proc-01", "vec-pack-02"],
    accentColor: "#3c763d",
    typeIcon: "pot"
  },
  {
    id: "vec-lines-01",
    modelCode: "VL-BD1200",
    category: "catLines",
    scale: "scaleFactory",
    popular: true,
    badge: {
      id: "Pabrik Skala Otomatis",
      en: "Turnkey Plant Solution"
    },
    title: {
      id: "Fully Automated Toast & Sweet Bread Line",
      en: "Fully Automated Toast & Sweet Bread Line"
    },
    tagline: {
      id: "Lini lengkap dari pembagi adonan, rolling, proofing, hingga baking.",
      en: "Turnkey continuous line from divider & rounder to proofer & tunnel oven."
    },
    description: {
      id: "Solusi terintegrasi untuk pabrik roti modern berkapasitas besar. Menggabungkan hydraulic dough divider, conical rounder, intermediate proofer, molders, dan automatic tray loader dalam satu alur tersinkronisasi.",
      en: "Fully integrated end-to-end turnkey solution for commercial bread plants. Unifies automatic volumetric dividing, conical rounding, intermediate resting, shaping, and robotic tray loading."
    },
    specs: [
      { label: { id: "Kapasitas Produksi", en: "Line Throughput" }, value: "1.200 - 3.600 adonan roti / jam" },
      { label: { id: "Akurasi Pembagi", en: "Divider Weight Tolerance" }, value: "±1.5 gram (Presisi tinggi non-oil system)" },
      { label: { id: "Sistem Kendali", en: "Master Control" }, value: "Integrated Central SCADA / Siemens S7-1200 PLC" },
      { label: { id: "Total Daya Terpasang", en: "Installed Power" }, value: "14.5 kW / 380V (3 Phase, 50Hz)" },
      { label: { id: "Panjang Lini", en: "Total Footprint" }, value: "Custom layout (Bisa I-Shape, L-Shape, atau U-Shape)" },
      { label: { id: "Sertifikasi", en: "Certifications" }, value: "CE Marked, ISO 9001, Food Grade SUS 304/316" }
    ],
    suitableFor: {
      id: "Pabrik Roti Tawar Kemasan, Pabrik Burger Bun Cepat Saji, dan Hotdog Bun.",
      en: "Commercial sliced bread factories, QSR burger bun lines, and hotdog bun bakeries."
    },
    features: [
      { id: "Sistem bebas minyak pelumas (oil-free divider) menghemat jutaan per bulan", en: "Innovative oil-free dividing chamber saving thousands in monthly consumable oil" },
      { id: "Sensor sinkronisasi otomatis mencegah penumpukan adonan di konveyor", en: "Intelligent optical pacing prevents conveyor bottle-necking and dough jamming" },
      { id: "Dilengkapi dashboard pemantauan efisiensi OEE & konsumsi energi", en: "Real-time OEE efficiency and energy consumption telemetry dashboard" }
    ],
    roiHighlight: {
      id: "Mampu memproduksi hingga 35.000 roti tawar per hari dengan toleransi berat di bawah 2 gram dan tenaga kerja minimal.",
      en: "Powers output up to 35,000 loafs daily with under 2-gram tolerance, drastically reducing labor cost per loaf."
    },
    relatedProductIds: ["vec-bakery-01", "vec-pack-01"],
    accentColor: "#f7c02d",
    typeIcon: "conveyor"
  },
  {
    id: "vec-umkm-01",
    modelCode: "VS-DS520",
    category: "catBakery",
    scale: "scaleUMKM",
    popular: false,
    badge: {
      id: "Wajib untuk Croissant & Pastry",
      en: "Pastry & Croissant Essential"
    },
    title: {
      id: "Commercial Reversible Tabletop Dough Sheeter",
      en: "Commercial Reversible Tabletop Dough Sheeter"
    },
    tagline: {
      id: "Pipihkan adonan pastry & croissant dengan ketebalan presisi 0.5 - 38 mm.",
      en: "Laminate and sheet delicate pastry dough with 0.5 - 38 mm micron precision."
    },
    description: {
      id: "Mesin giling adonan bolak-balik dengan roller stainless steel hard-chrome anti-lengket. Meja sabuk konveyor food-grade dapat dilipat ke atas saat tidak digunakan untuk menghemat ruang dapur UMKM Anda.",
      en: "Reversible motorized dough sheeter featuring non-stick hard-chrome stainless steel rollers. Foldable conveyor wings optimize floor space in compact commercial bakeries."
    },
    specs: [
      { label: { id: "Lebar Sabuk Konveyor", en: "Conveyor Belt Width" }, value: "500 mm (Panjang total 2.000 mm)" },
      { label: { id: "Ketebalan Gilingan", en: "Thickness Range" }, value: "0.5 mm - 38 mm (Dapat disetel akurat)" },
      { label: { id: "Daya Listrik", en: "Electrical Rating" }, value: "550 Watt / 220V 1 Phase (Sangat ramah listrik)" },
      { label: { id: "Bahan Sabuk", en: "Conveyor Material" }, value: "Food Grade Seamless Synthetic Rubber" },
      { label: { id: "Mekanisme Kerja", en: "Control Mode" }, value: "Dual Control: Tuas Tangan & Pedal Kaki Hands-Free" }
    ],
    suitableFor: {
      id: "Croissant, Danish Pastry, Puff Pastry, Pie Crust, Kulit Pangsit, dan Fondant.",
      en: "Butter croissants, Danish pastries, mille-feuille, dumpling wrappers, and rolled fondant."
    },
    features: [
      { id: "Bisa dilipat tegak setelah selesai produksi, hemat 60% tempat", en: "Space-saving folding wings reduce machine footprint by 60% when idle" },
      { id: "Roller chrome mirror halus tidak merusak lapisan butter dingin", en: "Mirror-polished hard chrome rollers protect cold butter lamination layers" },
      { id: "Pengoperasian fleksibel dengan tuas atas atau pedal kaki", en: "Dual command versatility with manual lever or hands-free foot pedals" }
    ],
    roiHighlight: {
      id: "Menghasilkan lembaran pastry berlapis butter tipis sempurna dalam 3 menit tanpa membuat butter meleleh.",
      en: "Sheets laminated butter dough in 3 minutes without warming butter layers, eliminating lamination failures."
    },
    relatedProductIds: ["vec-bakery-01", "vec-bakery-02"],
    accentColor: "#2098d1",
    typeIcon: "sheeter"
  }
];
