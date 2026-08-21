# Contexte projet — Rebbelia

Ce document est la référence à lire au début d'une nouvelle conversation sur ce projet.

## Rebbelia en une phrase

Rebbelia aide les TPE et PME à gagner du temps et à réduire les erreurs en automatisant leurs tâches administratives répétitives grâce à des solutions IA sur mesure.

## Positionnement

- Client cible : TPE et PME françaises/européennes.
- Promesse : automatiser les tâches répétitives pour que les équipes se concentrent sur leur activité.
- Ne pas vendre n8n, les API ou les workflows comme produit principal : vendre le résultat métier.
- Signature de marque : `Automatiser, Respirer.`
- Ton : clair, rassurant, concret, sans jargon technique inutile.

## Cas d'usage prioritaires

1. Demandes de devis : réception, lecture, extraction d'informations, recherche dans les outils du client, préparation d'une réponse et relance.
2. Emails et avis Google : analyse, proposition de réponse adaptée, avec validation humaine possible.
3. Relances clients, CRM et suivi : rappels, synchronisation des données, notifications et reporting.

Autres pistes : factures, prise de rendez-vous, génération de documents, tri d'emails et synchronisation de bases de données.

## Équipe

- Technique : n8n, automatisations, développement du site, API, bases de données, hébergement et maintenance.
- Rebecca : administration, organisation et secrétariat.
- Marwan et Nolan : marketing, communication, acquisition et développement commercial.

Ne pas inventer de noms, de rôles, de clients, de témoignages ou de chiffres sur le site sans validation explicite.

## Décisions pour le site

- Le hero doit dire : `Automatisez vos tâches répétitives. Concentrez-vous sur votre entreprise.`
- Sous-titre : automatisations IA sur mesure pour emails, devis, relances, avis clients et outils de suivi.
- CTA principal : `Recevoir un audit gratuit` ou `Parler de votre projet`.
- Les services doivent être formulés en résultats métier : devis, avis/emails, relances/CRM.
- La démo de workflow doit rester en français et montrer des étapes métier, pas des noms techniques de nœuds n8n.
- Retirer les témoignages fictifs, les logos non autorisés et les chiffres non prouvés.
- Ajouter des témoignages et études de cas uniquement quand ils sont réels, vérifiables et autorisés.
- Prévoir ultérieurement un calculateur ROI simple : temps passé, volume, coût horaire, estimation d'heures récupérables.

## Formulaire de contact

La page `src/app/pages/Contact.tsx` doit proposer un court questionnaire guidé, une question à la fois :

1. Tâche à automatiser.
2. Volume approximatif.
3. Nombre d'outils à connecter.
4. Estimation indicative, puis nom, email et entreprise.

L'estimation est une fourchette indicative ; elle n'est jamais un devis contractuel. Les demandes sont envoyées via Formspree.

## Grille tarifaire de référence

| Offre | Installation | Suivi mensuel |
| --- | ---: | ---: |
| Audit gratuit | Gratuit | — |
| Automatisation Essentielle | 500 € | 49 €/mois |
| Automatisation Métier | 900 à 1 500 € | 99 €/mois |
| Automatisation Sur mesure | À partir de 2 000 € | 149 à 249 €/mois |
| Évolution ou ajout | À partir de 300 € | — |

- Audit gratuit : échange de 20 à 30 minutes, analyse du besoin et estimation.
- Essentielle : une tâche simple et ciblée (tri d'emails, réponse assistée ou relance simple), jusqu'à deux outils connectés et une phase de correction.
- Métier : devis, avis clients, relances ou CRM avec IA et logique adaptée, jusqu'à trois outils connectés.
- Sur mesure : processus complet, validations humaines, suivi et connexions multiples.
- Message commercial : `Automatisez une tâche répétitive dès 500 €. Audit gratuit, prix fixe avant toute mise en place.`

## Infrastructure n8n

- Hébergeur envisagé : Hostinger VPS, région européenne.
- Choix de départ recommandé : KVM 2 (2 vCPU, 8 Go RAM, 100 Go NVMe), pas KVM 1 pour la production client.
- Déploiement : Docker Compose, PostgreSQL, HTTPS via Caddy ou Traefik, sous-domaine `n8n.rebbelia.com`.
- À mettre en place dès le départ : sauvegardes quotidiennes hors VPS, clé `N8N_ENCRYPTION_KEY` sauvegardée, pare-feu, SSH par clé, surveillance et mises à jour.
- Ne pas démarrer avec Redis/workers/queue mode : passer à cette architecture lorsque la charge et le nombre de clients le justifient.
- Pour les clients sensibles, préférer une isolation forte des instances et des identifiants.

## Conformité et confiance

- Garder à jour les mentions légales, CGV, politique de confidentialité et informations de contact.
- Si des traceurs non essentiels sont utilisés, prévoir un mécanisme de consentement cookies.
- Vérifier que la politique de confidentialité correspond réellement aux prestataires utilisés : Vercel, Formspree, analytics, modèles IA, hébergeur, etc.
- Pour les prestations clients, prévoir contrat, accord de sous-traitance RGPD, liste des sous-traitants et procédure d'incident.

## Technique du site

- Stack : React 18, TypeScript, Vite, Tailwind CSS, React Router et Vercel.
- Déploiement recommandé : Vercel connecté au dépôt GitHub.
- Domaine et email : Hostinger. Lors d'une configuration DNS Vercel, ne jamais supprimer les enregistrements email MX, SPF, DKIM ou DMARC.
- Le README contient les étapes de lancement local et de déploiement.

## Dépôt et publication

- Dépôt : `LoukaBournay/Website-Design-for-Rebbelia`.
- Branche de production : `main`.
- Avant une publication : lancer `npm run build`, tester le formulaire, les liens et le rendu mobile.
- Pour publier des changements locaux : `git add <fichiers>`, `git commit -m "..."`, puis `git push origin main`.
