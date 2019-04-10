import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { blockCss, HtmlBlock } from '../components/block'
import { breadcrumbGenerator } from '../components/breadcrumb'

export default ({ data: { markdownRemark: content } }) => {
  const { name, short_name, company, url, thumbnail } = content.frontmatter
  const body = content.html
  const breadcrumb = breadcrumbGenerator(short_name, [
    { to: '/', label: 'Home' },
    { to: '/projects/', label: 'Projects' },
  ])

  return (
    <Layout>
      <Container class="fluid">
        {breadcrumb}

        <div className="p-3 mt-2" css={blockCss}>
          <Row style={{ fontSize: '14px' }}>
            <Col md="4">
              <Img
                fluid={thumbnail.childImageSharp.fluid}
                className="rounded img-thumbnail"
                alt={`Project ${name}`}
              />
            </Col>
            <Col md="8">
              <h1>{name}</h1>
              <a href={url}>
                <h3>{company}</h3>
              </a>
              <HtmlBlock body={body} />
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name
        short_name
        company
        url
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
