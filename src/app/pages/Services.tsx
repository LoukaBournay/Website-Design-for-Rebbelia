import { Link } from "react-router";
import { Bot, Mail, Workflow, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "Automatisation RPA",
      description:
        "Automatisez vos tâches répétitives grâce à la Robotic Process Automation. Réduisez les erreurs humaines et libérez du temps pour vos équipes.",
    },
    {
      icon: Mail,
      title: "Intégration IA (CRM, Emails)",
      description:
        "Connectez vos outils existants (Salesforce, HubSpot, Gmail) avec l'IA pour automatiser la gestion client et améliorer votre relation client.",
    },
    {
      icon: Workflow,
      title: "Workflows automatisés",
      description:
        "Créez des workflows sur mesure qui s'adaptent à vos processus métier. De la lead generation à la facturation, automatisez chaque étape.",
    },
  ];

  const steps = [
    { number: "01", title: "Analyse", description: "Nous analysons vos processus actuels et identifions les opportunités d'automatisation." },
    { number: "02", title: "Conception", description: "Nous concevons des solutions sur mesure adaptées à vos besoins spécifiques." },
    { number: "03", title: "Déploiement", description: "Nous déployons et intégrons les solutions dans votre environnement existant." },
    { number: "04", title: "Suivi", description: "Nous assurons un suivi et une optimisation continue de vos automatisations." },
  ];

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
            Ce qu'on fait pour vous
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
            Nos{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">
              services
            </span>
          </h1>
          <p className="text-lg text-white/65 max-w-3xl mx-auto leading-relaxed">
            Des solutions d'automatisation IA adaptées à vos besoins pour transformer votre entreprise et ne jamais rater un client.
          </p>
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="bg-gradient-to-b from-[#050d1f] to-[#081226] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-[#0b1730] rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-[#020817]/30 transition-all group">
              <div className="w-16 h-16 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563EB] transition-all">
                <Bot className="w-8 h-8 text-[#2563EB] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automatisation RPA</h3>
              <p className="text-[#8ea3c5] leading-relaxed mb-6">
                Automatisez vos tâches répétitives grâce à la Robotic Process Automation. Réduisez les erreurs humaines et libérez du temps pour vos équipes sur ce qui compte vraiment.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all">
                Demander un devis <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#0b1730] rounded-2xl p-6 border border-white/10 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-[#020817]/30 transition-all group">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-all">
                  <Mail className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Intégration IA (CRM, Emails)</h3>
                <p className="text-[#8ea3c5] text-sm leading-relaxed mb-4">
                  Connectez Salesforce, HubSpot, Gmail avec l'IA pour automatiser la gestion client.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold hover:gap-3 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-[#0b1730] rounded-2xl p-6 border border-white/10 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-[#020817]/30 transition-all group">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-all">
                  <Workflow className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Workflows sur mesure</h3>
                <p className="text-[#8ea3c5] text-sm leading-relaxed mb-4">
                  De la lead generation à la facturation, automatisez chaque étape.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold hover:gap-3 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section className="bg-[#081226] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Notre approche</h2>
            <p className="text-lg text-[#8ea3c5]">Un processus simple et transparent, de A à Z</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-[#0b1730] rounded-2xl p-6 border border-white/10 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-[#020817]/30 transition-all group text-center">
                <div className="text-5xl font-extrabold bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#8ea3c5] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFICATION */}
      <section className="bg-[#091427] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Tarification personnalisée</h2>
          <p className="text-xl text-white/60 mb-8">
            Chaque projet est unique. Contactez-nous pour un devis gratuit adapté à vos besoins et votre budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1d4ed8] transition-colors"
          >
            Demander un devis gratuit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#050d1f] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB] rounded-full blur-[150px] opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Prêt à automatiser votre entreprise ?
          </h2>
          <p className="text-xl text-white/65 mb-8">
            Discutons de vos besoins et trouvons ensemble la solution adaptée
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1d4ed8] transition-colors"
          >
            Contactez-nous
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
