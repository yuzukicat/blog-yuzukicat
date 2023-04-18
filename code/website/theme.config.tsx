import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Callout, defineConfig, Header, useConfig } from '@theguild/components';
import { Article } from '@/article';
import { AUTHORS } from '@/authors';
import {  Video } from '@/components';
import { CodeSandbox } from '@/shared/embed/code-sandbox';
import { Gfycat } from '@/shared/embed/gfycat';
import { LinkPreview } from '@/shared/embed/link-preview';
import { OgCard } from '@/shared/embed/og-card';
import { StackBlitz } from '@/shared/embed/stack-blitz';
import { Tweet } from '@/shared/embed/tweet';
import { asArray } from './lib/as-array';

const siteName = 'The Guild';

function ensureAbsolute(url: string): string {
  return url.startsWith('/') ? `https://kamisu66.com${url}` : url;
}

export default defineConfig({
  siteName,
  docsRepositoryBase: 'https://github.com/yuzukicat/blog-yuzukicat/tree/master/website', // base URL for the docs repository
  editLink: {
    text: '',
  },
  feedback: {
    content: ' ',
    labels: ''
  },
  navbar: {
    component: (
      <Header
        sameSite
        accentColor="var(--colors-accent)"
        themeSwitch
        searchBarProps={{ version: 'v2' }}
      />
    ),
  },
  primaryHue:{
    // dark: 204, light: 323 
    dark: 204, light: 208
  },
  useNextSeoProps() {
    const { frontMatter, title } = useConfig();
    const { description, authors, tags, thumbnail, date, updateDate } = frontMatter;
    const image =
      thumbnail || `https://og-image.kamisu66.com/?product=GUILD&title=${encodeURI(title)}`;

    return {
      description: description || `${siteName}: Modern API Platform and Ecosystem that scales`,
      openGraph: {
        siteName,
        images: [{ url: ensureAbsolute(image) }],
        article: date && {
          authors: authors && asArray(authors).map(authorId => AUTHORS[authorId]?.name || authorId),
          publishedTime: new Date(date).toISOString(),
          modifiedTime: new Date(updateDate || date).toISOString(),
          tags: tags && asArray(tags),
        },
      },
      additionalMetaTags: [{ name: 'twitter:image', content: image }],
    };
  },
  main: function Main({ children }) {
    const { route } = useRouter();

    if (!route.startsWith('/blog/') || route.startsWith('/blog/tag')) {
      return children as ReactElement;
    }

    return (
      <>
        <Article />
        {children}
      </>
    );
  },
  components: {
    Callout,
    Video,
    CodeSandbox,
    LinkPreview,
    OgCard,
    Gfycat,
    Tweet,
    StackBlitz,
  },
});
