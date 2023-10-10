type Author = {
    name: string;
    link: `https://${string}`;
    github?: string;
    twitter?: string;
  };
  
  export const AUTHORS: Record<string, Author> = {
    yuzukicat: {
      name: 'Yuzuki',
      link: 'https://twitter.com/Nougatshepard',
      github: 'yuzukicat',
    },
    Menci: {
      name: 'Menci',
      link: 'https://blog.men.ci/',
      github: 'Menci',
    },
  };
  