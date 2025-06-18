# 🚶‍♀️ City Walks Template

A beautiful, responsive Astro template for creating city walking guide websites. Perfect for tourism boards, local guides, or walking enthusiasts who want to share curated urban routes.

## ✨ Features

- **🏙️ Multi-city support** with individual city pages
- **🗺️ Interactive OpenStreetMap integration**
- **📱 Fully responsive design** for all devices
- **🧭 Dynamic navigation** with city dropdown menus
- **⚡ Fast static site generation** with Astro
- **📝 Markdown content management** for easy editing
- **🎨 Modern, clean design** with customizable styling
- **🔍 SEO optimized** with proper meta tags

## 🚀 Quick Start

1. **Clone and install**:
   ```bash
   npm install
   npm run dev
   ```

2. **Customize your site**:
   - Edit `src/consts.ts` for site title and description
   - Add cities in `src/content/cities/`
   - Add walks in `src/content/walks/`

3. **Build and deploy**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro    # Navigation (customize menu here)
│   ├── CityCard.astro  # City preview cards
│   └── WalkCard.astro  # Walk preview cards
├── content/            # Content management
│   ├── cities/         # City information files
│   └── walks/          # Walking route files
├── layouts/            # Page layouts
├── pages/              # Site pages
│   ├── index.astro     # Homepage (customize hero & features)
│   ├── cities/         # City pages
│   └── walks/          # Individual walk pages
└── consts.ts          # Site configuration
```

## 🎯 Customization Guide

### 1. **Text & Images**
- **Site title/description**: `src/consts.ts`
- **Homepage content**: `src/pages/index.astro`
- **About/Contact pages**: `src/pages/about.astro`, `src/pages/contact.astro`
- **Images**: Add to `public/images/` folder

### 2. **Adding New Cities**
Create `src/content/cities/your-city.md`:
```markdown
---
name: Your City
country: Your Country  
description: Brief description
image: /images/your-city.jpg
---
Your city content here...
```

### 3. **Adding New Walks**
Create `src/content/walks/your-walk.md`:
```markdown
---
title: Your Walk Name
description: Brief description
city: your-city  # Must match city file name
duration: 2 hours
distance: 5 km
difficulty: easy
startPoint: Start location
endPoint: End location
highlights:
  - First highlight
  - Second highlight
---
Your walk content here...
```

### 4. **Maps & Waypoints**
- **Current**: Uses OpenStreetMap iframes
- **Customize**: Get embed codes from [OpenStreetMap.org](https://www.openstreetmap.org/)
- **Dynamic maps**: Add coordinates to city content files
- **Route maps**: Add `mapImage` field to walks

### 5. **Menu Structure**
Edit `src/components/Header.astro`:
- Add new menu items with `<HeaderLink>`
- Create new dropdown menus following the cities pattern
- Update social links

### 6. **New Page Types**
See `CUSTOMIZATION_GUIDE.md` for detailed instructions on adding restaurants, hotels, events, etc.

## 🛠️ Built With

- **[Astro](https://astro.build/)** - Static site generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Zod](https://zod.dev/)** - Content validation
- **[OpenStreetMap](https://www.openstreetmap.org/)** - Interactive maps

## 📖 Documentation

- **Full customization guide**: See `CUSTOMIZATION_GUIDE.md`
- **Content examples**: Check existing files in `src/content/`
- **Component documentation**: Inline comments in source files

## 🔧 Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production in `dist/` |
| `npm run preview` | Preview build locally |

## 🚀 Deployment

This template works with any static hosting service:

- **Netlify**: Connect repo and deploy automatically
- **Vercel**: Import project and deploy
- **GitHub Pages**: Use GitHub Actions workflow
- **Traditional hosting**: Upload `dist/` folder

## 📝 Content Management

The template uses file-based content management:

- **Easy editing**: All content in Markdown files
- **Type safety**: Content validated with Zod schemas
- **No database**: Files stored in your repository
- **Version control**: Track changes with Git

## 🎨 Styling

- **Modern CSS**: Clean, responsive design
- **Customizable**: Edit styles in component files
- **Mobile-first**: Responsive breakpoints included
- **Accessible**: Proper ARIA labels and semantic HTML

## 🤝 Contributing

Contributions welcome! Please read the customization guide first to understand the project structure.

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

**Need help?** Check the detailed comments in the source code files or refer to `CUSTOMIZATION_GUIDE.md` for step-by-step instructions.