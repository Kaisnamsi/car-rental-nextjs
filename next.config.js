/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        forceSwcTransforms: true,
    }
}

module.exports = nextConfig
