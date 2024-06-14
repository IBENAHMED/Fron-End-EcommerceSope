/** @type {import('next').NextConfig} */

import { default as withPWA } from "@ducanh2912/next-pwa";


const nextConfig = {
    // Your Next.js configuration options here
};

export default withPWA({
    ...nextConfig,
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    }
});