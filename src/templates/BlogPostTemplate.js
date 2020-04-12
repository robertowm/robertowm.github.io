import React from 'react'
import { graphql, Link } from 'gatsby'
import { Container, Row, Col, Badge } from 'reactstrap'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { CreativeCommonsFooter } from '../components/footer'
import { blockCss, HtmlBlock } from '../components/block'
import { breadcrumbGenerator } from '../components/breadcrumb'

export const OneLineBlogPostTemplate = ({ node: { fields, frontmatter } }) => (
  <div className="px-3 pt-2 mt-2" css={blockCss}>
    <h6>
      <span className="mr-2">
        Latest post ({new Date(frontmatter.date).toDateString()}):
      </span>
      <Link to={fields.path}>
        {frontmatter.title}{' '}
        {frontmatter.tags.map(tag => (
          <Badge className="mx-1">{tag}</Badge>
        ))}
      </Link>
    </h6>
  </div>
)

export default ({ data: { markdownRemark: content } }) => {
  const { title, date, tags } = content.frontmatter
  const { html, excerpt } = content
  const breadcrumb = breadcrumbGenerator(title, [
    { to: '/', label: 'Home' },
    { to: '/blog/', label: 'Blog' },
  ])

  return (
    <Layout footer={<CreativeCommonsFooter />}>
      <SEO
        title={`Post ${title}`}
        description={excerpt}
        pathname={content.fields.path}
        article
      />
      <Container>
        {breadcrumb}

        <div className="p-3 mt-2" css={blockCss}>
          <Row style={{ fontSize: '14px' }}>
            <Col>
              <h1>{title}</h1>
              <h6>Published at {new Date(date).toDateString()}</h6>
              <h6>
                Tags:{' '}
                {tags.map(tag => (
                  <Badge className="mx-1">{tag}</Badge>
                ))}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <HtmlBlock body={html} />
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      fields {
        path
      }
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
