# ehealth-implementation.eu

Webbplats för Interreg South Baltic-projektet **AMBeR – Advanced Modelling of Baltic Cancer E-Care**.
Sidans innehåll är på engelska.

## Så fungerar det

- Allt innehåll ligger som textfiler (Markdown) i `src/content/`.
- När en ändring sparas på grenen `main` bygger GitHub automatiskt om webbplatsen och publicerar den på GitHub Pages (tar ett par minuter).
- Ingen databas, inga cookies och ingen server att underhålla.

## Redigera innehåll (utan kod)

1. Gå till <https://app.pagescms.org> och logga in med ert GitHub-konto.
2. Välj repot `IoU-Angelhaven/ehealth-implementation` och grenen `main`.
3. I menyn till vänster finns: **Model – Steps**, **Model – Activities**, **Stories** och de enskilda sidorna.
4. Ändra texten och klicka **Save**. Webbplatsen uppdateras automatiskt efter några minuter.

Bilder och dokument (t.ex. PDF:er att ladda ner) laddas upp via editorn och hamnar i `public/media/`.

## Var ligger vad?

| Innehåll | Mapp |
|---|---|
| Modellens 5 steg | `src/content/steps/` (en fil per steg: `step-1.md` … `step-5.md`) |
| Modellens 31 aktiviteter | `src/content/activities/` (en fil per aktivitet) |
| Stories | `src/content/stories/` |
| Startsida, About, Local guide, Privacy, Accessibility | `src/content/pages/` |
| Färger och typsnitt | `src/styles/global.css` |
| Ikoner (namnen går att välja i editorn) | `src/icons.ts` |
| Menyn, sajtens namn, statistik | `src/site.config.ts` |
| Bilder och nedladdningsbara filer | `public/media/` |
| Officiella logotyper (ändra inte) | `public/media/brand/` |

## Interregs regler som webbplatsen följer

Enligt *Communication Guidelines for Beneficiaries* (Interreg South Baltic, v.6):

- Logotypen (AMBeR + Interreg South Baltic + EU) ligger överst på varje sida, på vit bakgrund och i föreskriven minsta storlek.
- Finansieringstexten och ansvarsfriskrivningen står i sidfoten med programmets formulering.
- Sidan *About* beskriver projektets mål, resultat, partner, period, budget/EU-stöd och målgrupper.
- Typsnittet är Open Sans.
- Webbplatsen ska hållas uppdaterad och finnas kvar minst under projektets livstid. Riktlinjerna avråder från att publicera en halvfärdig webbplats.

## Större ändringar

Struktur, design och nya funktioner kan ni be Claude om (på svenska). Ändringarna görs då på en separat gren
och slås ihop med `main` via en pull request när ni har godkänt dem.

## Publicering (GitHub Pages)

Webbplatsen byggs och publiceras automatiskt av GitHub varje gång något sparas på grenen `main`.

**Inställning som måste vara rätt (görs en gång):**
GitHub → repot → *Settings* → *Pages* → *Build and deployment* → *Source*: välj **GitHub Actions**.
(Välj *inte* "Deploy from a branch" – då försöker GitHub visa källkoden i stället för den färdiga webbplatsen.)

Adressen blir då <https://iou-angelhaven.github.io/ehealth-implementation/>.

Om publiceringen misslyckas: gå till fliken *Actions*, öppna "Build and publish website" och klicka *Re-run jobs*.

**Senare – egen domän (ehealth-implementation.eu):**
1. *Settings* → *Pages* → *Custom domain*: skriv `ehealth-implementation.eu` och spara. Kryssa i *Enforce HTTPS* när det går.
2. Hos Loopia (DNS): fyra A-poster för `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, och en CNAME-post för `www` → `iou-angelhaven.github.io`.
3. Kör "Build and publish website" en gång till (fliken *Actions* → *Run workflow*). Länkarna anpassas automatiskt till den nya adressen.

## För utvecklare

```bash
npm install
npm run dev      # lokal förhandsvisning på http://localhost:4321/ehealth-implementation/
npm run build    # bygger till dist/
```

Byggt med [Astro](https://astro.build). Innehållsscheman finns i `src/content.config.ts`, redigeringsgränssnittet konfigureras i `.pages.yml`.
