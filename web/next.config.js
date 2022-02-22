/** @type {import('next').NextConfig} */
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
const nextConfig = {
  reactStrictMode: true,
  basePath: prefix,
  assetPrefix: prefix,
  env: {
    BACKEND_URL: prefix,
}
}

module.exports = nextConfig
