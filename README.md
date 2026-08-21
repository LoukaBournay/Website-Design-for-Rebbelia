# Rebbelia — site web

Site vitrine de Rebbelia, agence d'automatisation et d'IA pour les TPE et PME.

## Prérequis

- Node.js 20 LTS ou version plus récente
- npm 10 ou version plus récente
- Un compte GitHub
- Un compte Vercel pour la mise en ligne recommandée

## Lancer le projet en local

```bash
git clone https://github.com/LoukaBournay/Website-Design-for-Rebbelia.git
cd Website-Design-for-Rebbelia
npm install
npm run dev
```

Vite affiche l'adresse locale dans le terminal, généralement `http://localhost:5173`.

## Vérifier la version de production

Avant chaque mise en ligne, exécuter :

```bash
npm run build
```

Le site final est généré dans le dossier `dist/`. Ne pas modifier ce dossier à la main : il est recréé à chaque build.

## Mettre le site en ligne avec Vercel

1. Créer un compte sur [Vercel](https://vercel.com) et le connecter à GitHub.
2. Cliquer sur **Add New → Project** puis importer `LoukaBournay/Website-Design-for-Rebbelia`.
3. Vercel détecte automatiquement Vite. Vérifier les valeurs suivantes :
   - Build command : `npm run build`
   - Output directory : `dist`
   - Install command : `npm install`
4. Cliquer sur **Deploy**.
5. Chaque nouveau push sur la branche `main` créera une nouvelle version du site.

Le fichier `vercel.json` est déjà présent : il permet aux URLs comme `/services` ou `/contact` de fonctionner après actualisation de la page.

## Connecter rebbelia.com

Dans Vercel : **Project → Settings → Domains → Add** puis ajouter :

- `rebbelia.com`
- `www.rebbelia.com`

Dans Hostinger, ouvrir la zone DNS du domaine et recopier exactement les enregistrements demandés par Vercel. Ne supprimer aucun enregistrement email (MX, SPF, DKIM ou DMARC) : ils servent à l'adresse professionnelle `rebbelia@rebbelia.com`.

Une fois le domaine validé, choisir une version principale (`rebbelia.com` ou `www.rebbelia.com`) et rediriger l'autre vers celle-ci.

## Formulaire de contact

Le formulaire utilise Formspree et est configuré dans `src/app/pages/Contact.tsx`.

Avant le lancement :

1. Vérifier que le formulaire Formspree associé reçoit bien les messages.
2. Faire un test depuis le site publié.
3. Configurer l'adresse de réception, les notifications et la protection anti-spam dans Formspree.

Ne jamais mettre de clé API, mot de passe, token ou identifiant SMTP dans le code ou dans GitHub. Utiliser les variables d'environnement Vercel pour toute donnée sensible ajoutée ultérieurement.

## Contenu à maintenir

- Les coordonnées et les mentions légales sont dans `src/app/pages/Legal.tsx`.
- Les informations de contact sont dans `src/app/pages/Contact.tsx` et le pied de page.
- Les textes de la page d'accueil sont dans `src/app/pages/HomeNew.tsx`.
- Les pages sont déclarées dans `src/app/routes.tsx`.

N'ajoutez des témoignages, logos de clients ou résultats chiffrés que s'ils sont réels, vérifiables et autorisés par les personnes ou entreprises concernées.

## Checklist avant publication

- [ ] `npm run build` passe sans erreur.
- [ ] Tous les boutons et liens ont été testés sur ordinateur et mobile.
- [ ] Le formulaire de contact a été testé.
- [ ] Les coordonnées, mentions légales, CGV et politique de confidentialité ont été relues.
- [ ] Les pages légales correspondent aux outils réellement utilisés (Vercel, Formspree, analytics, cookies, etc.).
- [ ] Les témoignages et chiffres présents sont réels et validés.
- [ ] Le domaine et les emails Hostinger fonctionnent toujours après la modification DNS.

## Stack technique

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Vercel
