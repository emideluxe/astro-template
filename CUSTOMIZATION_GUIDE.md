# City Walks Template - Customization Guide

This guide will help you customize the City Walks template for your own city walking website.

## 🚀 Quick Start

1. **Site Configuration**: Edit `src/consts.ts`
2. **Add Cities**: Create files in `src/content/cities/`
3. **Add Walks**: Create files in `src/content/walks/`
4. **Customize Navigation**: Edit `src/components/Header.astro`
5. **Update Homepage**: Edit `src/pages/index.astro`

---

## 📝 1. Text and Content Customization

### Site-wide Settings
- **File**: `src/consts.ts`
- **What to change**: Site title, description, and any global constants

```typescript
export const SITE_TITLE = 'Your City Walks';
export const SITE_DESCRIPTION = 'Your custom description';
```

### Homepage Content
- **File**: `src/pages/index.astro`
- **What to change**: 
  - Hero section headline and subtext
  - Features section (icons, titles, descriptions)
  - Section titles
  - Call-to-action button text

### About & Contact Pages
- **Files**: `src/pages/about.astro`, `src/pages/contact.astro`
- **What to change**: All content is in markdown format within the files

---

## 🏙️ 2. Adding Cities

### Create a New City
1. Create a new file: `src/content/cities/your-city-name.md`
2. Use this template:

```markdown
---
name: Your City Name
country: Your Country
description: A brief description of walking in this city
image: /images/your-city-hero.jpg
totalWalks: 0
---

Your city content goes here. Describe what makes this city special for walking.
```

### Required Fields
- `name`: Display name of the city
- `country`: Country where the city is located
- `description`: Short description for cards

### Optional Fields
- `image`: Hero image path (add images to `public/` folder)
- `totalWalks`: Number of walks (can be auto-calculated)

---

## 🚶 3. Adding Walks

### Create a New Walk
1. Create a new file: `src/content/walks/your-walk-name.md`
2. Use this template:

```markdown
---
title: Your Walk Title
description: A brief description of this walk
city: your-city-name  # Must match the city file name
duration: 2 hours
distance: 5 km
difficulty: easy  # Options: easy, moderate, challenging
startPoint: Starting location
endPoint: Ending location
highlights:
  - First attraction
  - Second attraction
  - Third attraction
coverImage: /images/walks/your-walk.jpg
updatedDate: 2024-01-15
---

## Walk Description

Your detailed walk description goes here using markdown.

### Route Details
- Step-by-step directions
- What to look for
- Tips for walkers

### Points of Interest
1. **First Stop** - Description
2. **Second Stop** - Description
```

### Required Fields
- `title`: Walk name
- `description`: Short description for cards
- `city`: Must match a city file name (without .md)
- `duration`: How long the walk takes
- `distance`: Total walking distance
- `difficulty`: easy, moderate, or challenging
- `startPoint`: Where the walk begins
- `endPoint`: Where the walk ends
- `highlights`: Array of key attractions

---

## 🍽️ 4. Adding New Page Types

### Create a New Content Type (e.g., Restaurants)

1. **Add to content config** (`src/content.config.ts`):
```typescript
const restaurants = defineCollection({
  loader: glob({ base: './src/content/restaurants', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    cuisine: z.string(),
    priceRange: z.string(),
    // ... other fields
  }),
});

export const collections = { walks, cities, restaurants };
```

2. **Create content folder**: `src/content/restaurants/`

3. **Create page template**: `src/pages/restaurants/[restaurant].astro`

4. **Create component**: `src/components/RestaurantCard.astro`

5. **Add to navigation** in `src/components/Header.astro`

---

## 🗺️ 5. Maps and Coordinates

### OpenStreetMap Integration

The template uses embedded OpenStreetMap iframes. To customize:

