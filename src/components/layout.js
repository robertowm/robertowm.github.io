import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Header from './header'

import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
        defaultDescription
      }
    }
  }
`

const Main = styled.div`
  padding-top: 5px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, titleTemplate, defaultDescription },
      },
    }) => (
      <>
        <Helmet
          title={defaultTitle}
          titleTemplate={titleTemplate}
          meta={[{ name: 'description', content: defaultDescription }]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={defaultTitle} />
        <Main>{children}</Main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
