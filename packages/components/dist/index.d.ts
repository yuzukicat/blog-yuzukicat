import * as react from 'react';
import { ReactElement, ReactNode, CSSProperties, ComponentProps, Dispatch, SetStateAction, FormEvent } from 'react';
import * as url from 'url';
import { ImageProps } from 'next/image';
import { LinkProps } from 'next/link';
import { ReactPlayerProps } from 'react-player';
export { InformationCircleIcon } from 'nextra/icons';
import { DocsThemeConfig } from 'nextra-theme-docs';
export { Bleed, Callout, Card, Cards, Collapse, DocsThemeConfig, FileTree, Navbar, NotFoundPage, ServerSideErrorPage, Steps, Tab, Tabs, useConfig, useTheme } from 'nextra-theme-docs';
export { PRODUCTS } from './products.js';
export { default as Giscus } from '@giscus/react';
export { useMounted } from 'nextra/hooks';
export { useMDXComponents } from 'nextra/mdx';
export { RemoteContent, useSSG } from 'nextra/ssg';
import '@theguild/algolia';

declare const Anchor: react.ForwardRefExoticComponent<Omit<{
    href: string | url.UrlObject;
    as?: (string | url.UrlObject) | undefined;
    replace?: boolean | undefined;
    scroll?: boolean | undefined;
    shallow?: boolean | undefined;
    passHref?: boolean | undefined;
    prefetch?: boolean | undefined;
    locale?: string | false | undefined;
    legacyBehavior?: boolean | undefined;
    onMouseEnter?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
    onTouchStart?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
    onClick?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
}, "href"> & Pick<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "style" | "title" | "target" | "rel" | "className"> & {
    href: string;
    children: react.ReactNode;
    newWindow?: boolean | undefined;
    sameSite?: boolean | undefined;
} & react.RefAttributes<HTMLAnchorElement>>;

type BannerProps = {
    children?: string | ReactNode;
    color?: CSSProperties['color'];
    bgColor?: CSSProperties['color'];
    animation?: CSSProperties['animation'];
};
declare const Banner: ({ children, animation, color, bgColor, }: BannerProps) => ReactElement;

type ButtonProps = Omit<ComponentProps<'a'>, 'href' | 'ref'> & {
    variant?: 'primary' | 'secondary';
    href: string;
};
declare const Button: ({ children, className, variant, ...props }: ButtonProps) => ReactElement;

interface IVideo {
    src: string;
    placeholder: string;
}
type ILink = Omit<LinkProps, 'href'> & Pick<ComponentProps<'a'>, 'target' | 'rel' | 'title' | 'className' | 'style'> & {
    href: string;
    children: ReactNode;
    newWindow?: boolean;
    sameSite?: boolean;
};
type IHeaderLink = ILink & {
    label: string;
    menu?: ReactNode;
};
interface IHeaderProps {
    className?: string;
    accentColor: string;
    activeLink?: string;
    themeSwitch?: boolean;
    transformLinks?: (links: Omit<IHeaderLink, 'children'>[]) => Omit<IHeaderLink, 'children'>[];
    searchBarProps?: Partial<ISearchBarProps>;
    search?: boolean;
    sameSite?: boolean;
}
interface IFooterExtendedProps {
    className?: string;
    sameSite?: boolean;
    resources?: ILink[];
    logo?: ILink;
}
interface IModalProps {
    className?: string;
    children: ReactNode;
    title: string | ReactNode;
    description?: string | ILink;
    image?: ImageProps;
    visible: boolean;
    placement: 'top' | 'center' | 'bottom';
    onCancel: (state?: boolean) => void;
}
interface ISearchBarProps {
    version?: 'v1' | 'v2';
    algolia?: {
        appId: string;
        searchApiKey: string;
        indexName: string;
    };
    accentColor: string;
    title: string;
    placeholder: string;
    isFull?: boolean;
    onHandleModal?: (state: boolean) => void;
    className?: string;
}
interface IFeatureListProps {
    className?: string;
    title?: string;
    description?: string;
    items: {
        title: string;
        description: string;
        image: ImageProps;
        link?: ILink;
    }[];
    link?: ILink;
}
interface IInfoListProps {
    className?: string;
    title?: string | ReactNode;
    items: {
        title: string | ReactNode;
        description: string | ReactNode;
        link?: ILink;
    }[];
}
interface IHeroVideoProps {
    className?: string;
    title: string | ReactNode;
    description: string | ReactNode;
    flipped?: boolean;
    link?: ILink;
    video: IVideo;
    videoProps?: ReactPlayerProps;
}
interface IHeroIllustrationProps {
    className?: string;
    title: string | ReactNode;
    description: string | ReactNode;
    flipped?: boolean;
    link?: ILink;
    image: ImageProps;
}
interface IHeroGradientProps {
    className?: string;
    title: string | ReactNode;
    description: string | ReactNode;
    colors?: string[];
    version?: string | ReactNode;
    link?: ILink | ILink[];
    image?: ImageProps;
}
interface IHeroMarketplaceProps {
    className?: string;
    title: string | ReactNode;
    description: string | ReactNode;
    link: ILink;
    image?: ImageProps;
}
interface IMarketplaceItemProps {
    title: string;
    description: string | ReactNode;
    tags?: string[];
    modal?: {
        header: {
            image?: ImageProps;
            description?: string | ILink;
        };
        content: string | (() => ReactNode) | ReactNode;
    };
    update: string;
    image: ImageProps;
    link: Omit<ILink, 'children'>;
}
interface IMarketplaceItemsProps {
    items: IMarketplaceItemProps[];
}
interface IMarketplaceListProps {
    className?: string;
    title?: string;
    placeholder: string | ReactElement;
    pagination: number;
    items: IMarketplaceItemProps[];
}
interface IMarketplaceSearchProps {
    className?: string;
    title: string | ReactNode;
    placeholder: string;
    primaryList: IMarketplaceListProps;
    secondaryList?: IMarketplaceListProps;
    queryList?: IMarketplaceListProps;
    tagsFilter?: string[] | ReadonlyArray<string>;
}
interface ISchemaPageProps {
    schemaName: string;
    tags?: string[];
    editorData: Omit<IEditorProps, 'icon'>[];
}
interface IEditorProps {
    children: ReactNode;
    title: string;
    frameworks?: string[];
    schema?: string;
    image?: string;
    operations?: string;
}

