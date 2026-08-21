import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

type Answers = {
  need: string;
  volume: string;
  tools: string;
  name: string;
  email: string;
  company: string;
};

const choices = {
  need: ["Répondre aux demandes de devis", "Gérer les emails ou avis Google", "Relancer et suivre mes clients", "Un autre besoin"],
  volume: ["Moins de 10 demandes par semaine", "Entre 10 et 50 demandes par semaine", "Plus de 50 demandes par semaine"],
  tools: ["Un ou deux outils", "Plusieurs outils à connecter", "Je ne sais pas encore"],
};

export function Contact() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ need: "", volume: "", tools: "", name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const estimate = useMemo(() => {
    let score = 0;
    if (answers.volume.includes("10 et 50")) score += 1;
    if (answers.volume.includes("Plus de 50")) score += 2;
    if (answers.tools.includes("Plusieurs")) score += 2;
    if (answers.need === "Un autre besoin") score += 1;
    if (score <= 1) return "490 à 990 €";
    if (score <= 3) return "990 à 1 990 €";
    return "1 990 à 3 900 €";
  }, [answers]);

  const next = () => setStep((current) => current + 1);
  const previous = () => setStep((current) => Math.max(0, current - 1));
  const choose = (field: "need" | "volume" | "tools", value: string) => {
    setAnswers((current) => ({ ...current, [field]: value }));
    window.setTimeout(next, 180);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("https://formspree.io/f/xgodazvg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nom: answers.name,
          email: answers.email,
          entreprise: answers.company,
          besoin: answers.need,
          volume: answers.volume,
          outils: answers.tools,
          estimation_indicative: estimate,
        }),
      });
      if (!response.ok) throw new Error("Envoi impossible");
      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Vous pouvez aussi nous écrire à rebbelia@rebbelia.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = Math.round(((step + 1) / 4) * 100);

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#172033]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(30,78,140,0.14),_transparent_34%),linear-gradient(180deg,_#F7F9FC_0%,_#EEF3F8_100%)] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1E4E8C]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#1E4E8C]"><Sparkles className="h-4 w-4" /> Estimation gratuite</p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight lg:text-6xl">Parlons de votre <span className="bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A] bg-clip-text text-transparent">automatisation.</span></h1>
          <p className="mt-5 text-lg text-[#5E6B82]">Répondez à quelques questions simples. Cela prend moins de deux minutes.</p>
        </div>
      </section>

      <section className="px-6 py-14 lg:py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#1E4E8C]/10 bg-white p-7 shadow-[0_20px_60px_rgba(30,78,140,0.1)] sm:p-10">
          {submitted ? (
            <div className="py-10 text-center"><CheckCircle2 className="mx-auto h-16 w-16 text-[#2F7A5F]" /><h2 className="mt-6 text-3xl font-bold">Demande envoyée !</h2><p className="mt-4 text-[#5E6B82]">Merci {answers.name}. Nous étudions votre besoin et revenons vers vous avec une proposition adaptée.</p></div>
          ) : (
            <>
              <div className="mb-10"><div className="mb-3 flex justify-between text-sm font-medium text-[#5E6B82]"><span>Question {step + 1} sur 4</span><span>{progress}%</span></div><div className="h-2 overflow-hidden rounded-full bg-[#EEF3F8]"><div className="h-full rounded-full bg-[#1E4E8C] transition-all duration-300" style={{ width: `${progress}%` }} /></div></div>
              {step === 0 && <Question title="Que souhaitez-vous automatiser ?" subtitle="Choisissez le besoin le plus proche de votre situation." options={choices.need} value={answers.need} onChoose={(value) => choose("need", value)} />}
              {step === 1 && <Question title="Quel est le volume à traiter ?" subtitle="Une estimation suffit : nous affinerons ensemble ensuite." options={choices.volume} value={answers.volume} onChoose={(value) => choose("volume", value)} />}
              {step === 2 && <Question title="Combien d'outils utilisez-vous ?" subtitle="Par exemple : Gmail, Outlook, Google Sheets, Notion ou un CRM." options={choices.tools} value={answers.tools} onChoose={(value) => choose("tools", value)} />}
              {step === 3 && <form onSubmit={submit}><h2 className="text-3xl font-bold">Votre estimation</h2><p className="mt-3 text-[#5E6B82]">Pour ce type de projet, comptez généralement :</p><div className="my-7 rounded-2xl bg-[#EEF3F8] p-6 text-center"><p className="text-sm font-semibold text-[#1E4E8C]">ESTIMATION INDICATIVE</p><p className="mt-2 text-3xl font-extrabold">{estimate}</p><p className="mt-3 text-sm text-[#5E6B82]">Le prix final dépendra des outils et de vos besoins précis.</p></div><div className="space-y-4"><Input label="Votre nom" value={answers.name} onChange={(value) => setAnswers({ ...answers, name: value })} required /><Input label="Email professionnel" type="email" value={answers.email} onChange={(value) => setAnswers({ ...answers, email: value })} required /><Input label="Entreprise" value={answers.company} onChange={(value) => setAnswers({ ...answers, company: value })} required /></div><button disabled={isSubmitting} className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#1E4E8C] px-7 py-4 font-semibold text-white transition hover:bg-[#23589D] disabled:opacity-60">{isSubmitting ? "Envoi en cours…" : "Recevoir mon estimation"}<ArrowRight className="h-5 w-5" /></button>{error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}<p className="mt-4 text-center text-xs text-[#5E6B82]">Vos informations servent uniquement à répondre à votre demande.</p></form>}
              {step > 0 && <button type="button" onClick={previous} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1E4E8C]"><ArrowLeft className="h-4 w-4" /> Revenir à la question précédente</button>}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function Question({ title, subtitle, options, value, onChoose }: { title: string; subtitle: string; options: string[]; value: string; onChoose: (value: string) => void }) {
  return <div><h2 className="text-3xl font-bold">{title}</h2><p className="mt-3 text-[#5E6B82]">{subtitle}</p><div className="mt-8 space-y-3">{options.map((option) => <button key={option} type="button" onClick={() => onChoose(option)} className={`w-full rounded-2xl border p-5 text-left font-semibold transition ${value === option ? "border-[#1E4E8C] bg-[#1E4E8C]/5 text-[#1E4E8C]" : "border-[#1E4E8C]/15 hover:border-[#1E4E8C] hover:bg-[#F7F9FC]"}`}>{option}</button>)}</div></div>;
}

function Input({ label, value, onChange, type = "text", required = false }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) {
  return <label className="block text-sm font-semibold">{label}<input type={type} value={value} onChange={(event) => onChange(event.target.value)} required={required} className="mt-2 w-full rounded-xl border border-[#1E4E8C]/15 bg-[#F7F9FC] px-4 py-3 font-normal outline-none transition focus:border-[#1E4E8C]" /></label>;
}
