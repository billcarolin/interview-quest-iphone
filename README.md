# Interview Quest — iPhone Interview Prep Game

A mobile-first Progressive Web App (PWA) generated from the Java Senior Software Engineer interview-prep project.

## Features

- Quick Drill: 5 mixed questions
- Pattern Match: algorithm and Java rounds
- Architecture Run: Spring and distributed-systems rounds
- Boss Battle: 12 questions with 3 hearts
- Study Deck with explanations and code snippets
- XP, level, streak, and mastered-question progress saved in `localStorage`
- Offline caching after the first hosted load
- Existing visual-reference docs bundled under `reference/docs`

## Play locally

From this folder, run any static server. For example:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Put it on an iPhone

The iPhone needs a hosted HTTPS URL for the smoothest PWA experience. Upload the contents of this folder to a static host such as GitHub Pages, Netlify, Cloudflare Pages, or your own website.

In Safari on the iPhone:

1. Open the hosted URL.
2. Tap the Share button.
3. Choose **Add to Home Screen**.
4. Launch **Interview Quest** from the new icon.

No backend or build step is required.
