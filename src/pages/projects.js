import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { breadcrumbGenerator } from '../components/breadcrumb'

import ProjectsTemplate from '../templates/ProjectsTemplate'

const ProjectsPage = ({ data }) => {
  const breadcrumb = breadcrumbGenerator('Projects', [
    { to: '/', label: 'Home' },
  ])

  return (
    <Layout>
      <SEO
        title={'Projects'}
        description={`Main projects page, listing a few of the projects Roberto worked.`}
        pathname={'/projects'}
      />
      <Container>
        {breadcrumb}
        <ProjectsTemplate entries={data.allMarkdownRemark.edges} />
      </Container>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query ProjectsPageTemplate {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/data/projects/*.md" } }
      sort: {
        fields: [frontmatter___year, frontmatter___title]
        order: [DESC, ASC]
      }
    ) {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            short_name
            company
            summary
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
