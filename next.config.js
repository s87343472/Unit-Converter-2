const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_USE_NEW_SEO: process.env.NEXT_PUBLIC_USE_NEW_SEO,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  images: {
    domains: ['www.metric-converter.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  webpack: (config, { isServer }) => {
    // 自定义webpack配置
    return config
  },
  // 配置服务器端渲染，支持ISR
  output: 'standalone',
  distDir: '.next',
  // 增强生成配置
  staticPageGenerationTimeout: 300, // 增加静态页面生成超时时间（秒）
  generateBuildId: async () => {
    // 使用当前时间作为构建ID，确保每次构建都是全新的
    return `build-${new Date().toISOString().replace(/[^0-9]/g, '')}`;
  },
  // 配置增量静态再生成（ISR）
  experimental: {
    // 启用服务器组件
    serverComponentsExternalPackages: [],
  },
}

module.exports = withNextIntl(nextConfig) 