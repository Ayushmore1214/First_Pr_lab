# What is a Branch?

A branch is an isolated workspace inside a repository. When you create a branch, you're making a separate copy of the codebase where you can make changes without touching anything on `main`.

This is how you work on a feature or fix without disrupting the rest of the project while you're in the middle of it.

## Why branches exist

Imagine working directly on `main` for every change. If something breaks halfway through, the entire project is broken. If two people are working at the same time, their changes collide. Branches solve both problems by giving each piece of work its own isolated space.

## Creating and switching branches

```bash
git checkout -b fix/search-bar-mobile
```

The `-b` flag creates the branch and switches to it in one step. The name after it is up to you, but descriptive names matter. `fix/search-bar-mobile` tells anyone looking at the branch list what it's for. `branch1` does not.

## The relationship between branches and pull requests

Every pull request comes from a branch. When you open a PR, you're saying "I'd like to merge this branch into main." The maintainer reviews the changes on the branch, leaves feedback if needed, and merges it when it's ready.

After merging, the branch is usually deleted. The changes live on in `main`. The branch was just a workspace.

## Main vs other branches

`main` is the primary branch. It's what gets deployed, what people clone, what the project's history is built on. Everything else is temporary work branching off from it and eventually merging back.

Some projects call this branch `master` instead of `main` - they mean the same thing, it's just a naming convention that has been changing across the industry over the past few years.

## Related terms

- [What is a Fork?](what-is-a-fork.md)
- [What is a Pull Request?](what-is-a-pull-request.md)
