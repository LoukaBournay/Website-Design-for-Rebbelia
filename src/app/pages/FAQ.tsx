import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const faqs = [
    {
      question: "Qu'est-ce que l'automatisation IA et comment peut-elle aider mon entreprise ?",
      answer:
        "L'automatisation IA consiste à utiliser l'intelligence artificielle pour automatiser les tâches répétitives et les processus métier. Cela permet de gagner du temps, de réduire les erreurs humaines et d'améliorer l'efficacité globale de votre entreprise. Par exemple, nous pouvons automatiser la gestion de vos emails clients, la synchronisation de votre CRM ou encore vos workflows de validation.",
    },
    {
      question: "Combien coûtent vos services ?",
      answer:
        "Chaque projet est unique, c'est pourquoi nous proposons des tarifs personnalisés. Nos prix dépendent de la complexité du projet, du nombre d'intégrations nécessaires et du niveau d'automatisation souhaité. Contactez-nous pour un devis gratuit et personnalisé adapté à vos besoins et votre budget.",
    },
    {
      question: "Combien de temps faut-il pour mettre en place une solution d'automatisation ?",
      answer:
        "La durée de mise en place varie selon la complexité du projet. Pour des automatisations simples (emails, CRM), comptez entre 1 et 2 semaines. Pour des workflows plus complexes impliquant plusieurs outils, cela peut prendre 4 à 8 semaines. Nous vous fournirons un planning détaillé lors de notre première consultation.",
    },
    {
      question: "Dois-je avoir des connaissances techniques pour utiliser vos solutions ?",
      answer:
        "Absolument pas ! Nous concevons des solutions clé en main qui s'intègrent parfaitement à vos outils existants. Vous continuez à utiliser vos logiciels habituels (CRM, emails, etc.) tandis que l'automatisation se fait en arrière-plan. Nous vous formons également à l'utilisation et assurons un support continu.",
    },
    {
      question: "Quels types d'outils pouvez-vous intégrer ?",
      answer:
        "Nous travaillons avec la plupart des outils professionnels populaires : Salesforce, HubSpot, Gmail, Outlook, Slack, Microsoft Teams, Zapier, Notion, Trello, et bien d'autres. Si vous utilisez un outil spécifique, contactez-nous pour vérifier la compatibilité.",
    },
    {
      question: "Proposez-vous un accompagnement après la mise en place ?",
      answer:
        "Oui, absolument. Nous ne vous laissons pas seul après le déploiement. Nous proposons un suivi personnalisé, des formations pour vos équipes, et un support technique pour vous aider à tirer le meilleur parti de vos automatisations.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "La sécurité de vos données est notre priorité absolue. Nous utilisons des protocoles de sécurité standards de l'industrie, le chiffrement des données, et respectons le RGPD. Nous ne stockons que les données nécessaires au fonctionnement des automatisations.",
    },
    {
      question: "Puis-je modifier mes automatisations après leur mise en place ?",
      answer:
        "Bien sûr ! Vos besoins évoluent et vos automatisations doivent s'adapter. Nous proposons des formules de maintenance et d'évolution qui vous permettent d'ajuster vos workflows, d'ajouter de nouvelles intégrations ou de modifier les règles d'automatisation à tout moment.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            Vous avez des questions ?
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
            Questions{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">
              fréquentes
            </span>
          </h1>
          <p className="text-lg text-white/65 max-w-3xl mx-auto leading-relaxed">
            Tout ce que vous devez savoir sur l'automatisation IA et nos services
          </p>
        </div>
      </section>

      {/* FAQ ACCORDÉON */}
      <section className="bg-gradient-to-b from-[#050d1f] to-[#081226] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0b1730] rounded-xl border border-white/10 overflow-hidden hover:border-[#2563EB]/50 transition-colors"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#0f1b33] transition-colors text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-all ${openFaq === index ? "bg-[#2563EB] border-[#2563EB] rotate-45" : ""}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke={openFaq === index ? "#fff" : "#2563EB"} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 bg-[#0b1730]">
                    <p className="text-[#8ea3c5] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050d1f] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB] rounded-full blur-[150px] opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-xl text-white/65 mb-8">
            Notre équipe est là pour vous répondre dans les 24h
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