type CardsColorfulProps = {
    className?: string;
    cards: {
        title: string;
        description: string;
        category: string;
        color: string;
        link: Omit<ILink, 'children'>;
    }[];
};
declare const CardsColorful: ({ cards, className }: CardsColorfulProps) => ReactElement;

declare const FeatureList: ({ title, description, items, link, className, }: IFeatureListProps) => ReactElement;

declare const FooterExtended: ({ className, }: IFooterExtendedProps) => ReactElement;

declare const Header: ({ accentColor, activeLink, themeSwitch, transformLinks, search, className, sameSite, searchBarProps, }: IHeaderProps) => ReactElement;

declare const HeroGradient: ({ title, description, link, version, colors, image, className, }: IHeroGradientProps) => ReactElement;

declare const HeroIllustration: ({ title, description, link, image, flipped, className, }: IHeroIllustrationProps) => ReactElement;

declare const HeroMarketplace: ({ title, description, link, className, image, }: IHeroMarketplaceProps) => ReactElement;

declare const HeroVideo: ({ title, description, link, video, flipped, className, videoProps, }: IHeroVideoProps) => ReactElement;

declare const ArrowUpRightIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const CaretIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const CaretSlimIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare function CheckIcon({ className }: {
    className?: string;
}): ReactElement;

declare const CloseIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const ExternalLinkIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const HamburgerIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const HashTagIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const MailIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const MoonIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const MoreIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const PageIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const SearchIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare const ShareIcon: ({ className }: {
    className?: string | undefined;
}) => ReactElement;

declare function Image(props: ImageProps): ReactElement;

declare const InfoList: ({ title, items, className }: IInfoListProps) => ReactElement;

declare const MarketplaceList: ({ title, placeholder, items, pagination, className, }: IMarketplaceListProps) => ReactElement;

declare const MarketplaceSearch: ({ title, tagsFilter, placeholder, primaryList, secondaryList, queryList, className, }: IMarketplaceSearchProps) => ReactElement;

declare const mdxComponents: {
    [tag: string]: (props: object) => ReactElement;
};

declare const Modal: ({ image, title, description, children, visible, placement, onCancel, className, }: IModalProps) => ReactElement;

declare const Nav: ({ isOpen, setOpen, children, className, }: {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    className?: string | undefined;
    children: ReactNode;
}) => ReactElement;

type NewsletterProps = {
    onNewsletterSubmit: (e: FormEvent, value: string) => void;
};
declare const Newsletter: ({ onNewsletterSubmit }: NewsletterProps) => ReactElement;

declare const NPMBadge: ({ name }: {
    name: string;
}) => ReactElement;

type Command = {
    name: string;
    cmd: 'add' | 'run' | 'install' | 'init';
    isNpx?: boolean;
    isGlobal?: boolean;
};
declare const PackageCmd: ({ packages }: {
    packages: (string | Command)[];
}) => ReactElement;

declare const SearchBar: ({ version, ...restProps }: ISearchBarProps) => ReactElement;

declare function defineConfig({ siteName: originalSiteName, ...config }: DocsThemeConfig & {
    siteName: string;
}): DocsThemeConfig;

declare function Mermaid({ chart }: {
    chart: string;
}): ReactElement;

type Package = {
    readme: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    weeklyNPMDownloads: number;
};
declare const fetchPackageInfo: (packageName: string, githubReadme?: {
    repo: string;
    path: string;
}) => Promise<Package>;

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number | undefined;
    }
}

export { Anchor, ArrowUpRightIcon, Banner, Button, CardsColorful, CaretIcon, CaretSlimIcon, CheckIcon, CloseIcon, ExternalLinkIcon, FeatureList, FooterExtended, HamburgerIcon, HashTagIcon, Header, HeroGradient, HeroIllustration, HeroMarketplace, HeroVideo, IEditorProps, IFeatureListProps, IFooterExtendedProps, IHeaderLink, IHeaderProps, IHeroGradientProps, IHeroIllustrationProps, IHeroMarketplaceProps, IHeroVideoProps, IInfoListProps, ILink, IMarketplaceItemProps, IMarketplaceItemsProps, IMarketplaceListProps, IMarketplaceSearchProps, IModalProps, ISchemaPageProps, ISearchBarProps, Image, InfoList, MailIcon, MarketplaceList, MarketplaceSearch, Mermaid, Modal, MoonIcon, MoreIcon, NPMBadge, Nav, Newsletter, PackageCmd, PageIcon, SearchBar, SearchIcon, ShareIcon, defineConfig, fetchPackageInfo, mdxComponents };
