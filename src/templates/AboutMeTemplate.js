import React from 'react'
import { Row, Col } from 'reactstrap'
import Img from 'gatsby-image'

import { IconList, ClicableIcon, Icon } from '../components/icon'
import { blockCss } from '../components/block'

const mapNameToIcon = name => {
  if (name === 'GitHub') return ['fab', 'github']
  if (name === 'LinkedIn') return ['fab', 'linkedin']
  if (name === 'Your Acclaim') return 'angle-double-up'
  if (name === 'PDF') return 'file-pdf'
  if (name === 'Email') return 'envelope'
  throw new Error('Invalid name for icon')
}

export default ({ fullName, body, address, email, cvUrl, photo, links }) => {
  return (
    <div className="p-3" css={blockCss}>
      <Row className="px-md-1">
        <Col lg="3" md="4" className="text-center mb-3">
          <Img
            fluid={photo.fluid}
            className="rounded img-thumbnail"
            alt={fullName}
          />
        </Col>
        <Col lg="9" md="8">
          <div
            className="text-left text-md-justify"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </Col>
      </Row>
      <Row>
        <Col lg="3" md="4" sm="6" xs="12" className="my-2">
          <IconList>
            {links.map(({ name, url }, index) => (
              <ClicableIcon url={url} icon={mapNameToIcon(name)} key={index} />
            ))}
            <ClicableIcon url={cvUrl} icon={mapNameToIcon('PDF')} />
            <ClicableIcon
              url={'mailto:' + email}
              icon={mapNameToIcon('Email')}
            />
          </IconList>
        </Col>
        <Col lg="9" md="8" sm="6" xs="12" className="my-2">
          <Icon
            className="justify-content-center justify-content-md-start"
            icon="map-marker-alt"
          >
            {address}
          </Icon>
        </Col>
      </Row>
    </div>
  )
}
