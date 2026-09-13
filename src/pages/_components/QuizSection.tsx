import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { SenseName } from "../_data/senses.ts";
import { ACCENTS } from "../_data/senses.ts";

type Question = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};

const QUIZ_DATA: Record<SenseName, Question[]> = {
  nose: [
    {
      q: "Sel apakah yang berperan sebagai kemoreseptor pada indra penghidu?",
      options: ["Sel epitel skuamosa", "Sel epitel olfaktori", "Sel goblet", "Sel melanosit"],
      answer: 1,
      explanation: "Sel epitel olfaktori yang terletak pada langit-langit rongga hidung berperan langsung sebagai kemoreseptor yang mendeteksi molekul zat kimia di udara.",
    },
    {
      q: "Di manakah letak sel kemoreseptor pada hidung?",
      options: ["Ujung luar daun hidung", "Dinding bawah rongga hidung", "Langit-langit rongga hidung", "Septum hidung bagian depan"],
      answer: 2,
      explanation: "Sel epitel olfaktori terletak pada langit-langit rongga hidung, di mana molekul aroma dari udara dapat bersentuhan langsung dengan silia reseptor.",
    },
    {
      q: "Kondisi kehilangan kemampuan mencium bau secara total disebut…",
      options: ["Hiposmia", "Parosmia", "Phantosmia", "Anosmia"],
      answer: 3,
      explanation: "Anosmia adalah hilangnya kemampuan mencium bau secara total. Hiposmia adalah penurunan, parosmia adalah distorsi bau, dan phantosmia adalah mencium bau yang tidak ada.",
    },
  ],
  tongue: [
    {
      q: "Berapa jumlah rasa dasar yang dapat dideteksi oleh lidah manusia?",
      options: ["3 rasa", "4 rasa", "5 rasa", "6 rasa"],
      answer: 2,
      explanation: "Terdapat 5 rasa dasar: manis, asin, asam, pahit, dan umami. Umami adalah rasa gurih yang berasal dari glutamat, ditemukan pada daging dan keju.",
    },
    {
      q: "Apakah nama struktur tonjolan kecil di permukaan lidah yang mengandung kuncup rasa?",
      options: ["Papila", "Vili", "Silia", "Mikrovili"],
      answer: 0,
      explanation: "Papila adalah tonjolan-tonjolan kecil di permukaan lidah yang mengandung kuncup rasa (taste buds). Ada 4 jenis papila: sirkumvalata, fungiformis, filiformis, dan foliata.",
    },
    {
      q: "Rasa umami dihasilkan oleh senyawa apakah yang terkandung dalam makanan?",
      options: ["Fruktosa", "Natrium klorida", "Glutamat", "Asam sitrat"],
      answer: 2,
      explanation: "Umami dihasilkan oleh glutamat (asam amino), yang banyak ditemukan pada daging, keju, jamur, dan produk fermentasi. Rasa ini menandakan kandungan protein dalam makanan.",
    },
  ],
  eye: [
    {
      q: "Sel fotoreseptor mana yang berfungsi untuk melihat warna dan detail?",
      options: ["Sel batang (rod)", "Sel kerucut (cone)", "Sel ganglion", "Sel bipolar"],
      answer: 1,
      explanation: "Sel kerucut (cone) mengandung fotopsin dan bekerja optimal di cahaya terang untuk melihat warna dan detail. Sel batang (rod) bekerja di cahaya redup untuk mendeteksi gerak dan terang-gelap.",
    },
    {
      q: "Bagian mata yang berfungsi mengatur jumlah cahaya yang masuk adalah…",
      options: ["Kornea", "Lensa", "Iris dan pupil", "Retina"],
      answer: 2,
      explanation: "Iris adalah bagian berwarna yang mengandung otot untuk mengatur ukuran pupil. Pupil menyempit saat cahaya terang dan melebar saat cahaya redup.",
    },
    {
      q: "Gangguan penglihatan di mana bayangan jatuh di depan retina disebut…",
      options: ["Hipermetropi", "Astigmatisme", "Miopi", "Presbiopi"],
      answer: 2,
      explanation: "Miopi (rabun jauh) terjadi ketika bayangan jatuh di depan retina, biasanya karena bola mata terlalu panjang. Dikoreksi dengan lensa cekung (negatif).",
    },
  ],
  ear: [
    {
      q: "Tulang pendengaran manakah yang berukuran paling kecil di seluruh tubuh?",
      options: ["Martil (maleus)", "Landasan (inkus)", "Sanggurdi (stapes)", "Koklea"],
      answer: 2,
      explanation: "Sanggurdi (stapes) adalah tulang terkecil dalam tubuh manusia. Ketiga tulang pendengaran (martil, landasan, sanggurdi) bersama-sama memperkuat getaran suara hingga 20 kali lipat.",
    },
    {
      q: "Organ manakah di telinga dalam yang bertanggung jawab atas keseimbangan tubuh?",
      options: ["Koklea (rumah siput)", "Gendang telinga", "Saluran eustachius", "3 Saluran setengah lingkaran"],
      answer: 3,
      explanation: "Tiga saluran setengah lingkaran (kanalis semisirkularis) mendeteksi rotasi dan gerakan kepala untuk keseimbangan dinamis. Utrikulus dan sakulus mendeteksi posisi terhadap gravitasi.",
    },
    {
      q: "Apakah fungsi saluran Eustachius pada telinga?",
      options: ["Menghasilkan cairan endolimfe", "Menyeimbangkan tekanan udara antara telinga tengah dan tenggorokan", "Meneruskan getaran ke koklea", "Menyaring kotoran dari saluran telinga"],
      answer: 1,
      explanation: "Saluran Eustachius menghubungkan telinga tengah dengan nasofaring (tenggorokan). Fungsinya menyeimbangkan tekanan udara di kedua sisi gendang telinga agar tidak pecah.",
    },
  ],
  skin: [
    {
      q: "Reseptor kulit mana yang peka terhadap rasa sakit atau nyeri?",
      options: ["Mekanoreseptor", "Termoreseptor", "Nosiseptor", "Proprioreseptor"],
      answer: 2,
      explanation: "Nosiseptor adalah reseptor yang peka terhadap rangsangan yang dapat merusak jaringan, menghasilkan sensasi nyeri sebagai sinyal peringatan bagi tubuh.",
    },
    {
      q: "Lapisan kulit yang paling luar dan terdiri dari sel-sel mati berkeratin adalah…",
      options: ["Dermis", "Subkutan (hipodermis)", "Stratum basale", "Stratum korneum"],
      answer: 3,
      explanation: "Stratum korneum adalah lapisan paling luar dari epidermis, terdiri dari sel-sel mati yang mengandung protein keratin keras. Lapisan ini terus mengelupas dan digantikan sel baru.",
    },
    {
      q: "Reseptor sentuhan halus yang banyak terdapat di ujung jari adalah…",
      options: ["Korpuskulus Pacini", "Korpuskulus Meissner", "Ujung Ruffini", "Cakram Merkel"],
      answer: 1,
      explanation: "Korpuskulus Meissner berlokasi di kulit tidak berambut seperti ujung jari dan bibir. Reseptor ini mendeteksi sentuhan halus dan tekstur permukaan benda.",
    },
  ],
};

