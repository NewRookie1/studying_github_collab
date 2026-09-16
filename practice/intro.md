# Practice Task 1 — Add yourself (10 min)

Goal: do a full **branch → commit → push → PR → merge** loop.

1. Clone (once):
   ```bash
   git clone https://github.com/NewRookie1/studying_github_collab.git
   cd studying_github_collab
   ```
2. Branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b yourname/add-profile
   ```
3. Open `practice/team-roster.json`, copy one entry, add yourself:
   ```json
   { "name": "Your Name", "github": "your-username", "favoriteLang": "Python", "learned": ["clone", "branch"] }
   ```
4. Commit + push:
   ```bash
   git add practice/team-roster.json
   git commit -m "Add Your Name to team roster"
   git push -u origin yourname/add-profile
   ```
5. On GitHub → **Compare & pull request** → Merge → delete branch. Done! 🎉

Then try Task 2: two friends edit `practice/conflict-demo.txt` on the same line and resolve the conflict.
