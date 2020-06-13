import React from "react";
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"

export const query = graphql`
  {
  lessons: allContentfulLessons {
    nodes {
      title
      slug
      author {
        name
      }
    }
  }
}
`

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Learning Contentful + Gatsby</h1>
    { data.lessons.nodes.map(lesson => (
      <h2>
        <Link to={ `/${lesson.slug}` }>
          { lesson.title } (with { lesson.author.name })
        </Link>
      </h2>

    )) }
  </Layout>
)

export default IndexPage
