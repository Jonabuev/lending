import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first — лучшее качество при меньшем весе; WebP как fallback
    formats: ["image/avif", "image/webp"],
    // Точки излома для responsive srcset (включая Retina/4K)
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Кэш оптимизированных изображений на 30 дней
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
