# Build & Optimization Guide

This project keeps original source files for development and generates optimized versions for production.

## Development
Edit these files normally:
- `styles.css` (source CSS)
- `script.js` (source JavaScript)  
- `index.html` (uses source files)

## Production Optimization

### 1. Image Optimization (95K → 9.5K)
```bash
# Backup original
cp moon.jpg moon.jpg.backup

# Optimize (requires ImageMagick)
magick moon.jpg -resize 256x128 -quality 85 -strip moon.jpg
```

### 2. Minify CSS (5.4K → 5.2K)
Manually minify `styles.css` → `styles.min.css`:
- Remove comments and whitespace
- Shorten color codes (#ffffff → #fff)
- Compress selectors

### 3. Minify JavaScript (1.7K → 1.0K)  
Manually minify `script.js` → `script.min.js`:
- Remove comments and whitespace
- Shorten variable names
- Compress code structure

### 4. Switch to Production Files
In `index.html`, change:
```html
<!-- Development -->
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>

<!-- Production -->
<link rel="stylesheet" href="styles.min.css">  
<script src="script.min.js"></script>
```

## Security & Production Checklist

### Files to EXCLUDE from production:
```bash
# Remove development files before deploying
rm .DS_Store moon.jpg.backup build.md
rm *.min.css *.min.js  # if using source files
```

### Current Optimizations Applied
- ✅ Enhanced privacy headers (no-referrer, strict CSP)
- ✅ Image optimized (95K → 9.5K saved)
- ✅ Minified CSS/JS available
- ✅ `robots.txt` prevents indexing
- ✅ No external dependencies
- ✅ Mobile responsive design
- ✅ Email obfuscation
- ✅ Strong Content Security Policy 