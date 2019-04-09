import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import _ from 'lodash';

import Layout from '../components/layout'
import AboutMeTemplate from '../templates/AboutMeTemplate';
import QualificationsTemplate from '../templates/QualificationsTemplate';
import WorkExperiencesTemplate from '../templates/WorkExperiencesTemplate';
import ProjectsTemplate from '../templates/ProjectsTemplate';
import { OneLineBlogPostTemplate } from '../templates/BlogPostTemplate';

const IndexPage = ({ data }) => {
  const aboutMeData = data.aboutMe.frontmatter;
  return (
    <Layout>
      <Container class="fluid">
        <AboutMeTemplate fullName={aboutMeData.full_name}
          body={data.aboutMe.html}
          address={aboutMeData.address}
          email={aboutMeData.email}
          profileUrl={aboutMeData.profile_url}
          cvUrl={aboutMeData.cv_url}
          photo={aboutMeData.photo.childImageSharp}
          links={aboutMeData.links} />

        <OneLineBlogPostTemplate node={_.first(data.latestBlogPost.edges).node} />

        <Row className="no-gutters">
          <Col md="7" sm="12" className="pr-md-2">
            <WorkExperiencesTemplate
              entries={data.workExperiences.frontmatter.work_experience}
            />
            <ProjectsTemplate entries={data.projects.edges} />
          </Col>
          <Col md="5" sm="12">
            <QualificationsTemplate
              education={data.qualifications.frontmatter.education}
              certifications={data.qualifications.frontmatter.certifications}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage

export const query = graphql`
query IndexPageTemplate {
  aboutMe: markdownRemark(frontmatter: {layout: {eq: "about-me"}}) {
    html
    frontmatter {
      full_name
      address
      email
      profile_url
      cv
      photo {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      links {
        name
        url
      }
    }
  }
  qualifications: markdownRemark(frontmatter: {layout: {eq: "qualifications"}}) {
    frontmatter {
      education {
        title
        institution
        start_year
        end_year
      }
      certifications {
        name
        institutions
        url
        date
      }
    }
  }
  workExperiences: markdownRemark(frontmatter: {layout: {eq: "work-experiences"}}) {
    frontmatter {
      work_experience {
        position
        company
        summary
        url
        start_year
        end_year
      }
    }
  }
  projects: allMarkdownRemark(
    filter: { fileAbsolutePath: { glob: "**/data/projects/*.md" } }
    sort: { fields: [frontmatter___year, frontmatter___title], order: [DESC, ASC] }
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
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
  latestBlogPost: allMarkdownRemark(
    filter: { fileAbsolutePath: { glob: "**/data/posts/*.md" } }
    sort: { fields: [frontmatter___year, frontmatter___title], order: [DESC, ASC] }
    limit: 1
  ) {
    edges {
      node {
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
  }
}
`;