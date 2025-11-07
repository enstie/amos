# Pixillab Luxury Videography & Photography Website

A modern, luxury-themed React static website for a videography and photography business, built with Vite, React, Framer Motion, and a gold/dark design system.

## 🌟 Features

- **Modern Tech Stack**: Vite + React for blazing-fast development and builds
- **Luxurious Design**: Dark background (#0e0f11) with gold gradient accents
- **Smooth Animations**: Page transitions, parallax effects, and hover interactions using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation, focus states
- **SEO Optimized**: React Helmet for meta tags and page titles
- **Code Splitting**: Lazy loading for optimal performance
- **Portfolio Management**: Video and photo galleries with lightbox functionality

## 📁 Project Structure

```
lux-site/
├── public/
│   └── assets/           # Static assets (logo, images, videos)
├── src/
│   ├── components/       # Reusable React components
│   │   ├── NavBar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Section.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── VideoCard.jsx
│   │   ├── ImageGrid.jsx
│   │   ├── MediaLightbox.jsx
│   │   └── Preloader.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── data/             # Data files
│   │   └── portfolio.js  # Portfolio media data
│   ├── styles/           # Global styles
│   │   ├── theme.css     # Design system variables
│   │   └── global.css    # Global styles
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd lux-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Design System

The design system is defined in `src/styles/theme.css`. Key variables:

- **Colors**:
  - Background: `--bg-primary`, `--bg-secondary`, `--bg-elevated`
  - Gold accents: `--gold-light`, `--gold-mid`, `--gold-dark`
  - Text: `--text-primary`, `--text-secondary`, `--text-muted`

- **Typography**:
  - Headings: Cormorant Garamond (`--font-heading`)
  - Body: Inter (`--font-body`)

- **Spacing**: `--spacing-xs` through `--spacing-3xl`

### Replacing Placeholder Media

1. **Logo**: Add your logo to `public/assets/logo.svg` and update `index.html`

2. **Hero Images/Videos**: Replace placeholder images in page components:
   - Optimize images to WebP or AVIF format
   - Recommended hero image size: 1920x1080px
   - Add `loading="lazy"` for images below the fold

3. **Portfolio Media**: Edit `src/data/portfolio.js`:
   - Replace placeholder URLs with your actual media
   - Update titles, descriptions, and categories
   - For videos, provide thumbnail images

### Contact Form Setup

The contact form supports two methods:

#### Option 1: Formspree (Recommended)

1. Sign up at [Formspree](https://formspree.io)
2. Create a new form and get your endpoint URL
3. Create a `.env` file in the project root:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

#### Option 2: Netlify Forms

If deploying to Netlify, the form automatically works with Netlify Forms (no configuration needed).

### Social Media Links

Update social media links in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## 📱 Pages

- **Home**: Hero section with tagline, featured services, and call-to-action
- **About**: Company story, achievements, philosophy
- **Portfolio**: Video gallery and filterable photo gallery with lightbox
- **Services**: Service offerings with detailed feature lists
- **Contact**: Contact form, business details, map, and social links

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Skip to content link
- Responsive touch targets (minimum 44x44px)
- ESC key to close lightbox

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables if using Formspree

### Vercel

1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables if needed

### GitHub Pages

1. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to GitHub Pages

## ⚡ Performance Tips

1. **Image Optimization**:
   - Use WebP or AVIF formats
   - Compress images before uploading
   - Use responsive images with `srcset`
   - Add `loading="lazy"` to below-the-fold images

2. **Video Optimization**:
   - Compress videos using H.264 codec
   - Provide poster images for videos
   - Consider hosting large videos on services like Vimeo or YouTube

3. **Code Splitting**:
   - Already implemented via React.lazy()
   - Add more route-level code splitting as needed

4. **Caching**:
   - Configure cache headers in your hosting provider
   - Use CDN for static assets

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router DOM 6
- **Animations**: Framer Motion 10
- **Icons**: React Icons 4
- **SEO**: React Helmet Async 2
- **Styling**: CSS with CSS Variables

## 📝 License

This project is proprietary and confidential.

## 🤝 Support

For questions or support, please contact hello@pixillab.com

## 🎯 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📊 Performance Checklist

- [x] Code splitting implemented
- [x] Lazy loading for images
- [x] Optimized bundle size
- [x] CSS minification
- [x] Tree shaking enabled
- [ ] Replace placeholder media with optimized assets
- [ ] Configure CDN for assets
- [ ] Add service worker (optional)
- [ ] Implement progressive image loading (optional)

## 🔧 Development Tips

1. Use browser DevTools for debugging
2. Test on multiple devices and browsers
3. Use Lighthouse for performance audits
4. Keep dependencies updated
5. Follow React best practices

## 📈 Future Enhancements

- [ ] Add blog section
- [ ] Implement pricing calculator
- [ ] Add client testimonials
- [ ] Create admin panel for content management
- [ ] Add multi-language support
- [ ] Integrate with CRM system
- [ ] Add live chat support
- [ ] Implement booking system

---

**Made with ♥ for Pixillab**
