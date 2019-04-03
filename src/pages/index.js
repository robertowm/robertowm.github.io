import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'
import AboutMeTemplate from '../templates/AboutMeTemplate';
import QualificationsTemplate from '../templates/QualificationsTemplate';
import WorkExperiencesTemplate from '../templates/WorkExperiencesTemplate';

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
          photo={aboutMeData.photo}
          links={aboutMeData.links} />

          <Row className="no-gutters">
            <Col md="7" className="pr-md-2">
              <WorkExperiencesTemplate
                entries={data.workExperiences.frontmatter.work_experience}
              />
            </Col>
            <Col md="5">
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
      photo
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
}
`;