import React from "react";

export function Legal() {
  const sections = [
    { id: "mentions", label: "Mentions légales" },
    { id: "confidentialite", label: "Confidentialité" },
    { id: "cookies", label: "Cookies" },
    { id: "droits", label: "Vos droits" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#172033]">
      {/* Header */}
      <div className="border-b border-[#1E4E8C]/10 bg-[linear-gradient(180deg,_#F7F9FC_0%,_#EEF3F8_100%)] py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1E4E8C]">
            Informations légales
          </p>
          <h1 className="mb-4 text-4xl font-extrabold text-[#172033] lg:text-5xl">
            Mentions légales & RGPD
          </h1>
          <p className="max-w-2xl text-lg text-[#5E6B82]">
            Conformément à la loi française, retrouvez ci-dessous l'ensemble des informations
            légales relatives au site <span className="text-[#172033]">rebbelia.com</span>.
          </p>
          <p className="mt-4 text-sm text-[#5E6B82]">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[240px_1fr]">
          {/* Sidebar Navigation */}
          <aside className="sticky top-8 hidden lg:block">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5E6B82]">
              Sommaire
            </p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="w-full rounded-lg px-4 py-2.5 text-left text-sm text-[#5E6B82] transition-all hover:bg-white hover:text-[#1E4E8C]"
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="max-w-3xl space-y-20">
            {/* Section 01: Mentions Légales */}
            <section id="mentions" className="scroll-mt-8">
              <SectionTitle number="01" title="Mentions légales" />
              <p className="mb-8 leading-relaxed text-[#5E6B82]">
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la
                confiance dans l'économie numérique (LCEN), les mentions légales du site
                rebbelia.com sont les suivantes.
              </p>

              <div className="space-y-6">
                <InfoBlock title="Éditeur du site">
                  <Row label="Nom" value="Marwan Rachedi" />
                  <Row label="Statut" value="Auto-entrepreneur (Entreprise Individuelle)" />
                  <Row label="Nom commercial" value="Rebbelia" />
                  <Row label="Numéro SIRET" value="En cours d'immatriculation — à compléter" highlight />
                  <Row label="Adresse" value="11 rue du docteur Robert, 38230 Pont-de-Chéruy — France" />
                  <Row label="Email" value="rebbelia@rebbelia.com" />
                  <Row label="Site web" value="https://www.rebbelia.com" />
                </InfoBlock>

                <InfoBlock title="Hébergeur">
                  <Row label="Société" value="Vercel Inc." />
                  <Row label="Adresse" value="440 N Barranca Ave #4133, Covina, CA 91723, États-Unis" />
                  <Row label="Site" value="https://vercel.com" />
                </InfoBlock>

                <InfoBlock title="Propriété intellectuelle">
                  <p className="text-sm leading-relaxed text-[#5E6B82]">
                    L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes)
                    est la propriété exclusive de Marwan Rachedi (Rebbelia), sauf mention contraire.
                    Toute reproduction, distribution ou utilisation sans autorisation écrite préalable
                    est strictement interdite et constitue une contrefaçon sanctionnée par les
                    articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                  </p>
                </InfoBlock>

                <InfoBlock title="Limitation de responsabilité">
                  <p className="text-sm leading-relaxed text-[#5E6B82]">
                    Rebbelia s'efforce d'assurer l'exactitude et la mise à jour des informations
                    diffusées sur ce site. Toutefois, Rebbelia décline toute responsabilité pour
                    toute imprécision, inexactitude ou omission portant sur des informations
                    disponibles sur le site, ainsi que pour tout dommage résultant d'une intrusion
                    frauduleuse d'un tiers.
                  </p>
                </InfoBlock>
              </div>
            </section>

            {/* Section 02: Confidentialité */}
            <section id="confidentialite" className="scroll-mt-8">
              <SectionTitle number="02" title="Politique de confidentialité" />
              <p className="mb-8 leading-relaxed text-[#5E6B82]">
                Conformément au Règlement Général sur la Protection des Données (RGPD —
                Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978
                modifiée, nous vous informons de la manière dont vos données personnelles sont
                collectées et traitées.
              </p>

              <div className="space-y-6">
                <InfoBlock title="Responsable du traitement">
                  <Row label="Identité" value="Marwan Rachedi (Rebbelia)" />
                  <Row label="Contact" value="rebbelia@rebbelia.com" />
                </InfoBlock>

                <InfoBlock title="Données collectées">
                  <p className="mb-4 text-sm leading-relaxed text-[#5E6B82]">
                    Nous collectons uniquement les données que vous nous transmettez
                    volontairement via le formulaire de contact :
                  </p>
                  <ul className="space-y-2">
                    {["Nom et prénom", "Adresse email", "Numéro de téléphone (si renseigné)", "Contenu de votre message"].map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm text-[#5E6B82]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E4E8C]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </InfoBlock>

                <InfoBlock title="Finalités du traitement">
                  <div className="space-y-3">
                    {[
                      { fin: "Répondre à vos demandes de contact", base: "Intérêt légitime" },
                      { fin: "Établir un devis ou un contrat", base: "Exécution du contrat" },
                      { fin: "Améliorer nos services", base: "Intérêt légitime" },
                      { fin: "Statistiques d'audience (Vercel Analytics)", base: "Intérêt légitime / Consentement" },
                    ].map((item) => (
                      <div key={item.fin} className="flex items-start justify-between gap-4 border-b border-[#1E4E8C]/8 py-2 last:border-0">
                        <span className="text-sm text-[#5E6B82]">{item.fin}</span>
                        <span className="shrink-0 rounded-full bg-[#D4A64A]/12 px-2.5 py-1 text-xs text-[#D4A64A]">
                          {item.base}
                        </span>
                      </div>
                    ))}
                  </div>
                </InfoBlock>
              </div>
            </section>

            {/* Section 03: Cookies */}
            <section id="cookies" className="scroll-mt-8">
              <SectionTitle number="03" title="Politique de cookies" />
              <p className="mb-8 leading-relaxed text-[#5E6B82]">
                Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite
                d'un site. Voici les cookies utilisés sur rebbelia.com.
              </p>

              <div className="space-y-6">
                <InfoBlock title="Cookies strictement nécessaires">
                  <p className="mb-4 text-sm text-[#5E6B82]">
                    Ces cookies sont indispensables au fonctionnement du site. Ils ne nécessitent
                    pas votre consentement.
                  </p>
                  <CookieRow name="__session" purpose="Gestion de la session utilisateur" duration="Session" type="Technique" />
                </InfoBlock>

                <InfoBlock title="Cookies d'analyse (Vercel Analytics)">
                  <p className="mb-4 text-sm leading-relaxed text-[#5E6B82]">
                    Nous utilisons <strong className="text-[#172033]">Vercel Analytics</strong> pour
                    mesurer l'audience sans déposer de cookie de tracking individuel persistant.
                  </p>
                  <CookieRow name="_vercel_*" purpose="Mesure d'audience anonymisée" duration="≤ 13 mois" type="Analytique" />
                </InfoBlock>
              </div>
            </section>

            {/* Section 04: Droits RGPD */}
            <section id="droits" className="scroll-mt-8">
              <SectionTitle number="04" title="Vos droits (RGPD)" />
              <p className="mb-8 leading-relaxed text-[#5E6B82]">
                Vous disposez des droits suivants sur vos données personnelles (Art 15 à 22). 
                Contactez-nous à <span className="text-[#172033]">rebbelia@rebbelia.com</span> pour les exercer.
              </p>

              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {[
                  { right: "Droit d'accès", desc: "Obtenir une copie de vos données traitées" },
                  { right: "Droit de rectification", desc: "Corriger des données inexactes" },
                  { right: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                  { right: "Droit à la portabilité", desc: "Recevoir vos données dans un format lisible" },
                  { right: "Droit d'opposition", desc: "S'opposer à un traitement légitime" },
                  { right: "Droit à la limitation", desc: "Restreindre temporairement l'utilisation" },
                ].map((item) => (
                  <div key={item.right} className="rounded-xl border border-[#1E4E8C]/10 bg-white p-5 shadow-[0_12px_32px_rgba(30,78,140,0.06)]">
                    <p className="mb-1 text-sm font-semibold text-[#172033]">{item.right}</p>
                    <p className="text-xs leading-relaxed text-[#5E6B82]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final Contact CTA */}
            <div className="rounded-2xl border border-[#1E4E8C]/15 bg-white p-8 shadow-[0_18px_50px_rgba(30,78,140,0.08)]">
              <h3 className="mb-2 text-lg font-bold text-[#172033]">Une question légale ?</h3>
              <p className="mb-4 text-sm leading-relaxed text-[#5E6B82]">
                Pour toute question relative à vos données personnelles, contactez-nous directement.
              </p>
              <a
                href="mailto:rebbelia@rebbelia.com"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1E4E8C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2F7A5F]"
              >
                rebbelia@rebbelia.com
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// --- Sub-components ---

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-sm font-bold text-[#1E4E8C]">{number}</span>
      <h2 className="text-2xl font-bold text-[#172033] lg:text-3xl">{title}</h2>
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#1E4E8C]/10 bg-white p-6 shadow-[0_12px_32px_rgba(30,78,140,0.06)]">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#172033]">{title}</h3>
      {children}
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex flex-col gap-1 border-b border-[#1E4E8C]/8 py-2 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm text-[#5E6B82]">{label}</span>
      <span className={`text-sm font-medium ${highlight ? "text-[#D4A64A]" : "text-[#172033]"}`}>
        {highlight && "⚠️ "}{value}
      </span>
    </div>
  );
}

function CookieRow({ name, purpose, duration, type }: {
  name: string; purpose: string; duration: string; type: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 border-b border-[#1E4E8C]/8 py-3 text-sm sm:grid-cols-4">
      <span className="self-start rounded bg-[#EEF3F8] px-2 py-1 font-mono text-xs text-[#172033]">{name}</span>
      <span className="text-[#5E6B82] sm:col-span-1">{purpose}</span>
      <span className="text-[#5E6B82]">{duration}</span>
      <span className="self-start rounded-full bg-[#D4A64A]/12 px-2.5 py-1 text-center text-xs text-[#D4A64A]">{type}</span>
    </div>
  );
}