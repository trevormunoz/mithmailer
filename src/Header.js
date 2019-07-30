import React from "react";
import { Item } from "react-html-email";
import EmailSection from "./EmailSection"
import EmailImage from "./Image";
import { typeStyles } from './utils/sharedStyles';
import headerImage from './assets/images/MITH-20th-logo_wht.svg';

const headerStyle = {
    ...typeStyles,
    padding: '40px 0 30px 0',
    color: '#ffffff'
}

let imgSrc;
if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    imgSrc = headerImage
} else {
    imgSrc = 'http://cloudfronturl.stuff'
}

function Header(props) {
    return(
        <EmailSection idString={props.idString}>
            <Item align="center" valign="top" bgcolor="#424242" style={headerStyle}>
                <td>
                    <EmailImage 
                        src={imgSrc} 
                        alt="Some amazing alt text goes here"
                        height="250" >
                    </EmailImage>
                </td>
            </Item>
        </EmailSection>
    )
}

export default Header;