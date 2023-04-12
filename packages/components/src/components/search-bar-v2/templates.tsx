import { SourceTemplates } from '@algolia/autocomplete-js';
import { AlgoliaSearchItem } from '../../types/algolia';
import { Anchor } from '../anchor';

// @ts-expect-error todo: fix Type 'AlgoliaSearchItem' does not satisfy the constraint 'BaseItem'.
export const templates: SourceTemplates<AlgoliaSearchItem> = {
  item: ({ item: hit, components }) => (
    <Anchor href={hit.url} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <components.Highlight hit={hit} attribute="title" />
          </div>
          <div className="aa-ItemContentSubtitle">
            <em>{hit.type}</em>
          </div>
        </div>
      </div>
    </Anchor>
  ),
  header: ({ source }) => (
    <div className="aa-SourceHeader">
      <div className="aa-SourceHeaderTitle">{source.sourceId}</div>
    </div>
  ),
};
