# Project Shortlist & Roadmap

## 🚀 Immediate Improvements (Refinement & Polish)
These are action items to elevate the current codebase to a production-ready "Perfect" state.

### 🎨 Visual Consistency
- [ ] **Services Section Gradient**: The "Our Expertise" text uses a dull gray gradient. Update it to the "Blue-Purple-Pink" brand gradient for consistency.
- [ ] **Mobile Spacing**: The `gap-16` between project cards on mobile is too large. Reduce to `gap-6` or `gap-8` to match the tighter desktop layout.
- [ ] **Testimonials Alignment**: Ensure the testimonial carousel has consistent padding on ultra-wide screens.

### ⚡ Performance & Best Practices
- [ ] **Image Optimization**: Replace standard `<img>` tags in `ServicesSection` and `TestimonialsSection` with `next/image` for automatic lazy loading, sizing, and format delivery (WebP/AVIF).
- [ ] **Unused CSS Cleanup**: `globals.css` likely has unused variable overrides from the shadcn/ui installation.
- [ ] **Remove Legacy Dependencies**: You have `sass` installed but are using Tailwind 4. Consider removing if not strictly needed.

### 🧩 Functionality
- [ ] **Chat Widget "Send" Simulation**: Currently just adds to state. Add a "success" sound effect or a visual confetti pop for better feedback.
- [ ] **Footer Links**: Ensure all social links open in `_blank` with `rel="noopener noreferrer"` (already done for some, verify all).
- [ ] **Resume Download**: Verify the `resume.pdf` file actually exists in the `public` folder.

---

## 🔮 Future Updates (Feature Roadmap)
Ideas to take the portfolio to the next level (v2.0).

### 🛠️ Technical Upgrades
- [ ] **CMS Integration**: Connect `Projects` to a headless CMS (Sanity.io or Contentful) so you can add new projects without deploying code.
- [ ] **PWA Support**: precise manifest.json and service workers so users can "install" the portfolio as an app.
- [ ] **Dark/Light Mode Toggle**: Currently locked to Dark Mode. Add a toggle if you want to support Light Mode (though Cyberpunk works best in Dark).

### ✨ New Sections/Pages
- [ ] **"Writing" / Blog Section**: A space to share technical articles or tutorials.
- [ ] **Detailed Project Views**: Click a project card to open a full `/projects/[slug]` page with case studies, architecture diagrams, and more screenshots.
- [ ] **"Playground"**: A page dedicated to isolated WebGL/Three.js experiments that don't fit in the main flow.

### 📈 SEO & Analytics
- [ ] **Sitemap & Robots.txt**: standard SEO setup.
- [ ] **Open Graph Images**: Dynamic social preview images for sharing links.
- [ ] **Analytics**: Integrate Vercel Analytics or Google Analytics 4.
