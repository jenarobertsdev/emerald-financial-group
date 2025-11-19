# Emerald Financial Group

A modern React starter project built with:

- ⚡ **Vite** - Next generation frontend tooling
- ⚛️ **React 19** - UI library
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 🧭 **React Router 7** - Declarative routing
- 🎯 **shadcn/ui** - Beautiful component library

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

Run the development server with both Vite and Vercel API functions:

```bash
npm run dev
```

This will start both:

- **Vite dev server** (frontend) - typically at `http://localhost:5173`
- **Vercel dev server** (API functions) - handles `/api/contact` endpoint

The contact form will be fully functional locally.

**Note:** Make sure you have a `.env.local` file with your Resend credentials (see Environment Variables section below).

**Alternative commands:**

- `npm run dev:vite` - Frontend only (no API functions)
- `npm run dev:vercel` - Vercel dev server only
- `npm start` - Alias for `npm run dev:vite`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
├── lib/           # Utility functions (includes shadcn utils)
├── pages/         # Route pages
├── App.tsx        # Main app component with router
├── main.tsx       # Entry point
└── index.css      # Global styles with Tailwind
api/
└── contact.ts     # Vercel serverless function for contact form
```

## Adding shadcn/ui Components

To add shadcn/ui components, use the CLI:

```bash
npx shadcn@latest add [component-name]
```

Example:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## Path Aliases

The project uses path aliases for cleaner imports:

```typescript
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
```

## Environment Variables

For the contact form to work, you need to set up the following environment variables. Create a `.env.local` file in the root directory:

```bash
# Resend API Configuration
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Email Configuration
# The email address that will send the emails (must be verified in Resend)
RESEND_FROM_EMAIL=noreply@yourdomain.com

# The email address that will receive contact form submissions
RESEND_TO_EMAIL=efg@emerald-financialgroup.com
```

### Setting up Resend

1. Sign up for a Resend account at https://resend.com
2. Get your API key from the Resend dashboard
3. Verify your domain or use the test domain provided by Resend
4. Add the environment variables to your `.env.local` file for local development
5. Add the same environment variables in your Vercel project settings for production

## Features

- ✅ TypeScript configured
- ✅ Tailwind CSS v4 with CSS variables
- ✅ React Router 7 with example routes
- ✅ shadcn/ui ready to use
- ✅ Path aliases configured (@/)
- ✅ Dark mode support (via CSS variables)
- ✅ Contact form with email integration via Resend

## License

MIT
