import { type ISbStoriesParams, type ISbStory, type ISbStoryData, useStoryblokApi } from '@storyblok/astro';
import type { GetStaticPathsResult } from 'astro';

export async function getStaticBlogTags(version: any): Promise<GetStaticPathsResult | Response> {
  const storyblokApi = useStoryblokApi();

  const { data } = await storyblokApi.getStories({
    version: version,
    by_slugs: 'blog/*',
    sort_by: 'created_at:desc',
    page: 1,
    per_page: 100,
  });

  const stories = Object.values(data.stories);
  const tags: GetStaticPathsResult = [];
  stories.map((story) => {
    story.tag_list.map(tag => {
      tags.push({ params: { tag: tag, path: tag } });
    });
  });
  return tags;
}

export async function getStaticBlogPaths(version: any): Promise<GetStaticPathsResult | Response> {
  const storyblokApi = useStoryblokApi();

  const { data } = await storyblokApi.getStories({
    version: version,
    by_slugs: 'blog/*',
    sort_by: 'created_at:desc',
    page: 1,
    per_page: 100,
  });

  const stories = Object.values(data.stories);
  return stories.map((story) => {
    return {
      params: { slug: story.slug, path: story.full_slug },
    };
  });
}

export async function getBlogPosts(page: number, itemsPerPage: number, byTag?: string):
  Promise<{ data: { cv: number, links: (ISbStoryData | any)[], rels: ISbStoryData[], stories: ISbStoryData[] }, total: number }> {
  let total: number = 0;

  const options: ISbStoriesParams = {
    version: import.meta.env.DEV ? 'draft' : 'published',
    page: page,
    per_page: itemsPerPage,
    sort_by: 'created_at:desc',
    by_slugs: 'blog/*',
  };
  if (byTag) {
    options.with_tag = byTag;
  }

  const { data } = await useStoryblokApi()
    .getStories(options).then(response => {
      total = response.total;
      return response;
    });

  return { data: data, total: total };
}

export async function getPost(slug: string): Promise<ISbStory> {
  return await useStoryblokApi().getStory(`blog/${slug}`, {
    version: import.meta.env.DEV ? 'draft' : 'published',
  });
}

export async function getPages(bySlug?: string, sortBy?: string): Promise<GetStaticPathsResult> {
  const pageOptions: ISbStoriesParams = {
    version: import.meta.env.DEV ? 'draft' : 'published',
    excluding_slugs: 'blog/*',
  };
  if (bySlug) {
    pageOptions.by_slugs = bySlug;
  }
  if (sortBy) {
    pageOptions.sort_by = sortBy;
  }
  const { data } = await useStoryblokApi()
    .getStories(pageOptions);

  const stories = Object.values(data.stories);

  return stories.map((story) => {
    const fs = String(story.full_slug);
    return {
      params: {
        slug: fs,
        path: fs,
        title: story.name,
        description: story?.content?.description || '',
        image: story?.content?.ogimage?.filename || '',
      },
    };
  });
}

export async function getPage(slug: string): Promise<ISbStory> {
  return await useStoryblokApi().getStory(slug, {
    version: import.meta.env.DEV ? 'draft' : 'published',
  });
}

export async function getBreadcrumb(story: ISbStoryData | { full_slug: string, name: string }): Promise<Array<{ title: string, slug: string }>> {
  const parts = story.full_slug.split('/');
  const breadcrumb = [];
  breadcrumb.push({ title: story.name, slug: story.full_slug });

  parts.pop();
  while (parts.length > 0) {
    let bs = parts.join('/');
    const result = await useStoryblokApi().get('/cdn/links', { starts_with: bs, per_page: 1000 });

    Object.entries(result.data.links).map((link: any) => {
      if (link[1].is_folder && link[1].slug === bs) {
        breadcrumb.push({ title: link[1].name, slug: link[1].slug });
      }
      return true;
    });
    parts.pop();
  }

  breadcrumb.push({ title: 'Start', slug: '' });

  return breadcrumb.reverse();
}
