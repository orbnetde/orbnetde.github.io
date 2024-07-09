import cloneDeep from 'clone-deep';
import { RichTextSchema } from '@storyblok/astro';

const BlogSchema = cloneDeep(RichTextSchema);
const isEmailLinkType = (type: string) => type === 'email';

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

  if (isEmailLinkType(linktype)) {
    attrs.href = `mailto:${attrs.href}`;
  }

  if (attrs.anchor) {
    attrs.href = `${attrs.href}#${attrs.anchor}`;
    delete attrs.anchor;
  }

  attrs.class = 'text-primary underline dark:text-primary-400';

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
