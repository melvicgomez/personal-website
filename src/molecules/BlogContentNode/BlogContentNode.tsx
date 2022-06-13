import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Props } from '../../types/common';
import {
  ContentMarks,
  ContentType,
  ContentTypes,
  NodeContentType,
} from '../../types/contentful';
import {
  parseNodeType,
  nodeRenderGetValue,
  parseClassName,
  filterImageAssetByContentfulId,
} from '../../utils';

const BlogContentNode: React.FC<ContentType & Props> = (
  contentNode: ContentType
) => {
  const allImageAssets = useStaticQuery(graphql`
    {
      allContentfulAsset {
        nodes {
          contentful_id
          url
        }
      }
    }
  `);
  let imgSrc: string | null = null;
  if (contentNode?.data?.target?.sys.id) {
    imgSrc = filterImageAssetByContentfulId(
      contentNode.data.target.sys.id,
      allImageAssets.allContentfulAsset.nodes
    );
  }

  const contents = contentNode.content;
  const marks = contents.map((nodeToRender) => nodeToRender.marks);
  const hasCodeMark = marks.some((m) => {
    const includedType = (m || []).filter(
      (mb: ContentMarks) => mb.type === 'code'
    );
    return includedType.length > 0;
  });
  const parsedClass = parseClassName(contentNode.nodeType, marks);

  const contentChild = () =>
    contents.map((nodeToRender: NodeContentType) => {
      return nodeRenderGetValue(nodeToRender);
    });
  console.log(contentChild());
  return React.createElement(
    parseNodeType(contentNode.nodeType, hasCodeMark),
    {
      ...(parsedClass && { class: parsedClass }),
      ...(imgSrc && {
        src: imgSrc,
        alt: contentNode.title,
        class: 'my-3 w-full',
      }),
    },
    contentNode.nodeType !== ContentTypes.HR &&
      contentNode.nodeType !== ContentTypes.ASSET_BLOCK
      ? contentChild()
      : null
  );
};

export default BlogContentNode;
