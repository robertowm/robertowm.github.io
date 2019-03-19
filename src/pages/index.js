import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import 'bootstrap/dist/css/bootstrap.css'

export const query = graphql`
query {
  contentYaml {
    title,
    body
  }
}
`;

const IndexPage = ({data: { contentYaml:content }}) => (
  <Layout>
    <h1>{content.title}</h1>
    <div class="content">
      {content.body}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
