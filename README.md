# China in Autumn — Edition 1 Visual Fix

This release fixes Wuzhen and Hongcun images that failed to appear on
GitHub Pages.

## Cause
The previous version used Wikimedia Commons `Special:FilePath` redirect
URLs. Those redirects did not load reliably from the published site.

## Fix
All Wikimedia image references now use direct `upload.wikimedia.org`
thumbnail URLs. This includes:
- Homepage visual cards
- Wuzhen chapter hero and gallery
- Hongcun chapter hero and gallery
- Hangzhou and Huangshan visual galleries
- Food Atlas photographed cards

## Verification
See `docs/verification-visual-fix.json`.

After pushing, use Ctrl + F5 to bypass the browser cache.
