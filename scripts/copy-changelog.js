const fs = require('fs')
const path = require('path')

// 源文件和目标文件路径
const sourceFile = path.join(__dirname, '..', 'CHANGELOG.md')
const targetFile = path.join(__dirname, '..', 'public', 'CHANGELOG.md')

// 确保public目录存在
const publicDir = path.join(__dirname, '..', 'public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir)
}

// 复制文件
fs.copyFileSync(sourceFile, targetFile)
console.log('CHANGELOG.md has been copied to public directory') 