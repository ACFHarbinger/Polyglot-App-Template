/** @type {import('next').NextConfig} */
const nextConfig = {
  // Override basePath when deploying under a GitHub Pages project site.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  // Static export suitable for GitHub Pages / object storage.
  output: 'export',

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },

  // Multi-framework islands (Vue/Aurelia) load client-only; keep webpack hooks
  // available for template consumers (see docs/moon research on polyglot hosts).
  reactStrictMode: true,
  transpilePackages: [],
};

module.exports = nextConfig;
