import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import 'bootstrap/dist/css/bootstrap.css'

export const query = graphql`
query {
  allMarkdownRemark(
    filter: {
      frontmatter: {
        layout: { eq: "about-me"}
      }
    },
    limit: 1
  ) {
    edges {
      node {
        frontmatter {
          full_name
          summary
          address
          email
          profile_url
          cv_url
          photo
          layout
        }
      }
    }
  }
}
`;

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const content = edges[0].node.frontmatter;
  const summaryEntries = content.summary.split('\n').map(summary => (<p>{summary}</p>));
  return (
    <Layout>
      <div class="summary">
        {summaryEntries}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage
