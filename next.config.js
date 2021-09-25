module.exports = {
  reactStrictMode: true,
  rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: 'https://legacy.gaiafamily.com/:path*',
        },
      ],
    }
  },
}
