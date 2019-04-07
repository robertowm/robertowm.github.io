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
    flex-wrap: wrap;
`;

export const IconLink = styled.a`
    height: 32px;
    width: 32px;
    min-width: 32px;
    background-color: rebeccapurple;
    border-radius: 50%;
    padding: 0px;
    margin: 0 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BaseIcon = ({ icon, color, style }) =>
    <FontAwesomeIcon style={{ ...style, fontSize: "20px", color: color }} icon={icon} />;

const Wrapper = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    min-height: 32px;
    width: 100%;
`;

export const Icon = ({ icon, children, className }) => 
    <Wrapper className={className}>
        <BaseIcon icon={icon} color="rebeccapurple" style={{ margin: "5px" }} />
        {children}
    </Wrapper>;

export const ClicableIcon = ({ icon, url }) =>
    <IconLink href={url}><BaseIcon icon={icon} color="white" /></IconLink>;
