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
            Ils nous font confiance
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] text-[#172033] lg:text-7xl">
            Ce que disent{" "}
            <span className="bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A] bg-clip-text text-transparent">
              nos clients
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#5E6B82]">
            Découvrez comment nos clients ont transformé leur entreprise grâce à l'automatisation IA.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 text-center md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="mb-3 text-5xl font-extrabold text-[#172033] lg:text-6xl">{stat.value}</div>
                <div className="text-lg text-[#5E6B82]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-[#EEF3F8] py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#1E4E8C]/10 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-all hover:border-[#1E4E8C]/30 hover:shadow-[0_24px_60px_rgba(30,78,140,0.14)]"
              >
                <div className="mb-4 font-serif text-6xl leading-none text-[#1E4E8C]">"</div>
                <p className="mb-6 text-lg italic leading-relaxed text-[#172033]">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1E4E8C] to-[#D4A64A] font-semibold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#172033]">{testimonial.name}</div>
                    <div className="text-sm text-[#5E6B82]">{testimonial.role} · {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#EEF3F8_0%,_#F7F9FC_100%)] py-24">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E4E8C] opacity-10 blur-[150px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="mb-6 text-4xl font-extrabold text-[#172033] lg:text-5xl">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="mb-8 text-xl text-[#5E6B82]">
            Découvrez comment l'automatisation IA peut transformer votre entreprise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E4E8C] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#2F7A5F]"
          >
            Demander une démo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}