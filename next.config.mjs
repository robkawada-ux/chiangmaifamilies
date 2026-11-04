/** @type {import('next').NextConfig} */

// chiangmaifamilies.com is a new domain, so there are no legacy URLs to
// redirect yet. The Bangkok redirect map inherited from bkkfamilies was
// removed. Add { source, destination } pairs here if a page is ever moved.
const redirectMap = [];

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    return redirectMap.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
