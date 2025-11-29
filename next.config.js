/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['your-project-id.supabase.co'],
  },
}

module.exports = nextConfig
