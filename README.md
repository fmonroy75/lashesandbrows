# Lashes & Brows Montréal

Premium bilingual (English / Spanish) Nuxt website for **Lashes & Brows Montréal**.

Website: https://www.lashesandbrows.ca/

The website is built with Nuxt and designed as a premium, responsive experience for a lash and brow studio in Montréal, Québec.

---

## Languages

The website currently supports:

- English
- Spanish

English is the default language.

---

## Run

```bash
npm install
npm run dev
```

Then open the local URL shown by Nuxt.

---

## Build

Generate the static production site:

```bash
npm run generate
```

The generated static site will be available in:

```text
.output/public/
```

---

## Deployment

The project is configured for static deployment and GitHub Pages.

Production website:

https://www.lashesandbrows.ca/

The project also supports the GitHub Pages repository URL during deployment.

---

## Project Structure

The project uses reusable Vue components to make the website easier to maintain and update.

```text
components/
├── ContactSection.vue
├── Footer.vue
├── SectionTitle.vue
├── ServiceSection.vue
└── ...

pages/
├── index.vue
└── es.vue

public/
└── images/
    └── services/
```

The main page contains the overall layout, while sections such as services, contact and footer are maintained as reusable components.

---

## Services

The Services section supports both English and Spanish.

Current services include:

- Classic Lashes
- Hybrid Lashes
- Volume Lashes
- Mega Volume
- Lash Lift
- Brow Artistry

Service images are displayed from:

```text
public/images/services/
```

Additional images can be added to individual services without changing the overall page structure.

---

## Images

Client images are located in:

```text
public/images/
```

Service images are located in:

```text
public/images/services/
```

When replacing images, keep the existing filenames whenever possible to avoid modifying component references.

Original-resolution photos should be used whenever available.

---

## Business Information

### Lashes & Brows Montréal

**Address**

```text
120 Av Duranceau
Lachine, QC, Canada
```

**Phone**

```text
+1 (438) 462-7248
```

---

## Google Maps

The website includes an embedded Google Maps location and a direct directions link.

Location:

```text
120 Av Duranceau
Lachine, QC, Canada
```

---

## Booking

The primary booking CTA currently uses WhatsApp.

Phone:

```text
+1 (438) 462-7248
```

Visitors can start a WhatsApp conversation directly from the Contact section.

The WhatsApp message is automatically adapted according to the selected website language.

---

## Social Media

### Instagram

https://www.instagram.com/lashes_browsmontreal

### TikTok

https://www.tiktok.com/@lashesbrowsmontreal

### Facebook

https://www.facebook.com/arteentumiradaoficial

Social media links are available in the website footer.

---

## Google Business Profile

Business:

**Lashes & Brows Montréal**

Google Business Profile ID:

```text
om-8956849272002400080
```

The website is connected to the business location and provides access to Google Maps and directions.

---

## Google Reviews

A QR code is used to allow customers to quickly access the Google review page from printed promotional material.

**Important:** always use the original QR code supplied for the business.

Do not recreate or redraw the QR code using an image generator, as this can make the QR code unreadable or point to an incorrect destination.

---

## SEO

The website includes:

- Bilingual page content
- HTML language configuration
- Meta descriptions
- Open Graph metadata
- Twitter Card metadata
- Favicon configuration
- Responsive design
- Semantic HTML
- Google Maps location
- Business contact information
- Custom domain
- Static generation
- Social media metadata

The production domain is:

https://www.lashesandbrows.ca/

---

## Technologies

- Nuxt 4
- Vue 3
- TypeScript
- Vite
- Nitro
- CSS
- GitHub Pages

---

## Development Notes

The website is designed to be maintained primarily through reusable components.

For common content updates:

### Services

Edit:

```text
components/ServiceSection.vue
```

### Contact / Booking

Edit:

```text
components/ContactSection.vue
```

### Footer / Social Media

Edit:

```text
components/Footer.vue
```

### Main page

Edit:

```text
pages/index.vue
```

### Spanish page

Edit:

```text
pages/es.vue
```

### Images

Add or replace files in:

```text
public/images/
```

or:

```text
public/images/services/
```

---

## Production

Before deploying a new version:

```bash
npm install
npm run generate
```

Verify that the generated website works correctly locally before pushing to GitHub.

The production build is generated in:

```text
.output/public/
```

---

## Author

Developed by **IngeniumBright**.

Web development, UI/UX implementation, SEO and technical integration:

**IngeniumBright**

https://www.ingeniumbright.com/

---

## Copyright

author:Francisco Monroy
© 2026 IngeniumBright. All rights reserved.

Website developed for **Lashes & Brows Montréal**.
