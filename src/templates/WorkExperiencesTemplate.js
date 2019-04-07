import React from 'react'
import { Row, Col } from 'reactstrap'
import Remark from 'remark'
import html from 'remark-html';
import { style as containerStyle, HtmlBlock } from '../components/block';
import { DateRange } from '../components/date';

const processor = function () {
    const obj = new Remark().use(html);
    return (elem) => obj.processSync(elem).toString();
}();

const WorkExperience = ({ position, company, url, summary, startYear, endYear }) => {
    return <>
        <Row style={{ fontSize: "14px" }}>
            <Col md="9" sm="12">
                {position.split('&').map(elem => <div className="font-weight-bold">{elem.trim()}</div>)}
                <div><a style={{ color: "black" }} href={url}>{company}</a></div>
            </Col>
            <Col md="3" sm="12">
                <DateRange className="text-md-right" begin={startYear} end={endYear} />
            </Col>
        </Row>
        <HtmlBlock className="d-none d-md-block" body={processor(summary)} />
    </>;
};

export default ({ entries }) => {
    const parsedEntries = entries.map(({ position, company, url, summary, start_year, end_year }) =>
        <WorkExperience
            position={position}
            company={company}
            url={url}
            summary={summary}
            startYear={start_year}
            endYear={end_year} />
    );

    return (
        <div className="p-3 mt-2" style={containerStyle}>
            <h4>Work experience</h4>
            {parsedEntries}
        </div>
    )
};