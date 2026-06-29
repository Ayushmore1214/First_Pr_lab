# Labels

Labels are how this project organizes issues and pull requests. Here is what each one means, when it gets applied, and who applies it.

---

## Contribution type

**`intro`**
The intro PR label. If you are adding your name to `CONTRIBUTORS.md` as your Stage 1 contribution, your PR gets this label. It is the only label applied to intro PRs.

**`good first issue`**
A real task on the project, scoped for someone contributing for the first time. Every Stage 2 issue you can pick up will have this label. If an issue does not have it, assume it requires more context before jumping in.

**`bug`**
Something is broken or behaving in a way it should not. The issue will describe what is wrong, how to reproduce it, and what the correct behavior should look like.

**`enhancement`**
A new feature or improvement. The project works fine without it, but it would be meaningfully better with it.

**`content`**
Adding or editing glossary terms in `src/index.html`. No CSS or JavaScript required, just HTML and a clear explanation.

---

## Area

**`style`**
Changes to `src/styles.css`. Colors, spacing, layout, typography, responsive behavior.

**`javascript`**
Changes to `src/main.js`. Search, filter, dark mode, or any new interactive behavior.

**`accessibility`**
Improvements for screen readers, keyboard navigation, color contrast, or semantic HTML. These matter more than most people realize.

**`mobile`**
Layout fixes or improvements specifically for small screens. Test at 375px width before opening a PR.

---

## Status (applied by the maintainer)

**`in progress`**
Someone has claimed this issue and is actively working on it. Do not start work on an issue with this label unless you check first.

**`needs review`**
A pull request is open and waiting for feedback.

**`blocked`**
Cannot move forward until something else is resolved. The issue will explain what is blocking it.

---

## How labels work in practice

When an issue is created, the template suggests labels. The maintainer confirms or adjusts them before the issue goes live.

When you claim an issue by leaving a comment, the maintainer adds `in progress` so other contributors know it is taken. When your PR is open, it gets `needs review`. After merging, both are removed.

You do not need to apply labels yourself. Just leave a comment to claim an issue and the rest happens on the maintainer's side.
