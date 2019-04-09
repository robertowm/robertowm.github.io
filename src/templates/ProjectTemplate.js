import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Img from "gatsby-image";

import Layout from '../components/layout';
import { style as containerStyle, HtmlBlock } from '../components/block';

export default ({ data: { markdownRemark: content } }) => {
    const { name, company, url, thumbnail } = content.frontmatter;
    const body = content.html;
    return <Layout>
        <Container class="fluid">
            <div className="p-3 mt-2" style={containerStyle}>
                <Row style={{ fontSize: "14px" }}>
                    <Col md="4">
                        <Img fluid={thumbnail.childImageSharp.fluid} className="rounded img-thumbnail" alt={`Project ${name}`} />
                    </Col>
                    <Col md="8">
                        <h1>{name}</h1>
                        <a href={url}><h3>{company}</h3></a>
                        <HtmlBlock body={body} />
                    </Col>
                </Row>
            </div>
        </Container>
    </Layout>;
};

export const query = graphql`
query ProjectPageTemplate($id: String!) {
    markdownRemark(id: {eq: $id}) {
        html
        frontmatter {
            name
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
`;