# grochedix.github.io

Portfolio personnel ([index.html](index.html)) et trois démos React publiées sous `/projets/<slug>/` sur GitHub Pages.

## Structure

| Chemin | Rôle |
|--------|------|
| `index.html`, `portrait.png` | Page d’accueil |
| `404.html` | Routage SPA (GitHub Pages) |
| `.nojekyll` | Désactive Jekyll sur GitHub Pages |
| `projets/<slug>/` | **Builds de production** (à versionner) |
| `avocat-affaires-site/`, `restaurant-etoile/`, `marathon-terre-lune/` | Sources Vite |

## Première installation

```bash
npm run install:all
```

## Build avant publication

```bash
npm run build
```

Reconstruit les trois apps avec `base: /projets/<slug>/`, régénère `projets/` et `.nojekyll`.

## Formulaire de contact (gratuit)

Un seul bouton **Envoyer** : le visiteur remplit le formulaire, vous recevez le message par **email** ou **WhatsApp** selon ce que vous configurez dans `js/contact-config.js`.

1. **Email (formulaire)** — clé gratuite sur [web3forms.com](https://web3forms.com), puis encodez-la :
   ```bash
   node scripts/encode-contact.mjs web3forms VOTRE_CLE
   ```
   Collez `web3formsKeyEncoded` dans `js/contact-config.js`. Sur Web3Forms, **limitez la clé au domaine** `grochedix.github.io`.
2. **WhatsApp** et **email de secours** :
   ```bash
   node scripts/encode-contact.mjs whatsapp 324XXXXXXXX
   node scripts/encode-contact.mjs email vous@exemple.com
   ```
   Ne commitez jamais ces valeurs en clair (obfuscation uniquement, pas un hash).
3. **Secours** — `mailtoEmail` si ni l’un ni l’autre n’est configuré.
4. **Telegram** — `telegramUsername` : lien direct à côté du formulaire (optionnel).

Après modification de `contact-config.js`, commitez et poussez pour GitHub Pages.

## Prévisualisation locale

```bash
npm run dev
```

→ [http://localhost:4173/](http://localhost:4173/)

## Développement d’une démo

```bash
cd restaurant-etoile   # ou avocat-affaires-site / marathon-terre-lune
npm run dev
```

## Publier sur GitHub Pages

Le site utilisateur doit vivre dans un dépôt nommé **`grochedix.github.io`**, branche **`main`**, racine du dépôt.

### 1. Créer le dépôt (une fois)

Sur GitHub : **New repository** → nom `grochedix.github.io` → public.

### 2. Initialiser et pousser (depuis ce dossier)

```bash
git init
git add .
git commit -m "Publish portfolio and project demos"
git branch -M main
git remote add origin https://github.com/grochedig/grochedig.github.io.git
git push -u origin main
```

### 3. Activer GitHub Pages

**Settings → Pages** → Source : **Deploy from a branch** → Branch **`main`**, dossier **`/ (root)`**.

Après quelques minutes : [https://grochedix.github.io/](https://grochedig.github.io/)

### Mises à jour ultérieures

```bash
npm run build
git add -A
git commit -m "Update site and demos"
git push
```

## Ce qui est versionné / ignoré

- **Commité** : sources, `projets/` (builds), `index.html`, assets racine, `package-lock.json`
- **Ignoré** (voir [.gitignore](.gitignore)) : `node_modules/`, `dist/`, caches Vite, `.env`, archives `*.zip`
