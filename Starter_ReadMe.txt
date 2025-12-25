# Frontend Mentor Challenges – Starter Guide

This repository contains all my Frontend Mentor challenges.
Each challenge lives in its **own Git branch**.

⚠️ **Important Rule**
- This repository is initialized with Git **ONLY ONCE**
- Never run `git init` again inside this project
- Every new challenge = a **new branch**

---

## 📌 Before Starting Any New Challenge

1. Navigate to the repository root:
```bash
cd frontend-mentor-challenges

2. Switch to the main branch:
git checkout main

3. Make sure your local repo is up to date:
git pull origin main

✅ You are now ready to start a new challenge.

🚀 Starting a New Challenge (New Branch)

1. Create and switch to a new branch:
git checkout -b challenge-name

Example:
git checkout -b social-links


2. Create a folder for the challenge:
mkdir social-links
cd social-links

3. Add your project files:
touch index.html style.css README.md


💾 Saving Your Work (Commit)

1. Stage files:
git add .

2. Commit with a clear message:
git commit -m "Complete Social Links Profile challenge"

☁️ Pushing Your Branch to GitHub

Push your new branch to the remote repository:
git push origin challenge-name

Example:
git push origin social-links

🔄 Keeping Everything Up to Date
Before starting a new challenge

Always sync with main:
git checkout main
git pull origin main

If you need updates while working on a branch:
git checkout challenge-name
git merge main

🔁 Starting the Next Challenge

Repeat this cycle:
git checkout main
git pull origin main
git checkout -b next-challenge


❌ Common Mistakes to Avoid

❌ Running git init again
❌ Creating a new repository for each challenge
❌ Pushing work directly to main
❌ Reusing the same branch for multiple challenges