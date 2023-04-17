type AlgoliaRecordSource = 'Hive' | 'Conductor' | 'Yoga' | 'Envelop' | 'Inspector' | 'Code Generator' | 'Mesh' | 'Tools' | 'Modules' | 'ESLint' | 'Config' | 'Scalars' | 'Helix' | 'Shield' | 'SOFA' | 'Stitching' | 'Angular' | 'WhatsApp' | 'KitQL' | 'WS' | 'SSE';
interface AlgoliaRecord {
    objectID: string;
    hierarchy: string[];
    headings: string[];
    toc: AlgoliaSearchItemTOC[];
    title: string;
    content: string;
    source: string;
    type: string;
    url: string;
    domain: string;
}
interface AlgoliaSearchItemTOC {
    children: AlgoliaSearchItemTOC[];
    title: string;
    anchor: string;
}

interface IndexToAlgoliaNextraOptions {
    docsBaseDir: string;
    source: AlgoliaRecordSource;
    domain: string;
    objectsPrefix?: string;
}
declare function nextraToAlgoliaRecords({ docsBaseDir, source, domain, objectsPrefix, }: IndexToAlgoliaNextraOptions): Promise<AlgoliaRecord[]>;

interface IndexToAlgoliaOptions {
    plugins?: any[];
    nextra?: IndexToAlgoliaNextraOptions;
    source: AlgoliaRecordSource;
    domain: string;
    lockfilePath: string;
    dryMode?: boolean;
    postProcessor?: (objects: AlgoliaRecord[]) => AlgoliaRecord[];
}
declare function indexToAlgolia({ plugins, source, domain, nextra, postProcessor, dryMode, lockfilePath, }: IndexToAlgoliaOptions): Promise<void>;

export { AlgoliaRecord, AlgoliaRecordSource, AlgoliaSearchItemTOC, indexToAlgolia, nextraToAlgoliaRecords };
