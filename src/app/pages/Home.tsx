import { Link } from "react-router";
import { Button } from "../components/Button";
import { ServiceCard } from "../components/ServiceCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { FAQItem } from "../components/FAQItem";
import { Bot, Zap, Workflow, MessageSquare, Mail, Target, Heart, Sparkles, ArrowRight } from "lucide-react";

export function Home() {
  const integrations = [
    "Salesforce",
    "HubSpot",
    "Slack",
    "Gmail",
    "Zapier",
    "Microsoft Teams",
  ];

  const services = [
    {
      icon: Bot,
      title: "Automatisation RPA",
      description:
        "Automatisez vos tâches répétitives grâce à la Robotic Process Automation. Réduisez les erreurs humaines et libérez du temps pour vos équipes.",
      link: "/services",
    },
    {
      icon: Mail,
      title: "Intégration IA (CRM, Emails)",
      description:
        "Connectez vos outils existants (Salesforce, HubSpot, Gmail) avec l'IA pour automatiser la gestion client et améliorer votre relation client.",
      link: "/services",
    },
    {
      icon: Workflow,
      title: "Workflows automatisés",
      description:
        "Créez des workflows sur mesure qui s'adaptent à vos processus métier. De la lead generation à la facturation, automatisez chaque étape.",
      link: "/services",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet avec des solutions de qualité supérieure.",
    },
    {
      icon: Heart,
      title: "Relation client",
      description: "Tout client mérite une réponse. Nous plaçons la satisfaction client au cœur de notre approche.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Nous restons à la pointe de l'IA pour offrir les solutions les plus avancées.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Rebbelia a transformé notre gestion client. Grâce à l'automatisation de nos emails et CRM, nous répondons 3 fois plus vite à nos clients.",
      name: "Pierre Dubois",
      company: "TechStart",
      role: "CEO",
    },
    {
      quote:
        "L'équipe de Rebbelia est professionnelle et à l'écoute. Ils ont su comprendre nos besoins spécifiques. Notre productivité a augmenté de 40%.",
      name: "Claire Moreau",
      company: "InnovateCo",
      role: "COO",
    },
  ];

  const faqs = [
    {
      question: "Qu'est-ce que l'automatisation IA et comment peut-elle aider mon entreprise ?",
      answer:
        "L'automatisation IA consiste à utiliser l'intelligence artificielle pour automatiser les tâches répétitives et les processus métier. Cela permet de gagner du temps, de réduire les erreurs humaines et d'améliorer l'efficacité globale de votre entreprise.",
    },
    {
      question: "Combien coûtent vos services ?",
      answer:
        "Chaque projet est unique, c'est pourquoi nous proposons des tarifs personnalisés. Nos prix dépendent de la complexité du projet, du nombre d'intégrations nécessaires et du niveau d'automatisation souhaité. Contactez-nous pour un devis gratuit.",
    },
    {
      question: "Combien de temps faut-il pour mettre en place une solution d'automatisation ?",
      answer:
        "La durée de mise en place varie selon la complexité du projet. Pour des automatisations simples (emails, CRM), comptez entre 1 et 2 semaines. Pour des workflows plus complexes, cela peut prendre 4 à 8 semaines.",
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-b from-white to-[#F4F5F7] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0D3B7C] mb-6 leading-tight">
                Tout client mérite une réponse
              </h1>
              <p className="text-xl text-[#8A8F9E] mb-8 leading-relaxed">
                Automatisez vos processus métier avec l'IA. Nous aidons les PME et startups à gagner du temps et à améliorer leur efficacité grâce à l'automatisation intelligente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button>Démarrer maintenant</Button>
                </Link>
                <Link to="/services">
                  <Button variant="secondary">Découvrir nos services</Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1A6FD4] to-[#0D3B7C] rounded-2xl p-12 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center h-24">
                    <Bot className="w-12 h-12 text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center h-24">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center h-24">
                    <Workflow className="w-12 h-12 text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center h-24">
                    <MessageSquare className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-[#8A8F9E] mb-8">Nos intégrations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="text-[#8A8F9E] font-semibold opacity-50 hover:opacity-100 transition-opacity"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F5F7] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D3B7C] mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-[#8A8F9E] max-w-3xl mx-auto">
              Des solutions d'automatisation IA adaptées à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="inline-flex items-center text-[#1A6FD4] hover:text-[#0D3B7C] font-semibold transition-colors">
              Voir tous nos services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D3B7C] mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-[#8A8F9E] max-w-3xl mx-auto">
              Ce qui nous guide au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {values.map((value) => (
              <div key={value.title} className="bg-[#F4F5F7] rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#1A6FD4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#1A6FD4]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0D3B7C] mb-3">{value.title}</h3>
                <p className="text-[#8A8F9E] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about" className="inline-flex items-center text-[#1A6FD4] hover:text-[#0D3B7C] font-semibold transition-colors">
              En savoir plus sur notre équipe
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F5F7] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D3B7C] mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-[#8A8F9E] max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de nous
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonials" className="inline-flex items-center text-[#1A6FD4] hover:text-[#0D3B7C] font-semibold transition-colors">
              Voir tous les témoignages
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0D3B7C] mb-4">
                Questions Fréquentes
              </h2>
              <p className="text-xl text-[#8A8F9E] mb-8">
                Tout ce que vous devez savoir sur nos services
              </p>
              <Link to="/faq" className="inline-flex items-center text-[#1A6FD4] hover:text-[#0D3B7C] font-semibold transition-colors">
                Voir toutes les questions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D3B7C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à automatiser votre entreprise ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Discutons de vos besoins et trouvons ensemble la solution adaptée
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#1A6FD4] hover:bg-[#F4F5F7]">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
