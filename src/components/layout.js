import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container } from 'reactstrap'

import Header from './header'
import { CopyrightProtectedFooter } from './footer';

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

const Layout = ({ children, footer }) => (
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
        <Container style={{ paddingTop: '5px' }}>{children}</Container>
        {footer || <CopyrightProtectedFooter />}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
