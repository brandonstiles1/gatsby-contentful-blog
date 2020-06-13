import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export const query = graphql`
  query ($slug: String!){
    lesson:contentfulLessons(slug: {eq: $slug}) {
      title
      video
      description {
        json
      }
      author {
        name
      }
      seo {
        tItle
      }
    }
    }
`;

const LessonTemplate = ({ data: { lesson } }) => (
  <div>
    <h1>{ lesson.title }</h1>
    <p> Guest: { lesson.author.name }</p>
    <div>
      { documentToReactComponents(lesson.description.json, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
            <img
              src={ `${node.data.target.fields.file['en-US'].url}?w=300&q=100` }
              alt={ node.data.target.fields.title }
            />
          )
        }
      }) }
    </div>
  </div>

)

export default LessonTemplate;