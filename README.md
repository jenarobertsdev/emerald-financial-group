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

```bash
npm start
# or
npm run dev
```

The app will be available at `http://localhost:5173`

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

## Features

- ✅ TypeScript configured
- ✅ Tailwind CSS v4 with CSS variables
- ✅ React Router 7 with example routes
- ✅ shadcn/ui ready to use
- ✅ Path aliases configured (@/)
- ✅ Dark mode support (via CSS variables)

## License

MIT
