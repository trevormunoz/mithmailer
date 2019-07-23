import React from "react";
import { Item } from "react-html-email";
import EmailSection from "./EmailSection"
import { importMDX } from 'mdx.macro';

const bodyStyle = {
    padding: '40px 0 30px 0'
}

const Content = importMDX.sync('./content/bodyContent.mdx')

function Body() {
    return(
        <EmailSection>
            <Item align="center" valign="top" bgcolor="#ffffff" style={bodyStyle}>
                <Content />
            </Item>
        </EmailSection>
    )
}

export default Body;