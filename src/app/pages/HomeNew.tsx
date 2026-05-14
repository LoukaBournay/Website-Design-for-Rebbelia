import { Link } from "react-router";
import { Badge } from "../components/Badge";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { GlassCard } from "../components/GlassCard";
import { Bot, Zap, Workflow, Mail, ArrowRight, Check, RefreshCw, Star, FileText, Users } from "lucide-react";
import { useState } from "react";
import WorkflowDiagram from "../components/WorkflowDiagram";

export function HomeNew() {
  // Remplacement de la ligne existante par celle-ci :
  const integrations = ["Make", "OpenAI", "Notion", "WhatsApp", "Stripe", "Outlook"];

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

  const modules = [
    { Icon: RefreshCw, slug: "relance-devis", name: "Relance automatique de devis",
      features: ["Relance automatique par email", "Suivi des devis en attente", "SMS automatique (+20 €/mois)"],
      installation: "349", subscription: "59" },
    { Icon: Star, slug: "avis-google", name: "Réponse automatique aux avis Google",
      features: ["Réponses automatiques", "Réponses personnalisées positives", "Alerte avis négatifs"],
      installation: "349", subscription: "59" },
    { Icon: FileText, slug: "facture-pdf", name: "Génération automatique de facture PDF",
      features: ["Génération PDF", "Envoi automatique", "Archivage"],
      installation: "399", subscription: "79" },
    { Icon: Users, slug: "clients-inactifs", name: "Relance des clients inactifs",
      features: ["Relance automatique", "SMS ou mail marketing", "Campagnes automatiques"],
      installation: "799", subscription: "149" },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden bg-[#F7F9FC] text-[#172033]">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(30,78,140,0.14),_transparent_34%),linear-gradient(180deg,_#F7F9FC_0%,_#EEF3F8_100%)]">
        <div className="absolute inset-0 opacity-60">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(30,78,140,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,78,140,0.06) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#1E4E8C] opacity-12 blur-[150px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#D4A64A] opacity-10 blur-[150px] animate-float"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-6 py-32 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <Badge variant="light">Automatisation pour PME</Badge>

              <h1 className="animate-fade-in-up text-5xl font-extrabold leading-[1.05] text-[#172033] lg:text-7xl">
                Rebbelia{" "}
                <span className="bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A] bg-clip-text text-transparent">
                  Automatiser, Respirer.
                </span>
              </h1>

              <p className="animate-fade-in-up animate-delay-200 text-lg leading-relaxed text-[#5E6B82]">
                On automatise vos réponses clients pour que vous n'en ratiez plus aucune. Gagnez du temps, améliorez la satisfaction et concentrez-vous sur l'essentiel.
              </p>

              <div className="animate-fade-in-up animate-delay-400 flex flex-col gap-4 sm:flex-row">
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
                  <div className="flex h-32 flex-col items-center justify-center rounded-2xl bg-white/80 p-6 shadow-sm transition-all hover:bg-white">
                    <Bot className="mb-2 h-12 w-12 text-[#D4A64A]" />
                    <span className="text-sm text-[#5E6B82]">RPA</span>
                  </div>
                  <div className="flex h-32 flex-col items-center justify-center rounded-2xl bg-white/80 p-6 shadow-sm transition-all hover:bg-white">
                    <Zap className="mb-2 h-12 w-12 text-[#D4A64A]" />
                    <span className="text-sm text-[#5E6B82]">IA Rapide</span>
                  </div>
                  <div className="flex h-32 flex-col items-center justify-center rounded-2xl bg-white/80 p-6 shadow-sm transition-all hover:bg-white">
                    <Workflow className="mb-2 h-12 w-12 text-[#D4A64A]" />
                    <span className="text-sm text-[#5E6B82]">Workflows</span>
                  </div>
                  <div className="flex h-32 flex-col items-center justify-center rounded-2xl bg-white/80 p-6 shadow-sm transition-all hover:bg-white">
                    <Mail className="mb-2 h-12 w-12 text-[#D4A64A]" />
                    <span className="text-sm text-[#5E6B82]">CRM & Email</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#F7F9FC] to-[#EEF3F8] py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <p className="mb-8 text-center text-sm uppercase tracking-wider text-[#5E6B82]">Nos intégrations</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="text-lg font-semibold text-[#5E6B82] opacity-60 transition-opacity hover:opacity-100"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-12 text-center">
            <Badge variant="blue">Maquette visuelle</Badge>
            <h2 className="mt-5 text-4xl font-bold text-[#172033] lg:text-5xl">
              Exemple d'automatisation email
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-[#5E6B82]">
              Une carte statique pour montrer comment une automatisation peut lire un email, analyser
              le contexte et envoyer la bonne réponse sans intervention manuelle.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-[#1E4E8C]/10 bg-white p-6 shadow-[0_30px_80px_rgba(30,78,140,0.12)] lg:p-10">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(30,78,140,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30,78,140,0.05) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute -top-16 right-16 h-40 w-40 rounded-full bg-[#1E4E8C]/10 blur-3xl" />
            <div className="absolute -bottom-10 left-14 h-32 w-32 rounded-full bg-[#2F7A5F]/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-[1120px] py-6">
              <WorkflowDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF3F8] py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#172033] lg:text-5xl">
              Nos Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#5E6B82]">
              Des solutions d'automatisation IA sur mesure pour votre entreprise
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="group rounded-2xl border border-[#1E4E8C]/10 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)] lg:col-span-3 lg:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1E4E8C]/10 transition-all group-hover:bg-[#1E4E8C]">
                <Bot className="h-8 w-8 text-[#1E4E8C] transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#172033]">Automatisation RPA</h3>
              <p className="mb-6 leading-relaxed text-[#5E6B82]">
                Automatisez vos tâches répétitives grâce à la Robotic Process Automation. Réduisez les erreurs humaines et libérez du temps pour vos équipes.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-[#1E4E8C] transition-all hover:gap-3">
                En savoir plus
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div className="group rounded-2xl border border-[#1E4E8C]/10 bg-white p-6 shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E4E8C]/10 transition-all group-hover:bg-[#1E4E8C]">
                  <Mail className="h-6 w-6 text-[#1E4E8C] transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#172033]">Intégration IA</h3>
                <p className="text-sm leading-relaxed text-[#5E6B82]">
                  CRM, emails et outils automatisés
                </p>
              </div>

              <div className="group rounded-2xl border border-[#1E4E8C]/10 bg-white p-6 shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E4E8C]/10 transition-all group-hover:bg-[#1E4E8C]">
                  <Workflow className="h-6 w-6 text-[#1E4E8C] transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#172033]">Workflows sur mesure</h3>
                <p className="text-sm leading-relaxed text-[#5E6B82]">
                  Solutions adaptées à vos besoins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-3 text-5xl font-extrabold text-[#172033] lg:text-6xl">
                  {stat.value}
                </div>
                <div className="text-lg text-[#5E6B82]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#172033] lg:text-5xl">
              Témoignages Clients
            </h2>
            <p className="text-lg text-[#5E6B82]">Ce que nos clients disent de nous</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl border border-[#1E4E8C]/10 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)]">
                <div className="mb-4 text-6xl leading-none text-[#1E4E8C]">"</div>
                <p className="mb-6 text-lg italic leading-relaxed text-[#172033]">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1E4E8C] to-[#D4A64A] font-semibold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-[#172033]">{testimonial.name}</div>
                    <div className="text-sm text-[#5E6B82]">{testimonial.role} • {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_rgba(30,78,140,0.08)_0%,_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(212,166,74,0.07)_0%,_transparent_55%),#F7F9FC] py-36 lg:py-44">
        <div className="absolute -left-40 -top-20 h-[600px] w-[600px] rounded-full bg-[#1E4E8C] opacity-[0.06] blur-[140px]" />
        <div className="absolute -bottom-20 -right-40 h-[600px] w-[600px] rounded-full bg-[#D4A64A] opacity-[0.06] blur-[140px]" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-20 text-center">
            <span className="mb-6 inline-block rounded-full border border-[#1E4E8C]/20 bg-[#1E4E8C]/08 px-5 py-1.5 text-sm font-semibold text-[#1E4E8C]">
              Tarifs transparents
            </span>
            <h2 className="mb-5 text-5xl font-extrabold leading-tight text-[#172033] lg:text-6xl">
              Nos modules & tarifs
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-[#5E6B82]">
              Un paiement d'installation unique, puis un abonnement mensuel. Sans engagement.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((module, i) => (
              <div
                key={i}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(30,78,140,0.18)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A]" />

                <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-[#EEF3FB] p-3 self-start">
                  <module.Icon size={24} className="text-[#1E4E8C]" />
                </div>

                <h3 className="mb-5 text-lg font-bold leading-snug text-[#172033]">
                  {module.name}
                </h3>

                <ul className="mb-8 flex-1 space-y-3">
                  {module.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm text-[#5E6B82]">
                      <Check size={15} className="mt-0.5 shrink-0 text-[#2F7A5F]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#E2E8F0] pt-5">
                  <div className="mb-1.5 flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold text-[#172033]">{module.installation} €</span>
                    <span className="text-xs font-medium text-[#5E6B82]">installation</span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-[#1E4E8C]">{module.subscription} €</span>
                    <span className="text-xs font-medium text-[#5E6B82]">/mois</span>
                  </div>
                </div>

                <Link
                  to={`/contact/${module.slug}`}
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#1E4E8C] py-3.5 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-[#D4A64A]"
                >
                  Démarrer
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF3F8] py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-4xl font-bold text-[#172033] lg:text-5xl">
                Questions Fréquentes
              </h2>
              <p className="mb-8 text-lg text-[#5E6B82]">
                Tout ce que vous devez savoir sur nos services
              </p>
              <Link to="/faq" className="inline-flex items-center gap-2 font-semibold text-[#1E4E8C] transition-all hover:gap-3">
                Voir toutes les questions
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="overflow-hidden rounded-xl border border-[#1E4E8C]/10 bg-white shadow-[0_18px_50px_rgba(30,78,140,0.08)]">
                  <button
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#1E4E8C]/5"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-[#172033]">{faq.question}</span>
                    <div className={`transform transition-transform ${openFaq === index ? "rotate-45" : ""}`}>
                      <Check className="h-5 w-5 text-[#1E4E8C]" />
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="bg-white px-6 pb-5">
                      <p className="leading-relaxed text-[#5E6B82]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#EEF3F8_0%,_#F7F9FC_100%)] py-24">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-[#1E4E8C] opacity-10 blur-[150px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="mb-6 text-4xl font-extrabold text-[#172033] lg:text-5xl">
            Prêt à automatiser votre entreprise ?
          </h2>
          <p className="mb-8 text-xl text-[#5E6B82]">
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