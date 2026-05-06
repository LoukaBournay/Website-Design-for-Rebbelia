import { Link } from "react-router";
import { Target, Heart, Sparkles, ArrowRight } from "lucide-react";

export function About() {
  const team = [
    { name: "Sophie Martin", role: "CEO & Fondatrice", initials: "SM" },
    { name: "Thomas Dupont", role: "CTO", initials: "TD" },
    { name: "Marie Bernard", role: "Lead Developer", initials: "MB" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "Nous visons l'excellence dans chaque projet, en offrant des solutions de qualité supérieure qui dépassent les attentes.",
    },
    {
      icon: Heart,
      title: "Relation client",
      description:
        "Tout client mérite une réponse. Nous plaçons la satisfaction client au cœur de notre approche et assurons un suivi personnalisé.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Nous restons à la pointe de l'innovation en IA et automatisation pour offrir les solutions les plus avancées à nos clients.",
    },
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
            Notre histoire
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] text-[#172033] lg:text-7xl">
            À propos de{" "}
            <span className="bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A] bg-clip-text text-transparent">
              Rebbelia
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#5E6B82]">
            Une agence spécialisée dans l'automatisation IA, dédiée à aider les PME et startups à optimiser leurs processus et ne jamais rater un client.
          </p>
        </div>
      </section>

      <section className="bg-[#EEF3F8] py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="rounded-2xl border border-[#1E4E8C]/10 bg-white p-10 shadow-[0_18px_50px_rgba(30,78,140,0.08)] lg:p-14">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#172033] lg:text-4xl">Notre histoire</h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#5E6B82]">
              <p>
                Rebbelia a été fondée avec une conviction simple mais puissante : tout client mérite une réponse rapide et personnalisée. Dans un monde où les attentes clients ne cessent de croître, nous avons constaté que de nombreuses PME et startups peinaient à suivre le rythme.
              </p>
              <p>
                C'est pourquoi nous avons créé Rebbelia, une agence spécialisée dans l'automatisation intelligente. Notre mission est de rendre l'IA accessible aux entreprises de toutes tailles, en automatisant les tâches répétitives pour que vous puissiez vous concentrer sur ce qui compte vraiment : votre croissance et vos clients.
              </p>
              <p>
                Aujourd'hui, nous accompagnons des dizaines d'entreprises dans leur transformation digitale, en créant des solutions sur mesure qui améliorent l'efficacité, réduisent les coûts et renforcent la satisfaction client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#172033] lg:text-5xl">Nos valeurs</h2>
            <p className="text-lg text-[#5E6B82]">Ce qui nous guide au quotidien</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-[#1E4E8C]/10 bg-white p-8 text-center shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)]"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1E4E8C]/10 transition-all group-hover:bg-[#1E4E8C]">
                  <value.icon className="h-8 w-8 text-[#1E4E8C] transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#172033]">{value.title}</h3>
                <p className="leading-relaxed text-[#5E6B82]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 text-center md:grid-cols-3">
            <div>
              <div className="mb-3 text-5xl font-extrabold text-[#172033] lg:text-6xl">50+</div>
              <div className="text-lg text-[#5E6B82]">Projets réalisés</div>
            </div>
            <div>
              <div className="mb-3 text-5xl font-extrabold text-[#172033] lg:text-6xl">98%</div>
              <div className="text-lg text-[#5E6B82]">Taux de satisfaction</div>
            </div>
            <div>
              <div className="mb-3 text-5xl font-extrabold text-[#172033] lg:text-6xl">40%</div>
              <div className="text-lg text-[#5E6B82]">Gain de productivité moyen</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF3F8] py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#172033] lg:text-5xl">Notre équipe</h2>
            <p className="text-lg text-[#5E6B82]">Trois personnes, une vision commune</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-[#1E4E8C]/10 bg-white p-8 text-center shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)]"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#1E4E8C] to-[#D4A64A] text-xl font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="mb-1 text-xl font-bold text-[#172033]">{member.name}</h3>
                <p className="text-[#5E6B82]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#EEF3F8_0%,_#F7F9FC_100%)] py-24">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E4E8C] opacity-10 blur-[150px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="mb-6 text-4xl font-extrabold text-[#172033] lg:text-5xl">
            Prêt à automatiser votre entreprise ?
          </h2>
          <p className="mb-8 text-xl text-[#5E6B82]">
            Discutons de vos besoins et trouvons ensemble la solution adaptée
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