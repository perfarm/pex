const nextPWA = require('next-pwa');

const withPWA = nextPWA({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false,
  },
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = withPWA(nextConfig);
