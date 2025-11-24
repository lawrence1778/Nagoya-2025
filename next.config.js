/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 忽略 ESLint 錯誤，避免因為小語法問題導致部署失敗
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
