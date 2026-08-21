import { Link } from "react-router";
import { ArrowRight, Bot, FileText, Mail, MessageSquareText, ShieldCheck, Workflow } from "lucide-react";
import WorkflowDiagram from "../components/WorkflowDiagram";

const services = [
  { icon: FileText, title: "Demandes de devis", text: "Centralisez les demandes, extrayez les informations utiles et préparez la bonne réponse sans perdre de temps." },
  { icon: MessageSquareText, title: "Avis Google et emails", text: "Proposez des réponses adaptées à votre ton, avec validation humaine lorsque vous le souhaitez." },
  { icon: Workflow, title: "Relances, CRM et suivi", text: "Synchronisez vos outils, relancez au bon moment et gardez vos données clients à jour." },
];

const steps = [
  ["01", "Nous écoutons", "Vous nous présentez la tâche qui vous prend du temps et les outils que vous utilisez."],
  ["02", "Nous concevons", "Nous préparons une solution sur mesure, simple à comprendre et à utiliser."],
  ["03", "Nous déployons", "Nous testons l'automatisation avec vous avant sa mise en production."],
  ["04", "Nous suivons", "Nous restons disponibles pour la maintenance et les évolutions."],
];

export function HomeNew() {
  return (
    <div className="overflow-hidden bg-[#F7F9FC] text-[#172033]">
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(30,78,140,0.14),_transparent_34%),linear-gradient(180deg,_#F7F9FC_0%,_#EEF3F8_100%)]">
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(rgba(30,78,140,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,78,140,0.06) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-[#1E4E8C]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#1E4E8C] shadow-sm">Automatisation IA pour TPE & PME</p>
            <h1 className="text-5xl font-extrabold leading-[1.05] lg:text-7xl">Automatisez vos tâches répétitives. <span className="bg-gradient-to-r from-[#1E4E8C] to-[#D4A64A] bg-clip-text text-transparent">Concentrez-vous sur votre entreprise.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#5E6B82]">Rebbelia crée des automatisations IA sur mesure pour vos emails, devis, relances, avis clients et outils de suivi.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E4E8C] px-7 py-4 font-semibold text-white shadow-lg shadow-[#1E4E8C]/20 transition hover:bg-[#23589D]">Recevoir un audit gratuit <ArrowRight className="h-5 w-5" /></Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-[#1E4E8C]/20 bg-white px-7 py-4 font-semibold text-[#1E4E8C] transition hover:bg-[#1E4E8C]/5">Voir les automatisations</Link>
            </div>
          </div>
          <div className="rounded-[32px] border border-[#1E4E8C]/10 bg-white/80 p-8 shadow-[0_30px_80px_rgba(30,78,140,0.14)] backdrop-blur lg:p-10">
            <div className="grid grid-cols-2 gap-5">
              {[[Bot, "IA utile", "Des réponses adaptées à votre activité"], [Mail, "Emails", "Aucune demande oubliée"], [FileText, "Devis", "Des informations bien préparées"], [Workflow, "Outils connectés", "Un suivi sans ressaisie"]].map(([Icon, title, text]) => {
                const CardIcon = Icon as typeof Bot;
                return <div key={title as string} className="rounded-2xl bg-[#F7F9FC] p-5"><CardIcon className="mb-5 h-9 w-9 text-[#D4A64A]" /><p className="font-bold">{title as string}</p><p className="mt-1 text-sm text-[#5E6B82]">{text as string}</p></div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[1280px] px-6 lg:px-10"><div className="mx-auto max-w-3xl text-center"><p className="font-semibold text-[#1E4E8C]">DES RÉSULTATS MÉTIER, PAS DU JARGON</p><h2 className="mt-4 text-4xl font-bold lg:text-5xl">Les automatisations qui vous font vraiment gagner du temps</h2><p className="mt-5 text-lg text-[#5E6B82]">Nous partons de vos tâches quotidiennes et de vos outils existants pour créer une solution utile dès le premier jour.</p></div><div className="mt-14 grid gap-6 md:grid-cols-3">{services.map((service) => <article key={service.title} className="rounded-2xl border border-[#1E4E8C]/10 bg-[#F7F9FC] p-8"><service.icon className="h-10 w-10 text-[#D4A64A]" /><h3 className="mt-6 text-xl font-bold">{service.title}</h3><p className="mt-3 leading-relaxed text-[#5E6B82]">{service.text}</p><Link className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1E4E8C]" to="/services">En savoir plus <ArrowRight className="h-4 w-4" /></Link></article>)}</div></div></section>

      <section className="bg-[#EEF3F8] py-20 lg:py-28"><div className="mx-auto max-w-[1280px] px-6 lg:px-10"><div className="text-center"><p className="font-semibold text-[#1E4E8C]">EXEMPLE CONCRET</p><h2 className="mt-4 text-4xl font-bold lg:text-5xl">Une demande de devis traitée en quelques étapes</h2><p className="mx-auto mt-5 max-w-3xl text-lg text-[#5E6B82]">La réponse peut être envoyée automatiquement ou soumise à votre validation : vous gardez toujours la main.</p></div><div className="mt-12 rounded-[32px] border border-[#1E4E8C]/10 bg-white p-6 shadow-[0_30px_80px_rgba(30,78,140,0.12)] lg:p-10"><WorkflowDiagram /></div></div></section>

      <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[1280px] px-6 lg:px-10"><div className="text-center"><p className="font-semibold text-[#1E4E8C]">NOTRE MÉTHODE</p><h2 className="mt-4 text-4xl font-bold lg:text-5xl">Simple, claire et sur mesure</h2></div><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, text]) => <div key={number} className="rounded-2xl border border-[#1E4E8C]/10 p-7"><span className="text-sm font-bold text-[#D4A64A]">{number}</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-[#5E6B82]">{text}</p></div>)}</div></div></section>

      <section className="bg-[#EEF3F8] py-20"><div className="mx-auto grid max-w-[1100px] gap-8 px-6 lg:grid-cols-[auto_1fr] lg:items-center"><ShieldCheck className="h-14 w-14 text-[#2F7A5F]" /><div><h2 className="text-3xl font-bold">Vos outils et vos données sont traités avec soin.</h2><p className="mt-3 leading-relaxed text-[#5E6B82]">Chaque projet est conçu avec des accès sécurisés, une documentation claire et un suivi technique adapté à votre activité.</p></div></div></section>
      <section className="bg-[#172033] py-20 text-white"><div className="mx-auto max-w-3xl px-6 text-center"><h2 className="text-4xl font-extrabold">Quelle tâche pourriez-vous arrêter de faire demain ?</h2><p className="mt-5 text-lg text-white/70">Parlez-nous de votre fonctionnement : nous identifierons les automatisations les plus pertinentes.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4A64A] px-7 py-4 font-semibold text-[#172033] transition hover:bg-[#e2b75f]">Parler de votre projet <ArrowRight className="h-5 w-5" /></Link></div></section>
    </div>
  );
}
