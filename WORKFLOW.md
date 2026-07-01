# GitHub Workflows

Every pull request to this project runs through a set of automated checks called GitHub Actions workflows. This file explains what each one does, why it exists, and what to do when one fails.

You do not need to set any of this up yourself. It all runs automatically the moment you open a PR.

---

## The six workflows

### `deploy.yml` - Deploy to GitHub Pages

**What it does:** Every time a commit is pushed to `main`, this workflow takes everything inside the `src/` folder and publishes it to GitHub Pages at `https://ayushmore1214.github.io/First_Pr_lab/`. The live site updates automatically within a minute or two of a PR being merged.

**Why it exists:** Real projects ship. Contributors here are not just editing files locally - their changes go live. Every person who gets a PR merged can point to the live site and say their work is on it.

**Can also be triggered manually:** Maintainers can run this workflow from the Actions tab without pushing a commit, using the "Run workflow" button. This is called `workflow_dispatch` in the YAML.

**Nothing to do here.** It runs on every push to `main` automatically.

---

### `dco-check.yml` - Developer Certificate of Origin

**What it does:** Checks that every commit in your pull request includes a `Signed-off-by` line.

**Why it exists:** The DCO is a lightweight declaration that you wrote the code and have the right to contribute it. Most serious open source projects require it. This one does too.

**How to pass it:** Use `git commit -s` instead of `git commit` when making commits. The `-s` flag adds the sign-off line automatically using the name and email from your Git config.

**If it fails:** One or more of your commits is missing the sign-off. To fix it on the most recent commit:

```bash
git commit --amend -s --no-edit
git push origin your-branch --force
```

If multiple commits need it, see the "Common Errors" section in [CONTRIBUTING.md](CONTRIBUTING.md).

---

### `html-validate.yml` - HTML Linting

**What it does:** Runs HTMLHint on all HTML files in `src/`. It checks for common mistakes: missing `alt` attributes, duplicate IDs, unclosed tags, improper nesting, missing doctype.

**Why it exists:** Broken HTML causes real problems for screen readers, browsers, and search engines. Catching it automatically means no human has to spot it in review.

**How to pass it:** Write valid HTML. The HTMLHint rules are in `.htmlhintrc` at the root of the repo if you want to see exactly what is being checked.

**If it fails:** Click "Details" next to the failed check on your PR page. The error message will tell you the file name, line number, and what the problem is. Fix it, commit, and push.

---

### `pr-title-check.yml` - Pull Request Title Validation

**What it does:** Checks that your PR title follows the right format.

- For intro PRs: the title must be exactly `My First Open Source Contribution` with that exact capitalization.
- For all other PRs: the title must be at least 10 characters and descriptive enough to understand at a glance.

**Why it exists:** PR titles become part of the project's history. A title like "fix" tells nobody anything. A title like "Fix search bar not filtering on mobile" tells everyone exactly what happened.

**If it fails:** Edit your PR title. Click the pencil icon next to the title at the top of the PR page, update it, and save. The check reruns automatically.

---

### `welcome-bot.yml` - Welcome Message

**What it does:** When you open your very first PR to this project, a bot posts a comment welcoming you and explaining what happens next.

**Why it exists:** The first PR experience is confusing. The welcome message reduces that by telling you what to expect, what the next steps are, and where to ask for help. It also makes the project feel like there is a human on the other side, because there is.

**Nothing to do here.** It just runs.

---

### `thank-contributor.yml` - Thank Contributor on Merge

**What it does:** When an intro PR (titled exactly "My First Open Source Contribution") is merged, this workflow automatically posts a comment on the PR congratulating the contributor, confirming their change is live, and telling them exactly what to do next - pick an issue, claim it, open a PR.

**Why it exists:** The moment your first PR merges is the most meaningful part of the whole experience, and right now it ends with a silent GitHub notification. This makes that moment feel like something. It also removes the "what do I do now?" confusion by giving immediate next steps right where the contributor is already looking.

**Nothing to do here.** It fires automatically on every merged intro PR.

---

### `stale.yml` - Stale Issue and PR Management

**What it does:** Runs every day at midnight UTC. Any issue with no activity for 30 days gets a comment warning that it will be closed in 7 days. Any PR with no activity for 14 days gets the same warning. If there is still no activity after the warning period, it is closed automatically.

**Why it exists:** Open source projects accumulate stale issues fast. Someone claims an issue, goes quiet, and the issue sits there for months blocking others from picking it up. The stale bot keeps the Issues tab clean and honest. It is not punishing anyone - it is just reflecting reality.

**What happens if your issue gets marked stale:** Leave any comment - "still working on it" is enough. The stale label is removed and the timer resets. If you need more time, just say so.

**What is exempt:** Issues labeled `intro` or `pinned` are never marked stale. The START HERE issue and intro PR issues stay open regardless.

**Nothing to do here.** It runs automatically on a daily schedule.

---

## What the checks look like on your PR

After you open a PR, scroll to the bottom of the PR page. You will see a section titled "Checks" with a list like this:

```
DCO Check                  passed
HTML Validate              passed
PR Title Check             passed
Welcome New Contributors   passed
```

A green checkmark means the check passed. A red X means something needs fixing. Click "Details" next to any failed check to see the full error message.

A red X does not mean your PR is rejected. It means there is something small to fix. Fix it, push, and the checks run again automatically.

---

## Curious how these work?

The workflow files live in `.github/workflows/`. Each one is a YAML file with a list of steps that GitHub runs automatically. Reading them is a great way to start learning GitHub Actions, which is one of the most in-demand DevOps skills right now. Start with `welcome-bot.yml` since it is the most readable.
