import cloneDeep from 'clone-deep';
import { RichTextSchema } from '@storyblok/astro';

const BlogSchema = cloneDeep(RichTextSchema);

BlogSchema.nodes.heading = (node) => {
  return {
    tag: `h${node.attrs.level}`,
    attrs: {
      class: () => {
        if (node.attrs.level === 2) {
          return 'dark:text-white text-dark font-semibold pb-0 target:before:block target:before:content-[\'\'] target:before:h-[120px] pt-8 target:before:-mt-[50px] text-2xl';
        }
        if (node.attrs.level === 3) {
          return 'dark:text-white text-dark font-semibold pb-0 target:before:block target:before:content-[\'\'] target:before:h-[120px] pt-4 target:before:-mt-[40px] text-xl';
        }
        if (node.attrs.level === 4) {
          return 'dark:text-white text-dar…fore:-mt-[40px] text-lg';
        }
        return '';
      },
    },
  };
};
// We don't want the p around our texts.
BlogSchema.nodes.paragraph = () => {
  return {};
};
BlogSchema.nodes.list_item = () => {
  return {
    tag: [
      {
        tag: 'li',
        attrs: {
          class: 'mb-3',
        },
      },
    ],
  };
};
BlogSchema.nodes.ordered_list = () => {
  return {
    tag: [
      {
        tag: 'ol',
        attrs: {
          class: 'my-3 list-inside list-decimal',
        },
      },
    ],
  };
};
BlogSchema.nodes.bullet_list = () => {
  return {
    tag: [
      {
        tag: 'ul',
        attrs: {
          class: 'my-3 list-inside list-disc',
        },
      },
    ],
  };
};
BlogSchema.marks.bold = () => {
  return {
    tag: [
      {
        tag: 'b',
        attrs: {
          class: 'font-semibold',
        },
      },
    ],
  };
};
BlogSchema.marks.link = (node) => {
  const attrs = { ...node.attrs };
  const { linktype = 'url' } = node.attrs;

  if (linktype === 'email') {
    attrs.href = `mailto:${attrs.href}`;
  }

  if (attrs.anchor) {
    attrs.href = `${attrs.href}#${attrs.anchor}`;
    delete attrs.anchor;
  }

  attrs.class = 'text-primary underline dark:text-primary-400';

  delete attrs.target;
  delete attrs.linktype;
  if (attrs.href?.includes('http') && !attrs.href?.includes('orbnet.de')) {
    attrs.rel = 'noopener noreferrer';
    attrs.target = '_blank';
    attrs.class += ' external-link';
  }
  if (!attrs.href?.includes('http') && !attrs.href?.startsWith('/')) {
    attrs.href = '/' + attrs.href;
  }
  if (!attrs.href?.includes('http') && !attrs.href?.endsWith('/')) {
    attrs.href += '/';
  }
  if (!attrs?.title) {
    attrs.title = 'Mehr Informationen zu: ' + attrs.href;
    attrs.ariaLabel = attrs.title;
  }

  return {
    tag: [
      {
        tag: 'a',
        attrs: attrs,
      },
    ],
  };
};

export default BlogSchema;
