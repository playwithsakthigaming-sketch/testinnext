
'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import type { NewsData, NewsArticle } from '@/lib/news-articles';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { unstable_cache as cache } from 'next/cache';


const newsFilePath = path.join(process.cwd(), 'src', 'lib', 'news-articles.json');
const imagesFilePath = path.join(process.cwd(), 'src', 'lib', 'placeholder-images.json');


const readJsonFile = cache(async <T>(filePath: string): Promise<T> => {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            if (filePath.includes('news-articles')) return { newsletters: [] } as any;
            if (filePath.includes('placeholder-images')) return { placeholderImages: [] } as any;
        }
        throw error;
    }
}, ['json-files-data'], { revalidate: 10 });


async function writeJsonFile(filePath: string, data: any): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function getNewsletters(): Promise<NewsArticle[]> {
    const newsData = await readJsonFile<NewsData>(newsFilePath);
    return newsData.newsletters;
}


export async function deleteNewsArticle(articleId: string) {
    try {
        const newsData = await readJsonFile<NewsData>(newsFilePath);
        const imagesData = await readJsonFile<{ placeholderImages: ImagePlaceholder[] }>(imagesFilePath);
        const mutableNewsData = JSON.parse(JSON.stringify(newsData));
        const mutableImagesData = JSON.parse(JSON.stringify(imagesData));


        const articleToDelete = mutableNewsData.newsletters.find((article: NewsArticle) => article.id === articleId);
        if (!articleToDelete) {
            return { success: false, message: 'Article not found.' };
        }

        mutableNewsData.newsletters = mutableNewsData.newsletters.filter((article: NewsArticle) => article.id !== articleId);
        if (articleToDelete.imageId) {
          mutableImagesData.placeholderImages = mutableImagesData.placeholderImages.filter((image: ImagePlaceholder) => image.id !== articleToDelete.imageId);
        }

        await writeJsonFile(newsFilePath, mutableNewsData);
        await writeJsonFile(imagesFilePath, mutableImagesData);

        revalidatePath('/admin/news');
        revalidatePath('/');
        revalidatePath('/news');

        return { success: true, message: 'Article deleted successfully.' };
    } catch (error) {
        console.error('Error deleting news article:', error);
        return { success: false, message: 'Failed to delete article.' };
    }
}
