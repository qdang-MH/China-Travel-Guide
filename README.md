# China Luxury Travel Companion
## Version 9.5 — Real Autumn Photography

This full-site snapshot replaces the illustrated autumn cards on the
homepage and Trip 1 overview with real photographs.

### Real photographs used
- Huangshan region, Anhui — autumn landscape
- Tianmen Mountain, Zhangjiajie — red autumn leaves
- Chengdu, Sichuan — golden autumn foliage

### Source and licensing
The photographs are free to use under the Unsplash License. Each card links
to its source page, and a full credits page is available at:
`docs/autumn-photo-credits.html`

### Reliability note
The photos are loaded from Unsplash rather than bundled locally because the
image server delivered a modern image format during packaging. Each card has
a graceful fallback and source link if an image cannot load.

### Installation
Replace the repository contents, commit, and push. Then refresh the homepage
with Ctrl + F5.
