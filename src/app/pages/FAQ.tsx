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
            Vous avez des questions ?
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] text-[#172033] lg:text-7xl">
            Questions{" "}
            <span className="bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A] bg-clip-text text-transparent">
              fréquentes
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#5E6B82]">
            Tout ce que vous devez savoir sur l'automatisation IA et nos services.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="bg-[#EEF3F8] py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#1E4E8C]/10 bg-white shadow-[0_18px_50px_rgba(30,78,140,0.08)] transition-colors hover:border-[#1E4E8C]/30"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#1E4E8C]/5"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="pr-4 font-semibold text-[#172033]">{faq.question}</span>
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#1E4E8C]/15 transition-all ${openFaq === index ? "rotate-45 bg-[#1E4E8C] border-[#1E4E8C]" : ""}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke={openFaq === index ? "#fff" : "#1E4E8C"} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-white px-6 pb-6">
                      <p className="leading-relaxed text-[#5E6B82]">{faq.answer}</p>
                    </div>
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
            Vous avez d'autres questions ?
          </h2>
          <p className="mb-8 text-xl text-[#5E6B82]">
            Notre équipe est là pour vous répondre dans les 24h.
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