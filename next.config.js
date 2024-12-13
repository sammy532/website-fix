/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
        unoptimized: true
    },
  env: {
    NEXT_PUBLIC_MY_EMAIL: 'support@travenue.org',
    RESEND_API_KEY: 're_HmLBwmKv_55aMDDxiFJbWbJkLLaVKnmFo',
  },
  async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://travenue.org/:path*',
          },
        ]
      },
  async headers() {
    return [
      {
        // Routes this applies to
        source: "/api/email",
        // Headers
        headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "https://www.travenue.org/*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ],
      },
    ];
  },
}

module.exports = nextConfig
