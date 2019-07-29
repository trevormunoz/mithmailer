import React from "react";
import Item from "./ContentItem";
import EmailSection from "./EmailSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import DecorativeBorder from "./DecorativeBorder";
import { typeStyles } from './utils/sharedStyles';

const footerStyle = {
    ...typeStyles,
    padding: '40px 30px 30px 30px',
    fontSize: '12px',
    color: '#ffffff'
}

const iconStyle = {
    padding: '0px 10px 0px 10px',
    color: '#a8b50a'
}

function Footer(props) {
    return(
        <EmailSection idString={props.idString}>
            <DecorativeBorder />
            <EmailSection>
                <Item bgcolor="#42454a">
                    <td width="60%" style={footerStyle}>
                        <EmailSection>
                            <Item>
                                {/* TODO: Style links */}
                                <td align="left" style={typeStyles}>Except where noted, all content is <br/> 
                                &copy; Maryland Institute for Technology in the Humanities and is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International license.</a></td>
                            </Item>
                            <Item>
                                <td align="left" style={{
                                    ...typeStyles, 
                                    padding: '15px 0px 0px 0px'}}>
                                    {/* TODO: Implement unsubscribe */}
                                    Unsubscribe stuff
                                </td>
                            </Item>
                        </EmailSection>
                    </td>
                    <td align="right" width="40%" style={footerStyle}>
                        <b>Mailing Address:</b><br/>
                        Maryland Institute for Technology in the Humanities <br/>
                        4130 Campus Drive <br/>
                        0301 Hornbake Library North <br/>
                        University of Maryland <br/>
                        College Park, MD 20742
                    </td>
                </Item>
            </EmailSection>
            <EmailSection>
                <Item bgcolor="#42454a">
                    <td align="right" style={{padding: '15px 30px 30px 30px'}}>
                        <a href="https://mith.umd.edu">
                            <FontAwesomeIcon icon={faBookmark} style={iconStyle} />
                        </a>
                        <a href="https://twitter.com/umd_mith">
                            <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
                        </a>
                        <a href="https://www.facebook.com/UMD.MITH">
                            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
                        </a>
                        <a href="https://github.com/umd-mith">
                            <FontAwesomeIcon icon={faGithub} style={iconStyle} />
                        </a>
                    </td>
                </Item>
            </EmailSection>
        </EmailSection>
    )
}

export default Footer;