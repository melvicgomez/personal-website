export enum BlogCardType {
  Small = 'Small',
  Medium = 'Medium',
  MediumWithImage = 'Medium without Image',
}

export enum NodeTypes {
  H1 = 'heading-1',
  H2 = 'heading-2',
  H3 = 'heading-3',
  H4 = 'heading-4',
  H5 = 'heading-5',
  H6 = 'heading-6',
  OL = 'ordered-list',
  UL = 'unordered-list',
  HR = 'hr',
  QUOTE = 'blockquote',
  ENTRY_BLOCK = 'embedded-entry-block',
  ASSET_BLOCK = 'embedded-asset-block',
  TABLE = 'table',
  HYPERLINK = 'hyperlink',
  ENTRY_HYPERLINK = 'entry-hyperlink',
  ASSET_HYPERLINK = 'asset-hyperlink',
  ENTRY_INLINE = 'embedded-entry-inline',
}

export interface ContentMarks {
  type: 'underline' | 'bold' | 'italic';
}
export interface ContentType {
  nodeType: NodeTypes;
  value: string;
  marks: ContentMarks[];
  data: {
    uri: string;
  };
}

export enum BlogCategories {
  ALL = 'All',
  TECHNOLOGY = 'Technology',
  UI_UX = 'UI/UX',
  SOFTWARE = 'Software Development',
  GAMES = 'Games',
  SELF_IMPROVEMENT = 'Self Improvement',
  BUSINESS = 'Business',
}