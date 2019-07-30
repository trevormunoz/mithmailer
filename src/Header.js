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

// TODO: Make this less hacky
let imageComponent;
if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    imageComponent = <EmailImage 
                        src={headerImage} 
                        alt="Some amazing alt text goes here"
                        height="250" >
                    </EmailImage>
} else {
    imageComponent = <EmailImage 
                        src='http://cloudfronturl.stuff'
                        alt="Some amazing alt text goes here"
                        height="250" >
                    </EmailImage>
}

function Header(props) {
    return(
        <EmailSection idString={props.idString}>
            <Item align="center" valign="top" bgcolor="#424242" style={headerStyle}>
                <td>
                    {imageComponent}
                </td>
            </Item>
        </EmailSection>
    )
}

export default Header;