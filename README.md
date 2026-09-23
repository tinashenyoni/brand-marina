# Brand Marina — Fashion & Homeware | Harare & Lusaka

A Next.js (App Router) website for **Brand Marina**, a multi-award-winning Zimbabwean fashion and homeware retail brand with five branches across Zimbabwe and Zambia.

## What it is

- Ladies fashion, menswear, kids wear, home décor, furniture, and personal styling
- Public-facing marketing site with shop, services, gallery, about, locations, and contact pages
- WhatsApp-first enquiry flow (add-to-cart and contact forms open WhatsApp chats)
- Tailwind CSS v4 for styling, lucide-react for icons, Next.js Font for typography

## Prerequisites

- Node.js (LTS recommended)
- npm

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  app/                 # Next.js App Router
    layout.tsx         # Root layout (fonts, Navbar, Footer, WhatsApp FAB, PageLoader)
    globals.css        # Tailwind v4 theme, custom utilities, animations
    page.tsx           # Home page
    about/             # Our Story page
    contact/           # Contact page (form + branch list + social links)
    gallery/           # Lookbook / gallery page
    locations/         # Branch locations with map embeds
    services/          # Services / collections page
    shop/              # Shop page with category filters and product grid
  components/          # Reusable UI components
    Navbar.tsx         # Announcement bar + navigation
    Footer.tsx         # Footer with links, branches, and social
    WhatsAppFAB.tsx    # Fixed WhatsApp chat button
    PageLoader.tsx     # Route-change progress bar
    SocialIcons.tsx    # Instagram & Facebook SVG icons
  data/
    products.ts        # Product data, categories, and category cards
```

## Environment Variables

This project does not require environment variables for local development. All contact details (WhatsApp numbers, email, social links) are part of the public site content and are stored directly in the source code.

If you need to externalise any values later, use `.env.local` (which is ignored by Git). See `.env.example` for the pattern.

## Deployment

The site can be deployed on any Node.js host that supports Next.js, including Vercel (recommended), or a standard Node server using `npm run build` + `npm run start`.

## License

Private project. All rights reserved by Brand Marina.

## Credit

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Lucide React](https://lucide.dev/).

