# GitHub Workflows

Every pull request to this project runs through a set of automated checks called GitHub Actions workflows. This file explains what each one does, why it exists, and what to do when one fails.

You do not need to set any of this up yourself. It all runs automatically the moment you open a PR.

---

## The four workflows

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
