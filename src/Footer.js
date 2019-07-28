import React from "react";
import Item from "./ContentItem";
import EmailSection from "./EmailSection";
import DecorativeBorder from "./DecorativeBorder";
import { typeStyles } from './utils/sharedStyles';

const footerStyle = {
    ...typeStyles,
    padding: '40px 30px 30px 30px',
    fontSize: '12px',
    color: '#ffffff'
}

// TODO: Add social buttons?
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
        </EmailSection>
    )
}

export default Footer;