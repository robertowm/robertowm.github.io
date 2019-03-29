import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import AboutMeTemplate from '../templates/AboutMeTemplate';


import 'bootstrap/dist/css/bootstrap.css'

const IndexPage = ({ data }) => {
  const aboutMeData = data.aboutMe.frontmatter;
  return (
    <Layout>
      <AboutMeTemplate fullName={aboutMeData.full_name}
        summary={aboutMeData.summary}
        address={aboutMeData.address}
        email={aboutMeData.email}
        profileUrl={aboutMeData.profile_url}
        cvUrl={aboutMeData.cv_url}
        photo={aboutMeData.photo}
        links={aboutMeData.links} />
    </Layout>
  );
};

export default IndexPage

export const query = graphql`
query IndexPageTemplate {
  aboutMe: markdownRemark(frontmatter: {layout: {eq: "about-me"}}) {
    frontmatter {
      full_name
      summary
      address
      email
      profile_url
      cv_url
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