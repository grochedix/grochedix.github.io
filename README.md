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
