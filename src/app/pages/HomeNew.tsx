import { Link } from "react-router";
import { Badge } from "../components/Badge";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { GlassCard } from "../components/GlassCard";
import { Bot, Zap, Workflow, Mail, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import WorkflowDiagram from "../components/WorkflowDiagram";

export function HomeNew() {
  const integrations = ["Salesforce", "HubSpot", "Slack", "Gmail", "Zapier", "Teams"];

  const stats = [
    { value: "3x plus vite", label: "Temps de réponse moyen" },
    { value: "0 réponse ratée", label: "Taux de satisfaction" },
    { value: "100% sur mesure", label: "Solutions adaptées" },
  ];

  const testimonials = [
    {
      quote: "Rebbelia a transformé notre gestion client. Grâce à l'automatisation de nos emails et CRM, nous répondons 3 fois plus vite.",
      name: "Pierre Dubois",
      company: "TechStart",
      role: "CEO",
    },
    {
      quote: "L'équipe est professionnelle et à l'écoute. Notre productivité a augmenté de 40% en quelques semaines seulement.",
      name: "Claire Moreau",
      company: "InnovateCo",
      role: "COO",
    },
  ];

  const faqs = [
    {
      question: "Qu'est-ce que l'automatisation IA ?",
      answer: "L'automatisation IA consiste à utiliser l'intelligence artificielle pour automatiser vos tâches répétitives. Cela permet de gagner du temps et de réduire les erreurs.",
    },
    {
      question: "Combien coûtent vos services ?",
      answer: "Chaque projet est unique. Nos tarifs dépendent de la complexité et du nombre d'intégrations. Contactez-nous pour un devis personnalisé.",
    },
    {
      question: "Combien de temps pour la mise en place ?",
      answer: "Entre 1 et 2 semaines pour des automatisations simples, 4 à 8 semaines pour des workflows complexes.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden bg-[#050d1f] text-white">
      {/* HERO SECTION */}
      <section className="relative bg-[#050d1f] min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB] rounded-full blur-[150px] opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#60a5fa] rounded-full blur-[150px] opacity-15 animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="light">Automatisation IA pour PME</Badge>

              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] animate-fade-in-up">
                Rebbelia{" "}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">
                  Automatiser, Respirer.
                </span>
              </h1>

              <p className="text-lg text-white/65 leading-relaxed animate-fade-in-up animate-delay-200">
                On automatise vos réponses clients pour que vous n'en ratiez plus aucune. Gagnez du temps, améliorez la satisfaction et concentrez-vous sur l'essentiel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
                <Link to="/contact">
                  <ButtonPrimary variant="solid">Démarrer maintenant</ButtonPrimary>
                </Link>
                <Link to="/services">
                  <ButtonPrimary variant="outline">Découvrir nos services</ButtonPrimary>
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in-up animate-delay-400">
              <GlassCard className="p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center h-32 hover:bg-white/10 transition-all">
                    <Bot className="w-12 h-12 text-[#60a5fa] mb-2" />
                    <span className="text-white/70 text-sm">RPA</span>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center h-32 hover:bg-white/10 transition-all">
                    <Zap className="w-12 h-12 text-[#60a5fa] mb-2" />
                    <span className="text-white/70 text-sm">IA Rapide</span>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center h-32 hover:bg-white/10 transition-all">
                    <Workflow className="w-12 h-12 text-[#60a5fa] mb-2" />
                    <span className="text-white/70 text-sm">Workflows</span>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center h-32 hover:bg-white/10 transition-all">
                    <Mail className="w-12 h-12 text-[#60a5fa] mb-2" />
                    <span className="text-white/70 text-sm">CRM & Email</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* BANDE INTEGRATIONS */}
      <section className="bg-gradient-to-b from-[#050d1f] to-[#081226] py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <p className="text-center text-[#8ea3c5] mb-8 text-sm uppercase tracking-wider">Nos intégrations</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="text-[#8ea3c5] font-semibold text-lg opacity-50 hover:opacity-80 transition-opacity"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATION PREVIEW */}
      <section className="bg-[#081226] pb-24 lg:pb-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <Badge variant="blue">Maquette visuelle</Badge>
            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white">
              Exemple d'automatisation email
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-[#8ea3c5] leading-relaxed">
              Une carte statique pour montrer comment une automatisation peut lire un email, analyser
              le contexte et envoyer la bonne réponse sans intervention manuelle.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1730] p-6 lg:p-10 shadow-[0_30px_80px_rgba(2,8,23,0.45)]">
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Glow orbs */}
            <div className="absolute -top-16 right-16 h-40 w-40 rounded-full bg-[#2563EB]/10 blur-3xl" />
            <div className="absolute -bottom-10 left-14 h-32 w-32 rounded-full bg-[#14b889]/10 blur-3xl" />

            {/* ✅ WorkflowDiagram remplace l'image */}
            <div className="relative z-10 max-w-[1120px] mx-auto py-6">
              <WorkflowDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#081226] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-[#8ea3c5] max-w-2xl mx-auto">
              Des solutions d'automatisation IA sur mesure pour votre entreprise
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-[#0b1730] rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-[#020817]/30 transition-all group">
              <div className="w-16 h-16 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563EB] transition-all">
                <Bot className="w-8 h-8 text-[#2563EB] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automatisation RPA</h3>
              <p className="text-[#8ea3c5] leading-relaxed mb-6">
                Automatisez vos tâches répétitives grâce à la Robotic Process Automation. Réduisez les erreurs humaines et libérez du temps pour vos équipes.
              </p>
              <Link to="/services" className="inline-flex items-center text-[#2563EB] font-semibold hover:gap-3 gap-2 transition-all">
                En savoir plus
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#0b1730] rounded-2xl p-6 border border-white/10 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-[#020817]/30 transition-all group">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-all">
                  <Mail className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Intégration IA</h3>
                <p className="text-[#8ea3c5] text-sm leading-relaxed">
                  CRM, emails et outils automatisés
                </p>
              </div>

              <div className="bg-[#0b1730] rounded-2xl p-6 border border-white/10 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-[#020817]/30 transition-all group">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-all">
                  <Workflow className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Workflows sur mesure</h3>
                <p className="text-[#8ea3c5] text-sm leading-relaxed">
                  Solutions adaptées à vos besoins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES SECTION */}
      <section className="bg-[#091427] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-extrabold text-white mb-3">
                  {stat.value}
                </div>
                <div className="text-white/60 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0a1428] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Témoignages Clients
            </h2>
            <p className="text-lg text-[#8ea3c5]">Ce que nos clients disent de nous</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#0f1b33] rounded-2xl p-8 border border-white/10">
                <div className="text-[#2563EB] text-6xl mb-4 leading-none">"</div>
                <p className="text-white text-lg italic mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#60a5fa] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-[#8ea3c5]">{testimonial.role} · {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#081226] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Questions Fréquentes
              </h2>
              <p className="text-lg text-[#8ea3c5] mb-8">
                Tout ce que vous devez savoir sur nos services
              </p>
              <Link to="/faq" className="inline-flex items-center text-[#2563EB] font-semibold hover:gap-3 gap-2 transition-all">
                Voir toutes les questions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#0b1730] rounded-xl border border-white/10 overflow-hidden">
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#0f1b33] transition-colors text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    <div className={`transform transition-transform ${openFaq === index ? "rotate-45" : ""}`}>
                      <Check className="w-5 h-5 text-[#2563EB]" />
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 bg-[#0b1730]">
                      <p className="text-[#8ea3c5] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#050d1f] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#2563EB] rounded-full blur-[150px] opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Prêt à automatiser votre entreprise ?
          </h2>
          <p className="text-xl text-white/65 mb-8">
            Discutons de vos besoins et trouvons ensemble la solution adaptée
          </p>
          <Link to="/contact">
            <ButtonPrimary variant="solid">Contactez-nous</ButtonPrimary>
          </Link>
        </div>
      </section>
    </div>
  );
}