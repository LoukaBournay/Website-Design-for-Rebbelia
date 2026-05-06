import { Link } from "react-router";
import { Bot, Mail, Workflow, ArrowRight } from "lucide-react";

export function Services() {
  const steps = [
    { number: "01", title: "Analyse", description: "Nous analysons vos processus actuels et identifions les meilleures opportunités d'automatisation." },
    { number: "02", title: "Conception", description: "Nous concevons des solutions sur mesure parfaitement adaptées à vos besoins spécifiques." },
    { number: "03", title: "Déploiement", description: "Nous déployons et intégrons les solutions de manière fluide dans votre environnement existant." },
    { number: "04", title: "Suivi", description: "Nous assurons un suivi technique et une optimisation continue de vos automatisations." },
  ];

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
            Ce qu'on fait pour vous
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] text-[#172033] lg:text-7xl">
            Nos{" "}
            <span className="bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A] bg-clip-text text-transparent">
              services
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#5E6B82]">
            Des solutions d'automatisation IA adaptées à vos défis pour transformer votre entreprise et ne jamais rater un client.
          </p>
        </div>
      </section>

      <section className="bg-[#EEF3F8] py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="group rounded-2xl border border-[#1E4E8C]/10 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)] lg:col-span-3 lg:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1E4E8C]/10 transition-all group-hover:bg-[#1E4E8C]">
                <Bot className="h-8 w-8 text-[#1E4E8C] transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#172033]">Automatisation RPA</h3>
              <p className="mb-6 leading-relaxed text-[#5E6B82]">
                Automatisez vos tâches répétitives grâce à la Robotic Process Automation. Réduisez les erreurs humaines et libérez du temps précieux pour vos équipes.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-[#1E4E8C] transition-all hover:gap-3">
                Demander un devis <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div className="group rounded-2xl border border-[#1E4E8C]/10 bg-white p-6 shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E4E8C]/10 transition-all group-hover:bg-[#1E4E8C]">
                  <Mail className="h-6 w-6 text-[#1E4E8C] transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#172033]">Intégration IA (CRM, Emails)</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#5E6B82]">
                  Connectez Salesforce, HubSpot ou Gmail avec l'IA pour automatiser intelligemment votre gestion client.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E4E8C] transition-all hover:gap-3">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="group rounded-2xl border border-[#1E4E8C]/10 bg-white p-6 shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E4E8C]/10 transition-all group-hover:bg-[#1E4E8C]">
                  <Workflow className="h-6 w-6 text-[#1E4E8C] transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#172033]">Workflows sur mesure</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#5E6B82]">
                  De la génération de leads à la facturation, automatisez chaque étape clé de votre activité.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E4E8C] transition-all hover:gap-3">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#172033] lg:text-5xl">Notre approche</h2>
            <p className="text-lg text-[#5E6B82]">Un processus simple et transparent, de A à Z</p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="group rounded-2xl border border-[#1E4E8C]/10 bg-white p-6 text-center shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)]">
                <div className="mb-4 bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A] bg-clip-text text-5xl font-extrabold text-transparent">
                  {step.number}
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#172033]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#5E6B82]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="mb-4 text-4xl font-extrabold text-[#172033]">Tarification personnalisée</h2>
          <p className="mb-8 text-xl text-[#5E6B82]">
            Chaque projet est unique. Contactez-nous pour un devis gratuit adapté à vos besoins réels et votre budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E4E8C] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#2F7A5F]"
          >
            Demander un devis gratuit
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#EEF3F8_0%,_#F7F9FC_100%)] py-24">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E4E8C] opacity-10 blur-[150px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="mb-6 text-4xl font-extrabold text-[#172033] lg:text-5xl">
            Prêt à automatiser votre entreprise ?
          </h2>
          <p className="mb-8 text-xl text-[#5E6B82]">
            Discutons de vos besoins et trouvons ensemble la solution adaptée.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E4E8C] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#2F7A5F]"
          >
            Contactez-nous
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}