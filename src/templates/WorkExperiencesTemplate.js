import React from 'react'
import { Row, Col } from 'reactstrap'
import Remark from 'remark'
import html from 'remark-html';
import styled from 'styled-components'
import { style as containerStyle, HtmlBlock } from '../components/block';

const processor = function () {
    const obj = new Remark().use(html);
    return (elem) => obj.processSync(elem).toString();
}();

const DateRange = ({ begin, end }) => {
    const content = !end ? `Since ${begin}` : (begin === end) ? begin : `${begin} - ${end}`;
    return <div>({content})</div>;
}

const WorkExperience = ({ position, company, url, summary, startYear, endYear }) => {
    const Position = () => <div className="font-weight-bold">{position}</div>;
    const Company = () => <div><a style={{color: "black"}} href={url}>{company}</a></div>;
    const Date = () => <DateRange begin={startYear} end={endYear} />;
    return <>
        <Row style={{ fontSize: "14px" }} className="d-none d-md-block">
            <Col md="9">
                <Position />
                <Company />
            </Col>
            <Col>
                <Date className="text-right" />
            </Col>
        </Row>
        <div style={{ fontSize: "14px" }} className="d-block d-md-none">
            <Position />
            <Company />
            <Date />
        </div>
        <HtmlBlock body={processor(summary)} />
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
        <div className="p-3 my-2" style={containerStyle}>
            <h4>Work experience</h4>
            {parsedEntries}
        </div>
    )
};