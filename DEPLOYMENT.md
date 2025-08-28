# Deployment Guide

This guide will help you set up automatic deployment for your Green Aid website.

## Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **Domain**: You need to own a domain name
3. **Hosting Provider**: Choose one of the hosting options below

## Option 1: GitHub Pages (Free)

### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repository → Settings → Pages
   - Set source to "GitHub Actions"
   - Add your custom domain in the "Custom domain" field

2. **Configure Domain**:
   - Edit `public/CNAME` and replace `your-domain.com` with your actual domain
   - Edit `.github/workflows/deploy.yml` and replace `your-domain.com` with your actual domain

3. **DNS Configuration**:
   - Add these DNS records to your domain provider:
     ```
     Type: CNAME
     Name: www (or @)
     Value: your-username.github.io
     ```
   - Add these records for apex domain support:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     Value: 185.199.109.153
     Value: 185.199.110.153
     Value: 185.199.111.153
     ```

4. **Deploy**:
   - Push to your main branch
   - GitHub Actions will automatically build and deploy

## Option 2: Netlify (Free tier available)

### Setup Steps:

1. **Create Netlify Account**:
   - Sign up at [netlify.com](https://netlify.com)
   - Connect your GitHub repository

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Custom Domain**:
   - Add your domain in Netlify dashboard
   - Update DNS records as instructed by Netlify

4. **Enable GitHub Actions**:
   - Uncomment the Netlify section in `.github/workflows/deploy.yml`
   - Add these secrets to your GitHub repository:
     - `NETLIFY_AUTH_TOKEN`: Get from Netlify dashboard
     - `NETLIFY_SITE_ID`: Get from Netlify dashboard

## Option 3: Vercel (Free tier available)

### Setup Steps:

1. **Create Vercel Account**:
   - Sign up at [vercel.com](https://vercel.com)
   - Import your GitHub repository

2. **Configure Build Settings**:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Custom Domain**:
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed by Vercel

4. **Enable GitHub Actions**:
   - Uncomment the Vercel section in `.github/workflows/deploy.yml`
   - Add these secrets to your GitHub repository:
     - `VERCEL_TOKEN`: Get from Vercel dashboard
     - `ORG_ID`: Get from Vercel dashboard
     - `PROJECT_ID`: Get from Vercel dashboard

## Option 4: Traditional Web Hosting

If you prefer traditional web hosting (cPanel, etc.):

1. **Build Locally**:
   ```bash
   npm run build
   ```

2. **Upload Files**:
   - Upload the contents of the `dist` folder to your hosting provider
   - Set your domain to point to the hosting provider

3. **Automate with Scripts**:
   - Create a deployment script (see `deploy.sh` below)

## Local Deployment Script

Create a `deploy.sh` script for manual deployment:

```bash
#!/bin/bash
echo "Building project..."
npm run build

echo "Uploading to server..."
# Replace with your server details
rsync -avz --delete dist/ user@your-server:/path/to/web/root/

echo "Deployment complete!"
```

## Environment Variables

For production builds, you might want to add environment variables:

1. Create `.env.production`:
   ```
   VITE_API_URL=https://your-api-domain.com
   VITE_APP_ENV=production
   ```

2. Update `vite.config.js` to use them:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     define: {
       __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
     }
   })
   ```

## Troubleshooting

### Common Issues:

1. **Build Fails**: Check Node.js version compatibility
2. **Domain Not Working**: Verify DNS records and wait for propagation
3. **Assets Not Loading**: Check base path in Vite config
4. **HTTPS Issues**: Most modern hosting providers handle this automatically

### Performance Tips:

1. **Enable Compression**: Most hosting providers do this automatically
2. **CDN**: Use a CDN for global distribution
3. **Caching**: Set appropriate cache headers for static assets

## Support

- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
