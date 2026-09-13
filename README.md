# Sistem Indra Pada Manusia

Website materi IPA Kelas IX — **SMP El Rasyad IJHS**

Topik: **Sistem Indra Pada Manusia**

## Fitur

- 5 halaman detail indra: Hidung, Lidah, Mata, Telinga, Kulit
- Materi lengkap dengan struktur, mekanisme, gangguan, dan kata kunci
- 3 soal review interaktif per halaman (pilihan ganda + penjelasan)
- Desain Apple Liquid Glass (WWDC25 aesthetic)
- Animasi smooth dengan Framer Motion / motion library
- Responsif untuk mobile dan desktop

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- motion (Framer Motion)
- React Router DOM v7

## Cara Menjalankan

```bash
pnpm install
pnpm dev
```

Buka di browser: `http://localhost:5173`

## Struktur File

```
src/
  pages/
    _components/     # Komponen shared (AmbientGlow, HeroSection, BentoGrid, dll)
    _data/           # Data konten (senses.ts, full-content.ts)
    indra/
      page.tsx       # Halaman detail per indra + BlockRenderer + OtherSenses
    Index.tsx        # Halaman utama
  App.tsx
  index.css          # Liquid Glass theme
  main.tsx
```

---

*Dibuat untuk tugas IPA Kelas IX, SMP El Rasyad IJHS — {new Date().getFullYear()}*
