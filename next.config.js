const withOptimizedImages = require("next-optimized-images");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: { disableStaticImages: true },
};

module.exports = withOptimizedImages({
	...nextConfig,
});
