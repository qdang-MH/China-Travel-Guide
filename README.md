# China Luxury Travel Companion
## Version 9.2 — Exact Food Gallery & Autumn Showcase

This full-site snapshot fixes two issues:

### Food Guide fix
- The central `docs/food.html` page now begins with four visibly different
  Shanghai dish photographs.
- Each image uses a different local filename.
- Filenames are displayed on the page for easy verification.
- Image URLs include a cache-busting `?v=92` suffix.
- The Shanghai showcase uses the same distinct local files.

### Autumn showcase
- A prominent November/autumn section appears on the homepage.
- The Trip 1 overview also includes the autumn section.
- Three local autumn-inspired images cover Huangshan, Zhangjiajie, and Chengdu.
- The guide clearly notes that exact foliage timing varies each year.

### Verification
See `docs/verification-v9.2.json`.

### Installation
Replace the full contents of the local GitHub repository, commit, and push.
After GitHub Pages rebuilds, use Ctrl + F5. Confirm the green banner at the
top of the Food Guide says “Version 9.2 food-photo update.”
