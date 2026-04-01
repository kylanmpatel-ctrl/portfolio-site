# My Portfolio Website

A clean, minimal portfolio built with HTML, CSS, and vanilla JavaScript.
Deployed on Vercel from a GitHub repository.

---

## How to personalize

Open `index.html` and find + replace these placeholders:

| Placeholder | Replace with |
|-------------|-------------|
| `Your Name` | Your actual name |
| `YN` (nav logo) | Your initials |
| `Your City, State` | Where you live |
| `[Grade, e.g. junior]` | Your grade |
| `[Your High School]` | Your school name |
| `you@email.com` | Your email |
| `yourhandle` / `yourusername` | Your social handles |
| Project names and descriptions | Your real projects |
| Experience entries | Your real experiences |

---

## How to deploy on GitHub + Vercel

### Step 1: GitHub
1. Go to [github.com](https://github.com) and create a free account if you don't have one
2. Click **New repository** → name it `portfolio` → set to **Public** → click **Create**
3. On your computer, open a terminal in this folder and run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

### Step 2: Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **Add New Project**
3. Import your `portfolio` repository
4. Click **Deploy** — that's it!

Vercel will give you a live URL like `portfolio-yourname.vercel.app`.
Every time you push to GitHub, it auto-deploys.

### Step 3: Custom domain (optional, free with Vercel)
In Vercel dashboard → your project → Settings → Domains → add `yourname.dev` or similar

---

## Contact form setup (Formspree — free)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form, copy your Form ID
3. Open `script.js` and replace `YOUR_FORM_ID` with your actual ID

---

## File structure

```
portfolio/
├── index.html      ← all your content lives here
├── style.css       ← all visual styling
├── script.js       ← interactions + form
├── resume.pdf      ← add your résumé here
└── README.md       ← this file
```

---

## Tips for college applications

- **Be honest** — admissions officers read hundreds of portfolios. Genuine > impressive-sounding.
- **Show your thinking** — in project descriptions, explain *why* you built something and *what you learned*.
- **Update it** — add projects as you build them. A growing portfolio is a good signal.
- **Link it everywhere** — your Common App activities section, emails, LinkedIn.
