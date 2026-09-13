// Full content data for each sense — used in the detail page

import type { SenseName } from "./senses.ts";

export type ContentBlock =
  | { type: "text"; content: string }
  | { type: "highlight"; content: string }
  | { type: "section"; title: string; blocks: ContentBlock[] }
  | { type: "numbered-list"; items: { title: string; desc: string }[] }
  | { type: "chip-group"; items: string[] }
  | { type: "two-col"; items: { title: string; desc: string; color: string }[] }
  | { type: "three-col"; items: { title: string; desc: string; color: string }[] }
  | { type: "taste-chips"; items: { label: string; color: string; bg: string; border: string }[] }
  | { type: "info-box"; title: string; content: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type SenseFullContent = {
  id: SenseName;
  organ: string;
  label: string;
  tagline: string;
  intro: string;
  sections: { heading: string; blocks: ContentBlock[] }[];
};

export const FULL_CONTENT: Record<SenseName, SenseFullContent> = {
  nose: {
    id: "nose",
    organ: "Hidung",
    label: "Indra Penghidu",
    tagline: "Organ yang mendeteksi ribuan jenis aroma melalui sel kemoreseptor.",
    intro:
      "Hidung adalah organ indra penghidu yang bekerja mendeteksi molekul zat kimia yang melayang di udara. Kemampuan mencium bau dikendalikan oleh sel-sel saraf khusus yang sangat sensitif terhadap perubahan kimia di lingkungan sekitar.",
    sections: [
      {
        heading: "Struktur Hidung",
        blocks: [
          {
            type: "three-col",
            items: [
              { title: "Rongga Hidung", desc: "Ruang di dalam hidung tempat udara masuk dan aroma dideteksi.", color: "#ff6b6b" },
              { title: "Epitel Olfaktori", desc: "Lapisan sel khusus di langit-langit rongga hidung sebagai kemoreseptor.", color: "#ff6b6b" },
              { title: "Saraf Olfaktori", desc: "Saraf yang meneruskan sinyal aroma dari hidung ke otak besar.", color: "#ff6b6b" },
            ],
          },
        ],
      },
      {
        heading: "Kemoreseptor — Inti Penghidu",
        blocks: [
          {
            type: "text",
            content:
              "Sel yang mendeteksi molekul zat di udara adalah sel kemoreseptor. Sel epitel olfaktori yang terletak pada langit-langit rongga hidung berperan langsung sebagai kemoreseptor tersebut. Sel ini memiliki silia (rambut-rambut halus) yang menonjol ke lapisan lendir (mukus) rongga hidung.",
          },
          {
            type: "highlight",
            content:
              "Manusia memiliki sekitar 6 juta sel reseptor penciuman dan mampu membedakan lebih dari 10.000 jenis bau yang berbeda.",
          },
          {
            type: "numbered-list",
            items: [
              { title: "Molekul Zat Masuk", desc: "Molekul zat kimia yang terbawa udara masuk ke rongga hidung saat kita menghirup napas." },
              { title: "Menempel ke Silia", desc: "Molekul tersebut melarutkan diri di lapisan mukus, lalu berikatan dengan reseptor di silia sel olfaktori." },
              { title: "Impuls Saraf Terbentuk", desc: "Ikatan tersebut memicu pembentukan impuls listrik (sinyal saraf) pada sel olfaktori." },
              { title: "Sinyal ke Otak", desc: "Impuls diteruskan melalui saraf olfaktori menuju bulbus olfaktori, lalu ke korteks serebral otak untuk diproses menjadi persepsi aroma." },
            ],
          },
        ],
      },
      {
        heading: "Fungsi Lain Hidung",
        blocks: [
          {
            type: "numbered-list",
            items: [
              { title: "Menyaring Udara", desc: "Rambut-rambut halus (vibrissae) dan lendir hidung menyaring debu, kotoran, dan mikroorganisme dari udara yang masuk." },
              { title: "Menghangatkan Udara", desc: "Pembuluh darah di rongga hidung menghangatkan udara sebelum masuk ke paru-paru." },
              { title: "Melembapkan Udara", desc: "Mukus di rongga hidung melembapkan udara agar tidak merusak saluran napas." },
              { title: "Resonansi Suara", desc: "Rongga hidung membantu membentuk resonansi suara sehingga memperkaya kualitas suara manusia." },
            ],
          },
        ],
      },
      {
        heading: "Gangguan pada Indra Penghidu",
        blocks: [
          {
            type: "two-col",
            items: [
              { title: "Anosmia", desc: "Kehilangan kemampuan mencium bau secara total, dapat disebabkan infeksi virus, cedera kepala, atau kondisi neurologis.", color: "#ff6b6b" },
              { title: "Hiposmia", desc: "Penurunan kemampuan mencium bau. Sering terjadi akibat pilek, alergi, atau penuaan.", color: "#ff9999" },
              { title: "Parosmia", desc: "Gangguan di mana bau yang dirasakan berbeda dari bau sebenarnya, misalnya makanan wangi terasa busuk.", color: "#ffaaaa" },
              { title: "Phantosmia", desc: "Mencium bau yang tidak ada sumbernya (halusinasi bau). Bisa disebabkan oleh gangguan saraf.", color: "#ffbbbb" },
            ],
          },
        ],
      },
      {
        heading: "Kata Kunci",
        blocks: [
          {
            type: "chip-group",
            items: ["Kemoreseptor", "Sel Epitel Olfaktori", "Rongga Hidung", "Saraf Olfaktori", "Bulbus Olfaktori", "Mukus", "Silia", "Korteks Serebral", "Anosmia", "Impuls Saraf"],
          },
        ],
      },
    ],
  },

  tongue: {
    id: "tongue",
    organ: "Lidah",
    label: "Indra Pengecap",
    tagline: "Organ berotot yang merasakan rasa dan membantu berbicara serta menelan.",
    intro:
      "Organ indra pengecap adalah lidah. Sel kemoreseptor berbentuk seperti tunas atau kuncup yang tersusun atas sel pendukung dan sel pengecap. Sebagian kuncup rasa berada di lidah dan langit-langit atas di belakang mulut.",
    sections: [
      {
        heading: "Struktur Lidah",
        blocks: [
          {
            type: "text",
            content:
              "Lidah adalah organ berotot yang melapisi dasar mulut. Permukaan lidah ditutupi oleh papila — tonjolan-tonjolan kecil yang mengandung kuncup rasa (taste buds). Setiap kuncup rasa terdiri dari sel pengecap dan sel pendukung yang dikelilingi oleh sel-sel penyokong.",
          },
          {
            type: "three-col",
            items: [
              { title: "Papila", desc: "Tonjolan kecil di permukaan lidah yang mengandung kuncup rasa. Ada 4 jenis: sirkumvalata, fungiformis, filiformis, foliata.", color: "#ff9f0a" },
              { title: "Kuncup Rasa", desc: "Struktur oval berisi 50–100 sel pengecap yang terhubung langsung ke ujung saraf pengecap.", color: "#ff9f0a" },
              { title: "Sel Pengecap", desc: "Sel mikrovili yang bersentuhan langsung dengan molekul zat kimia dalam makanan dan minuman.", color: "#ff9f0a" },
            ],
          },
        ],
      },
      {
        heading: "4 Jenis Papila",
        blocks: [
          {
            type: "numbered-list",
            items: [
              { title: "Papila Sirkumvalata (Vallate)", desc: "Berukuran paling besar, berbentuk V terbalik di pangkal lidah. Jumlahnya 7–12 buah dan mengandung banyak kuncup rasa." },
              { title: "Papila Fungiformis", desc: "Berbentuk seperti jamur, tersebar di seluruh permukaan lidah. Mengandung kuncup rasa dan reseptor suhu." },
              { title: "Papila Filiformis", desc: "Paling banyak jumlahnya, berbentuk seperti benang halus. Tidak mengandung kuncup rasa, berfungsi untuk merasakan tekstur makanan." },
              { title: "Papila Foliata", desc: "Terletak di sisi-sisi lidah, berbentuk lipatan-lipatan kecil. Mengandung kuncup rasa untuk rasa asam." },
            ],
          },
        ],
      },
      {
        heading: "5 Rasa Dasar",
        blocks: [
          {
            type: "taste-chips",
            items: [
              { label: "Manis", color: "#d97706", bg: "rgba(255,159,10,0.12)", border: "rgba(255,159,10,0.3)" },
              { label: "Asin",  color: "#0284c7", bg: "rgba(2,132,199,0.12)",  border: "rgba(2,132,199,0.3)" },
              { label: "Asam",  color: "#16a34a", bg: "rgba(22,163,74,0.12)",  border: "rgba(22,163,74,0.3)" },
              { label: "Pahit", color: "#7c3aed", bg: "rgba(124,58,237,0.12)", border: "rgba(124,58,237,0.3)" },
              { label: "Umami", color: "#dc2626", bg: "rgba(220,38,38,0.12)",  border: "rgba(220,38,38,0.3)" },
            ],
          },
          {
            type: "table",
            headers: ["Rasa", "Sumber", "Fungsi Biologis"],
            rows: [
              ["Manis", "Gula, karbohidrat", "Mendeteksi sumber energi"],
              ["Asin", "Garam (NaCl)", "Mendeteksi mineral esensial"],
              ["Asam", "Asam organik (jeruk, cuka)", "Mendeteksi makanan basi / fermentasi"],
              ["Pahit", "Alkaloid, tanin", "Peringatan terhadap racun"],
              ["Umami", "Glutamat (daging, keju)", "Mendeteksi protein / asam amino"],
            ],
          },
        ],
      },
      {
        heading: "Mekanisme Pengecapan",
        blocks: [
          {
            type: "numbered-list",
            items: [
              { title: "Makanan Larut di Saliva", desc: "Molekul zat kimia dalam makanan/minuman larut di air liur (saliva)." },
              { title: "Memasuki Pori Kuncup Rasa", desc: "Larutan zat kimia masuk ke dalam pori kuncup rasa dan bersentuhan dengan mikrovili sel pengecap." },
              { title: "Ikatan Reseptor", desc: "Zat kimia berikatan dengan reseptor protein di membran sel pengecap, memicu perubahan potensial listrik." },
              { title: "Impuls ke Otak", desc: "Sinyal saraf dikirim melalui saraf wajah (VII), saraf glossofaringeal (IX), dan saraf vagus (X) ke otak untuk diproses." },
            ],
          },
        ],
      },
      {
        heading: "Fakta Menarik",
        blocks: [
          { type: "highlight", content: "Manusia memiliki sekitar 10.000 kuncup rasa. Setiap kuncup rasa tergantikan setiap 10–14 hari. Kemampuan mengecap menurun seiring usia karena jumlah kuncup rasa berkurang." },
        ],
      },
      {
        heading: "Kata Kunci",
        blocks: [
          {
            type: "chip-group",
            items: ["Papila", "Kuncup Rasa", "Sel Pengecap", "Kemoreseptor", "Saliva", "Mikrovili", "Saraf Gustatori", "Umami", "Papila Sirkumvalata", "Papila Fungiformis"],
          },
        ],
      },
    ],
  },

  eye: {
    id: "eye",
    organ: "Mata",
    label: "Indra Penglihatan",
    tagline: "Organ kompleks yang menangkap cahaya dan mengubahnya menjadi sinyal visual.",
    intro:
      "Organ penglihatan adalah mata, organ kompleks yang terdiri dari 3 lapisan dan 3 ruang. Lapisan luar terdiri dari kornea dan sklera, lapisan tengah terdiri dari koroid, silia, dan iris, sedangkan lapisan dalam terdiri dari retina dan sel saraf.",
    sections: [
      {
        heading: "3 Lapisan Mata",
        blocks: [
          {
            type: "three-col",
            items: [
              { title: "Lapisan Luar", desc: "Kornea (selaput bening di depan) dan Sklera (selaput keras putih di bagian belakang).", color: "#2997ff" },
              { title: "Lapisan Tengah", desc: "Koroid (pemberi nutrisi), Silia (pengubah bentuk lensa), dan Iris (memberi warna mata).", color: "#2997ff" },
              { title: "Lapisan Dalam", desc: "Retina (selaput jala berisi sel fotoreseptor) dan Sel Saraf penghubung ke otak.", color: "#2997ff" },
            ],
          },
        ],
      },
      {
        heading: "3 Ruang Mata",
        blocks: [
          {
            type: "three-col",
            items: [
              { title: "Ruang Anterior (Depan)", desc: "Terletak antara kornea dan iris, berisi aqueous humor (cairan bening) yang menjaga tekanan bola mata.", color: "#5ac8fa" },
              { title: "Ruang Vitreous (Tengah)", desc: "Ruang terbesar di antara lensa dan retina, berisi vitreous humor — cairan seperti gel bening yang membuat bola mata tetap bulat.", color: "#5ac8fa" },
              { title: "Ruang Posterior (Belakang)", desc: "Terletak antara iris dan lensa, berisi aqueous humor dan menghubungkan dua ruang lainnya.", color: "#5ac8fa" },
            ],
          },
        ],
      },
      {
        heading: "Anatomi Utama Mata",
        blocks: [
          {
            type: "numbered-list",
            items: [
              { title: "Kornea (Selaput Bening)", desc: "Bagian depan mata yang transparan, berfungsi melindungi mata dan membiaskan cahaya yang masuk sebagai tahap pertama pemfokusan." },
              { title: "Lensa", desc: "Struktur bikonveks transparan di belakang iris yang memfokuskan cahaya tepat pada retina. Bentuknya dapat berubah melalui proses akomodasi." },
              { title: "Iris", desc: "Bagian berwarna pada mata yang mengandung otot untuk mengatur ukuran pupil sesuai intensitas cahaya." },
              { title: "Pupil", desc: "Lubang hitam di tengah iris yang mengatur banyaknya cahaya masuk ke dalam mata. Melebar saat gelap, menyempit saat terang." },
              { title: "Otot Siliaris", desc: "Otot melingkar yang mengubah kelengkungan lensa untuk akomodasi (menyesuaikan fokus pada jarak berbeda)." },
              { title: "Retina (Selaput Jala)", desc: "Lapisan saraf paling dalam yang peka terhadap cahaya. Mengandung jutaan sel fotoreseptor (kerucut dan batang) yang mengubah cahaya menjadi sinyal listrik." },
              { title: "Saraf Optik (Saraf Mata)", desc: "Berkas serabut saraf yang meneruskan sinyal dari retina ke korteks visual di otak belakang." },
              { title: "Aqueous Humor", desc: "Cairan bening yang mengisi ruang anterior, menjaga tekanan intraokular dan memberi nutrisi pada kornea dan lensa." },
              { title: "Vitreous Humor", desc: "Cairan seperti gel yang mengisi ruang vitreous, menjaga bentuk bola mata dan meneruskan cahaya ke retina." },
              { title: "Bintik Kuning (Fovea/Makula)", desc: "Bagian retina paling tajam penglihatannya, kaya sel kerucut, digunakan saat melihat detail dan warna." },
            ],
          },
        ],
      },
      {
        heading: "Sel Fotoreseptor Retina",
        blocks: [
          {
            type: "two-col",
            items: [
              { title: "Sel Kerucut (Cone)", desc: "Mengandung pigmen fotopsin. Terdapat 3 jenis: merah (L-cone), hijau (M-cone), biru (S-cone). Bekerja optimal di cahaya terang, bertanggung jawab atas penglihatan warna dan ketajaman detail. Terpusat di fovea.", color: "#ff9f0a" },
              { title: "Sel Batang (Rod)", desc: "Mengandung pigmen rodopsin. Sangat sensitif terhadap cahaya lemah. Tidak membedakan warna, tetapi sangat baik mendeteksi gerakan dan penglihatan di malam hari. Tersebar di seluruh retina kecuali fovea.", color: "#86868b" },
            ],
          },
          {
            type: "table",
            headers: ["Ciri", "Sel Kerucut", "Sel Batang"],
            rows: [
              ["Jumlah", "~6 juta", "~120 juta"],
              ["Pigmen", "Fotopsin (3 jenis)", "Rodopsin (1 jenis)"],
              ["Fungsi utama", "Warna & detail", "Cahaya redup & gerak"],
              ["Lokasi terbanyak", "Fovea / makula", "Tepi retina"],
              ["Kondisi optimal", "Cahaya terang", "Cahaya redup / gelap"],
            ],
          },
        ],
      },
      {
        heading: "Mekanisme Penglihatan",
        blocks: [
          {
            type: "numbered-list",
            items: [
              { title: "Cahaya Masuk", desc: "Cahaya dari objek masuk melalui kornea yang membiaskan sinar." },
              { title: "Melewati Pupil", desc: "Iris mengatur lebar pupil untuk mengontrol jumlah cahaya." },
              { title: "Difokuskan Lensa", desc: "Lensa membiaskan cahaya lebih lanjut sehingga fokus tepat di retina." },
              { title: "Diterima Retina", desc: "Sel fotoreseptor di retina menyerap cahaya dan mengubahnya menjadi impuls listrik melalui reaksi kimia fotokimia." },
              { title: "Sinyal ke Otak", desc: "Impuls dikirim melalui saraf optik ke korteks visual di lobus oksipital otak untuk diproses menjadi gambar." },
            ],
          },
        ],
      },
      {
        heading: "Gangguan pada Indra Penglihatan",
        blocks: [
          {
            type: "two-col",
            items: [
              { title: "Miopi (Rabun Jauh)", desc: "Bayangan jatuh di depan retina. Dikoreksi dengan lensa cekung (negatif).", color: "#2997ff" },
              { title: "Hipermetropi (Rabun Dekat)", desc: "Bayangan jatuh di belakang retina. Dikoreksi dengan lensa cembung (positif).", color: "#2997ff" },
              { title: "Astigmatisme", desc: "Kornea atau lensa tidak rata sehingga bayangan buram. Dikoreksi dengan lensa silindris.", color: "#5ac8fa" },
              { title: "Buta Warna", desc: "Kekurangan atau ketidaknormalan sel kerucut tertentu sehingga tidak dapat membedakan warna tertentu.", color: "#5ac8fa" },
              { title: "Katarak", desc: "Lensa mata menjadi keruh sehingga menghalangi cahaya masuk. Umumnya terjadi pada usia lanjut.", color: "#86868b" },
              { title: "Glaukoma", desc: "Peningkatan tekanan dalam bola mata yang dapat merusak saraf optik.", color: "#86868b" },
            ],
          },
        ],
      },
      {
        heading: "Kata Kunci",
        blocks: [
          {
            type: "chip-group",
            items: ["Kornea", "Lensa", "Retina", "Iris", "Pupil", "Fotoreseptor", "Sel Kerucut", "Sel Batang", "Fotopsin", "Rodopsin", "Saraf Optik", "Fovea", "Aqueous Humor", "Vitreous Humor", "Akomodasi", "Korteks Visual"],
          },
        ],
      },
    ],
  },

  ear: {
    id: "ear",
    organ: "Telinga",
    label: "Indra Pendengaran",
    tagline: "Organ yang mengubah getaran suara menjadi sinyal saraf dan menjaga keseimbangan.",
    intro:
      "Organ pendengaran adalah telinga yang terdiri dari 3 bagian utama: telinga luar (mengumpulkan suara), telinga tengah (meneruskan suara ke bagian dalam), dan telinga dalam (berupa organ pendengaran dan alat keseimbangan tubuh).",
    sections: [
      {
        heading: "3 Bagian Telinga",
        blocks: [
          {
            type: "three-col",
            items: [
              { title: "Telinga Luar", desc: "Daun telinga dan saluran telinga luar. Bertugas menangkap dan mengumpulkan gelombang suara menuju gendang telinga.", color: "#30d158" },
              { title: "Telinga Tengah", desc: "Rongga berisi udara dengan 3 tulang pendengaran. Memperkuat dan meneruskan getaran suara ke telinga dalam.", color: "#30d158" },
              { title: "Telinga Dalam", desc: "Koklea untuk pendengaran dan saluran setengah lingkaran untuk keseimbangan.", color: "#30d158" },
            ],
          },
        ],
      },
      {
        heading: "Anatomi Detail Telinga Tengah",
        blocks: [
          {
            type: "numbered-list",
            items: [
              { title: "Tulang Martil (Maleus)", desc: "Tulang pendengaran pertama yang melekat pada gendang telinga. Menerima dan meneruskan getaran ke tulang landasan." },
              { title: "Tulang Landasan (Inkus)", desc: "Tulang pendengaran kedua yang menghubungkan martil dengan sanggurdi, memperkuat getaran suara." },
              { title: "Tulang Sanggurdi (Stapes)", desc: "Tulang terkecil dalam tubuh manusia! Melekat pada jendela oval dan meneruskan getaran ke cairan di telinga dalam." },
              { title: "Saluran Eustachius (Tuba Eustachius)", desc: "Saluran yang menghubungkan telinga tengah dengan tenggorokan (nasofaring). Berfungsi menyeimbangkan tekanan udara di kedua sisi gendang telinga." },
            ],
          },
          {
            type: "highlight",
            content: "Ketiga tulang pendengaran (Martil, Landasan, Sanggurdi) merupakan tulang-tulang TERKECIL dalam tubuh manusia. Seluruhnya hanya sepanjang ± 1,5 cm namun mampu memperkuat suara hingga 20 kali lipat!",
          },
        ],
      },
      {
        heading: "Anatomi Detail Telinga Dalam",
        blocks: [
          {
            type: "numbered-list",
            items: [
              { title: "Rumah Siput (Koklea)", desc: "Struktur spiral menyerupai siput berisi cairan dan membran basilar. Di sinilah sel-sel rambut (hair cells) mengubah getaran mekanik menjadi impuls listrik. Koklea memiliki sekitar 15.000–16.000 sel rambut." },
              { title: "3 Saluran Setengah Lingkaran (Kanalis Semisirkularis)", desc: "Tiga saluran berisi cairan yang saling tegak lurus satu sama lain. Mendeteksi rotasi dan gerakan kepala untuk keseimbangan dinamis." },
              { title: "Utrikulus dan Sakulus", desc: "Organ keseimbangan statis yang mendeteksi posisi kepala terhadap gravitasi dan percepatan linear (maju-mundur, naik-turun)." },
              { title: "Saraf Vestibulokoklear (Saraf VIII)", desc: "Saraf kranial yang membawa sinyal pendengaran (dari koklea) dan keseimbangan (dari vestibulum) ke otak." },
            ],
          },
        ],
      },
      {
        heading: "Mekanisme Pendengaran",
        blocks: [
          {
            type: "numbered-list",
            items: [
              { title: "Gelombang Suara Ditangkap", desc: "Daun telinga menangkap gelombang suara dari lingkungan dan mengarahkannya ke saluran telinga." },
              { title: "Gendang Telinga Bergetar", desc: "Gelombang suara menyebabkan gendang telinga bergetar dengan frekuensi dan amplitudo sesuai sumber suara." },
              { title: "Tulang Pendengaran Bergerak", desc: "Getaran diteruskan dari martil → landasan → sanggurdi, diperkuat sepanjang proses." },
              { title: "Cairan Koklea Bergerak", desc: "Sanggurdi mendorong jendela oval sehingga cairan (perilimfe) dalam koklea bergerak." },
              { title: "Sel Rambut Teraktivasi", desc: "Gerakan cairan menggerakkan membran basilar dan menekuk sel-sel rambut di organ Corti, memicu impuls listrik." },
              { title: "Sinyal ke Otak", desc: "Impuls listrik diteruskan melalui saraf koklear ke korteks auditori di lobus temporal otak untuk diproses menjadi persepsi suara." },
            ],
          },
        ],
      },
      {
        heading: "Gangguan pada Indra Pendengaran",
        blocks: [
          {
            type: "two-col",
            items: [
              { title: "Tuli Konduktif", desc: "Gangguan pada jalur mekanik suara (telinga luar/tengah), misalnya penyumbatan serumen atau kerusakan tulang pendengaran.", color: "#30d158" },
              { title: "Tuli Sensorineural", desc: "Kerusakan sel rambut di koklea atau saraf pendengaran. Sering disebabkan paparan suara keras dalam waktu lama.", color: "#30d158" },
              { title: "Tinnitus", desc: "Berdenging di telinga tanpa sumber suara eksternal. Dapat disebabkan kerusakan sel rambut atau gangguan saraf.", color: "#5ac8fa" },
              { title: "Vertigo", desc: "Gangguan keseimbangan berupa rasa berputar, sering disebabkan gangguan pada saluran setengah lingkaran.", color: "#5ac8fa" },
            ],
          },
        ],
      },
      {
        heading: "Kata Kunci",
        blocks: [
          {
            type: "chip-group",
            items: ["Daun Telinga", "Saluran Telinga", "Gendang Telinga", "Martil", "Landasan", "Sanggurdi", "Saluran Eustachius", "Koklea", "Organ Corti", "Sel Rambut", "3 Saluran Setengah Lingkaran", "Saraf Vestibulokoklear", "Membran Basilar", "Keseimbangan"],
          },
        ],
      },
    ],
  },

  skin: {
    id: "skin",
    organ: "Kulit",
    label: "Indra Peraba",
    tagline: "Organ terluas tubuh manusia dengan berbagai jenis reseptor sentuhan dan suhu.",
    intro:
      "Kulit adalah indra peraba sekaligus organ terluas dan terberat dalam tubuh manusia. Kulit terdiri dari 2 lapisan utama: Epidermis dan Dermis, serta lapisan Subkutan (hipodermis) di bawah dermis.",
    sections: [
      {
        heading: "3 Lapisan Kulit",
        blocks: [
          {
            type: "three-col",
            items: [
              { title: "Epidermis", desc: "Lapisan terluar kulit, terdiri dari sel-sel mati yang terus berganti. Tidak memiliki pembuluh darah. Mengandung melanosit (penghasil pigmen melanin).", color: "#bf5af2" },
              { title: "Dermis", desc: "Lapisan tengah yang lebih tebal, mengandung reseptor, kelenjar keringat, kelenjar minyak, folikel rambut, dan pembuluh darah.", color: "#bf5af2" },
              { title: "Subkutan (Hipodermis)", desc: "Lapisan paling dalam berupa jaringan lemak yang berfungsi sebagai penyekat suhu, penyimpan energi, dan bantalan.", color: "#86868b" },
            ],
          },
        ],
      },
      {
        heading: "4 Jenis Reseptor Kulit",
        blocks: [
          {
            type: "numbered-list",
            items: [
              { title: "Mekanoreseptor", desc: "Reseptor yang peka terhadap tekanan mekanik seperti sentuhan, tekanan, getaran, dan gerakan. Contoh: Korpuskulus Meissner (sentuhan halus), Korpuskulus Pacini (getaran & tekanan dalam), Cakram Merkel (tekanan ringan), Ujung Ruffini (tekanan terus-menerus & peregangan)." },
              { title: "Nosiseptor", desc: "Reseptor nyeri yang peka terhadap rangsangan yang dapat merusak jaringan, seperti tekanan berlebihan, suhu ekstrem, dan zat kimia iritan. Menghasilkan sensasi sakit/nyeri sebagai sinyal peringatan." },
              { title: "Termoreseptor", desc: "Reseptor suhu yang mendeteksi perubahan temperatur. Korpuskulus Krause untuk dingin (di bawah 25°C), Korpuskulus Ruffini untuk panas (di atas 45°C)." },
              { title: "Proprioreseptor", desc: "Reseptor khusus yang terletak pada otot, tendon, dan sendi. Mendeteksi posisi dan gerakan tubuh (propriosepsi) tanpa perlu melihat. Memungkinkan kita merasakan posisi anggota tubuh saat mata tertutup." },
            ],
          },
        ],
      },
      {
        heading: "Badan Reseptor di Dermis",
        blocks: [
          {
            type: "two-col",
            items: [
              { title: "Korpuskulus Meissner", desc: "Berlokasi di kulit tidak berambut (ujung jari, bibir). Mendeteksi sentuhan halus dan tekstur.", color: "#bf5af2" },
              { title: "Korpuskulus Pacini", desc: "Berbentuk oval seperti bawang. Mendeteksi getaran dan tekanan mendalam.", color: "#bf5af2" },
              { title: "Cakram Merkel", desc: "Ditemukan di epidermis dalam. Mendeteksi tekanan ringan dan bentuk objek.", color: "#9b59b6" },
              { title: "Ujung Ruffini", desc: "Mendeteksi peregangan kulit dan tekanan terus-menerus.", color: "#9b59b6" },
              { title: "Korpuskulus Krause", desc: "Mendeteksi sensasi dingin dan sentuhan ringan.", color: "#7d3c98" },
              { title: "Ujung Saraf Bebas", desc: "Paling banyak jumlahnya. Mendeteksi nyeri, suhu, gatal, dan sentuhan kasar.", color: "#7d3c98" },
            ],
          },
        ],
      },
      {
        heading: "Fungsi Kulit",
        blocks: [
          {
            type: "numbered-list",
            items: [
              { title: "Pelindung", desc: "Melindungi tubuh dari paparan sinar UV, bakteri, jamur, zat kimia berbahaya, dan benturan fisik." },
              { title: "Pengatur Suhu (Termoregulasi)", desc: "Kelenjar keringat melepaskan panas melalui penguapan. Pembuluh darah di kulit melebar saat panas dan menyempit saat dingin." },
              { title: "Indra Peraba", desc: "Menerima rangsangan dari luar melalui berbagai reseptor dan meneruskannya ke otak." },
              { title: "Sintesis Vitamin D", desc: "Sel epidermis mengubah kolesterol menjadi vitamin D saat terpapar sinar UVB matahari." },
              { title: "Ekskresi", desc: "Mengeluarkan zat sisa melalui keringat, seperti air, garam, dan sedikit urea." },
            ],
          },
        ],
      },
      {
        heading: "Fakta Menarik",
        blocks: [
          { type: "highlight", content: "Kulit adalah organ terbesar dan terberat dalam tubuh manusia dengan luas ± 1,5–2 m² dan berat ± 3–4 kg. Sel kulit (keratinosit) tergantikan setiap 2–4 minggu sekali. Ujung jari memiliki kerapatan reseptor tertinggi, sehingga paling sensitif terhadap sentuhan halus." },
        ],
      },
      {
        heading: "Kata Kunci",
        blocks: [
          {
            type: "chip-group",
            items: ["Epidermis", "Dermis", "Subkutan", "Mekanoreseptor", "Nosiseptor", "Termoreseptor", "Proprioreseptor", "Korpuskulus Meissner", "Korpuskulus Pacini", "Melanosit", "Keratin", "Stratum Korneum", "Termoregulasi"],
          },
        ],
      },
    ],
  },
};
