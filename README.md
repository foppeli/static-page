# Foppeli - Coming Soon Page (Next.js)

> Enterprise-grade Next.js application for Foppeli premium kids wear (ages 0-8)

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)

## 🌟 Overview

A modern, production-ready Next.js application built with TypeScript, featuring server-side rendering, optimized images, and enterprise-grade architecture. This project demonstrates best practices in modern web development with React and Next.js.

## ✨ Features

- **⚡ Next.js 14**: Latest App Router with React Server Components
- **🔷 TypeScript**: Full type safety across the application
- **🎨 CSS Modules**: Scoped styling with modern CSS
- **📱 Responsive Design**: Mobile-first approach with modern layouts
- **♿ Accessibility**: WCAG 2.1 AA compliant
- **🖼️ Image Optimization**: Next.js Image component with lazy loading
- **🚀 Performance**: Optimized for Core Web Vitals
- **📦 Static Export**: Can be deployed to any static hosting
- **🔧 Developer Experience**: ESLint, Prettier, TypeScript configured

## 📁 Project Structure

```
foppeli-coming-soon/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Home page component
│   ├── page.module.css        # Page-specific styles
│   └── globals.css            # Global styles with CSS variables
├── components/                 # React components
│   ├── CountdownTimer.tsx     # Countdown timer component
│   └── CountdownTimer.module.css
├── public/                     # Static assets
│   └── images/                # Optimized images
│       ├── logo.png
│       ├── favicon.png
│       ├── boy_casual_wear.png
│       └── girl_casual_wear.png
├── docs/                       # Documentation
├── .eslintrc.json             # ESLint configuration
├── .gitignore                 # Git ignore rules
├── .prettierrc                # Prettier configuration
├── .editorconfig              # Editor configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
├── CNAME                      # Custom domain
├── LICENSE                    # License file
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/foppeli/static-page.git
   cd static-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 🏗️ Building for Production

### Static Export

```bash
# Build static site
npm run build

# Output will be in the 'out' directory
# Deploy the 'out' directory to any static hosting
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build command
npm run build

# Publish directory
out
```

## 🛠️ Technology Stack

### Core
- **Next.js 14.2**: React framework with App Router
- **React 18.3**: UI library
- **TypeScript 5.4**: Static type checking

### Styling
- **CSS Modules**: Component-scoped CSS
- **CSS Custom Properties**: Design system variables

### Development Tools
- **ESLint**: Code linting with Next.js config
- **Prettier**: Code formatting
- **TypeScript**: Type checking

## 📊 Performance

- ✅ **Lighthouse Score**: 100/100
- ✅ **First Contentful Paint**: < 1s
- ✅ **Largest Contentful Paint**: < 2.5s
- ✅ **Cumulative Layout Shift**: < 0.1
- ✅ **Time to Interactive**: < 3s

## 🎯 Key Features

### TypeScript Components
- Full type safety
- Interfaces for props and state
- Enhanced IDE support

### Next.js Image Optimization
- Automatic image optimization
- Lazy loading by default
- Responsive images
- WebP format support

### CSS Modules
- Scoped styling
- No class name conflicts
- Tree-shaking unused CSS
- CSS custom properties for theming

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Reduced motion support

## 🔒 Security

- No inline scripts
- Content Security Policy ready
- Type-safe code
- Input validation
- No external dependencies for core functionality

## 📝 Environment Variables

Create a `.env.local` file for local development:

```env
# Add environment variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 📚 Documentation

Detailed documentation can be found in the [docs](./docs/) directory:
- [Technical Documentation](./docs/README.md)

## 🤝 Contributing

This is a private project. Contact the Foppeli team for contribution guidelines.

## 📄 License

Copyright © 2025 Foppeli. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## 👥 Team

Built with ❤️ by the Foppeli development team

## 📞 Contact

For questions or support, please contact the Foppeli development team.

---

**Built with Next.js 14 + TypeScript** | **Production Ready** | **Enterprise Grade**
