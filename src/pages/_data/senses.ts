// All sense data used across BentoGrid and detail pages

export type SenseName = "nose" | "tongue" | "eye" | "ear" | "skin";

export type SenseAccent = {
  color: string;
  bg: string;
  glow: string;
  hex: string;
};

export const ACCENTS: Record<SenseName, SenseAccent> = {
  nose: {
    color: "text-[#ff6b6b]",
    bg: "bg-[#ff6b6b]/10",
    glow: "rgba(255,107,107,0.35)",
    hex: "#ff6b6b",
  },
  tongue: {
    color: "text-[#ff9f0a]",
    bg: "bg-[#ff9f0a]/10",
    glow: "rgba(255,159,10,0.35)",
    hex: "#ff9f0a",
  },
  eye: {
    color: "text-[#2997ff]",
    bg: "bg-[#2997ff]/10",
    glow: "rgba(41,151,255,0.35)",
    hex: "#2997ff",
  },
  ear: {
    color: "text-[#30d158]",
    bg: "bg-[#30d158]/10",
    glow: "rgba(48,209,88,0.35)",
    hex: "#30d158",
  },
  skin: {
    color: "text-[#bf5af2]",
    bg: "bg-[#bf5af2]/10",
    glow: "rgba(191,90,242,0.35)",
    hex: "#bf5af2",
  },
};

export type SenseCard = {
  id: SenseName;
  emoji: string;
  organ: string;
  label: string;
  subtitle: string;
  colSpan: string;
};

export const SENSE_CARDS: SenseCard[] = [
  {
    id: "nose",
    emoji: "👃",
    organ: "Hidung",
    label: "Indra Penghidu",
    subtitle: "Mengenali molekul zat kimia di udara melalui kemoreseptor.",
    colSpan: "md:col-span-4",
  },
  {
    id: "tongue",
    emoji: "👅",
    organ: "Lidah",
    label: "Indra Pengecap",
    subtitle: "Mengecap rasa melalui papila dan kuncup rasa.",
    colSpan: "md:col-span-4",
  },
  {
    id: "skin",
    emoji: "🤚",
    organ: "Kulit",
    label: "Indra Peraba",
    subtitle: "Merasakan sentuhan, tekanan, dan perubahan suhu.",
    colSpan: "md:col-span-4",
  },
  {
    id: "eye",
    emoji: "👁️",
    organ: "Mata",
    label: "Indra Penglihatan",
    subtitle:
      "Menangkap cahaya melalui fotoreseptor pada lapisan retina. Organ kompleks dengan 3 lapisan & 3 ruang.",
    colSpan: "md:col-span-7",
  },
  {
    id: "ear",
    emoji: "👂",
    organ: "Telinga",
    label: "Indra Pendengaran",
    subtitle:
      "Mengumpulkan getaran suara dan menjaga keseimbangan tubuh.",
    colSpan: "md:col-span-5",
  },
];
