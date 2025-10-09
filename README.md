# Foppeli - Coming Soon Page

> Enterprise-grade coming soon page for Foppeli premium kids wear (ages 0-8)

[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)
[![Code Style](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Code Quality](#code-quality)
- [Browser Support](#browser-support)
- [Documentation](#documentation)
- [License](#license)

## 🌟 Overview

A modern, accessible, and performance-optimized coming soon page built with enterprise-grade standards. This project showcases best practices in web development including semantic HTML, modular CSS, object-oriented JavaScript, and comprehensive accessibility features.

## ✨ Features

- **🎨 Modern Design**: Clean, responsive UI with smooth animations
- **♿ Accessibility**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **📱 Responsive**: Mobile-first design that works on all devices
- **⚡ Performance**: Optimized loading with lazy images and efficient code
- **🔧 Maintainable**: Well-organized codebase with clear separation of concerns
- **📦 Modular**: Object-oriented JavaScript with ES6+ classes
- **🎯 SEO Optimized**: Complete meta tags and Open Graph properties
- **🛠️ Developer Friendly**: EditorConfig, Prettier, and ESLint configured

## 📁 Project Structure

```
foppeli-coming-soon/
├── assets/                      # Static assets
│   ├── css/                     # Stylesheets
│   │   └── styles.css          # Main stylesheet with CSS variables
│   ├── images/                  # Image assets
│   │   ├── boy_casual_wear.png # Product showcase (boy)
│   │   ├── girl_casual_wear.png# Product showcase (girl)
│   │   ├── logo.png            # Foppeli logo
│   │   └── favicon.png         # Favicon
│   ├── js/                      # JavaScript files
│   │   └── script.js           # Main application logic
│   └── fonts/                   # Web fonts (if any)
├── docs/                        # Documentation
│   └── README.md               # Detailed documentation
├── .editorconfig               # Editor configuration
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── .prettierrc                 # Prettier configuration
├── CNAME                       # Custom domain configuration
├── index.html                  # Main HTML file
├── LICENSE                     # License file
├── package.json                # NPM package configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Node.js 14+ for development tools

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/foppeli/static-page.git
   cd static-page
   ```

2. **Open in browser**
   ```bash
   # Simple method - just open the HTML file
   open index.html

   # Or use a local server (recommended)
   npx http-server -p 8080 -o
   ```

### Development

```bash
# Format code
npm run format

# Lint CSS (requires stylelint)
npm run lint:css

# Lint JavaScript (requires eslint)
npm run lint:js

# Validate HTML (requires html-validator-cli)
npm run validate
```

## 🛠️ Technologies

### Core
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties, Grid, and Flexbox
- **JavaScript (ES6+)**: Classes, modules, arrow functions

### Architecture Patterns
- **CSS**: BEM-like methodology, CSS Custom Properties
- **JavaScript**: Object-Oriented Programming, Separation of Concerns
- **HTML**: Semantic structure, Progressive Enhancement

### Key Features Implemented
- CSS Custom Properties for theming
- CSS Grid and Flexbox for layouts
- LocalStorage for data persistence
- Responsive images with lazy loading
- Reduced motion support
- Print stylesheets

## 📊 Code Quality

### HTML
- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Valid W3C markup
- ✅ SEO meta tags
- ✅ Open Graph tags

### CSS
- ✅ CSS Custom Properties (variables)
- ✅ Mobile-first responsive design
- ✅ BEM-like naming convention
- ✅ Organized with clear comments
- ✅ Accessibility features (reduced motion, high contrast)

### JavaScript
- ✅ ES6+ modern syntax
- ✅ Object-oriented architecture
- ✅ Comprehensive error handling
- ✅ JSDoc documentation
- ✅ Modular and testable
- ✅ No external dependencies

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Latest  |
| Firefox | Latest  |
| Safari  | Latest  |
| Edge    | Latest  |
| iOS Safari | Latest |
| Chrome Mobile | Latest |

## 📚 Documentation

Detailed documentation can be found in the [docs](./docs/) directory:
- [Technical Documentation](./docs/README.md)

## 🎯 Performance Features

1. **Optimized Loading**
   - Lazy loading for images
   - Minimal external dependencies
   - Optimized asset sizes

2. **Code Efficiency**
   - DOM element caching
   - Event delegation where appropriate
   - Debounced/throttled operations

3. **Best Practices**
   - Semantic HTML for better parsing
   - CSS containment for layout
   - Efficient selectors

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- Proper color contrast
- Focus indicators
- Alt text for all images

## 🔒 Security

- No inline JavaScript
- Content Security Policy ready
- No external dependencies (zero npm packages in production)
- Input validation and sanitization

## 📝 License

Copyright © 2025 Foppeli. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## 👥 Team

Built with ❤️ by the Foppeli team

## 📞 Contact

For questions or support, please contact the Foppeli development team.

---

**Note**: This is a production-ready, enterprise-grade static website. All code follows industry best practices and modern web standards.
