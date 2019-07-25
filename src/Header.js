import React from "react";
import { Item } from "react-html-email";
import EmailSection from "./EmailSection"
import EmailImage from "./Image";
import { typeStyles } from './utils/sharedStyles';

const headerStyle = {
    ...typeStyles,
    padding: '40px 0 30px 0'
}

function Header(props) {
    return(
        <EmailSection idString={props.idString}>
            <Item align="center" valign="top" bgcolor="#42454a" style={headerStyle}>
                <td>
                    <EmailImage 
                        src="" 
                        alt="Some amazing alt text goes here">
                    </EmailImage>
                </td>
            </Item>
        </EmailSection>
    )
}

export default Header;