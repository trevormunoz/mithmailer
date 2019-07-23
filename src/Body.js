import React from "react";
import { Item } from "react-html-email";
import EmailSection from "./EmailSection"
import { importMDX } from 'mdx.macro';

const bodyStyle = {
    padding: '40px 30px 30px 30px'
}

const Content = importMDX.sync('./content/bodyContent.mdx')

function Body(props) {
    return(
        <EmailSection idString={props.idString}>
            <Item align="left" valign="top" bgcolor="#ffffff" style={bodyStyle}>
                <Content />
            </Item>
        </EmailSection>
    )
}

export default Body;