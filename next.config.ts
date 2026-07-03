import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //add images.unsplash.com to the allowed image domains
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lifeatctas.s3.ap-south-1.amazonaws.com',
        // pathname: '/**',
      },
    ],
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "@radix-ui/react-slot"],
  },

  // Enable compression
  compress: true,

  // Output optimization
  output: "standalone",

  // PoweredBy header removal
  poweredByHeader: false,

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

        ],
      },
    ];
  },

  async redirects() {
    const redirectsConfig = require('./redirects-config.js');
    const additionalRedirects = [
      {
        source: '/portfolios/amazon-product-management',
        destination: '/portfolios/amazon-product-management-automation-platform',
        permanent: true,
      },
      {
        source: '/services/ecommerce-automation',
        destination: '/services/ecommerce-workflow-automation',
        permanent: true,
      },
    ];
    return [...redirectsConfig, ...additionalRedirects];
  },

  // Reduce JavaScript bundle size
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Split chunks for better caching
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            enforce: true,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
