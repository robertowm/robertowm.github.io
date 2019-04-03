import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { IconList, ClicableIcon, Icon } from '../components/icon';
import { style as containerStyle } from '../components/block';

const mapNameToIcon = (name) => {
    if (name === 'GitHub') return ["fab", "github"];
    if (name === 'LinkedIn') return ["fab", "linkedin"];
    if (name === 'Your Acclaim') return "angle-double-up";
    if (name === 'PDF') return "file-pdf";
    if (name === 'Email') return "envelope";
    throw new Error('Invalid name for icon');
};

export default ({fullName, body, address, email, cvUrl, photo, links }) => {
    return (
        <div className="p-3" style={containerStyle}>
            <Row className="px-md-1">
                <Col md="3">
                    <img src={photo} className="rounded img-thumbnail" alt={fullName} />
                </Col>
                <Col>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                </Col>
            </Row>
            <Row>
                <Col md="3" className="my-2">
                    <IconList>
                        {links.map(({ name, url }, index) => <ClicableIcon url={url} icon={mapNameToIcon(name)} key={index} />)}
                        <ClicableIcon url={cvUrl} icon={mapNameToIcon("PDF")} />
                        <ClicableIcon url={"mailto:" + email} icon={mapNameToIcon("Email")} />
                    </IconList>
                </Col>
                <Col md="4" className="my-2">
                    <Icon icon="map-marker-alt">{address}</Icon>
                </Col>
            </Row>
        </div>
    )
};