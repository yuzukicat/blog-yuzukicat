import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Callout, defineConfig, Header, useConfig } from '@theguild/components';
import { asArray } from './lib/as-array';

const siteName = 'Cat, Yuzuki';

function ensureAbsolute(url: string): string {
    return url.startsWith('/') ? `https://kamisu66.com${url}` : url;
  }
  
  export default defineConfig({
    siteName,
    docsRepositoryBase: 'https://github.com/yuzukicat/blog-yuzukicat/tree/master/website',
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
        {children}
      </>
    );
  },
  components: {
    Callout,
  },
});
