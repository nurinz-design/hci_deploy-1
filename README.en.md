# English/Korean Learning App 📚

> **Language**: [한국어](README.md) | [English](#)

A simple learning app that can be deployed instantly without npm!

## Project Features

- ✅ No npm installation required
- ✅ Uses only HTML, CSS, JavaScript
- ✅ Bidirectional English/Korean learning
- ✅ Responsive design
- ✅ Keyboard shortcuts support

## Deployment Guide

### 1️⃣ Deploy with Vercel

#### Method A: GitHub Integration
1. Upload this project to GitHub
2. Visit [Vercel](https://vercel.com) and login
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy" → Done!

#### Method B: Using Vercel CLI
```bash
# Install Vercel CLI (one time only)
npm install -g vercel

# Run in project folder
vercel
```

### 2️⃣ Deploy with Railway

#### Method A: GitHub Integration
1. Upload this project to GitHub
2. Visit [Railway](https://railway.app) and login
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Click "Deploy Now" → Done!

#### Method B: Using Railway CLI
```bash
# Install Railway CLI (one time only)
npm install -g @railway/cli

# Login
railway login

# Deploy project
railway init
railway up
```

### 3️⃣ Test Locally

Simply open the file in your browser:
```bash
# Method 1: Double-click
Double-click the index.html file

# Method 2: Python server (if available)
python -m http.server 8000

# Method 3: Use VS Code Live Server extension
```

## How to Use

### Basic Usage
- **Next Word**: Click "Next Word" button
- **Flip**: Click "Flip" button to see translation
- **Switch Language**: Click 🌐 button in top right
- **Select Word**: Click word in the list below

### Keyboard Shortcuts
- `Space` or `→`: Next word
- `↑` or `↓`: Flip card
- `L`: Switch language

## File Structure

```
test_deploy/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript logic
├── vercel.json         # Vercel configuration
├── .railwayignore      # Railway configuration
├── README.md           # Korean README
└── README.en.md        # This file
```

## Customization

### Adding Words

Add to the `words` array in [script.js](script.js):

```javascript
const words = [
    { korean: '안녕하세요', english: 'Hello' },
    { korean: '새로운 단어', english: 'New Word' },  // Add here
    // ...
];
```

### Changing Colors

Modify the gradient in [style.css](style.css):

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Change to your preferred colors */
```

## Deployment Checklist

After deployment, verify:
- ✅ Page loads correctly
- ✅ Language toggle works
- ✅ Next word button works
- ✅ Flip function works
- ✅ Mobile view looks good

## Troubleshooting

### Vercel
- If deployment fails: Check [vercel.json](vercel.json) file
- If page doesn't show: Review build logs

### Railway
- If deployment fails: Verify GitHub integration
- 500 error: Check static site settings

## Student Practice Steps

1. **Local Test**: Open index.html in browser to verify functionality
2. **GitHub Upload**: Push project to GitHub
3. **Vercel Deploy**: Connect GitHub repo in Vercel
4. **Railway Deploy**: Connect same repo in Railway
5. **Compare**: Compare deployment process and results of both platforms

## Extension Ideas

- 📝 User-added custom words feature
- 🎯 Quiz mode
- 📊 Save learning progress (LocalStorage)
- 🔊 Pronunciation audio (Web Speech API)
- 🌙 Dark mode toggle

---

Created by: Claude | Purpose: Deployment Practice Project
