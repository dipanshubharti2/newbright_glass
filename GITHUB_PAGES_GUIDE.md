# 🚀 Complete Guide: How to Host This Website on GitHub Pages

This project is pre-configured for **GitHub Pages** with automated zero-configuration deployment!

---

## ⚡ Method 1: The 2-Minute Automated Setup (Recommended)

Because we have already configured `.github/workflows/deploy.yml` and `base: './'` in `vite.config.ts`, GitHub will automatically build and host your website whenever you push code!

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g., `new-bright-glass` or `newbrightglass.github.io`).
3. Choose **Public** (required for free GitHub Pages).
4. Click **Create repository**.

### Step 2: Push Your Code to GitHub
Run these commands in your local project terminal:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files and make the initial commit
git add .
git commit -m "Initial commit of New Bright Glass Works portal"

# 3. Rename branch to main
git branch -M main

# 4. Link your remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

# 5. Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Actions Deployment in GitHub Settings
1. On GitHub, open your repository page.
2. Click **Settings** (tab at the top right).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - Change **Source** from *"Deploy from a branch"* to **"GitHub Actions"**.
5. That's it! 

Go to the **Actions** tab on GitHub: you will see the `Deploy to GitHub Pages` workflow running. In under 60 seconds, your site is live at:
```
https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/
```

---

## 🌐 Custom Domain Setup (Optional)
If you own `www.newbrightglass.com`:
1. In your GitHub repository, go to **Settings** → **Pages**.
2. Under **Custom domain**, type `www.newbrightglass.com` and click **Save**.
3. Point your domain's DNS CNAME record to `<YOUR_GITHUB_USERNAME>.github.io`.
4. Check **Enforce HTTPS**.

---

## 🛠️ Local Testing Before Pushing
To test the production build locally before uploading to GitHub:
```bash
# 1. Test production build
npm run build

# 2. Preview the built dist/ folder
npx vite preview
```
Open `http://localhost:4173` to test the exact production bundle.
