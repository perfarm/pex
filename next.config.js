const nextPWA = require('next-pwa');

const withPWA = nextPWA({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  compiler: {
    removeConsole: false,
  },
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'atomic-public.s3-sa-east-1.amazonaws.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'atomic-public.s3.sa-east-1.amazonaws.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 's3-sa-east-1.amazonaws.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 's3.sa-east-1.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
