import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleUp, faFilePdf, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faLinkedin, faAngleDoubleUp, faFilePdf, faEnvelope, faMapMarkerAlt);

export const IconList = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconLink = styled.a`
    height: 32px;
    width: 32px;
    min-width: 32px;
    background-color: white;
    border: 1px solid #dee2e6;
    border-radius: 50%;
    padding: 0 5px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BaseIcon = ({ icon }) =>
    <FontAwesomeIcon style={{ fontSize: "20px", color: "#0099cc" }} icon={icon} />;

const Wrapper = styled.div`
    background-color: white;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    display: flex;
    align-items: center;
    min-height: 32px;
    * {
        margin: 0 5px;
    }
    width: 100%;
`;

export const Icon = ({ icon, children }) => <Wrapper><BaseIcon icon={icon} style={{ margin: "5px" }} />{children}</Wrapper>;

export const ClicableIcon = ({ icon, url }) =>
    <IconLink href={url}><BaseIcon icon={icon} /></IconLink>;
