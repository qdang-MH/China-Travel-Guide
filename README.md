# China in Autumn — Edition 1 Local Images

This release removes every external image dependency.

All destination, gallery, hero, and Food Atlas images are stored inside:
`assets/images/local/`

Why:
- Wikimedia redirect URLs failed.
- Direct Wikimedia URLs also failed on the published GitHub Pages site.
- Local files are the only reliable option.

Verification:
- Zero external `<img>` references
- Every local image path checked
- See `docs/verification-local-images.json`

After installing, delete the old site files first, copy this complete
package, commit, push, wait for GitHub Pages to rebuild, then use Ctrl+F5.
