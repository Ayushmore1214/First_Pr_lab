# First PR Lab

Open source has a vocabulary problem. Everyone says "just open a PR" like that's self-explanatory. You go to the repo, you stare at the Issues tab, nothing makes sense, and you close the tab and never come back.

This project exists for that moment.

It's an open source glossary of open source terms - fork, pull request, branch, upstream, DCO, all of it. Yes, that's a bit recursive. But you're also here to make your first contribution, so the glossary is not just something you read. It's something you contribute to.

---

## What's in the repo

```
src/
  index.html   the glossary - 18 terms across 4 categories
  styles.css   all the styling
  main.js      search, filter, dark mode, keyboard shortcuts

.github/
  workflows/   4 automated checks run on every PR

CONTRIBUTING.md   the full guide - every command, every step
CONTRIBUTORS.md   everyone who has contributed (your name goes here)
LABELS.md         what every label in this project means
WORKFLOW.md       what each automated check does and why
```

No npm. No Docker. No "install these 14 things first." If you can open a file in a browser, you can run this project.

---

## Never contributed before?

Good. That's exactly who this is for.

There are two steps, done in order.

**Step 1 - Your intro PR.** Add your name to `CONTRIBUTORS.md`. One file, one table row, one PR titled exactly `My First Open Source Contribution`. This teaches you the full git forking workflow without any pressure.

**Step 2 - Pick a real issue.** Once your intro PR is merged, go to the [Issues tab](https://github.com/Ayushmore1214/First_Pr_lab/issues) and find something labeled `good first issue`. Leave a comment to claim it - the maintainer assigns it to you, and then you start. This is how it works on real projects too.

The entire process, including what git is, what a fork is, what DCO means, and what to do when something breaks, is in [CONTRIBUTING.md](CONTRIBUTING.md). Written for people who have never touched open source before, not "beginner-friendly" in the way that documentation sometimes says beginner-friendly and then immediately assumes you know what a remote is.

---

## Running it locally

```bash
git clone https://github.com/YOUR-USERNAME/First_Pr_lab.git
cd First_Pr_lab

open src/index.html       # Mac
start src/index.html      # Windows
xdg-open src/index.html   # Linux
```

That's genuinely it. No build step.

---

## How the automated checks work

When you open a PR, four checks run automatically. They verify your commit is signed off, your HTML is valid, and your PR title is correctly formatted. If one fails, a red X appears on your PR with a link to see exactly what went wrong.

A red X is not a rejection. It's just a thing to fix. Usually takes 2 minutes.

The full breakdown of each check is in [WORKFLOW.md](WORKFLOW.md). Reading it is optional, but it's also a pretty good intro to GitHub Actions if you're curious how this stuff actually works under the hood.

---

## Contributors

| Name | GitHub | LinkedIn |
|------|--------|----------|
| Ayush More | [@Ayushmore1214](https://github.com/Ayushmore1214) | [LinkedIn](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true) |

Your name goes here after your intro PR is merged. There's no minimum experience required. There's no maximum either, but if you've been writing code for ten years and you're here adding your name to a markdown table, that's between you and your journey.

---

## Questions

If you get stuck at any step - any command, any error message, anything confusing - reach out to Ayush on [LinkedIn](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true). Real person, real responses. The offer is genuine.

---

MIT License.
