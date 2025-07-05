# 🚀 Deploying Yum-Yum Food Delivery to Vercel

**Built by Shubhranshu Pandey**

## Prerequisites
- [Vercel CLI](https://vercel.com/cli) installed
- GitHub account
- Vercel account

## Step-by-Step Deployment Guide

### 1. Install Vercel CLI (if not already installed)
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy to Vercel
```bash
vercel
```

### 4. Follow the prompts:
- Set up and deploy? → **Y**
- Which scope? → Select your account
- Link to existing project? → **N**
- What's your project's name? → **yum-yum-food-delivery** (or your preferred name)
- In which directory is your code located? → **./** (current directory)
- Want to override the settings? → **N**

### 5. Alternative: Deploy via GitHub
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a React app
6. Click "Deploy"

## Environment Configuration

The app automatically detects the environment:
- **Development**: Uses local proxy server (`http://localhost:3001`)
- **Production**: Uses Vercel's API routes (`/api/swiggy/*`, `/api/github/*`)

## API Endpoints

### Production URLs (after deployment):
- Swiggy API: `https://your-app.vercel.app/api/swiggy/*`
- GitHub API: `https://your-app.vercel.app/api/github/*`

### Development URLs (local):
- Swiggy API: `http://localhost:3001/api/swiggy/*`
- GitHub API: `http://localhost:3001/api/github/*`

## Troubleshooting

### If you encounter CORS issues:
1. Make sure the `vercel.json` file is in your project root
2. Check that API calls are using the correct endpoints
3. Verify the Vercel function is working: `https://your-app.vercel.app/api/proxy`

### If build fails:
1. Check that all dependencies are in `package.json`
2. Ensure `parcel` is in `devDependencies`
3. Verify the build script: `"vercel-build": "parcel build index.html"`

## Post-Deployment

After successful deployment:
1. Your app will be available at `https://your-app.vercel.app`
2. Vercel will provide you with a custom domain
3. You can set up a custom domain in the Vercel dashboard
4. Automatic deployments will happen on every push to your main branch

## Local Development

For local development, you can still use:
```bash
npm start          # Start React dev server
npm run proxy      # Start local proxy server (optional for development)
```

## Features After Deployment

✅ **CORS Handling**: Automatic CORS headers for all API calls
✅ **API Proxying**: Seamless proxy to Swiggy and GitHub APIs
✅ **Static Optimization**: Optimized build for production
✅ **CDN**: Global CDN for fast loading
✅ **HTTPS**: Automatic SSL certificates
✅ **Auto-deploy**: Deploy on every git push

## Author Information

**Built by Shubhranshu Pandey**
- Email: shubhranshu2192@gmail.com
- Phone: +91 9169238044
- GitHub: [github.com/shubhranshu-pandey](https://github.com/shubhranshu-pandey)
- LinkedIn: [linkedin.com/in/shubhranshu-pandey21](https://www.linkedin.com/in/shubhranshu-pandey21/)

---

*This project showcases modern web development practices using React, Redux, and Tailwind CSS.* 