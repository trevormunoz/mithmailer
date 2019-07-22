import React from "react";
import { Item } from "react-html-email";
import EmailSection from "./EmailSection"

const headerStyle = {
    padding: '40px 0 30px 0'
}

function Header() {
    return(
        <EmailSection>
            <Item align="center" valign="top" bgcolor="#70bbd9" style={headerStyle}>
                <p>I'm still the header</p>
            </Item>
        </EmailSection>
    )
}

export default Header;