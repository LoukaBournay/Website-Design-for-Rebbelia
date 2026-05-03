import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Rebbelia a transformé notre gestion client. Grâce à l'automatisation de nos emails et CRM, nous répondons 3 fois plus vite à nos clients. Un investissement qui s'est payé en moins de 3 mois.",
      name: "Pierre Dubois",
      company: "TechStart",
      role: "CEO",
    },
    {
      quote:
        "L'équipe de Rebbelia est professionnelle et à l'écoute. Ils ont su comprendre nos besoins spécifiques et créer des workflows parfaitement adaptés. Notre productivité a augmenté de 40%.",
      name: "Claire Moreau",
      company: "InnovateCo",
      role: "COO",
    },
    {
      quote:
        "En tant que startup, nous avions besoin d'une solution abordable mais performante. Rebbelia nous a livré exactement ce qu'il nous fallait. Le ROI a été immédiat et le support est exceptionnel.",
      name: "Lucas Bernard",
      company: "GrowthLab",
      role: "Fondateur",
    },
  ];

  const stats = [
    { value: "50+", label: "Projets réalisés" },
    { value: "98%", label: "Taux de satisfaction" },
    { value: "40%", label: "Gain de productivité moyen" },
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
            Ils nous font confiance
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
            Ce que disent{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">
              nos clients
            </span>
          </h1>
          <p className="text-lg text-white/65 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nos clients ont transformé leur entreprise grâce à l'automatisation IA
          </p>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="bg-[#091427] py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl lg:text-6xl font-extrabold text-white mb-3">{stat.value}</div>
                <div className="text-white/60 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-gradient-to-b from-[#091427] to-[#081226] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#0b1730] rounded-2xl p-8 border border-white/10 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-[#020817]/30 transition-all"
              >
                <div className="text-[#2563EB] text-6xl leading-none mb-4 font-serif">"</div>
                <p className="text-white text-lg italic mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#60a5fa] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-[#8ea3c5]">{testimonial.role} · {testimonial.company}</div>
                  </div>
                </div>
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
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-white/65 mb-8">
            Découvrez comment l'automatisation IA peut transformer votre entreprise
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1d4ed8] transition-colors"
          >
            Demander une démo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
