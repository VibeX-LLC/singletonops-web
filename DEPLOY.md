# Deploy SingletonOps site (no Bolt Pro)

**Repo folder:** `C:\Users\selva\Documents\github\singletonops-web`  
**Stack:** Static HTML/CSS/JS — free custom domain on Cloudflare Pages or GitHub Pages.

---

## Why not Bolt?

Bolt **Pro** is required for custom domains. This static site deploys free with **your** domains.

---

## Option A — Cloudflare Pages (recommended)

### 1. Put the site on GitHub

```powershell
cd C:\Users\selva\Documents\github\singletonops-web
git init
git add .
git commit -m "Initial SingletonOps marketing site"
# Create empty repo on GitHub: singletonops-web
git remote add origin https://github.com/YOUR_USER/singletonops-web.git
git branch -M main
git push -u origin main
```

### 2. Cloudflare Pages

1. Sign up / log in: [https://dash.cloudflare.com](https://dash.cloudflare.com)  
2. **Workers & Pages → Create → Pages → Connect to Git**  
3. Select `singletonops-web`  
4. Build settings:
   - **Framework preset:** None  
   - **Build command:** *(leave empty)*  
   - **Build output directory:** `/`  
5. Deploy  

You’ll get a URL like `https://singletonops-web.pages.dev` — test that first.

### 3. Custom domain (FREE on Cloudflare Pages)

1. Pages project → **Custom domains → Set up a domain**  
2. Add `singletonops.ai`  
3. If domain is **not** already on Cloudflare DNS:
   - Either **transfer DNS to Cloudflare** (change nameservers at registrar), **or**  
   - Add the **CNAME** Cloudflare shows at your current registrar  

**Typical records (Cloudflare will show exact values):**

| Type | Name | Target |
|------|------|--------|
| CNAME | `www` | `your-project.pages.dev` |
| CNAME or flattened | `@` | per Cloudflare UI for apex |

4. Optional: add `singletonops.com` the same way, or CNAME/redirect `.com` → `.ai`  
5. SSL is automatic (wait for “Active”)

### 4. After Stripe

Edit `assets/config.js`:

```js
stripePaymentLink: "https://buy.stripe.com/your_real_link",
supportEmail: "hello@singletonops.ai",
```

Commit + push → Pages auto-redeploys.

---

## Option B — GitHub Pages (also free custom domain)

1. Repo **Settings → Pages**  
2. Source: Deploy from branch `main` / root  
3. **Custom domain:** `singletonops.ai`  
4. At registrar, add GitHub’s DNS records (often `A` records for apex + `CNAME` for www)  
5. Enable **Enforce HTTPS** when available  

Docs: [GitHub Pages custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Local preview

```powershell
cd C:\Users\selva\Documents\github\singletonops-web
# Python static server
py -3 -m http.server 5500
# Open http://127.0.0.1:5500
```

---

## DNS checklist (any host)

| Step | Action |
|------|--------|
| 1 | Site live on free host URL |
| 2 | Host “Add custom domain” |
| 3 | Registrar DNS = records host shows |
| 4 | Wait for green SSL |
| 5 | Use `https://singletonops.ai` in Stripe business profile |

**You do not need Bolt Pro.**  
**You do not need an LLC bank to publish the site.**

---

## Files to edit later

| File | Purpose |
|------|---------|
| `assets/config.js` | Stripe link + support email |
| HTML pages | Copy updates |

Product zip remains on disk for fulfillment; site does not host the zip until you add a private download link.
