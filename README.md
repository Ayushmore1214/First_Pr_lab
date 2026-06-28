# DevOps Glossary — Open Source Learning Lab

**A real open source project built specifically to give beginners their first contribution experience.**

[![HTML Validate](https://github.com/Ayushmore1214/First_Pr_lab/actions/workflows/html-validate.yml/badge.svg)](https://github.com/Ayushmore1214/First_Pr_lab/actions/workflows/html-validate.yml)
[![DCO Check](https://github.com/Ayushmore1214/First_Pr_lab/actions/workflows/dco-check.yml/badge.svg)](https://github.com/Ayushmore1214/First_Pr_lab/actions/workflows/dco-check.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](https://www.firsttimersonly.com/)

---

## What is this?

This is a **beginner's DevOps glossary** — a static webpage with plain-English definitions for the terms you keep hearing in cloud native conversations: Kubernetes, Docker, CI/CD, GitOps, Observability, and 15 more.

But more than that, this project is a **learning lab** for open source contribution. Every color, every card, every heading on the webpage is something you can improve with a pull request. The project is real, the GitHub Actions are real, the review process is real — just scoped small enough that a beginner can understand the whole codebase in one sitting.

---

## Try It Right Now

Zero setup. Zero terminal. Just open the file:

```
src/index.html  →  open this in any browser
```

That's it. The whole project — no build step, no framework, no server.

---

## Run It Locally (Every Command Written Out)

### 1. Fork the repository

Click the **Fork** button in the top-right corner of this page. GitHub creates a copy under your account.

### 2. Clone your fork

Open your terminal and run (replace `YOUR-USERNAME` with your GitHub username):

```bash
git clone https://github.com/YOUR-USERNAME/First_Pr_lab.git
```

### 3. Navigate into the project

```bash
cd First_Pr_lab
```

### 4. Open the webpage

```bash
# On Mac:
open src/index.html

# On Windows (Command Prompt or PowerShell):
start src/index.html

# On Linux:
xdg-open src/index.html
```

Your browser will open the glossary. You're running the project locally.

**That's it.** No `npm install`, no `yarn`, no Docker, no dependencies. If you can open a file in a browser, you can run this project.

---

## Technologies Used

| Technology | Why |
|------------|-----|
| HTML5 | Structure — pure semantic HTML, no templating |
| CSS3 (custom properties) | Styling — dark mode, responsive layout, animations |
| Vanilla JavaScript | Search, filter, theme toggle — no framework |
| GitHub Actions | CI/CD — DCO check, HTML linting, PR automation |
| HTMLHint | Lint tool to catch HTML errors |

No build tools. No package manager. No transpilation. If you know how to edit a text file, you can contribute.

---

## How Contributing Works: The Two-Stage System

This project has a two-stage contributing system designed to give you a complete open source experience.

### Stage 1 — Intro PR (required first)

**Before anything else, open an intro PR.**

Your intro PR is simple: add your name, GitHub username, and LinkedIn link to the contributors table in `CONTRIBUTORS.md`.

**The PR title must be exactly:** `My First Open Source Contribution`

This is your entry ticket. Once it's merged, you're eligible for Stage 2.

### Stage 2 — Real Issues

Once your intro PR is merged, pick up a real issue from the [Issues tab](https://github.com/Ayushmore1214/First_Pr_lab/issues). These are labeled `good first issue` and involve real improvements to the webpage — fixing a layout bug, adding a glossary term, improving accessibility, updating a color.

**Full instructions for both stages are in [CONTRIBUTING.md](CONTRIBUTING.md).**

---

## Existing Issues You Can Work On

Once your intro PR is merged, head to [Issues](https://github.com/Ayushmore1214/First_Pr_lab/issues) and look for these labels:

- `good first issue` — Real tasks on the webpage, scoped for beginners
- `intro` — Used only for intro PRs

---

## Project Structure

```
First_Pr_lab/
├── src/
│   ├── index.html        ← The main webpage (this is what users see)
│   ├── styles.css        ← All styles — layout, colors, dark mode, responsive
│   └── main.js           ← Search, filter, and theme toggle logic
│
├── .github/
│   ├── workflows/
│   │   ├── dco-check.yml          ← Enforces DCO sign-off on commits
│   │   ├── html-validate.yml      ← Runs HTMLHint on src/*.html
│   │   ├── pr-title-check.yml     ← Validates PR title format
│   │   └── welcome-bot.yml        ← Posts welcome comment on first PRs
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── intro-pr.md
│   └── pull_request_template.md
│
├── CHANGELOG.md          ← History of notable changes
├── CODE_OF_CONDUCT.md    ← Community standards
├── CONTRIBUTING.md       ← Full step-by-step guide (start here!)
├── CONTRIBUTORS.md       ← Everyone who has contributed
├── LICENSE               ← MIT License
└── README.md             ← You are here
```

---

## Contributors

Everyone listed here has made a real contribution to this project.

| Name | GitHub | LinkedIn |
|------|--------|----------|
| Ayush More | [@Ayushmore1214](https://github.com/Ayushmore1214) | [LinkedIn](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true) |

*Your name goes here after your intro PR is merged.*

---

## Code of Conduct

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md) rooted in one principle: **be the kind of contributor you wish you'd had when you were just getting started.**

Beginners are explicitly welcome here. Questions at any level are encouraged. Dismissive or condescending behavior is not tolerated.

---

## Contact & Support

**Maintainer: Ayush More**

If you get stuck at any point — any step in the contributing process, any question about git, any confusion about the codebase — reach out directly:

- **LinkedIn:** [linkedin.com/in/ayush-more-3b4154341](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true)
- **GitHub Issues:** Open an issue with the title "Question: [your question]"

This is a real offer from a real human. No question is too small. If this guide confused you, that's information that makes it better for everyone who comes after you.

---

## License

MIT — do whatever you want with this. Attribution appreciated but not required.

See [LICENSE](LICENSE) for the full text.

---

*Built to be your first step into open source. Welcome.*
