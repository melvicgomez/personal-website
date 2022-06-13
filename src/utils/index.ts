import React from 'react';
import {
  ContentMarks,
  ImageAsset,
  Marks,
  NodeContentType,
  NodeRenderType,
} from './../types/contentful';
import { ContentTypes } from '../types/contentful';

export const parseNodeType = (
  contentType: ContentTypes,
  hasCodeMark: boolean
) => {
  switch (contentType) {
    case ContentTypes.PARAGRAPH:
      return !hasCodeMark ? 'p' : 'pre';
    case ContentTypes.UL:
      return 'ul';
    case ContentTypes.OL:
      return 'ol';
    case ContentTypes.HR:
      return 'hr';
    case ContentTypes.H1:
      return 'h1';
    case ContentTypes.H2:
      return 'h2';
    case ContentTypes.H3:
      return 'h3';
    case ContentTypes.H4:
      return 'h4';
    case ContentTypes.H5:
      return 'h5';
    case ContentTypes.H6:
      return 'h6';
    case ContentTypes.QUOTE:
      return 'blockquote';
    case ContentTypes.HYPERLINK:
      return 'a';
    case ContentTypes.ASSET_BLOCK:
      return 'img';
    default:
      return 'div';
  }
};

export const nodeRenderGetValue = (nodeToRender: NodeContentType) => {
  switch (nodeToRender.nodeType) {
    case NodeRenderType.TEXT:
      return nodeToRender.value;
    case NodeRenderType.LIST_ITEM:
      return nodeToRender.content
        .map((a) => a.content.map((b) => b.value))
        .map((listItem) => {
          return React.createElement('li', {}, listItem);
        });
    case NodeRenderType.HYPERLINK:
      return React.createElement(
        'a',
        { href: nodeToRender.data.uri, class: 'hover:underline font-bold text-blue-700' },
        nodeToRender.content.map((b) => b.value)[0]
      );
    case NodeRenderType.PARAGRAPH:
      return nodeToRender.content.map((a) => a.value);
    case NodeRenderType.HR:
      return '';
    default:
      return nodeToRender.value;
  }
};

export const parseClassName = (
  contentType: ContentTypes,
  marks: ContentMarks[][]
) => {
  const parsedMarksClass = parseMarks(marks);
  switch (contentType) {
    case ContentTypes.H1:
      return 'text-5xl font-extrabold  mb-2';
    case ContentTypes.H2:
      return 'text-4xl font-extrabold  mb-2';
    case ContentTypes.H3:
      return 'text-3xl font-extrabold  mb-2';
    case ContentTypes.H4:
      return 'text-2xl font-extrabold  mb-2';
    case ContentTypes.H5:
      return 'text-xl font-bold  mb-2';
    case ContentTypes.H6:
      return 'text-lg font-bold  mb-2';
    case ContentTypes.UL:
      return parsedMarksClass + 'mb-4 list-disc list-inside ';
    case ContentTypes.OL:
      return parsedMarksClass + 'mb-4 list-decimal list-inside ';
    case ContentTypes.QUOTE:
      return 'border-l-[6px] border-solid border-l-gray-300 my-6 py-2 pl-2 text-xl text-gray-700';
    case ContentTypes.PARAGRAPH:
      return parsedMarksClass + 'leading-relaxed mb-2';
    default:
      return null;
  }
};

export const parseMarks = (marks: ContentMarks[][]) => {
  return marks
    .map((m) => {
      const tempMark = (m || []).map((m) => m.type);
      let markClassName = '';
      if (tempMark.includes(Marks.ITALIC)) markClassName += 'italic ';
      if (tempMark.includes(Marks.BOLD)) markClassName += 'font-bold ';
      if (tempMark.includes(Marks.UNDERLINE))
        markClassName += 'underline underline-offset-1 ';
      if (tempMark.includes(Marks.CODE))
        markClassName +=
          'bg-zinc-200 p-3 border border-zinc-400 border-solid rounded-md my-2 ';
      return markClassName;
    })
    .filter((m) => !!m)
    .toString()
    .replace(',', ' ');
};

export const filterImageAssetByContentfulId = (
  id: string,
  allImages: ImageAsset[]
): string | null => {
  const foundAsset = allImages.filter(
    (asset: ImageAsset) => asset.contentful_id === id
  );

  if (foundAsset.length > 0) return foundAsset[0].url;
  return null;
};
