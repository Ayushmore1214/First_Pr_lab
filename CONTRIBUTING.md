# Contributing Guide

**Hello! Welcome. I'm genuinely glad you're here.**

This guide is written for people who have never contributed to open source before. Not "beginner-friendly" in the way that documentation sometimes says beginner-friendly and then immediately assumes you know what a pull request is. Actually beginner-friendly  -  like if you have only ever downloaded an app, this guide will still make sense.

If you follow every step in this document exactly, you will have made your first open source contribution by the end. If you get stuck at any point  -  even step one  -  reach out to Ayush on [LinkedIn](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true). That's a real offer from a real human who wants to help you succeed. No question is too small.

Let's go.

---

## Other docs worth reading

- [LABELS.md](LABELS.md) - what every label in this project means and when it gets applied
- [WORKFLOW.md](WORKFLOW.md) - what each automated check does and what to do when one fails

---

## Table of Contents

1. [What is open source? (30-second version)](#what-is-open-source)
2. [What is a fork?](#what-is-a-fork)
3. [What is a branch?](#what-is-a-branch)
4. [What is DCO?](#what-is-dco)
5. [What you'll need before you start](#what-youll-need)
6. [Stage 1: Your Intro PR](#stage-1-your-intro-pr)
   - Step 1: Fork the repository
   - Step 2: Clone your fork
   - Step 3: Create a branch
   - Step 4: Add your name to CONTRIBUTORS.md
   - Step 5: Commit your change
   - Step 6: Push your branch
   - Step 7: Open a pull request
   - Step 8: What happens after you open the PR
7. [Stage 2: Working on a Real Issue](#stage-2-working-on-a-real-issue)
   - Finding an issue
   - How to claim an issue
   - Working on the change
8. [Responding to Review Comments](#responding-to-review-comments)
9. [After Your PR is Merged](#after-your-pr-is-merged)
10. [Branch Naming Conventions](#branch-naming-conventions)
11. [Commit Message Format](#commit-message-format)
12. [Common Errors and Fixes](#common-errors-and-fixes)
13. [Getting Help](#getting-help)

---

## What is open source?

Open source software is software whose code is publicly available. Anyone can read it, suggest improvements, report problems, or contribute changes. When a project lives on GitHub (like this one), anyone in the world can fork it (make their own copy), make changes, and submit those changes back as a "pull request"  -  which is a request for the project maintainer to pull your changes into the main codebase.

This project was built specifically so you can experience that full cycle.

---

## What is a fork?

When you "fork" a repository, GitHub creates a personal copy of it under your own GitHub account. This is your sandbox  -  you can do whatever you want in your fork and it won't affect the original project. When you're done with your changes, you can submit a pull request to propose merging your changes back into the original.

Think of it like photocopying a recipe. You have your own copy, you can write notes on it, modify it  -  and if you figure out a better version, you can send your improved version back to the original author.

---

## What is a branch?

Inside a repository, a "branch" is like a parallel version of the code. The `main` branch is the official, stable version. When you want to make a change, you create a new branch  -  a copy of main that only exists in your repo. You make all your changes there, without touching main.

Think of it like creating a rough draft. You don't write directly in the final document; you write a draft, polish it, and when it's ready, merge it in. If the draft goes badly, you just delete it  -  main is untouched.

---

## What is DCO?

DCO stands for **Developer Certificate of Origin**. It's a lightweight declaration that says: "I wrote this code and I have the right to contribute it to this project."

You add it to every commit with a "sign-off" line at the end of your commit message:

```
Signed-off-by: Your Full Name <your@email.com>
```

You don't have to type this manually every time. Just add `-s` to your commit command:

```bash
git commit -s -m "your commit message here"
```

Git adds the sign-off line automatically using the name and email from your Git config. That's it. No contracts, no legal paperwork  -  just a line in a commit.

**Why does it exist?** It protects both contributors and the project. It documents that you have the right to contribute your changes. Most serious open source projects use it.

---

## What You'll Need

Before you start, make sure you have these three things:

### 1. A GitHub account

If you don't have one: go to [github.com](https://github.com) and sign up. It's free. Use your real name  -  that's what gets attributed in the project history.

### 2. Git installed on your computer

Git is the version control tool that lets you manage code history and collaborate with others. Here's how to check if it's installed:

Open your terminal (on Mac: search for "Terminal" in Spotlight; on Windows: search for "Git Bash" or "Command Prompt"):

```bash
git --version
```

**Expected output:** Something like `git version 2.39.3`. Any version 2.0 or higher is fine.

**If you see "command not found":**
- Mac: Run `xcode-select --install` in your terminal
- Windows: Download from [git-scm.com/downloads](https://git-scm.com/downloads)
- Linux: Run `sudo apt install git` (Ubuntu/Debian) or `sudo dnf install git` (Fedora)

### 3. Configure Git with your name and email

Git needs to know who you are so it can attribute your commits correctly. Run these two commands (replace the values with your actual name and email  -  use the same email as your GitHub account):

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your@email.com"
```

To verify it worked:

```bash
git config --global user.name
git config --global user.email
```

**Expected output:** Your name on the first line, your email on the second.

---

## Stage 1: Your Intro PR

Your intro PR is the entry ticket to this project. Before you can work on any real issues, you must open this PR. It's simple: add your name to the contributors table in `CONTRIBUTORS.md`.

This PR must have the exact title: **`My First Open Source Contribution`**

### Step 1: Fork the repository

1. Go to [github.com/Ayushmore1214/First_Pr_lab](https://github.com/Ayushmore1214/First_Pr_lab)
2. Click the **Fork** button in the top-right corner of the page
3. GitHub will ask you where to create the fork  -  choose your personal GitHub account
4. After a few seconds, you'll be redirected to your fork: `github.com/YOUR-USERNAME/First_Pr_lab`

You now have your own copy of the project. Let's download it to your computer.

---

### Step 2: Clone your fork

"Cloning" means downloading the repository from GitHub to your local computer so you can edit it.

Copy the URL of your fork (it should look like `https://github.com/YOUR-USERNAME/First_Pr_lab.git`) and run:

```bash
git clone https://github.com/YOUR-USERNAME/First_Pr_lab.git
```

Replace `YOUR-USERNAME` with your actual GitHub username.

**Expected output:**
```
Cloning into 'First_Pr_lab'...
remote: Enumerating objects: 42, done.
remote: Counting objects: 100% (42/42), done.
remote: Compressing objects: 100% (28/28), done.
Receiving objects: 100% (42/42), done.
```

Now change into the project directory:

```bash
cd First_Pr_lab
```

**Expected output:** Your terminal prompt changes to show you're inside the `First_Pr_lab` folder. No output is fine too.

Let's verify everything looks right by listing the files:

```bash
ls
```

**Expected output:** You should see files like `README.md`, `CONTRIBUTING.md`, `CONTRIBUTORS.md`, `src/`, and more.

---

### Step 3: Create a branch

Before making any changes, create a new branch to work in. This keeps your changes isolated from the main code.

Run this command, replacing `your-github-username` with your actual GitHub username:

```bash
git checkout -b intro/your-github-username
```

Example: `git checkout -b intro/ayushmore1214`

**Expected output:**
```
Switched to a new branch 'intro/your-github-username'
```

You're now on your new branch. Any changes you make will only affect this branch.

---

### Step 4: Add your name to CONTRIBUTORS.md

Open the `CONTRIBUTORS.md` file in any text editor  -  Notepad, VS Code, Sublime Text, whatever you have. Find the Contributors Table and add a new row with your information.

The table looks like this:

```markdown
| Name | GitHub | LinkedIn |
|------|--------|----------|
| Ayush More | [@Ayushmore1214](https://github.com/Ayushmore1214) | [LinkedIn](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true) |
```

Add a new row at the bottom of the table following the same format:

```markdown
| Your Full Name | [@your-github-username](https://github.com/your-github-username) | [LinkedIn](https://linkedin.com/in/your-linkedin-profile) |
```

**Important rules:**
- Use your real name (first and last)
- Your GitHub username must link to your actual GitHub profile
- If you don't have a LinkedIn, write ` - ` instead of leaving it blank
- Don't change any existing rows, only add a new one at the bottom

Save the file.

---

### Step 5: Commit your change

A commit is a saved snapshot of your changes. Think of it like pressing "save" in a document editor, but with a description of what you changed.

First, let's tell Git which files you want to include in this commit:

```bash
git add CONTRIBUTORS.md
```

**Expected output:** Nothing (silence means success in Git).

Now create the commit. The `-s` flag automatically adds the DCO sign-off:

```bash
git commit -s -m "docs: add Your Full Name to CONTRIBUTORS.md"
```

Replace `Your Full Name` with your actual name.

**Expected output:**
```
[intro/your-github-username abc1234] docs: add Your Full Name to CONTRIBUTORS.md
 1 file changed, 1 insertion(+)
```

To double-check that your sign-off was included, run:

```bash
git log -1
```

**Expected output:** You should see your commit message, and the last line should be:
```
    Signed-off-by: Your Full Name <your@email.com>
```

If you don't see the `Signed-off-by` line, you missed the `-s` flag. See [Common Errors and Fixes](#common-errors-and-fixes) below.

---

### Step 6: Push your branch

Now let's send your branch up to GitHub:

```bash
git push origin intro/your-github-username
```

**Expected output:**
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 347 bytes | 347.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: Create a pull request for 'intro/your-github-username' on GitHub by visiting:
remote:   https://github.com/YOUR-USERNAME/First_Pr_lab/pull/new/intro/your-github-username
To https://github.com/YOUR-USERNAME/First_Pr_lab.git
 * [new branch]      intro/your-github-username -> intro/your-github-username
```

If GitHub asks for your username and password, note: GitHub no longer accepts passwords for command-line operations. You need to use a **Personal Access Token** instead. To create one:

1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name, set expiration, check the `repo` scope
4. Copy the token  -  it will only be shown once
5. Use this token as your "password" when Git asks

Or you can set up SSH authentication  -  see [GitHub's SSH guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

---

### Step 7: Open a pull request

1. Go to your fork on GitHub: `github.com/YOUR-USERNAME/First_Pr_lab`
2. You should see a banner: **"Compare & pull request"**  -  click it
3. If you don't see the banner, click **"Pull requests"** → **"New pull request"**
4. Make sure the base repository is `Ayushmore1214/First_Pr_lab` and the base branch is `main`
5. Make sure your head repository is your fork and the compare branch is `intro/your-github-username`

**The PR title must be exactly:** `My First Open Source Contribution`

(Capitalization matters. Do not add anything else.)

In the PR body, fill out the template:
- Check off each checklist item that applies
- Paste the row you added to CONTRIBUTORS.md
- Write anything you want in the optional section  -  how you found the project, how you're feeling, etc. This is the human part.

Click **"Create pull request"**.

---

### Step 8: What happens after you open the PR

After you open the PR:

1. **A welcome bot will post a comment** within a minute or two, explaining what comes next
2. **Automated checks will run**  -  you'll see green checkmarks (✓) or red X marks next to your commits. Green means all checks passed. If you see a red X, click on it to see what failed
3. **Ayush will review the PR**  -  usually within a couple of days. If there are any small issues (formatting, missing sign-off), feedback will come in the PR comments
4. **Once everything looks good, the PR gets merged**  -  your name is now permanently in the project's git history

You'll get a GitHub notification when it's merged.

---

## Stage 2: Working on a Real Issue

Once your intro PR is merged, you're eligible to work on a real issue.

### Finding an issue

1. Go to the [Issues tab](https://github.com/Ayushmore1214/First_Pr_lab/issues)
2. Look for issues labeled **`good first issue`**  -  these are real tasks on the webpage that are scoped for beginners
3. Read the issue description carefully before claiming it

### Claiming an issue

Leave a comment on the issue saying:

> "Hi, I'd like to work on this! My intro PR (#X) was merged. I'll open a PR soon."

Wait for the maintainer to assign it to you before starting work (this prevents two people working on the same thing).

### Working on a webpage issue

Once assigned, the workflow is the same as your intro PR  -  but now you're editing files in `src/`:

```bash
# Make sure you have the latest main
git fetch upstream
git checkout main
git merge upstream/main

# Create a new branch for your issue
git checkout -b fix/short-description-of-what-youre-fixing
```

Open `src/index.html` or `src/styles.css` in your editor, make the change, save, and test it in a browser:

```bash
# Just open the file in your browser  -  no server needed!
open src/index.html      # Mac
start src/index.html     # Windows
xdg-open src/index.html  # Linux
```

Check that your change looks correct. Then commit and push:

```bash
git add src/styles.css   # (or whichever file you changed)
git commit -s -m "fix: describe what you changed"
git push origin fix/short-description
```

Open a pull request with a clear title and fill out the PR template. Reference the issue number in the description with `Fixes #123`.

---

## Responding to Review Comments

When a reviewer leaves feedback on your PR, don't panic. Review comments are normal  -  they're not criticism of you as a person, they're a conversation about the code.

**How to respond:**

1. Read the comment carefully
2. If you understand what needs to change, make the edit in your local code, save, commit, and push. The PR will update automatically
3. If you're not sure what the reviewer means, reply in the comment asking for clarification  -  this is completely normal and expected
4. Once you've addressed a comment, reply to it saying what you changed

**After making changes:**

```bash
git add src/styles.css
git commit -s -m "fix: address review feedback - [describe what you changed]"
git push origin your-branch-name
```

The PR will automatically update with your new commits. No need to close and reopen it.

---

## After Your PR is Merged

Congratulations! Here's what to do after a merge:

**Delete your branch** (optional but keeps things clean):

```bash
git checkout main
git branch -d your-branch-name
```

**Sync your fork with upstream** so your fork stays up-to-date:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

If you haven't set up the upstream remote yet:

```bash
git remote add upstream https://github.com/Ayushmore1214/First_Pr_lab.git
```

---

## Branch Naming Conventions

Please name your branches using this format:

| Type | Format | Example |
|------|--------|---------|
| Intro PR | `intro/your-github-username` | `intro/ayushmore1214` |
| Bug fix | `fix/short-description` | `fix/search-bar-safari` |
| New feature | `feat/short-description` | `feat/dark-mode-toggle` |
| Content | `content/short-description` | `content/add-gitops-term` |
| Documentation | `docs/short-description` | `docs/update-readme` |

Keep the description short (2-4 words), lowercase, and use hyphens instead of spaces.

---

## Commit Message Format

Good commit messages make the project history readable. Use this format:

```
type: short description of what changed

Optional longer explanation if needed.

Signed-off-by: Your Name <your@email.com>
```

**Types to use:**

| Type | When to use |
|------|-------------|
| `feat` | Adding something new |
| `fix` | Fixing a bug |
| `style` | CSS changes, visual improvements |
| `content` | Adding/editing glossary terms or copy |
| `docs` | Changes to README, CONTRIBUTING, etc. |
| `chore` | Maintenance tasks (updating configs, etc.) |

**Good examples:**
```
feat: add hover effect to glossary cards
fix: correct heading level in hero section (h1 not h2)
content: add "Chaos Engineering" term to observability section
style: update footer background to match dark mode palette
docs: add Your Name to CONTRIBUTORS.md
```

**Bad examples:**
```
update stuff
fixed it
changes
my first pr
```

---

## Common Errors and Fixes

### "I forgot the -s flag and my commit has no sign-off"

If you haven't pushed yet, amend the last commit:

```bash
git commit --amend -s --no-edit
```

If you've already pushed, run the amend then force-push to your branch (this is okay since it's your own branch):

```bash
git commit --amend -s --no-edit
git push origin your-branch-name --force
```

---

### "Git is asking for my password but my password doesn't work"

GitHub requires a **Personal Access Token** for HTTPS authentication, not your account password. Create one at:

GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic) → Generate new token

Check the `repo` scope, copy the token, and use it instead of your password when Git prompts.

---

### "I see 'Permission denied' when I push"

This usually means Git is trying to push to the original repo instead of your fork. Check your remote:

```bash
git remote -v
```

**Expected output** (should show YOUR username, not Ayushmore1214):
```
origin  https://github.com/YOUR-USERNAME/First_Pr_lab.git (fetch)
origin  https://github.com/YOUR-USERNAME/First_Pr_lab.git (push)
```

If origin points to the wrong repo, update it:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/First_Pr_lab.git
```

---

### "I made changes on main instead of a branch"

Don't panic. Here's how to move your changes to a new branch:

```bash
# Create a new branch from your current state (with your changes)
git checkout -b intro/your-github-username

# Reset main to match the upstream (your changes are now on the new branch)
git checkout main
git reset --hard origin/main

# Go back to your branch  -  changes are there!
git checkout intro/your-github-username
```

---

### "The DCO check is failing"

The DCO check requires every commit to have a `Signed-off-by` line. If it's failing, one of your commits is missing it.

To see which commits are missing sign-off, look at the check details on GitHub. Then amend those commits.

If you have multiple commits without sign-off, you can add sign-off to all of them with:

```bash
git rebase HEAD~N --signoff  # Replace N with the number of commits
git push origin your-branch --force
```

---

### "My PR has a merge conflict"

A merge conflict happens when someone else changed the same lines you changed. To resolve:

```bash
git fetch upstream
git merge upstream/main
```

Git will tell you which files have conflicts. Open those files in your editor  -  you'll see sections like:

```
<<<<<<< HEAD
your version
=======
their version
>>>>>>> upstream/main
```

Edit the file to keep the correct version (usually a combination of both), then:

```bash
git add the-file.md
git commit -s -m "merge: resolve conflict in the-file.md"
git push origin your-branch
```

If this feels overwhelming, just ask for help in your PR comments and someone will walk you through it.

---

## Getting Help

**If you get stuck anywhere in this guide  -  at any step  -  reach out:**

- **LinkedIn:** [Ayush More](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true)  -  best place to get quick help
- **GitHub Issues:** Open an issue with the title "Question: [your question]" and the maintainer will respond

There is no question too basic. If something in this guide was confusing, that's feedback that makes the guide better for everyone who comes after you. Please ask.

---

*You're one pull request away from your first open source contribution. Let's do this.*
