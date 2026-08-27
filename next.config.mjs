/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next-preview",
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
}

export default nextConfig
