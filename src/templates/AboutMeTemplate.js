import React from 'react'
import { Jumbotron, Media } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleUp, faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const mapNameToIcon = (name) => {
    if (name === 'GitHub') return faGithub;
    if (name === 'LinkedIn') return faLinkedin;
    if (name === 'Your Acclaim') return faAngleDoubleUp;
    if (name === 'PDF') return faFilePdf;
    if (name === 'Email') return faEnvelope;
    throw new Error('Invalid name for icon');
};

const ulStyle = {
    margin: 0,
    padding: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const liStyle = {
    width: "32px",
    height: "32px",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "0 5px",
    margin: "0 5px",
    fontSize: "1.5em",
    display: "inline-block",
    backgroundClip: "padding-box",
};

const aStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
};

const iconStyle = {
    fontSize: "0.8em",
};

const IconLink = ({iconName, url}) => <li style={liStyle}><a href={url} style={aStyle}><FontAwesomeIcon style={iconStyle} icon={mapNameToIcon(iconName)} /></a></li>;

export default ({ fullName, summary, address, email, profileUrl, cvUrl, photo, links }) => {
    return (
        <Jumbotron>
            <Media>
                <Media left middle href="#">
                    <img src={photo} className="mx-3 rounded img-thumbnail" alt={fullName} />
                    <ul className="list-inline" style={ulStyle}>
                        {links.map(({name, url}) => <IconLink url={url} iconName={name} />)}
                        <IconLink url={cvUrl} iconName="PDF" />
                        <IconLink url={"mailto:"+ email} iconName="Email" />
                    </ul>
                </Media>
                <Media body className="">
                    {summary.split('\n').map(value => <p className="mr-3">{value}</p>)}
                </Media>
            </Media>
        </Jumbotron>
    )
};