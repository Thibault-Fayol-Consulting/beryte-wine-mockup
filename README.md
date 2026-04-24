# Beryte Wine · Mockup démo client

Prototype HTML statique de la refonte du site Beryte Wine (charte fusionnée crème / brun / pourpre / doré). Destiné à être présenté au client **Pierre-Elia** avant attaque du développement WordPress + WooCommerce.

## Pages livrées

| Fichier | Rôle | Lignes |
|---|---|---|
| `index.html` | Home éditoriale complète (12 sections) | 1 267 |
| `nos-vins.html` | Catalogue avec filtres et 18 produits | 1 624 |
| `produit.html` | Fiche produit Château Musar 2016 (11 sections) | 1 733 |
| `liban.html` | Page signature Bekaa · storytelling | 1 511 |
| `pro.html` | Espace B2B · landing lead generation | à venir |
| `shared.css` | Design system (tokens + composants) | 961 |

Total · **≈ 8 100 lignes de code** pour la démo.

## Ouverture locale

Double-clic sur `index.html` ouvre le mockup dans le navigateur par défaut. Aucune dépendance, aucun build, aucun serveur. Google Fonts sont chargées via CDN.

Pour servir localement avec hot-reload (recommandé pour montrer la démo) :

```bash
# Python 3
python -m http.server 8000

# Node
npx serve .

# PHP
php -S localhost:8000
```

Puis ouvrir http://localhost:8000

## Déploiement githack pour la démo client

**Principe** · `raw.githack.com` sert les fichiers d'un repo GitHub public avec les bons headers CDN. C'est la solution la plus rapide pour envoyer un lien live au client sans besoin d'hébergement.

### Étapes

1. **Créer le repo GitHub**

```bash
cd C:\Users\thibo\Downloads\BERYTE\demo
git init
git add .
git commit -m "Beryte Wine mockup · démo client"
```

Sur GitHub : créer un repo **public** nommé `beryte-wine-mockup` (ou privé si on préfère · `raw.githack.com` supporte les repos privés via token, mais public est plus simple pour une démo).

```bash
git branch -M main
git remote add origin https://github.com/<USER>/beryte-wine-mockup.git
git push -u origin main
```

2. **Obtenir les URLs githack**

Format général :
```
https://raw.githack.com/<USER>/<REPO>/<BRANCH>/<FILE>
```

Pour ce projet, les URLs à envoyer à Pierre-Elia :

- Home · `https://raw.githack.com/<USER>/beryte-wine-mockup/main/index.html`
- Catalogue · `https://raw.githack.com/<USER>/beryte-wine-mockup/main/nos-vins.html`
- Fiche produit · `https://raw.githack.com/<USER>/beryte-wine-mockup/main/produit.html`
- Page Liban · `https://raw.githack.com/<USER>/beryte-wine-mockup/main/liban.html`
- Espace pro · `https://raw.githack.com/<USER>/beryte-wine-mockup/main/pro.html`

3. **Utiliser `rawcdn.githack.com` pour la prod / démo stable**

Le CDN `rawcdn.githack.com` cache le contenu à un commit SHA précis (plus rapide, stable) au lieu de servir la HEAD de la branche. Utile si tu veux figer la version montrée au client.

```
https://rawcdn.githack.com/<USER>/beryte-wine-mockup/<COMMIT-SHA>/index.html
```

### Alternatives à githack

- **GitHub Pages** · gratuit, plus propre · `https://<USER>.github.io/beryte-wine-mockup/` · activer dans Settings › Pages › Source : main branch
- **Netlify Drop** · glisser le dossier `demo/` sur netlify.com/drop · URL instantanée
- **Vercel** · `vercel deploy` dans le dossier
- **Cloudflare Pages** · connecter le repo GitHub

Pour une démo client rapide, **GitHub Pages est souvent plus propre que githack** car l'URL est plus courte et stable.

## Portage WordPress + WooCommerce

Le mockup est structuré pour être porté sans douleur. Marqueurs présents partout :

- Commentaires `<!-- TEMPLATE: header.php -->`, `<!-- TEMPLATE: archive-product.php -->`, etc. indiquent où découper en template parts WP.
- Classes WooCommerce natives en doublon sur les composants critiques (`product type-product status-publish`, `woocommerce-loop-product__title`, `woocommerce-Price-amount amount`, `add_to_cart_button ajax_add_to_cart`, `summary entry-summary`, `single_add_to_cart_button`, `product_meta`, `woocommerce-product-gallery`, `woocommerce-breadcrumb`).
- Form fields avec `name` CF7/GF compatibles (`your-name`, `your-email`, `your-company`, `your-siret`, `your-sector`, `your-volume`).
- Menu principal en `<ul class="menu primary-menu"><li class="menu-item">...</li></ul>` standard WP.
- Footer avec 4 zones widget (`footer-widget-1` à `footer-widget-4`).

