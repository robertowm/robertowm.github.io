import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { blockCss } from '../components/block'

class ProjectSummary extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: false }
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }))
  }

  render() {
    const { name, company, url, summary, thumbnail, path } = this.props

    return (
      <div class="my-4">
        <Row style={{ fontSize: '14px' }}>
          <Col md="4">
            <Img
              fluid={thumbnail.fluid}
              className="rounded img-thumbnail"
              alt={`Project ${name}`}
            />
          </Col>
          <Col md="8">
            <h5>{name}</h5>
            <a href={url}>
              <h6>{company}</h6>
            </a>
            <p>
              {summary}
              &nbsp;
              <Link
                to={path}
                style={{ color: 'black', fontFamily: 'monospace' }}
              >
                [>>]
              </Link>
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ({ entries }) => {
  const parsedEntries = entries.map(({ node }, index) => (
    <ProjectSummary
      key={index}
      name={node.frontmatter.short_name}
      company={node.frontmatter.company}
      url={node.frontmatter.url}
      summary={node.frontmatter.summary}
      thumbnail={node.frontmatter.thumbnail.childImageSharp}
      path={node.fields.path}
    />
  ))

  return (
    <div className="p-3 mt-2" css={blockCss}>
      <h4>Projects</h4>
      {parsedEntries}
    </div>
  )
}
