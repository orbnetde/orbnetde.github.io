import { getImage } from 'astro:assets';
import { type GetImageResult } from 'astro';

export async function loadImage(src: string, width?: number, height?: number): Promise<GetImageResult | { src: string }> {
  if (!src) {
    return { src: '' };
  }

  if (String(src).includes('http')) {
    return getImage({ src: src, inferSize: true, format: 'webp' });
  }

  return getImage({ src: src, width: width, height: height, format: 'webp' });
}
