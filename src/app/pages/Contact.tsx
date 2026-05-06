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
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch {
      setSubmitError("Une erreur est survenue. Merci de reessayer ou de nous ecrire par email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="overflow-hidden bg-[#F7F9FC] text-[#172033]">
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
            PrÃªt Ã  automatiser votre entreprise ? Chaque projet est unique â€” contactez-nous pour une solution sur mesure.
          </p>
        </div>
      </section>

      <section className="bg-[#EEF3F8] py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[#172033] lg:text-4xl">
                On vous rÃ©pond sous 24h
              </h2>
              <p className="mb-10 leading-relaxed text-[#5E6B82]">
                Chaque projet est unique. Contactez-nous pour un devis personnalisÃ© adaptÃ© Ã  vos besoins et votre budget.
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
                    <h3 className="mb-1 font-semibold text-[#172033]">TÃ©lÃ©phone</h3>
                    <p className="text-[#5E6B82]">+33 7 82 39 43 68</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#1E4E8C]/20 bg-white">
                    <MapPin className="h-6 w-6 text-[#D4A64A]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#172033]">Adresse</h3>
                    <p className="text-[#5E6B82]">11 rue du docteur Robert 38230 pont de cheruy â€” France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#1E4E8C]/10 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)] lg:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1E4E8C]/10">
                    <svg className="h-8 w-8 text-[#1E4E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-[#172033]">Message envoyÃ© !</h3>
                  <p className="text-[#5E6B82]">Nous vous rÃ©pondrons dans les plus brefs dÃ©lais.</p>
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
                      placeholder="DÃ©crivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1E4E8C] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#2F7A5F]"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  {submitError ? (
                    <p className="text-center text-sm text-[#EF4444]">
                      {submitError}
                    </p>
                  ) : null}

                  <p className="text-center text-xs text-[#5E6B82]">
                    Devis gratuit Â· RÃ©ponse sous 24h Â· Sans engagement
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
