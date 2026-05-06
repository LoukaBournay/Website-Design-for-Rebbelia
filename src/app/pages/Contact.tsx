import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("L'envoi du formulaire a échoué");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });

      // Réinitialise le statut de succès après 5 secondes pour permettre un nouvel envoi
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setSubmitError("Une erreur est survenue. Merci de réessayer ou de nous écrire directement par email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="overflow-hidden bg-[#F7F9FC] text-[#172033]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(30,78,140,0.14),_transparent_34%),linear-gradient(180deg,_#F7F9FC_0%,_#EEF3F8_100%)] py-32">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "linear-gradient(rgba(30,78,140,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,78,140,0.06) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#1E4E8C] opacity-12 blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-[#D4A64A] opacity-10 blur-[150px] animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative mx-auto max-w-[1280px] px-6 text-center lg:px-10">
          <div className="mb-8 inline-flex items-center rounded-full border border-[#1E4E8C]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#1E4E8C] shadow-sm shadow-[#1E4E8C]/5">
            Devis gratuit & sans engagement
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] text-[#172033] lg:text-7xl">
            Parlons de{" "}
            <span className="bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A] bg-clip-text text-transparent">
              votre projet
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#5E6B82]">
            Prêt à automatiser votre entreprise ? Chaque projet est unique — contactez-nous pour une solution sur mesure.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-[#EEF3F8] py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[#172033] lg:text-4xl">
                On vous répond sous 24h
              </h2>
              <p className="mb-10 leading-relaxed text-[#5E6B82]">
                Chaque projet est unique. Contactez-nous pour un devis personnalisé adapté à vos besoins et à votre budget.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#1E4E8C]/20 bg-white">
                    <Mail className="h-6 w-6 text-[#D4A64A]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#172033]">Email</h3>
                    <p className="text-[#5E6B82]">rebbelia@rebbelia.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#1E4E8C]/20 bg-white">
                    <Phone className="h-6 w-6 text-[#D4A64A]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#172033]">Téléphone</h3>
                    <p className="text-[#5E6B82]">+33 7 82 39 43 68</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#1E4E8C]/20 bg-white">
                    <MapPin className="h-6 w-6 text-[#D4A64A]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#172033]">Adresse</h3>
                    <p className="text-[#5E6B82]">11 rue du Docteur Robert, 38230 Pont-de-Chéruy — France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="rounded-2xl border border-[#1E4E8C]/10 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)] lg:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-[#172033]">Message envoyé !</h3>
                  <p className="text-[#5E6B82]">Merci pour votre confiance. Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#172033]">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[#1E4E8C]/15 bg-[#F7F9FC] px-4 py-3 text-[#172033] transition-all placeholder-[#5E6B82] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1E4E8C]"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#172033]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[#1E4E8C]/15 bg-[#F7F9FC] px-4 py-3 text-[#172033] transition-all placeholder-[#5E6B82] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1E4E8C]"
                      placeholder="jean@entreprise.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#172033]">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[#1E4E8C]/15 bg-[#F7F9FC] px-4 py-3 text-[#172033] transition-all placeholder-[#5E6B82] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1E4E8C]"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#172033]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="min-h-36 w-full resize-none rounded-xl border border-[#1E4E8C]/15 bg-[#F7F9FC] px-4 py-3 text-[#172033] transition-all placeholder-[#5E6B82] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1E4E8C]"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1E4E8C] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#23589D] disabled:opacity-70"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  {submitError && (
                    <p className="text-center text-sm text-[#EF4444]">
                      {submitError}
                    </p>
                  )}

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