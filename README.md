# First PR Lab

A community blog and guides site for people learning DevOps and cloud native  -  written by beginners, for beginners.

This is also an open source learning lab. The CI/CD pipeline is real, the review process is real, the git workflow is real. It's just scoped small enough that you can understand the whole codebase in one sitting and make a meaningful contribution without needing six months of experience first.

---

## What's in the site

```
src/
├── index.html         the homepage  -  links to all posts and guides
├── blog/              personal posts from contributors
└── guides/            step-by-step explanations of DevOps tools
```

Each post and guide is a plain HTML file. There's a `_template.html` in both folders  -  you copy it, fill in your content, and open a PR. That's the whole workflow for adding new content.

No framework. No build step. No package manager. If you can open a file in a browser, you can run this project.

---

## Running it locally

```bash
git clone https://github.com/YOUR-USERNAME/First_Pr_lab.git
cd First_Pr_lab

# Mac
open src/index.html

# Windows
start src/index.html

# Linux
xdg-open src/index.html
```

That's it.

---

## How contributing works

There are two steps, and you need to do them in order.

**Step 1  -  Intro PR.** Add your name, GitHub username, and LinkedIn to `CONTRIBUTORS.md`. The PR title must be exactly `My First Open Source Contribution`. Once it's merged, you're in.

**Step 2  -  Pick a real issue.** Head to the [Issues tab](https://github.com/Ayushmore1214/First_Pr_lab/issues) and look for anything labeled `good first issue`. These range from writing a new blog post or guide, to fixing a layout bug or improving the mobile experience. Leave a comment saying you want to take it, and start.

The full walkthrough  -  including what git is, what a fork is, every command you need  -  is in [CONTRIBUTING.md](CONTRIBUTING.md). It's written for people who have never touched open source before.

---

## Contributors

| Name | GitHub | LinkedIn |
|------|--------|----------|
| Ayush More | [@Ayushmore1214](https://github.com/Ayushmore1214) | [LinkedIn](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true) |

Your name goes here after your intro PR is merged.

---

## Questions

If you get stuck anywhere  -  any git command, any step in the process, anything confusing  -  reach out to Ayush on [LinkedIn](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true). That's a real offer, not boilerplate.

---

MIT License. See [LICENSE](LICENSE).
