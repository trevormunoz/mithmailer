import React from "react";
import { Item } from "react-html-email";
import EmailSection from "./EmailSection"
import { importMDX } from 'mdx.macro';
import { typeStyles } from './utils/sharedStyles';

const bodyStyle = {
    ...typeStyles,
    padding: '40px 30px 30px 30px'
}

const Content = importMDX.sync('./content/bodyContent.mdx')

function Body(props) {
    return(
        <EmailSection idString={props.idString}>
            <Item align="left" valign="top" bgcolor="#ffffff" style={bodyStyle} >
                <td style={typeStyles}>
                    <Content />
                </td>
            </Item>
        </EmailSection>
    )
}

export default Body;