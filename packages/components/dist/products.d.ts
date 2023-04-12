import { ReactElement } from 'react';
import { AlgoliaRecordSource } from '@theguild/algolia';

type ProductType = 'HIVE' | 'CONDUCTOR' | 'YOGA' | 'ENVELOP' | 'INSPECTOR' | 'CODEGEN' | 'MESH' | 'TOOLS' | 'MODULES' | 'ESLINT' | 'CONFIG' | 'SCALARS' | 'HELIX' | 'SHIELD' | 'SOFA' | 'STITCHING' | 'ANGULAR' | 'WHATSAPP' | 'KITQL' | 'SSE' | 'WS';
declare const PRODUCTS: Record<ProductType, {
    name: AlgoliaRecordSource;
    title: string;
    href: `https://${string}`;
    logo: (props: {
        className?: string;
    }) => ReactElement;
    primaryColor: `#${string}`;
}>;

export { PRODUCTS, ProductType };
