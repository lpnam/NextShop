/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oqvilaqrbnbascvsynws.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/dataimage/**/**",
      },
    ],
  },
};

export default nextConfig;
