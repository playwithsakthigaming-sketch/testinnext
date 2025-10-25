
'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import type { GalleryData, GalleryImage } from '@/lib/gallery-images';
import { unstable_cache as cache } from 'next/cache';

const galleryFilePath = path.join(process.cwd(), 'src', 'lib', 'gallery-images.json');

const readJsonFile = cache(async <T>(filePath: string): Promise<T> => {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            return { galleryImages: [] } as any;
        }
        throw error;
    }
}, ['json-files-data'], { revalidate: 10 });


async function writeJsonFile(filePath: string, data: any): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
    const galleryData = await readJsonFile<GalleryData>(galleryFilePath);
    return galleryData.galleryImages;
}

export async function deleteGalleryImage(imageId: string) {
    try {
        const galleryData = await readJsonFile<GalleryData>(galleryFilePath);
        const mutableGalleryData = JSON.parse(JSON.stringify(galleryData));


        const imageExists = mutableGalleryData.galleryImages.some((image: GalleryImage) => image.id === imageId);
        if (!imageExists) {
            return { success: false, message: 'Image not found.' };
        }

        mutableGalleryData.galleryImages = mutableGalleryData.galleryImages.filter((image: GalleryImage) => image.id !== imageId);

        await writeJsonFile(galleryFilePath, mutableGalleryData);

        revalidatePath('/admin/gallery');
        revalidatePath('/gallery'); 

        return { success: true, message: 'Image deleted successfully.' };
    } catch (error) {
        console.error('Error deleting gallery image:', error);
        return { success: false, message: 'Failed to delete image.' };
    }
}
