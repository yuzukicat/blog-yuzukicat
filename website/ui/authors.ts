type Author = {
    name: string;
    link: `https://${string}`;
    github?: string;
    twitter?: string;
  };
  
  export const AUTHORS: Record<string, Author> = {
    gmac: {
      name: 'Greg MacWilliam',
      link: 'https://twitter.com/gmacwilliam',
      github: 'gmac',
    },
  };
  