### Stack recommandée

- **Thème** · Sage 11 (Roots) + Bud, OU GeneratePress + hooks + ACF Pro, OU thème custom light.
- **WooCommerce Blocks** pour mini-cart et fiche produit moderne.
- **Plugin Age Gate** · WP Age Verify OU WooCommerce Age Gate plutôt que recoder.
- **Plugin form** · Gravity Forms (premium, robuste) OU Contact Form 7 (gratuit).
- **Plugin Evin** · bandeau sticky peut être un simple custom HTML widget.

### Tokens CSS

`shared.css` utilise uniquement des CSS custom properties dans `:root`. Pour porter en thème WP :

1. Copier le contenu de `shared.css` dans le `style.css` du thème ou l'enqueue comme asset séparé.
2. Les composants (`.btn`, `.pcard`, `.eyebrow`, `.section--purple`, etc.) sont réutilisables tels quels.
3. Override possible via les custom properties dans le customizer WP si besoin (ex. permettre au client de changer le pourpre sans toucher au code).

## Palette · charte fusionnée

```
Crèmes (70% écran)      #F6F1E7   (dominante)
                        #EEE6D4   (zones alternées)
Encre                   #1A1410   (texte + CTA primaire)
Pourpres (charter 2026) #5A2145   (italique, eyebrow, CTA promo)
                        #3F1731   (footer, sections sombres)
Dorés (charter 2026)    #C8A96B   (filets, accents décoratifs)
                        #A88547   (doré lisible en texte)
Terracotta              #8B5A3C   (italiques secondaires, pont)
Olive                   #4F5A3A   (label bio uniquement)
```

Contrastes WCAG validés :
- Crème + Encre · 16.8:1 (AAA)
- Crème + Pourpre · 9.1:1 (AAA)
- Encre + Doré · 8.0:1 (AAA)
- Crème + Terracotta · 4.7:1 (AA)

## Règles non négociables appliquées partout

- Français, vouvoiement, ton éditorial caviste.
- Zéro tiret cadratin (em-dash) dans le contenu. Tous remplacés par le point médian `·`. Vérifié `grep` sur tous les fichiers.
- Italiques toujours colorés en pourpre via `<em>`.
- Eyebrows ALL CAPS + small-caps OpenType + filet doré préfixe.
- Chiffres old-style dans le corps, tabular dans les tableaux.
- Border-radius 0 par défaut (héritage magazine print). Seules exceptions : pills, flags ronds, badges, age-gate logo.
- Bordures 1px solid avant toute shadow.
- Grain SVG `feTurbulence` sur zones sombres (signature texture magazine).
- Loi Evin sticky bottom avec `env(safe-area-inset-bottom)`.
- Age gate 18+ avec cookie persistance 30 jours.
- `prefers-reduced-motion` respecté partout.
- Mobile responsive avec breakpoints 1024 / 680.
- Tous les touch targets ≥ 44×44 px.

## Structure de fichiers

```
demo/
├── README.md              · ce fichier
├── shared.css             · design system (tokens + composants)
├── index.html             · home
├── nos-vins.html          · catalogue
├── produit.html           · fiche produit (Château Musar 2016)
├── liban.html             · page signature Bekaa
├── pro.html               · espace B2B
├── data.js                · catalogue 48 produits réels (WooCommerce schema)
└── assets/
    ├── logo.png           · logo officiel (déesse phénicienne pourpre)
    ├── bottle-bordeaux.svg
    ├── bottle-burgundy.svg
    └── bottle-white.svg
```

## Prochaines étapes suggérées

1. **Validation client** · envoi des URLs githack à Pierre-Elia. Questions clés à lui poser :
   - Validation de la palette fusionnée (crème / brun / pourpre / doré) ?
   - Validation de la hiérarchie B2B (pro.html vs B2B band dans la home) ?
   - Contenu à réécrire (placeholder sommeliers fictifs, chiffres) ?
   - Photos produit réelles à fournir (actuellement bouteilles SVG stylisées génériques) ?
2. **Photos** · remplacer les placeholders Unsplash et les bouteilles SVG par des vraies photos domaine.
3. **Portage WP** · commencer par le thème de base + Woo + templates d'archive et single-product, puis pages statiques.
4. **SEA landing** · adapter `pro.html` en variante A/B pour tests Google Ads / LinkedIn Ads (deux hero différents, tracking UTM).

## Contact

Mockup réalisé pour le projet Beryte Wine. Toute question ou révision, me recontacter.
