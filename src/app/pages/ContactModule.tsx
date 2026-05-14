import { useState } from "react";
import { useParams, Navigate, Link } from "react-router";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { MODULES } from "../data/modules";

export function ContactModule() {
  const { moduleSlug } = useParams<{ moduleSlug: string }>();
  const module = MODULES.find(m => m.slug === moduleSlug);

  if (!module) return <Navigate to="/contact" replace />;

  return <ContactModuleForm module={module} />;
}

// Composant séparé pour éviter les hooks conditionnels
function ContactModuleForm({ module }: { module: (typeof MODULES)[number] }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: `Bonjour, je suis intéressé(e) par le module « ${module.name} ». `,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("https://formspree.io/f/xgodazvg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, module: module.name }),
      });
      if (!response.ok) throw new Error();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError("Une erreur est survenue. Merci de réessayer ou de nous écrire directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="overflow-hidden bg-[#F7F9FC] text-[#172033]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(30,78,140,0.14),_transparent_34%),linear-gradient(180deg,_#F7F9FC_0%,_#EEF3F8_100%)] py-24">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "linear-gradient(rgba(30,78,140,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,78,140,0.06) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#5E6B82] transition-colors hover:text-[#1E4E8C]"
          >
            <ArrowLeft size={15} />
            Revenir aux tarifs
          </Link>

          <div className="mb-4 inline-flex items-center rounded-full border border-[#1E4E8C]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#1E4E8C] shadow-sm">
            Devis gratuit · Sans engagement
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#172033] lg:text-5xl">
            Démarrer avec{" "}
            <span className="bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A] bg-clip-text text-transparent">
              {module.name}
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#5E6B82]">
            Remplissez ce formulaire et nous vous recontactons sous 24h pour configurer votre automatisation.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="bg-[#EEF3F8] py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Récap du module */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#172033]">Ce qui est inclus</h2>

              <div className="rounded-2xl border border-[#1E4E8C]/10 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)]">
                <h3 className="mb-5 text-xl font-bold text-[#172033]">{module.name}</h3>

                <ul className="mb-8 space-y-3">
                  {module.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#5E6B82]">
                      <Check size={17} className="mt-0.5 shrink-0 text-[#2F7A5F]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#E2E8F0] pt-6">
                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-[#172033]">{module.installation} €</span>
                    <span className="text-sm text-[#5E6B82]">installation unique</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#1E4E8C]">{module.subscription} €</span>
                    <span className="text-sm text-[#5E6B82]">/mois · sans engagement</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-[#D4A64A]/30 bg-[#FDF8EE] p-5">
                <p className="text-sm font-semibold text-[#D4A64A]">✦ Inclus dans chaque module</p>
                <ul className="mt-2 space-y-1 text-sm text-[#5E6B82]">
                  <li>• Installation et configuration complète</li>
                  <li>• Support technique dédié</li>
                  <li>• Mises à jour incluses</li>
                </ul>
              </div>
            </div>

            {/* Formulaire */}
            <div className="rounded-2xl border border-[#1E4E8C]/10 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)] lg:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-[#172033]">Demande envoyée !</h3>
                  <p className="text-[#5E6B82]">Nous vous recontactons sous 24h pour démarrer votre automatisation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="mb-2 text-lg font-bold text-[#172033]">Vos coordonnées</h3>

                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#172033]">Nom complet</label>
                    <input
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      placeholder="Jean Dupont"
                      className="w-full rounded-xl border border-[#1E4E8C]/15 bg-[#F7F9FC] px-4 py-3 text-[#172033] placeholder-[#5E6B82] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1E4E8C]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#172033]">Email</label>
                    <input
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      placeholder="jean@entreprise.com"
                      className="w-full rounded-xl border border-[#1E4E8C]/15 bg-[#F7F9FC] px-4 py-3 text-[#172033] placeholder-[#5E6B82] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1E4E8C]"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#172033]">Entreprise</label>
                    <input
                      type="text" id="company" name="company" required
                      value={formData.company} onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                      className="w-full rounded-xl border border-[#1E4E8C]/15 bg-[#F7F9FC] px-4 py-3 text-[#172033] placeholder-[#5E6B82] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1E4E8C]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#172033]">Message</label>
                    <textarea
                      id="message" name="message" required rows={4}
                      value={formData.message} onChange={handleChange}
                      className="min-h-28 w-full resize-none rounded-xl border border-[#1E4E8C]/15 bg-[#F7F9FC] px-4 py-3 text-[#172033] placeholder-[#5E6B82] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1E4E8C]"
                    />
                  </div>

                  <button
                    type="submit" disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1E4E8C] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#23589D] disabled:opacity-70"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  {submitError && <p className="text-center text-sm text-[#EF4444]">{submitError}</p>}

                  <p className="text-center text-xs text-[#5E6B82]">
                    Devis gratuit · Réponse sous 24h · Sans engagement
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
