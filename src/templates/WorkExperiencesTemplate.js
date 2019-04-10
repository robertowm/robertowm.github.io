import React, { Component } from 'react'
import { Row, Col, Collapse } from 'reactstrap'
import Remark from 'remark'
import html from 'remark-html'
import {
  blockCss,
  HtmlBlock,
} from '../components/block'
import { DateRange } from '../components/date'

const processor = (function() {
  const obj = new Remark().use(html)
  return elem => obj.processSync(elem).toString()
})()

class WorkExperience extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: false }
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }))
  }

  render() {
    const { position, company, url, summary, startYear, endYear } = this.props
    const processor = this.props.processor || (text => text)
    const [mainSummary, ...expandableSummary] = summary.split('\n')

    return (
      <>
        <Row style={{ fontSize: '14px' }}>
          <Col md="9" sm="12">
            {position.split('&').map(elem => (
              <div className="font-weight-bold">{elem.trim()}</div>
            ))}
            <div>
              <a style={{ color: 'black' }} href={url}>
                {company}
              </a>
            </div>
          </Col>
          <Col md="3" sm="12">
            <DateRange
              className="text-md-right"
              begin={startYear}
              end={endYear}
            />
          </Col>
        </Row>
        <div className="d-none d-md-block" style={{ fontSize: '13px' }}>
          <p>
            {mainSummary}
            &nbsp;
            <a
              onClick={this.toggle}
              style={{ cursor: 'pointer', fontFamily: 'monospace' }}
            >
              [{this.state.collapse ? '-' : '+'}]
            </a>
          </p>
          <Collapse isOpen={this.state.collapse}>
            <HtmlBlock body={processor(expandableSummary.join('\n'))} />
          </Collapse>
        </div>
      </>
    )
  }
}

export default ({ entries }) => {
  const parsedEntries = entries.map(
    ({ position, company, url, summary, start_year, end_year }, index) => (
      <WorkExperience
        key={index}
        position={position}
        company={company}
        url={url}
        summary={summary}
        startYear={start_year}
        endYear={end_year}
        processor={processor}
      />
    )
  )

  return (
    <div className="p-3 mt-2" css={blockCss}>
      <h4>Work experience</h4>
      {parsedEntries}
    </div>
  )
}
