# New Bright Glass Works (India) Pvt. Ltd. — Web Portal

A premium, fully responsive, mobile-first website for **New Bright Glass Works (India) Pvt. Ltd.**, glassware manufacturers based in Firozabad, Uttar Pradesh, India ("The Glass City of India").

---

## 🎨 Design & Palette System
- **Deep Navy Base:** `#0B1F33` / `#071321`
- **Crystal White:** `#FFFFFF`
- **Soft Ice-Blue:** `#EAF4FA`
- **Warm Amber/Gold Accent:** `#D9A441`
- **Headings Font:** Playfair Display (Google Fonts)
- **Body Font:** Inter (Google Fonts)

---

## ⚙️ How to Customize

### 1. Changing Phone Number, WhatsApp, Email, & GSTIN
Open `src/data/companyData.ts`. All core business details are declared in `COMPANY_INFO`:

```typescript
export const COMPANY_INFO = {
  name: "New Bright Glass Works (India) Private Limited",
  phone: "+91 98970 12345",          // Formatted for display
  phoneRaw: "919897012345",          // E.164 without '+' for tel: links
  whatsappNumber: "919897012345",    // Number for wa.me links
  email: "sales@newbrightglass.com",
  contactPerson: "Aayush Gupta",     // CEO / Managing Director
  gstin: "09AADCN4631N2Z3",
  address: "Sector 2, Suhag Nagar, Near Suhag Nagar Post Office, Firozabad, UP – 283203, India",
  coordinates: {
    lat: 27.1523,
    lng: 78.3830
  }
};
```
*Note: Also remember to keep the JSON-LD schema in `index.html` in sync if business details change.*

---

### 2. Replacing Images
All photography assets are saved in `/images/`.
To replace an image:
1. Place your new `.jpg`, `.png`, or `.webp` file in `/images/` (e.g., `hero_glass.jpg`).
2. Update the image reference in `src/data/companyData.ts` or in the specific component:
   - **Hero Image:** Referenced in `src/components/Hero.tsx`
   - **Furnace & Artisan Image:** Referenced in `src/components/AboutSection.tsx`
   - **Corporate Gifting Box:** Referenced in `src/components/CorporateGifting.tsx`
   - **Product Photos:** Edit the `image` field of each item in the `PRODUCTS` array in `src/data/companyData.ts`.

---

### 3. Adding or Updating Products
In `src/data/companyData.ts`, find the `PRODUCTS` array. Each product has the following shape:

```typescript
{
  id: "unique-product-slug",
  name: "Royal Diamond Faceted Tumbler",
  category: "Drinking Glasses and Tumblers", // Must match one of PRODUCT_CATEGORIES
  capacity: "320 ml",
  dimensions: "H: 95mm · Dia: 82mm",
  moq: "240 Pcs (20 Boxes)",
  packaging: "6 pcs luxury color box / Export carton",
  description: "Heavy-base cut-crystal soda-lime glass tumbler...",
  highlight: "Weighted Base · Thermal Shock Tested",
  image: "/images/your_image.jpg"
}
```
The "Enquire on WhatsApp" button automatically pre-fills WhatsApp with the product name and category!

---

### 4. Updating the Google Map
In `src/components/ContactSection.tsx`, update the `iframe` URL with your official Google Maps place embed link:
```tsx
<iframe
  src="https://www.google.com/maps/embed?..."
  ...
/>
```

---

## 🚀 Hosting on GitHub Pages
This project is configured out of the box for GitHub Pages deployment.
- **Vite Base Path:** Configured as `base: './'` so assets resolve on any repository subpath.
- **Automated Workflow:** `.github/workflows/deploy.yml` builds and deploys on every push.
- **Detailed Step-by-Step Guide:** See [GITHUB_PAGES_GUIDE.md](./GITHUB_PAGES_GUIDE.md) for 3-step setup.

### Quick GitHub Deployment Steps:
1. Create a repository on GitHub (e.g. `new-bright-glass`).
2. Push your files:
   ```bash
   git init
   git add .
   git commit -m "New Bright Glass Works Website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
3. In your GitHub repository, open **Settings** → **Pages** → set **Source** to **GitHub Actions**.
4. Your website is live in 60 seconds with free HTTPS!

---

## 🛠️ Build & Production Verification
- Run build check:
  ```bash
  npm run build
  ```
- Dev server:
  ```bash
  npm run dev
  ```

