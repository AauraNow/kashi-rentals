# Deployment Guide - Varanasi Bike Rental

## Quick Start - Vercel Deployment (5 minutes)

Vercel is the recommended platform for deploying Next.js applications.

### Method 1: Deploy from GitHub (Recommended)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: **Next.js**
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Configure Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your domain (e.g., `varanasibikerental.com`)
   - Update DNS records as shown by Vercel
   - SSL certificate auto-configured

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Alternative Deployment Platforms

### Netlify

1. **Via GitHub**
   - Connect repository on [netlify.com](https://netlify.com)
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Via CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Self-Hosted (VPS/Dedicated Server)

#### Using PM2 (Node.js Process Manager)

```bash
# Install PM2
npm install -g pm2

# Build project
npm run build

# Start with PM2
pm2 start npm --name "varanasi-rental" -- start

# Save PM2 configuration
pm2 save

# Set up PM2 to run on system startup
pm2 startup
```

#### Using Nginx as Reverse Proxy

1. **Install Nginx**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. **Configure Nginx** (`/etc/nginx/sites-available/varanasibikerental`)
   ```nginx
   server {
       listen 80;
       server_name varanasibikerental.com www.varanasibikerental.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Enable site and restart Nginx**
   ```bash
   sudo ln -s /etc/nginx/sites-available/varanasibikerental /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

4. **Set up SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d varanasibikerental.com -d www.varanasibikerental.com
   ```

## Environment Setup

### Production Environment Variables

Create `.env.production` file:

```env
# Base URL (update with your domain)
NEXT_PUBLIC_BASE_URL=https://varanasibikerental.com

# API Configuration (for future FastAPI integration)
NEXT_PUBLIC_API_URL=https://api.varanasibikerental.com

# Contact Information
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_BUSINESS_EMAIL=contact@varanasibikerental.com
NEXT_PUBLIC_BUSINESS_PHONE=+919876543210

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Build Optimization

```bash
# Analyze bundle size
npm run build
npm run analyze

# Check for production issues
npm run lint
```

## Post-Deployment Checklist

### SEO & Performance

- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Verify robots.txt: `https://yourdomain.com/robots.txt`
- [ ] Test page speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check mobile-friendliness with [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Verify structured data with [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Set up Google Analytics
- [ ] Set up Google Tag Manager (optional)

### Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property (domain or URL prefix)
3. Verify ownership (via DNS or HTML file)
4. Submit sitemap: `https://varanasibikerental.com/sitemap.xml`
5. Monitor indexing status

### Google Business Profile

1. Create/Claim Google Business Profile
2. Add accurate location (Varanasi)
3. Add business hours, phone, website
4. Upload photos of vehicles
5. Encourage customer reviews

### Local SEO

- [ ] Register on JustDial
- [ ] Register on Sulekha
- [ ] Register on IndiaMart (if applicable)
- [ ] Add business to Google Maps
- [ ] Get listed on TripAdvisor

## Monitoring & Maintenance

### Set Up Uptime Monitoring

Use services like:
- [UptimeRobot](https://uptimerobot.com) (Free)
- [Pingdom](https://pingdom.com)
- [StatusCake](https://statuscake.com)

### Analytics Setup

```typescript
// app/layout.tsx - Add Google Analytics
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### Regular Maintenance

- **Weekly**: Check Google Search Console for errors
- **Bi-weekly**: Add new blog posts
- **Monthly**: Update pricing if changed
- **Quarterly**: Review and update content

## Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Deployment Fails on Vercel

- Check build logs in Vercel dashboard
- Verify all dependencies in package.json
- Ensure Node version matches (18+)
- Check environment variables

### SEO Not Working

- Wait 2-4 weeks for Google indexing
- Submit sitemap manually
- Check robots.txt isn't blocking
- Verify structured data markup

## Performance Optimization

### Image Optimization

```bash
# Install sharp for optimized images
npm install sharp
```

### Bundle Size Reduction

```javascript
// next.config.mjs
const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
```

## Support

For deployment issues:
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/next.js/discussions

---

**Last Updated**: 2024
**Next.js Version**: 14.2.0
