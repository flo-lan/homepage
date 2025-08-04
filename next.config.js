/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin')

const nextConfig = {
  reactStrictMode: true,
}

const withNextIntl = createNextIntlPlugin()
module.exports = withNextIntl(nextConfig)
