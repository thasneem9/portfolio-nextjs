/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // GitHub Pages doesn't support dynamic image optimization
    },
    basePath: '/portfolio-nextjs', 
    assetPrefix: '/portfolio-nextjs/', 
    trailingSlash: true,
  };
  
  export default nextConfig;
  