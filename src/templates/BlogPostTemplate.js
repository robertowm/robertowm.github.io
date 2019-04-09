import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col, Badge } from 'reactstrap';

import Layout from '../components/layout';
import { style as containerStyle, HtmlBlock } from '../components/block';
import { breadcrumbGenerator } from '../components/breadcrumb';

export default ({ data: { markdownRemark: content } }) => {
    const { title, date, tags } = content.frontmatter;
    const body = content.html;
    const breadcrumb = breadcrumbGenerator(title, [
        { to: '/', label: 'Home' },
        { to: '/blog/', label: 'Blog' }
    ]);

    return <Layout>
        <Container class="fluid">

            {breadcrumb}

            <div className="p-3 mt-2" style={containerStyle}>
                <Row style={{ fontSize: "14px" }}>
                    <Col>
                        <h1>{title}</h1>
                        <h6>Published at {new Date(date).toDateString()}</h6>
                        <h6>Tags: {tags.map(tag => <Badge className="mx-1">{tag}</Badge>)}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HtmlBlock body={body} />
                    </Col>
                </Row>
            </div>
        </Container>
    </Layout>;
};

export const query = graphql`
query BlogPostPageTemplate($id: String!) {
    markdownRemark(id: {eq: $id}) {
        html
        frontmatter {
            title
            date
            tags
        }
    }
}
`;