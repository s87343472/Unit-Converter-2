const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // 指向 Next.js 应用的路径
  dir: './',
})

// Jest 的自定义配置
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

// createJestConfig 会异步地加载和解析 next.config.js 并将其合并到配置中
module.exports = createJestConfig(customJestConfig) 