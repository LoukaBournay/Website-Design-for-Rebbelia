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
    <div className="bg-[#050d1f] text-white min-h-screen">
      {/* Header */}
      <div className="bg-[#081226] border-b border-white/10 py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <p className="text-[#2563EB] text-sm font-semibold uppercase tracking-widest mb-4">
            Informations légales
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Mentions légales & RGPD
          </h1>
          <p className="text-[#8ea3c5] text-lg max-w-2xl">
            Conformément à la loi française, retrouvez ci-dessous l'ensemble des informations
            légales relatives au site <span className="text-white">rebbelia.com</span>.
          </p>
          <p className="mt-4 text-[#8ea3c5] text-sm">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">

          {/* Sidebar navigation */}
          <aside className="hidden lg:block sticky top-8">
            <p className="text-xs uppercase tracking-widest text-[#8ea3c5] mb-4 font-semibold">
              Sommaire
            </p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-[#8ea3c5] hover:text-white hover:bg-white/5 transition-all"
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="space-y-20 max-w-3xl">

            {/* ── 1. MENTIONS LÉGALES ── */}
            <section id="mentions" className="scroll-mt-8">
              <SectionTitle number="01" title="Mentions légales" />
              <p className="text-[#8ea3c5] mb-8 leading-relaxed">
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
                  <Row label="Adresse" value="11 rue du docteur Robert 38230 pont de cheruy � France" />
                  <Row label="Email" value="rebbelia@rebbelia.com" />
                  <Row label="Site web" value="https://www.rebbelia.com" />
                </InfoBlock>

                <InfoBlock title="Hébergeur">
                  <Row label="Société" value="Vercel Inc." />
                  <Row label="Adresse" value="440 N Barranca Ave #4133, Covina, CA 91723, États-Unis" />
                  <Row label="Site" value="https://vercel.com" />
                </InfoBlock>

                <InfoBlock title="Propriété intellectuelle">
                  <p className="text-[#8ea3c5] text-sm leading-relaxed">
                    L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes)
                    est la propriété exclusive de Marwan Rachedi (Rebbelia), sauf mention contraire.
                    Toute reproduction, distribution ou utilisation sans autorisation écrite préalable
                    est strictement interdite et constitue une contrefaçon sanctionnée par les
                    articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                  </p>
                </InfoBlock>

                <InfoBlock title="Limitation de responsabilité">
                  <p className="text-[#8ea3c5] text-sm leading-relaxed">
                    Rebbelia s'efforce d'assurer l'exactitude et la mise à jour des informations
                    diffusées sur ce site. Toutefois, Rebbelia décline toute responsabilité pour
                    toute imprécision, inexactitude ou omission portant sur des informations
                    disponibles sur le site, ainsi que pour tout dommage résultant d'une intrusion
                    frauduleuse d'un tiers ayant entraîné une modification des informations mises
                    à disposition sur le site.
                  </p>
                </InfoBlock>
              </div>
            </section>

            {/* ── 2. POLITIQUE DE CONFIDENTIALITÉ ── */}
            <section id="confidentialite" className="scroll-mt-8">
              <SectionTitle number="02" title="Politique de confidentialité" />
              <p className="text-[#8ea3c5] mb-8 leading-relaxed">
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
                  <p className="text-[#8ea3c5] text-sm mb-4 leading-relaxed">
                    Nous collectons uniquement les données que vous nous transmettez
                    volontairement via le formulaire de contact :
                  </p>
                  <ul className="space-y-2">
                    {["Nom et prénom", "Adresse email", "Numéro de téléphone (si renseigné)", "Contenu de votre message"].map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm text-[#8ea3c5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
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
                      <div key={item.fin} className="flex items-start justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                        <span className="text-sm text-[#8ea3c5]">{item.fin}</span>
                        <span className="text-xs bg-[#2563EB]/10 text-[#60a5fa] px-2.5 py-1 rounded-full shrink-0">
                          {item.base}
                        </span>
                      </div>
                    ))}
                  </div>
                </InfoBlock>

                <InfoBlock title="Durée de conservation">
                  <div className="space-y-2">
                    <Row label="Données de contact" value="3 ans après le dernier contact" />
                    <Row label="Données contractuelles" value="10 ans (obligation légale comptable)" />
                    <Row label="Données analytiques" value="13 mois maximum (Vercel Analytics)" />
                  </div>
                </InfoBlock>

                <InfoBlock title="Destinataires des données">
                  <p className="text-[#8ea3c5] text-sm leading-relaxed">
                    Vos données sont destinées exclusivement à Rebbelia et ne sont jamais
                    vendues, louées ou cédées à des tiers à des fins commerciales. Elles peuvent
                    être transmises à des sous-traitants techniques (hébergement Vercel) dans le
                    strict respect du RGPD et sous couvert d'un accord de traitement des données
                    (DPA) conforme.
                  </p>
                </InfoBlock>

                <InfoBlock title="Transferts hors UE">
                  <p className="text-[#8ea3c5] text-sm leading-relaxed">
                    Vercel Inc. est basée aux États-Unis. Les transferts de données vers ce pays
                    sont encadrés par les Clauses Contractuelles Types (CCT) de la Commission
                    européenne, garantissant un niveau de protection adéquat conformément à
                    l'article 46 du RGPD.
                  </p>
                </InfoBlock>
              </div>
            </section>

            {/* ── 3. POLITIQUE DE COOKIES ── */}
            <section id="cookies" className="scroll-mt-8">
              <SectionTitle number="03" title="Politique de cookies" />
              <p className="text-[#8ea3c5] mb-8 leading-relaxed">
                Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite
                d'un site. Conformément à l'article 82 de la loi Informatique et Libertés et aux
                recommandations de la CNIL, voici les cookies utilisés sur rebbelia.com.
              </p>

              <div className="space-y-6">
                <InfoBlock title="Cookies strictement nécessaires">
                  <p className="text-[#8ea3c5] text-sm mb-4">
                    Ces cookies sont indispensables au fonctionnement du site. Ils ne nécessitent
                    pas votre consentement.
                  </p>
                  <CookieRow name="__session" purpose="Gestion de la session utilisateur" duration="Session" type="Technique" />
                </InfoBlock>

                <InfoBlock title="Cookies d'analyse (Vercel Analytics)">
                  <p className="text-[#8ea3c5] text-sm mb-4 leading-relaxed">
                    Nous utilisons <strong className="text-white">Vercel Analytics</strong> pour
                    mesurer l'audience de notre site. Cet outil collecte des données agrégées et
                    anonymisées (pages vues, temps de chargement, provenance géographique approximative)
                    sans déposer de cookie de tracking individuel persistant, ce qui le rend
                    conforme au RGPD sans consentement explicite selon les lignes directrices de la CNIL.
                  </p>
                  <CookieRow name="_vercel_*" purpose="Mesure d'audience anonymisée" duration="≤ 13 mois" type="Analytique" />
                </InfoBlock>

                <InfoBlock title="Gestion de vos préférences">
                  <p className="text-[#8ea3c5] text-sm leading-relaxed">
                    Vous pouvez à tout moment modifier vos préférences en matière de cookies via
                    les paramètres de votre navigateur. La désactivation des cookies analytiques
                    n'affecte pas le fonctionnement du site. Pour plus d'informations :
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {[
                      { label: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
                      { label: "Firefox", url: "https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" },
                      { label: "Safari", url: "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" },
                    ].map((b) => (
                      <a
                        key={b.label}
                        href={b.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#8ea3c5] hover:text-white hover:border-[#2563EB]/50 transition-all"
                      >
                        {b.label}
                      </a>
                    ))}
                  </div>
                </InfoBlock>
              </div>
            </section>

            {/* ── 4. VOS DROITS ── */}
            <section id="droits" className="scroll-mt-8">
              <SectionTitle number="04" title="Vos droits (RGPD)" />
              <p className="text-[#8ea3c5] mb-8 leading-relaxed">
                Conformément au RGPD (articles 15 à 22), vous disposez des droits suivants
                sur vos données personnelles. Vous pouvez les exercer à tout moment en nous
                contactant à <span className="text-white">rebbelia@rebbelia.com</span>.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { right: "Droit d'accès", desc: "Obtenir une copie de vos données traitées" },
                  { right: "Droit de rectification", desc: "Corriger des données inexactes" },
                  { right: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                  { right: "Droit à la portabilité", desc: "Recevoir vos données dans un format lisible" },
                  { right: "Droit d'opposition", desc: "Vous opposer à un traitement fondé sur l'intérêt légitime" },
                  { right: "Droit à la limitation", desc: "Restreindre temporairement l'utilisation de vos données" },
                ].map((item) => (
                  <div key={item.right} className="bg-[#0b1730] rounded-xl p-5 border border-white/10">
                    <p className="text-white font-semibold text-sm mb-1">{item.right}</p>
                    <p className="text-[#8ea3c5] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <InfoBlock title="Délai de réponse">
                <p className="text-[#8ea3c5] text-sm leading-relaxed">
                  Nous nous engageons à répondre à toute demande d'exercice de droits dans un
                  délai d'<strong className="text-white">un mois</strong> à compter de la réception
                  de votre demande (art. 12 RGPD). Ce délai peut être prolongé de deux mois
                  supplémentaires en cas de complexité.
                </p>
              </InfoBlock>

              <InfoBlock title="Réclamation auprès de la CNIL">
                <p className="text-[#8ea3c5] text-sm leading-relaxed">
                  Si vous estimez que le traitement de vos données ne respecte pas la
                  réglementation, vous avez le droit d'introduire une réclamation auprès de la
                  Commission Nationale de l'Informatique et des Libertés (CNIL) :
                </p>
                <a
                  href="https://www.cnil.fr/fr/plaintes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-[#2563EB] text-sm font-semibold hover:underline"
                >
                  cnil.fr/fr/plaintes →
                </a>
              </InfoBlock>
            </section>

            {/* Contact block */}
            <div className="rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/5 p-8">
              <h3 className="text-white font-bold text-lg mb-2">Une question légale ?</h3>
              <p className="text-[#8ea3c5] text-sm mb-4 leading-relaxed">
                Pour toute question relative à vos données personnelles ou aux présentes
                mentions légales, contactez-nous directement.
              </p>
              <a
                href="mailto:rebbelia@rebbelia.com"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
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

/* ─── Sub-components ─── */

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[#2563EB] font-mono text-sm font-bold">{number}</span>
      <h2 className="text-2xl lg:text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#0b1730] rounded-2xl p-6 border border-white/10">
      <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{title}</h3>
      {children}
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-white/5 last:border-0 gap-1">
      <span className="text-[#8ea3c5] text-sm">{label}</span>
      <span className={`text-sm font-medium ${highlight ? "text-amber-400" : "text-white"}`}>
        {highlight && "⚠ "}{value}
      </span>
    </div>
  );
}

function CookieRow({ name, purpose, duration, type }: {
  name: string; purpose: string; duration: string; type: string;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-b border-white/5 text-sm">
      <span className="text-white font-mono text-xs bg-white/5 px-2 py-1 rounded self-start">{name}</span>
      <span className="text-[#8ea3c5] sm:col-span-1">{purpose}</span>
      <span className="text-[#8ea3c5]">{duration}</span>
      <span className="text-xs bg-[#2563EB]/10 text-[#60a5fa] px-2.5 py-1 rounded-full self-start text-center">{type}</span>
    </div>
  );
}
