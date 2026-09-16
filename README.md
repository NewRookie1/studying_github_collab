# 🌍 GitHub Collab Lab — studying_github_collab

Demo website for **learning GitHub collaboration completely**: cloning, branching, committing, pushing, pull requests, conflicts, issues, actions.

Repo: `https://github.com/NewRookie1/studying_github_collab.git`

## Open the site
Just open `index.html` in a browser (double-click). No build, no install.

Or serve locally:
```bash
npx serve .
# or
python -m http.server 8000
```

## 5-minute quickstart (do this for real)

```bash
git clone https://github.com/NewRookie1/studying_github_collab.git
cd studying_github_collab
git checkout -b yourname/add-profile
# edit practice/team-roster.json — add yourself
git add practice/team-roster.json
git commit -m "Add <YourName> to team roster"
git push -u origin yourname/add-profile
```
Then on GitHub → **Compare & pull request** → request a review → **Merge**.

## What's inside
- `index.html` / `styles.css` / `app.js` — the full learning site (8 modules, 4 labs, quiz, checklist)
- `practice/team-roster.json` — safe file to practice commits + PRs
- `practice/conflict-demo.txt` — safe file to practice merge conflicts
- `practice/intro.md` — first-task instructions
- `CONTRIBUTING.md` — team workflow rules

## Learning path
1. Setup → 2. Clone → 3. Branch → 4. Commit → 5. Push → 6. PR → 7. Conflicts → 8. Issues/Projects/Actions

See `CONTRIBUTING.md` before opening your first PR.
