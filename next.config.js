/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/movies/:id',
            destination: '/movies/[id]',
          },
        ];
      }
}

module.exports = nextConfig