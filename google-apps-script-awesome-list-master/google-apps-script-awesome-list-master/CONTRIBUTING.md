# Contributing to Google Apps Script List

Thanks for taking the time to contribute. This list is a **curated** collection of resources for Google Apps Script developers, not an index of every project that mentions Apps Script. The bar is intentionally higher than "exists and works".

This document defines what we accept, how to format an entry, and what to put in your pull request so a maintainer can decide quickly.

## Scope

Items must be directly useful to someone writing **Google Apps Script** (`.gs` / TypeScript via clasp / V8 runtime). Concretely, in-scope items are one of:

- A **library** that can be imported into Apps Script (script ID, npm-published clasp module, or a copy-pastable module).
- A **starter kit / template / boilerplate** for Apps Script projects (clasp, TypeScript, testing, CI).
- A **shim / polyfill** that makes a JS ecosystem feature usable in Apps Script.
- An **open-source add-on, web app, custom function, or chatbot** built on Apps Script whose source is published.
- A **wrapper around a public API** implemented in Apps Script (the API must be reachable without a key issued by the wrapper's author).
- A **tool, CLI, or developer experience improvement** specific to Apps Script (clasp companions, debugging, logging, benchmarking, testing).
- A **community resource**: blog, tutorial collection, forum, chat, Q&A tag, snippet collection.

If none of the above fits, the item is probably out of scope.

## Inclusion criteria

A submission has to clear all of these.

1. **Apps Script first.** The project's primary purpose is Apps Script, or it has a first-class Apps Script integration. Generic JavaScript projects with a one-off GAS example don't qualify.
2. **Usable as published.** Readers can install, copy, or read the resource without paying the author or signing up for the author's commercial service. Wrappers around third-party paid APIs are fine; wrappers that *only* exist to sell the author's own API are not.
3. **Adopted or active.** A submission passes this criterion if **either** of the following is true:
   - **Adoption signal** -- the linked GitHub repository has **at least 5 stars**, or there's a comparable usage signal for non-GitHub resources (backlinks from known GAS sites, mentions in tutorials, third-party forks with activity, citations on Stack Overflow). 5 stars is a low bar on purpose -- it's there to keep out brand-new repos with zero outside validation, not to gatekeep niche utilities.
   - **Recent activity** -- the project had a meaningful commit within the last ~12 months **and** isn't archived. New, unstarred projects can still get in if they're being actively developed.

   A repository that is **both** unstarred (under 5) **and** untouched for over a year is out -- there's no signal that anyone uses it and no signal that the author still maintains it. Three-year-old, zero-star repos don't pass on the strength of "still installs". Canonical historical references are at maintainer discretion.
4. **Not a duplicate.** No near-identical alternative is already on the list, and the new entry adds a distinct angle.
5. **Working links.** Repository, demo, and any cited URLs must resolve.
6. **Truthful description.** The one-sentence description matches what the project actually does today.

The list is provided **as is** -- inclusion is not an endorsement, and we don't audit licensing, privacy, or fitness for purpose of upstream resources. Readers are expected to evaluate those themselves before adopting anything from the list.

## Disqualifiers

PRs that hit any of these will be closed.

- **Marketing for a paid service** dressed up as an Apps Script project. Signals (any two together are usually enough): the repo was created shortly before the PR, the install instructions end with "get an API key at our pricing page", no functionality is demonstrable without that key, the only contributor is the company behind the paid service, the README reads like a landing page.
- **Paywalled or login-walled** core content (blog posts behind a paywall count).
- **Search-engine-optimisation pages** with no original content beyond a list of features.
- **Forks without added value** of an item already on the list. "Added value" means the fork fixes, extends, repackages, or significantly modernises the original; cosmetic changes or stale mirrors don't count.
- **Dead projects**: archived; **or** no commit in the last ~12 months and under 5 stars (no maintenance and no adoption); **or** the demo is offline / core dependencies are broken.
- **Off-topic**: general JavaScript, Node.js, Google Cloud, or Workspace tooling that doesn't actually use or target Apps Script.

If your project is borderline, mention it explicitly in the PR -- it's easier to discuss in the open than to guess intent.

## Self-promotion

You're welcome to submit your own work, but **disclose it** in the PR description ("I'm the author"). Self-submissions are held to the same criteria as anything else, with extra attention to point 2 above (no using the list as a free advertising channel for a paid service you own).

## Format

Each entry is a single Markdown list item:

```
* [Title](URL) Description
```

Rules:

- **Title** -- prefer the project's canonical name; for GitHub projects `org/repo` is acceptable when that's how the project is commonly referenced, but a human-readable title is preferred.
- **URL** -- canonical project page (GitHub repo, official site). Use the URL as-is; do not shorten, redirect, or add tracking parameters.
- **Description** -- one short sentence explaining what the project does or why it's worth knowing about. **Use English when the linked resource has an English version (README, docs, blog post). If the resource exists only in another language, write the description in that original language** -- this matches what a reader will actually see when they follow the link. Don't translate a non-English-only resource into English.
  - **No trailing punctuation** (no period at the end). This is intentional and consistent across the existing list.
  - Avoid marketing adjectives ("powerful", "amazing", "the best").
  - Don't restate the title.
- **No emoji** in entries unless the project's official name contains one.
- **One entry per PR.** Multiple unrelated additions in a single PR will be asked to split.

### Where to put a new entry

- **The core rule: new entries are appended to the bottom of the most relevant subsection.** The list is not alphabetised.
- Conflicts in ordering between concurrent PRs are resolved by the order in which the PRs are merged -- whoever lands first sits higher.
- **The position of an entry within its section is not guaranteed** and may shift over time as the list is reorganised.
- Pick the existing section that best matches the resource. If you're unsure between two, pick one and say so in the PR; the maintainer will move it if needed.
- **Adding a new top-level section** is allowed when an entry doesn't fit anywhere, but in the same PR you must:
  1. Add the section heading in the body.
  2. Add it to the `<!-- toc -->` block at the top of `README.md`, matching the existing indentation and anchor format. The TOC is **hand-maintained** -- there is no generator script in the repo, so update the block manually.
  3. Add a `[goto top ⇑](#google-apps-script-list)` link after the new section's last subsection, matching the pattern used elsewhere.

### Markdown hygiene

- Use spaces, not tabs.
- One blank line between sections, no trailing whitespace.
- Don't reflow or reformat unrelated lines -- it makes review harder. Keep your diff to the lines you're actually adding.

## Pull request checklist

GitHub pre-fills [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md) into your PR description -- it contains the canonical checklist plus prompts for the "what's being added", "why is this awesome", "section choice", and "disclosure" fields. Tick the checkboxes and fill the prompts; the rules they enforce are spelled out in the rest of this document.

A maintainer may ask you to revise the entry (wording, section, scope). PRs that go without a response for a long stretch may be closed; reopen anytime once addressed.

## Pull request title

PR titles become commit messages on merge, so the repository follows a lightweight Conventional Commits style. Use one of these prefixes:

- `feat:` -- adding a new entry or a new section.
- `fix:` -- removing a broken link, fixing a typo, or correcting an existing entry.
- `docs:` -- changes to README narrative, `CONTRIBUTING.md`, templates, or other documentation.

Keep the prefix lowercase, the title under ~70 characters, and reference a related issue with `(#NNN)` at the end if applicable.

## Removing entries

If you find a broken link, an archived/abandoned project, or an entry that no longer fits the criteria, open a PR with `fix:` in the title removing it. Brief justification in the PR body is enough.

## Maintainer discretion

The maintainer makes the final call on inclusion. "Awesome" is a judgement, not a checklist -- these criteria exist to make the judgement transparent and consistent, not to remove it. Disagreement is welcome in the PR thread; respectful tone is required.

By participating you agree to be civil. Personal attacks, harassment, or bad-faith engagement will get the PR closed and, if repeated, the contributor blocked.
