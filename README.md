<h1 align="center">FirstCommit</h1>

<p align="center">
  The companion lab for <strong>Open Source 101 - Episode 2</strong><br/>
  Watch the video, come here, open your first PR. That simple.
</p>

<p align="center">
  <a href="https://ayushmore1214.github.io/FirstCommit/">Live Site</a> &nbsp;·&nbsp;
  <a href="https://github.com/Ayushmore1214/FirstCommit/issues">Issues</a> &nbsp;·&nbsp;
  <a href="https://github.com/Ayushmore1214/FirstCommit/discussions">Discussions</a> &nbsp;·&nbsp;
  <a href="CONTRIBUTING.md">How to Contribute</a> &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true">Ayush on LinkedIn</a>
</p>

<p align="center">
  <a href="https://github.com/Ayushmore1214/FirstCommit/actions/workflows/deploy.yml"><img src="https://github.com/Ayushmore1214/FirstCommit/actions/workflows/deploy.yml/badge.svg" alt="Deploy" /></a>
  <a href="https://github.com/Ayushmore1214/FirstCommit/issues"><img src="https://img.shields.io/github/issues/Ayushmore1214/FirstCommit" alt="Open Issues" /></a>
  <a href="https://github.com/Ayushmore1214/FirstCommit/pulls"><img src="https://img.shields.io/github/issues-pr/Ayushmore1214/FirstCommit" alt="Open PRs" /></a>
  <a href="https://github.com/Ayushmore1214/FirstCommit/graphs/contributors"><img src="https://img.shields.io/github/contributors/Ayushmore1214/FirstCommit" alt="Contributors" /></a>
  <a href="https://github.com/Ayushmore1214/FirstCommit/stargazers"><img src="https://img.shields.io/github/stars/Ayushmore1214/FirstCommit" alt="Stars" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
  <img src="https://img.shields.io/badge/Hacktoberfest-friendly-orange" alt="Hacktoberfest friendly" />
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/cncf/artwork/main/other/cncf/horizontal/white/cncf-white.svg" width="260">
    <img src="https://raw.githubusercontent.com/cncf/artwork/main/other/cncf/horizontal/color/cncf-color.svg" width="260" alt="CNCF" />
  </picture>
</p>

---

## Hey, welcome

If you just came from the Open Source 101 video - you're in the right place.

**FirstCommit** is the lab Ayush mentioned in Episode 2. The whole video is about opening your first PR in an open source project, and this is where you actually do it. Not a tutorial. Not a walkthrough. The real thing, scoped small enough that you can finish it today.

Everyone says "just open a PR" like that sentence means something to someone who has never done it. You go to a repo, stare at the Issues tab, nothing makes sense, and you close the tab. Sound familiar? FirstCommit was built for exactly that moment.

It's an open source glossary of open source terms. Yes, that's recursive. You'll understand the joke by the time you make your first commit.

---

## What is this?

A glossary of 18 open source terms - fork, pull request, branch, upstream, DCO, maintainer, CI/CD, and more - built as a live website that you contribute to. The terms are the exact vocabulary you need to navigate the CNCF ecosystem: Kubernetes, Prometheus, any cloud native project. This is where it starts.

The site is live at [ayushmore1214.github.io/FirstCommit](https://ayushmore1214.github.io/FirstCommit/). When your PR gets merged, your change ships there automatically. Real URL. Real deploy pipeline. Something you can actually point to.

## Who is this for?

You if:

- You just watched the Open Source 101 video and want to try it for real
- You've heard of open source but never actually contributed
- You tried once, got lost somewhere in the fork-clone-branch maze, and quietly gave up
- You're a student, a career changer, or someone who's been coding for years but never touched a PR

Not for you if you want zero friction and a merge button that just says yes. There's a real review process here. DCO sign-off required. Automated checks. Actual feedback. That's the whole point - it's supposed to feel like a real project, because it is one.

(Stars from people who are just browsing are still welcome though.)

## Why I built this

I kept watching people give up before their first contribution. Not because they couldn't code - because the vocabulary was dense, the tools were confusing, and every "beginner-friendly" resource assumed you already knew what a remote was.

I wanted to build the project I wish existed when I was starting. Real CI/CD, real code review, real git workflow - but scoped small enough that you can understand the whole codebase in one sitting and ship something by the end of the day.

The Open Source 101 series exists for the same reason. Episode 2 is about opening your first PR - and this is where you open it.

## What's in the repo

```
src/
  index.html   the live glossary - 18 terms, 4 categories, search + dark mode
  styles.css   all the styling
  main.js      search, filter, dark mode, keyboard shortcuts

docs/
  6 plain-English guides on open source concepts

.github/
  workflows/   5 automated workflows (deploy, DCO check, HTML lint, PR title, stale bot)

CONTRIBUTING.md   every command, every step, written for people who have never done this
CONTRIBUTORS.md   everyone who has contributed (your name goes here)
LABELS.md         what every label in this project means
WORKFLOW.md       what each automated check does and why
```

No npm. No Docker. No "install these 14 things first." If you can open a file in a browser, you can run this.

## How contributing works

Two steps. In order.

**Step 1 - Intro PR.** Add your name to `CONTRIBUTORS.md`. PR title must be exactly `My First Open Source Contribution`. Takes about 20 minutes including setup. Teaches you forking, cloning, branching, committing with a DCO sign-off, pushing, and opening a PR - the full workflow.

**Step 2 - Pick a real issue.** Once your intro PR is merged, go to the [Issues tab](https://github.com/Ayushmore1214/FirstCommit/issues) and find something labeled `good first issue`. Leave a comment to claim it. The maintainer assigns it within 24 hours. You fix it. It ships live.

The complete guide - what is git, what is a fork, every command, what to do when something breaks - is in [CONTRIBUTING.md](CONTRIBUTING.md).

## Running it locally

```bash
git clone https://github.com/YOUR-USERNAME/FirstCommit.git
cd FirstCommit

open src/index.html       # Mac
start src/index.html      # Windows
xdg-open src/index.html   # Linux
```

That's genuinely it. No build step.

## Contributors

| Name | GitHub | LinkedIn |
|------|--------|----------|
| Ayush More | [@Ayushmore1214](https://github.com/Ayushmore1214) | [LinkedIn](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true) |

Your name goes here after your intro PR is merged. No minimum experience. No maximum either - if you've been writing production code for a decade and you're here adding a table row, this is a judgment-free zone.

## Share it

If this helped you land your first contribution, share it on LinkedIn and tag [Ayush](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true). Every post helps the next person find the video and the lab.

And if you want to say thanks in two seconds flat - hit the ⭐ star button at the top of the page.

## Questions and discussions

Got stuck? Have an idea? Just merged your first PR and want to share it?

Head to [Discussions](https://github.com/Ayushmore1214/FirstCommit/discussions) - ask in Q&A, share in Show and tell, or drop an idea in Ideas. The community is there.

For anything private, email Ayush at [ayushmore42595@gmail.com](mailto:ayushmore42595@gmail.com).

Made with ❤️ by [Ayush More](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true)

[MIT License](LICENSE).
