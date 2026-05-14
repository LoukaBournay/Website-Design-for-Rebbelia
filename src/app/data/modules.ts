export interface Module {
  slug: string;
  name: string;
  features: string[];
  installation: string;
  subscription: string;
}

export const MODULES: Module[] = [
  {
    slug: "relance-devis",
    name: "Relance automatique de devis",
    features: ["Relance automatique par email", "Suivi des devis en attente", "SMS automatique (+20 €/mois)"],
    installation: "349",
    subscription: "59",
  },
  {
    slug: "avis-google",
    name: "Réponse automatique aux avis Google",
    features: ["Réponses automatiques", "Réponses personnalisées positives", "Alerte avis négatifs"],
    installation: "349",
    subscription: "59",
  },
  {
    slug: "facture-pdf",
    name: "Génération automatique de facture PDF",
    features: ["Génération PDF", "Envoi automatique", "Archivage"],
    installation: "399",
    subscription: "79",
  },
  {
    slug: "clients-inactifs",
    name: "Relance des clients inactifs",
    features: ["Relance automatique", "SMS ou mail marketing", "Campagnes automatiques"],
    installation: "799",
    subscription: "149",
  },
];
