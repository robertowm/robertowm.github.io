import React from 'react'
import { graphql, Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'
import { style as containerStyle } from '../components/block'
import { breadcrumbGenerator } from '../components/breadcrumb'

const BlogPostSummary = ({ title, excerpt, path, date }) => {
  return (
    <Col md="3" sm="6">
      <h5>{path ? <Link to={path}>{title}</Link> : title}</h5>
      <p>
        {date && `${new Date(date).toDateString()} - `}
        {excerpt}
        &nbsp;
        {path && (
          <Link to={path} style={{ color: 'black', fontFamily: 'monospace' }}>
            [>>]
          </Link>
        )}
      </p>
    </Col>
  )
}

const BlogPage = ({ data }) => {
  const breadcrumb = breadcrumbGenerator('Blog', [{ to: '/', label: 'Home' }])

  const posts = data.allMarkdownRemark.edges.map(({ node }) => (
    <BlogPostSummary
      title={node.frontmatter.title}
      excerpt={node.excerpt}
      path={node.fields.path}
      date={node.frontmatter.date}
    />
  ))

  return (
    <Layout>
      <Container class="fluid">
        {breadcrumb}
        <div className="p-3 mt-2" style={containerStyle}>
          <h4>Blog</h4>
          <div class="my-4" style={{ fontSize: '14px' }}>
            <Row>
              {posts}
              <BlogPostSummary
                title={`... more posts soon`}
                excerpt={`
                  I hope you're enjoying my posts.
                  I'll trying to publish at least one per month.
                  Feel free to contact me to discuss anything :)
                `}
              />
            </Row>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPageTemplate {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/data/posts/*.md" } }
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, ASC]
      }
    ) {
      edges {
        node {
          fields {
            path
          }
          excerpt
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
