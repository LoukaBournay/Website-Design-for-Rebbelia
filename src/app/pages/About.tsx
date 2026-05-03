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
    <div className="overflow-hidden bg-[#050d1f] text-white">
      {/* HERO SECTION */}
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
            Notre histoire
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
            À propos de{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">
              Rebbelia
            </span>
          </h1>
          <p className="text-lg text-white/65 max-w-3xl mx-auto leading-relaxed">
            Une agence spécialisée dans l'automatisation IA, dédiée à aider les PME et startups à optimiser leurs processus et ne jamais rater un client.
          </p>
        </div>
      </section>

      {/* TRANSITION + NOTRE HISTOIRE */}
      <section className="bg-gradient-to-b from-[#050d1f] to-[#081226] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="bg-[#0b1730] rounded-2xl border border-white/10 p-10 lg:p-14 shadow-sm shadow-[#020817]/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">Notre histoire</h2>
            <div className="space-y-6 text-[#8ea3c5] leading-relaxed text-lg">
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

      {/* NOS VALEURS */}
      <section className="bg-[#081226] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Nos valeurs</h2>
            <p className="text-lg text-[#8ea3c5]">Ce qui nous guide au quotidien</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#0b1730] rounded-2xl p-8 border border-white/10 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-[#020817]/30 transition-all group text-center"
              >
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2563EB] transition-all">
                  <value.icon className="w-8 h-8 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-[#8ea3c5] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="bg-[#091427] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-extrabold text-white mb-3">50+</div>
              <div className="text-white/60 text-lg">Projets réalisés</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-extrabold text-white mb-3">98%</div>
              <div className="text-white/60 text-lg">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-extrabold text-white mb-3">40%</div>
              <div className="text-white/60 text-lg">Gain de productivité moyen</div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="bg-[#0a1428] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Notre équipe</h2>
            <p className="text-lg text-[#8ea3c5]">Trois personnes, une vision commune</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#0f1b33] rounded-2xl p-8 border border-white/10 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-[#020817]/30 transition-all text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#60a5fa] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#8ea3c5]">{member.role}</p>
              </div>
            ))}
          </div>
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
