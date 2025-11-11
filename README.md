# HCI Educational Infographic Website

An interactive educational website covering Human-Computer Interaction concepts across two comprehensive chapters.

## Features

- Interactive infographics and visualizations
- Responsive design for all devices
- Smooth animations and transitions
- Collapsible sidebar navigation with hamburger menu
- Modern UI components using shadcn/ui

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Lucide React Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment

This project is configured for deployment on Vercel with the following setup:

- **Framework**: Vite (React SPA)
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### Vercel Deployment Steps:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the `vercel.json` configuration
4. Deploy with the configured settings

The `vercel.json` file ensures Vercel treats this as a Vite project, not Next.js.