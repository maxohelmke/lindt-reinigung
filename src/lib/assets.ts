/** Optimized Unsplash URL with WebP and sensible defaults. */
export function unsplash(id: string, w: number, q = 75) {
  return `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop&fm=webp`;
}

export const HERO_POSTER =
  "https://assets.mixkit.co/videos/13282/13282-thumb-720-0.jpg";
export const HERO_VIDEO =
  "https://assets.mixkit.co/videos/13282/13282-720.mp4";
