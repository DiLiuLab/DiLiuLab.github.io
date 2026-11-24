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
- `_data/teaching.yml`: course codes, descriptions, and teaching terms
- `_data/innovation.yml`: public patent applications and technology translation
- `_data/software.yml`: lab GitHub, AZBMOST, and software descriptions
- `teaching.html`: teaching philosophy, mentoring, and outreach
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

## November 2026 Content Update

Content was reconciled against Di Liu’s November 2026 CV and personal statement.
The two submitted manuscripts are listed separately from peer-reviewed articles;
manuscripts in preparation and internal invention-disclosure details are omitted.
The full review documents are not included in the public site.
The public contact address `rna@asu.edu` is preserved from the latest remote update.

People are grouped into postdoctoral, PhD, master’s, undergraduate, high-school,
and alumni sections. Matthew Heck and Yusra Azam’s earlier records are retained
with `published: false` because they are absent from the current CV; confirm their
status before republishing. A member’s `profile_enabled` controls directory links,
while `published: false` prevents Jekyll from publishing the record entirely.

Existing news URLs are retained. New November roundup dates are editorial update
dates, rather than exact dates of each award or manuscript submission.

To build without writing generated output into the source tree:

```bash
jekyll _3.9.5_ build --destination /tmp/diliulab-preview
```

## People ordering and trainee honors

Within each current-member category, `order` follows joining year from earliest
to latest. Keep existing relative order for members sharing a joining year when
more precise joining dates are unavailable. Alumni are ordered by their lab
training level (postdoc, graduate, undergraduate, high school), then joining year.
Unknown joining dates follow dated entries within the same training level.

`_data/mentee_awards.yml` supplies the People page’s Mentee Awards and Honors
section and can be edited in Pages CMS. Keep awards for mentees in collaborating
laboratories in the `collaborator` group so the mentorship context stays explicit.
