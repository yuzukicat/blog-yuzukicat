import { NextConfig } from 'next';

declare const withGuildDocs: ({ themeConfig, whiteListDisableExplicitJsx, transformPageOpts, ...nextConfig }?: NextConfig & {
    themeConfig?: string | undefined;
    whiteListDisableExplicitJsx?: string[] | undefined;
}) => NextConfig;

export { withGuildDocs };
