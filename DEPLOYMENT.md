# October 2026 website release

This is a complete static website. No installation or build step is required.

## Upload to the existing website

1. Back up the existing repository and check its current Pages publishing branch and folder.
2. Extract the full ZIP. Upload its contents to that existing publishing folder, replacing same-name files. Place index.html at the same level as the original homepage; do not upload the ZIP itself or add a wrapper directory.
3. Keep assets/, publications/, archive/ and .nojekyll in place. Retain any existing CNAME and deployment workflow.
4. Commit the update, wait for the Pages workflow to finish, and refresh the original website.

The test files are optional for hosting. They may remain in the repository.

Original website: https://niconiconi1234567.github.io/zhishanwang.github.io/

## Content status

ICARCV 2026 is accepted. AAMAS 2027 Research Paper Track and ISCS 2027 are submitted. The economic-consultation and autonomous-racing manuscripts are listed separately as research manuscripts. Paper pages distinguish these statuses explicitly.

The ICARCV PDF is the retained submitted version of an accepted manuscript. The ISCS PDF is the submission-system archived version. Review headers are retained and described on the pages. Final proceedings PDFs can later replace these files using the same filenames.

## Maintenance and tests

- index.html: profile, project and paper text, topic links and status labels.
- research-evolution.js: stages, nodes and connections.
- app.js: navigation, keyboard handling and catalogue UI.
- catalog.js: route and filter utilities.
- style.css: typography, layout and responsive styling.
- assets/: website illustrations.
- publications/: public manuscript PDFs.
- archive/: preserved historical website.

Testing requires Python 3 with lxml and Node.js; hosting does not. From the extracted directory run:

```sh
python -m unittest discover -s tests -p 'test_*.py'
node --test tests/catalog.test.cjs
node --check app.js
node --check catalog.js
node --check research-evolution.js
```

GitHub Pages documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