1. **For specific coordinates**:
   - Go to [OpenStreetMap.org](https://www.openstreetmap.org/)
   - Navigate to your location
   - Click "Share" → "HTML"
   - Copy the iframe src URL

2. **Dynamic maps per city**:
   Add coordinates to your city content files:
   ```markdown
   ---
   name: London
   coordinates:
     lat: 51.5074
     lng: -0.1278
   ---
   ```

3. **Walk route maps**:
   - Add `mapImage` field to walk content
   - Store map images in `public/images/maps/`
   - Create route maps using tools like:
     - [AllTrails](https://www.alltrails.com/)
     - [Strava Route Builder](https://www.strava.com/routes)
     - [GPX Editor](https://gpx.studio/)

### Adding Waypoints
To add waypoints to walks:

1. **Extend walk schema** in `src/content.config.ts`:
```typescript
waypoints: z.array(z.object({
  name: z.string(),
  lat: z.number(),
  lng: z.number(),
  description: z.string(),
})).optional(),
```

2. **Add waypoints to walk content**:
```markdown
waypoints:
  - name: Tower Bridge
    lat: 51.5055
    lng: -0.0754
    description: Starting point of the walk
```

---

## 🧭 6. Menu Structure

### Navigation Customization
- **File**: `src/components/Header.astro`

### Add Static Menu Items
```astro
<HeaderLink href="/your-page">Your Page</HeaderLink>
```

### Add Dropdown Menus
Copy the cities dropdown pattern:
```astro
<div class="dropdown">
  <button class="dropdown-toggle">
    Your Category
    <svg>...</svg>
  </button>
  <div class="dropdown-menu">
    {yourItems.map((item) => (
      <a href={`/your-category/${item.id}`}>{item.name}</a>
    ))}
  </div>
</div>
```

### Social Links
Update the social links section:
```astro
<div class="social-links">
  <a href="https://your-social-profile" target="_blank">
    <span class="sr-only">Platform Name</span>
    <!-- Add your SVG icon here -->
  </a>
</div>
```

---

## 🎨 7. Images and Assets

### Image Locations
- **Public images**: `public/images/` (accessible at `/images/...`)
- **Hero images**: For cities and walks
- **Icons**: SVG icons in components

### Image Optimization Tips
1. **Use WebP format** for better compression
2. **Optimize sizes**: 
   - Hero images: 1200x600px
   - City cards: 400x240px
   - Walk cards: 320x200px
3. **Add alt text** for accessibility

### Adding Images
1. Add image files to `public/images/`
2. Reference in content: `image: /images/your-image.jpg`
3. Update image paths in components if needed

---

## 🔧 8. Advanced Customization

### Styling
- **Global styles**: `src/styles/global.css`
- **Component styles**: Within each `.astro` file
- **Colors**: Update CSS custom properties

### Adding New Fields
1. Update content schema in `src/content.config.ts`
2. Update component props
3. Update page templates
4. Add to forms/UI as needed

### SEO and Meta Tags
- **Base meta tags**: `src/components/BaseHead.astro`
- **Page-specific**: Add to page frontmatter

---

## 📱 9. Mobile Responsiveness

The template is already mobile-responsive, but you can customize:

- **Breakpoints**: Adjust CSS media queries
- **Grid layouts**: Modify grid-template-columns
- **Navigation**: Mobile menu behavior in Header component

---

## 🚀 10. Deployment

### Build and Test
```bash
npm run build
npm run preview
```

### Deployment Options
- **Netlify**: Connect your repo and deploy
- **Vercel**: Import project and deploy
- **GitHub Pages**: Use GitHub Actions
- **Static hosting**: Upload `dist/` folder

---

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API)
- [MDX for rich content](https://mdxjs.com/)
- [Zod for schema validation](https://zod.dev/)

---

## 🆘 Need Help?

Common issues and solutions:

1. **Build errors**: Check content file formatting
2. **Images not showing**: Verify paths and file locations
3. **Menu not updating**: Clear cache and rebuild
4. **Map not loading**: Check iframe URL format

For more help, check the comments in the source code files!