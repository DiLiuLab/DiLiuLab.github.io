# Di Liu Lab Website

Jekyll-based lab website for the Di Liu Lab at Arizona State University. The
public site is hosted by GitHub Pages at <https://diliulab.github.io/>.

## Editing With Pages CMS

Routine content can be edited without touching HTML:

1. Visit <https://app.pagescms.org/>.
2. Sign in with the GitHub account that has access to the `DiLiuLab` organization.
3. Authorize Pages CMS for the `DiLiuLab/DiLiuLab.github.io` repository if prompted.
4. Select the repository and the `main` branch.
5. Edit content under **News & People** or **Site Content**.
6. Save the entry. Pages CMS commits the change to GitHub, and GitHub Pages
   rebuilds the website automatically.

News filenames use the `yyyymmdd-title.md` convention. Pages CMS supplies that
format when a news entry is created. The filename can also be adjusted during
creation when adding a backdated story.

## Editable Content

- `_news/`: news articles; the homepage automatically displays the newest three
- `_people/`: directory records and individual profiles
- `_data/site.yml`: lab identity, homepage, metrics, contact details, and links
- `_data/research.yml`: research directions
- `_data/opportunities.yml`: openings and application guidance
- `_data/publications.yml`: selected publications
- `_data/teaching.yml`: courses and mentoring activities
- `assets/uploads/`: images uploaded through Pages CMS

The `.pages.yml` file defines the editing forms. Layout and navigation are kept
in `_layouts/` and `_includes/` so routine edits cannot alter the site structure.

## Local Preview

Build with the GitHub Pages-compatible Jekyll version:

```bash
jekyll _3.9.5_ serve
```

Then visit <http://localhost:4000/>.

## Publishing

GitHub Pages builds the `main` branch from the repository root. Do not restore a
`.nojekyll` file; Jekyll processing is required for the generated pages.
