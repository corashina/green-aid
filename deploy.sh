#!/bin/bash

# Green Aid Deployment Script
# This script builds and deploys your website

set -e  # Exit on any error

echo "🚀 Starting deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully!"

# Display build info
echo "📁 Build output:"
ls -la dist/

echo ""
echo "🎯 Next steps:"
echo "1. Upload the contents of the 'dist' folder to your web hosting provider"
echo "2. Ensure your domain points to your hosting provider"
echo "3. Test your website at your domain"

# Optional: Upload to server (uncomment and configure if needed)
# echo "📤 Uploading to server..."
# rsync -avz --delete dist/ user@your-server:/path/to/web/root/
# echo "✅ Upload complete!"

echo ""
echo "🎉 Deployment script completed!"
echo "Your website is ready to be uploaded to your hosting provider."
