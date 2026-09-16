# Contributing to studying_github_collab

Welcome! This repo is a **practice ground**. Follow this workflow for every change.

## The golden rule
**Never commit directly to `main`.** Always use a branch + Pull Request.

## Workflow
1. **Sync main**
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Create a branch** — `yourname/what-you-do`
   ```bash
   git checkout -b ana/add-bio
   ```
3. **Make one focused change** (e.g. edit `practice/team-roster.json`)
4. **Commit with a clear message**
   ```bash
   git add practice/team-roster.json
   git commit -m "Add Ana to team roster"
   ```
5. **Push + open PR**
   ```bash
   git push -u origin ana/add-bio
   ```
   On GitHub: *Compare & pull request* → fill title + description → `Closes #<issue>` if applicable.
6. **Review** — ask a teammate. Be kind, suggest improvements, approve with LGTM.
7. **Merge + cleanup**
   ```bash
   git checkout main
   git pull origin main
   git branch -d ana/add-bio
   ```

## Branch names
`feat/...`, `fix/...`, `docs/...`, or `name/task`. Example: `you/fix-typo`.

## Commit messages
Use imperative: `Add`, `Fix`, `Update`. Bad: `asdf`, `final v2`.

## Conflicts?
If GitHub says "This branch has conflicts":
```bash
git pull origin main
# open conflicted file, remove <<<<<<< ======= >>>>>>> markers, keep correct code
git add .
git commit
git push
```

## First task
Read `practice/intro.md`, then add yourself to `practice/team-roster.json` via a PR. 🎉





hellow duniya
