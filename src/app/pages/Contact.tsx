import { useState } from "react";
import { Link } from "react-router";
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
    <div className="overflow-hidden bg-[#050d1f] text-white">
      {/* HERO */}
      <section className="relative bg-[#050d1f] py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB] rounded-full blur-[150px] opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#60a5fa] rounded-full blur-[150px] opacity-15 animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60a5fa] text-sm font-medium mb-8">
            Devis gratuit & sans engagement
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
            Parlons de{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">
              votre projet
            </span>
          </h1>
          <p className="text-lg text-white/65 max-w-3xl mx-auto leading-relaxed">
            Prêt à automatiser votre entreprise ? Chaque projet est unique — contactez-nous pour une solution sur mesure.
          </p>
        </div>
      </section>

      {/* FORMULAIRE + INFOS */}
      <section className="bg-gradient-to-b from-[#050d1f] to-[#081226] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Infos contact */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                On vous répond sous 24h
              </h2>
              <p className="text-[#8ea3c5] mb-10 leading-relaxed">
                Chaque projet est unique. Contactez-nous pour un devis personnalisé adapté à vos besoins et votre budget.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2563EB]/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#2563EB]/30">
                    <Mail className="w-6 h-6 text-[#60a5fa]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-[#8ea3c5]">rebbelia@rebbelia.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2563EB]/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#2563EB]/30">
                    <Phone className="w-6 h-6 text-[#60a5fa]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Téléphone</h3>
                    <p className="text-[#8ea3c5]">+33 7 82 39 43 68</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2563EB]/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#2563EB]/30">
                    <MapPin className="w-6 h-6 text-[#60a5fa]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Adresse</h3>
                    <p className="text-[#8ea3c5]">11 rue du docteur Robert 38230 pont de cheruy — France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="bg-[#0b1730] rounded-2xl border border-white/10 p-8 lg:p-10 shadow-sm shadow-[#020817]/20">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#2563EB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-[#8ea3c5]">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0f1b33] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-white placeholder-[#6f86ab]"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0f1b33] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-white placeholder-[#6f86ab]"
                      placeholder="jean@entreprise.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0f1b33] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-white placeholder-[#6f86ab]"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#0f1b33] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none text-white placeholder-[#6f86ab]"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {submitError ? (
                    <p className="text-center text-sm text-red-300">
                      {submitError}
                    </p>
                  ) : null}

                  <p className="text-center text-xs text-[#94a3b8]">
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
