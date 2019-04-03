import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { IconList, ClicableIcon, Icon } from '../components/icon';
import { style as containerStyle } from '../components/block';

export default ({ education, certifications }) => {

    const Entry = ({ title, children }) =>
        <div style={{ fontSize: "14px" }}>
            <div className="font-weight-bold">{title}</div>
            {children}
        </div>;

    return (
        <>
            <div className="p-3 my-2" style={containerStyle}>
                <h4>Education</h4>
                {education.map(({ title, institution, start_year, end_year }) =>
                    <div style={{ fontSize: "14px" }}>
                        <div className="font-weight-bold">{title}</div>
                        <div>{institution}</div>
                        <div>{start_year} - {end_year}</div>
                    </div>
                )}

            </div>
            <div className="p-3 my-2" style={containerStyle}>
                <h4>Most relevant certifications</h4>
                {certifications.map(({ name, institutions, url, date }) =>
                    <div style={{ fontSize: "14px" }}>
                        <a href={url}><div className="font-weight-bold">{name}</div></a>
                        <div>{institutions.join(', ')}</div>
                        <div>{date}</div>
                    </div>
                )}
            </div>
        </>
    )
};