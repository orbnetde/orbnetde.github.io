import { type ISbStoriesParams, type ISbStory, type ISbStoryData, useStoryblokApi } from '@storyblok/astro';
import type { GetStaticPathsResult } from 'astro';

interface GetPageResult extends GetStaticPathsResult {
  props?: {
    title?: string,
    description?: string,
    image?: string,
  };
}

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

export async function getBlogPosts(page: number, itemsPerPage: number, byTag?: string, sortBy?: string):
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
  if (sortBy) {
    options.sort_by = sortBy;
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

export async function getPages(bySlug?: string, sortBy?: string): Promise<GetPageResult> {
  let page = 1;
  let pages = 1;
  const perPage: number = 100;
  const pageOptions: ISbStoriesParams = {
    version: import.meta.env.DEV ? 'draft' : 'published',
    excluding_slugs: 'blog/*',
    page: page,
    per_page: perPage,
  };
  if (bySlug) {
    pageOptions.by_slugs = bySlug;
  }
  if (sortBy) {
    pageOptions.sort_by = sortBy;
  }
  const { data, headers } = await useStoryblokApi()
    .getStories(pageOptions);
  if (headers.total > perPage) {
    pages = Math.ceil(headers.total / perPage);
  }

  while (pages > page) {
    pageOptions.page = ++page;
    const result = await useStoryblokApi()
      .getStories(pageOptions);

    data.stories = { ...data.stories, ...result.data.stories };
    data.links = { ...data.links, ...result.data.links };
    data.rels = { ...data.rels, ...result.data.rels };
  }

  const stories = Object.values(data.stories);

  return stories.map((story) => {
    const fs = String(story.full_slug);
    return {
      params: {
        slug: fs,
      },
      props: {
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
