import React from "react";
import { Item } from "react-html-email";
import EmailSection from "./EmailSection"

const bodyStyle = {
    padding: '40px 0 30px 0'
}

function Body() {
    return(
        <EmailSection>
            <Item align="center" valign="top" bgcolor="#ffffff" style={bodyStyle}>
                <p>I'm the body of this amazing email</p>
            </Item>
        </EmailSection>
    )
}

export default Body;