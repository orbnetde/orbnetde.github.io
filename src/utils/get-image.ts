import { getImage } from 'astro:assets';
import { type GetImageResult } from 'astro';

// const images = import.meta.glob('../assets/**/*');

export async function loadImage(src: string, width?: number, height?: number): Promise<GetImageResult | { src: string }> {
  if (!src) {
    return { src: '' };
  }

  if (String(src).includes('http')) {
    return getImage({ src: src, inferSize: true, inferRemoteSize: true, format: 'webp' });
  }

  return getImage({ src: src, width: width, height: height, format: 'webp' });
}
