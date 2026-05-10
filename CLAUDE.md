# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Tech Stack & Commands

**Stack:** Vite 6 + React 18 + TypeScript + React Router 7 + Tailwind CSS v4 + shadcn/ui

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (hot reload)
npm run build    # Production build → dist/
```

No test runner or linter is configured. Build output goes to `dist/`. There is no `tsconfig.json` — TypeScript is handled by Vite's esbuild transpiler.

## Architecture

This is a **French-language marketing website for Rebbelia**, an AI automation agency, deployed on Vercel at `https://www.rebbelia.com/`.

**Routing:** [src/app/App.tsx](src/app/App.tsx) sets up the router; [src/app/routes.tsx](src/app/routes.tsx) defines all routes. Every page is wrapped by [src/app/components/RootLayout.tsx](src/app/components/RootLayout.tsx) which injects `NavbarDark` + `FooterDark` — the `Navbar` and `Footer` (light variants) exist but are not used.

**Pages** live in [src/app/pages/](src/app/pages/). The Google OAuth page ([src/app/pages/googlePage.tsx](src/app/pages/googlePage.tsx)) initiates OAuth with Google and redirects to an n8n webhook on `loukab.app.n8n.cloud`.

**UI components:** [src/app/components/ui/](src/app/components/ui/) contains 48 shadcn/ui (Radix-based) primitives. Custom project components are one level up in [src/app/components/](src/app/components/).

**Styling:** Tailwind CSS v4 (no `tailwind.config.js` — configured via `@tailwindcss/vite` plugin in [vite.config.ts](vite.config.ts)). Brand CSS variables (primary blue `#1E4E8C`, accent teal `#2F7A5F`) are defined in [src/styles/theme.css](src/styles/theme.css) and exposed as Tailwind tokens (e.g. `text-primary`, `bg-accent`). Prefer these tokens over hardcoded hex values in new code. Use the `@` alias for imports (resolves to `./src`).

**Fonts & animations:** Body font is Inter (Google Fonts), imported in [src/styles/fonts.css](src/styles/fonts.css). That file also defines CSS animation utilities: `.animate-fade-in`, `.animate-fade-in-up`, `.animate-float`, and delay variants. The `motion` library is also available for programmatic animations.

**Component system:** shadcn/ui (Radix-based primitives in [src/app/components/ui/](src/app/components/ui/)). `@mui/material` is installed as a dependency but is not actively used — prefer shadcn/ui for any new UI work.

**Asset imports:** Vite resolves `figma:asset/X` URIs to `src/assets/X` via a custom plugin in [vite.config.ts](vite.config.ts). Regular app assets (logo, images) live in [src/app/assets/](src/app/assets/) and are imported directly.

**External services:**
- Contact form → Formspree endpoint `formspree.io/f/xgodazvg` (hardcoded in [src/app/pages/Contact.tsx](src/app/pages/Contact.tsx))
- Google OAuth → n8n webhook on `loukab.app.n8n.cloud` (scopes: Gmail modify + Google Business management); [src/app/pages/googlePage.tsx](src/app/pages/googlePage.tsx) uses inline CSS instead of Tailwind — intentional isolation for this OAuth flow
- Deployment → Vercel with SPA rewrite rule in [vercel.json](vercel.json)

---

## Règles de fonctionnement

Ce fichier définit comment Claude Code travaille sur ce projet.
Ces règles sont **non négociables** et s'appliquent à chaque tâche, sans exception.

---

## Règle 1 — Mode Plan d'abord

### Principe

Avant d'écrire la moindre ligne de code, Claude rédige un plan explicite.
Le code ne commence jamais sans plan validé.

### Processus obligatoire

```
ÉTAPE 1 — Analyser la demande
  → Identifier ce qui est demandé
  → Identifier les dépendances et les inconnues
  → Identifier les risques potentiels

ÉTAPE 2 — Écrire le plan
  → Décomposer en étapes numérotées
  → Préciser pour chaque étape : quoi, comment, pourquoi
  → Estimer les points de friction potentiels

ÉTAPE 3 — Attendre la validation (si interactif) ou procéder si le plan est solide

ÉTAPE 4 — Coder étape par étape, dans l'ordre du plan

ÉTAPE 5 — Si quelque chose dérape → STOP
```

### Règle de dérapage

Si pendant l'exécution une étape ne fonctionne pas comme prévu, ou qu'une hypothèse du plan s'avère incorrecte :

1. **STOP immédiat** — ne pas continuer à coder pour "voir si ça passe"
2. **Écrire explicitement** : `⚠️ DÉRAPAGE DÉTECTÉ — [description du problème]`
3. **Refaire le plan** depuis l'étape concernée, en tenant compte de la nouvelle information
4. **Ne jamais contourner** un problème sans comprendre sa cause

### Format du plan

```
## Plan — [titre de la tâche]

**Objectif :** [ce qu'on cherche à accomplir]
**Contexte :** [ce qui existe déjà, dépendances]
**Risques identifiés :** [ce qui pourrait bloquer]

### Étapes

1. [Étape 1 — description précise]
2. [Étape 2 — description précise]
3. [Étape 3 — description précise]
...

**Critère de succès :** [comment on sait que c'est fini et que ça marche]
```

---

## Règle 2 — Sous-agents pour les tâches complexes

### Principe

