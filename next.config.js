/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // 自定义webpack配置
    return config
  }
}

module.exports = nextConfig 