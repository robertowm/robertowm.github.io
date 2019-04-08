import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'

import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

const Main = styled.div`
  padding-top: 5px;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { title, description, keywords },
      },
    }) => (
      <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={title} />
        <Main>{children}</Main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