type Props = { senseId: SenseName };

export default function QuizSection({ senseId }: Props) {
  const questions = QUIZ_DATA[senseId];
  const accent = ACCENTS[senseId];
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const score = answers.filter((a, i) => a === questions[i].answer).length;
  const allAnswered = answers.every((a) => a !== null);

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => { const next = [...prev]; next[qIdx] = optIdx; return next; });
  };

  const handleReset = () => { setAnswers(Array(questions.length).fill(null)); setSubmitted(false); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
      className="mt-6"
    >
      {/* Header */}
      <div
        className="rounded-t-[22px] px-7 py-5 flex items-center gap-3"
        style={{
          background: `linear-gradient(90deg, ${accent.hex}14, ${accent.hex}08)`,
          border: "1px solid rgba(255,255,255,0.7)",
          borderBottom: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
          style={{ background: `${accent.hex}20`, border: "1px solid rgba(255,255,255,0.6)", color: accent.hex }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: accent.hex }}>Soal Review</p>
          <p className="text-[14px] font-bold" style={{ color: "rgba(8,30,100,0.88)" }}>Uji Pemahaman — 3 Soal</p>
        </div>
      </div>

      {/* Questions */}
      <div className="rounded-b-[22px] overflow-hidden"
        style={{ background: "rgba(255,255,255,0.42)", border: "1px solid rgba(255,255,255,0.7)", borderTop: "none", backdropFilter: "blur(28px) saturate(1.8)", WebkitBackdropFilter: "blur(28px) saturate(1.8)", boxShadow: "0 8px 32px rgba(60,100,180,0.09)" }}>
        <div className="px-7 py-6 space-y-8">
          {questions.map((q, qIdx) => {
            const chosen = answers[qIdx];
            const isCorrect = chosen === q.answer;

            return (
              <div key={qIdx}>
                <p className="text-[14.5px] font-semibold leading-snug mb-3" style={{ color: "rgba(8,30,100,0.88)" }}>
                  <span className="inline-flex w-6 h-6 rounded-[7px] items-center justify-center text-[11px] font-bold mr-2 align-middle"
                    style={{ background: `${accent.hex}18`, color: accent.hex }}>
                    {qIdx + 1}
                  </span>
                  {q.q}
                </p>

                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const isChosen = chosen === optIdx;
                    const showCorrect = submitted && optIdx === q.answer;
                    const showWrong = submitted && isChosen && !isCorrect;

                    let bg = "rgba(255,255,255,0.45)";
                    let border = "rgba(30,80,180,0.1)";
                    let textColor = "rgba(20,60,130,0.75)";

                    if (!submitted && isChosen) { bg = `${accent.hex}14`; border = accent.hex; textColor = "rgba(8,30,100,0.9)"; }
                    if (showCorrect) { bg = "rgba(48,209,88,0.12)"; border = "#30d158"; textColor = "rgba(10,80,30,0.9)"; }
                    if (showWrong) { bg = "rgba(255,59,48,0.1)"; border = "#ff3b30"; textColor = "rgba(120,10,10,0.85)"; }

                    return (
                      <button key={optIdx} onClick={() => handleSelect(qIdx, optIdx)}
                        className="w-full text-left px-4 py-2.5 rounded-[12px] text-[13.5px] font-medium transition-all duration-200 flex items-center gap-2.5"
                        style={{ background: bg, border: `1px solid ${border}`, color: textColor, cursor: submitted ? "default" : "pointer" }}>
                        <span className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center border"
                          style={{ borderColor: showCorrect ? "#30d158" : showWrong ? "#ff3b30" : (!submitted && isChosen) ? accent.hex : "rgba(30,80,180,0.2)", background: showCorrect ? "#30d158" : showWrong ? "#ff3b30" : (!submitted && isChosen) ? accent.hex : "transparent" }}>
                          {(showCorrect || (!submitted && isChosen)) && (
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="white">
                              {showCorrect ? <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" /> : <circle cx="5" cy="5" r="2.5" />}
                            </svg>
                          )}
                          {showWrong && <svg width="7" height="7" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2l-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {submitted && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }} className="overflow-hidden">
                      <div className="mt-3 px-4 py-3 rounded-[12px] text-[12.5px] leading-relaxed"
                        style={{ background: isCorrect ? "rgba(48,209,88,0.08)" : "rgba(255,59,48,0.07)", border: `1px solid ${isCorrect ? "rgba(48,209,88,0.25)" : "rgba(255,59,48,0.2)"}`, color: isCorrect ? "rgba(10,80,30,0.85)" : "rgba(100,10,10,0.8)" }}>
                        <span className="font-semibold">{isCorrect ? "Benar! " : "Belum tepat. "}</span>
                        {q.explanation}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="px-7 py-5 flex items-center justify-between flex-wrap gap-3" style={{ borderTop: "1px solid rgba(30,80,180,0.08)" }}>
          <AnimatePresence>
            {submitted && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-full text-[13px] font-bold"
                  style={{ background: score === questions.length ? "rgba(48,209,88,0.15)" : score >= 2 ? `${accent.hex}18` : "rgba(255,59,48,0.1)", color: score === questions.length ? "#1a7a30" : score >= 2 ? accent.hex : "#c0392b", border: `1px solid ${score === questions.length ? "rgba(48,209,88,0.3)" : score >= 2 ? `${accent.hex}30` : "rgba(255,59,48,0.2)"}` }}>
                  {score === questions.length ? "Sempurna! " : score >= 2 ? "Bagus! " : "Yuk belajar lagi! "}
                  Nilai: {score}/{questions.length}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-2 ml-auto">
            {submitted && (
              <button onClick={handleReset} className="px-4 py-2 rounded-full text-[13px] font-medium cursor-pointer transition-all hover:scale-[1.03]"
                style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(30,80,180,0.15)", color: "rgba(30,80,160,0.65)" }}>
                Ulangi
              </button>
            )}
            {!submitted && (
              <button onClick={() => allAnswered && setSubmitted(true)}
                className="px-5 py-2 rounded-full text-[13px] font-semibold transition-all"
                style={{ background: allAnswered ? accent.hex : "rgba(30,80,180,0.1)", color: allAnswered ? "white" : "rgba(30,80,180,0.35)", cursor: allAnswered ? "pointer" : "not-allowed", border: "1px solid transparent", boxShadow: allAnswered ? `0 4px 16px ${accent.hex}40` : "none" }}>
                Periksa Jawaban
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
