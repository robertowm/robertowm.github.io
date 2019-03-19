import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import 'bootstrap/dist/css/bootstrap.css'

export const query = graphql`
query {
  contentYaml {
    summary,
    address,
    email,
    profile_url,
    cv_url,
    photo,
    links {
      name
      url
    }
  }
}
`;

const IndexPage = ({ data: { contentYaml: content } }) => {
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