Le contexte principal est une ressource précieuse. Il ne doit pas être pollué par des tâches longues, des explorations, ou des traitements en masse qui n'ont pas besoin d'être suivis ligne par ligne.

### Quand utiliser un sous-agent

Utiliser `Task` (sous-agent) dès qu'une tâche remplit **un de ces critères** :

- La tâche peut être définie complètement en une instruction et renvoie un résultat discret
- La tâche implique de lire, analyser, ou transformer un volume important de données
- La tâche est indépendante du fil principal (pas de dépendance sur l'état courant)
- La tâche est une exploration ("cherche si X existe", "analyse ce fichier", "trouve les erreurs dans Y")
- La tâche peut échouer sans impacter le plan principal

### Ce qui reste dans le contexte principal

- La logique d'orchestration et l'enchaînement des étapes
- Les décisions d'architecture
- Les modifications sur les fichiers critiques du projet
- La synthèse des résultats des sous-agents

### Règle de propreté

Après avoir reçu le résultat d'un sous-agent :
- Extraire uniquement ce qui est utile pour la suite
- Ne pas copier-coller de longs blocs de logs dans le contexte principal
- Résumer en 2-3 lignes ce que le sous-agent a produit ou trouvé

---

## Règle 3 — Boucle d'amélioration : chaque erreur devient une leçon

### Principe

Chaque erreur rencontrée pendant le développement est une information.
Cette information est capitalisée immédiatement dans `tasks_for_lesson.md` sous forme de règle réutilisable.

### Processus obligatoire

Dès qu'une erreur se produit (build qui échoue, test qui ne passe pas, comportement inattendu, mauvaise hypothèse) :

1. **Identifier la cause racine** — pas le symptôme, la cause
2. **Formuler la leçon** comme une règle actionnable
3. **L'écrire dans `tasks_for_lesson.md`** avant de continuer
4. **Appliquer la règle immédiatement** dans le code en cours

### Format d'une leçon dans tasks_for_lesson.md

```markdown
## Leçon [N] — [date]

**Contexte :** [dans quelle situation cette erreur s'est produite]
**Erreur rencontrée :** [description précise de l'erreur]
**Cause racine :** [pourquoi l'erreur s'est produite]
**Règle :** [formulation impérative de ce qu'il faut toujours / ne jamais faire]
**Exemple :** [code ou comportement correct à adopter]
```

### Règle de consultation

Au début de chaque nouvelle tâche, Claude consulte `tasks_for_lesson.md` et vérifie si des leçons existantes s'appliquent à ce qui va être fait. Si oui, appliquer les règles correspondantes dès le plan.

---

## Règle 4 — Preuve que ça fonctionne : zéro tâche marquée terminée sans vérification

### Principe

"J'ai codé la fonctionnalité" n'est pas "la fonctionnalité fonctionne".
Une tâche n'est terminée que lorsque son bon fonctionnement est **prouvé par exécution réelle**.

### Processus obligatoire avant de marquer une tâche comme terminée

```
ÉTAPE 1 — Exécuter
  → Lancer le code, le script, la commande, ou le flow concerné
  → Pas de simulation mentale — exécution réelle uniquement

ÉTAPE 2 — Tester le cas nominal
  → Vérifier que le comportement attendu se produit dans le cas standard
  → Consigner le résultat observé

ÉTAPE 3 — Tester au moins un cas limite ou d'erreur
  → Que se passe-t-il si l'entrée est vide ? Incorrecte ? Manquante ?
  → Vérifier que les erreurs sont gérées proprement

ÉTAPE 4 — Vérifier les logs
  → Lire les logs de sortie ou d'exécution
  → Vérifier l'absence de warnings non gérés ou d'erreurs silencieuses
  → Pour les flows n8n : vérifier le panneau d'exécution dans n8n

ÉTAPE 5 — Seulement alors : marquer comme terminé
  → Écrire explicitement : ✅ VÉRIFIÉ — [résumé de ce qui a été testé et observé]
```

### Ce qui est interdit

- Marquer une tâche comme terminée après avoir seulement écrit le code sans l'exécuter
- Assumer qu'une tâche fonctionne parce qu'une tâche similaire a fonctionné
- Ignorer des warnings dans les logs en les considérant comme "non bloquants" sans les documenter
- Tester uniquement le cas nominal sans vérifier le comportement aux limites

### Format de validation obligatoire

À la fin de chaque tâche terminée, écrire :

```
✅ TÂCHE TERMINÉE — [nom de la tâche]

Exécution : [commande ou action exécutée]
Résultat observé : [ce qui s'est passé concrètement]
Cas limite testé : [quel cas, quel résultat]
Logs : [propres / warnings notés / erreurs gérées]
Preuve : [output, screenshot path, log extrait, ou description précise]
```

---

## Fichiers de référence du projet

| Fichier | Rôle |
|---|---|
| `CLAUDE.md` | Ce fichier — règles de travail |
| `tasks_for_lesson.md` | Leçons capitalisées des erreurs passées |
---

## Rappel — Ordre d'opération sur chaque tâche

```
1. Lire tasks_for_lesson.md → appliquer les leçons pertinentes
2. Écrire le plan
3. Exécuter le plan étape par étape
4. Si dérapage → STOP → refaire le plan
5. Tester + vérifier les logs
6. Si nouvelle erreur → écrire la leçon dans tasks_for_lesson.md
7. Écrire le bloc ✅ TÂCHE TERMINÉE
```