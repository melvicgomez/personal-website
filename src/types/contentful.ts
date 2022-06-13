export enum BlogCardTypes {
  Small = 'Small',
  Medium = 'Medium',
  MediumWithImage = 'Medium without Image',
}

export enum Marks {
  ITALIC = 'italic',
  BOLD = 'bold',
  UNDERLINE = 'underline',
  CODE = 'code',
}

export enum ContentTypes {
  PARAGRAPH = 'paragraph',
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
  CODE = 'code',
  ENTRY_BLOCK = 'embedded-entry-block',
  ASSET_BLOCK = 'embedded-asset-block',
  TABLE = 'table',
  HYPERLINK = 'hyperlink',
  ENTRY_HYPERLINK = 'entry-hyperlink',
  ASSET_HYPERLINK = 'asset-hyperlink',
  ENTRY_INLINE = 'embedded-entry-inline',
}

export interface ContentMarks {
  type: Marks;
}

export interface ImageAsset {
  contentful_id: string;
  url: string;
}

export interface ContentType {
  title?: string;
  nodeType: ContentTypes;
  value: string;
  data: {
    uri: string;
    target?: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
  };
  content: NodeContentType[];
}

export interface NodeContentType {
  nodeType: NodeRenderType;
  value: string;
  marks: ContentMarks[];
  content: ContentType[];
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

export enum NodeRenderType {
  TEXT = 'text',
  LIST_ITEM = 'list-item',
  PARAGRAPH = 'paragraph',
  HR = 'hr',
  HYPERLINK = 'hyperlink',
}
