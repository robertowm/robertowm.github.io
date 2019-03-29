import React from 'react'
import { Jumbotron, Media } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleUp, faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const IconList = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconLink = function() {
    const Entry = styled.li`
        width: 32px;
        height: 32px;
        background-color: white;
        border-radius: 50%;
        padding: 0 5px;
        margin: 0 5px;
        font-size: 1.5em;
        display: inline-block;
        background-clip: padding-box;
    `;

    const Link = styled.a`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    `;

    const mapNameToIcon = (name) => {
        if (name === 'GitHub') return faGithub;
        if (name === 'LinkedIn') return faLinkedin;
        if (name === 'Your Acclaim') return faAngleDoubleUp;
        if (name === 'PDF') return faFilePdf;
        if (name === 'Email') return faEnvelope;
        throw new Error('Invalid name for icon');
    };
    
    return ({ iconName, url }) => <Entry><Link href={url}><FontAwesomeIcon style={{ fontSize: "0.8em" }} icon={mapNameToIcon(iconName)} /></Link></Entry>;
}();

export default ({ fullName, summary, address, email, profileUrl, cvUrl, photo, links }) => {
    return (
        <Jumbotron>
            <Media>
                <Media left middle>
                    <img src={photo} className="mx-3 rounded img-thumbnail" alt={fullName} />
                    <IconList className="list-inline">
                        {links.map(({ name, url }, index) => <IconLink url={url} iconName={name} key={index} />)}
                        <IconLink url={cvUrl} iconName="PDF" />
                        <IconLink url={"mailto:" + email} iconName="Email" />
                    </IconList>
                </Media>
                <Media body className="">
                    {summary.split('\n').map(value => <p className="mr-3">{value}</p>)}
                </Media>
            </Media>
        </Jumbotron>
    )
};