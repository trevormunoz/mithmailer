import React from "react";
import { Item } from "react-html-email";
import EmailSection from "./EmailSection"

const footerStyle = {
    padding: '40px 0 30px 0'
}

function Footer() {
    return(
        <EmailSection>
            <Item align="center" valign="top" bgcolor="#ee4c50" style={footerStyle}>
                <p>And I'm the footer</p>
            </Item>
        </EmailSection>
    )
}

export default Footer;