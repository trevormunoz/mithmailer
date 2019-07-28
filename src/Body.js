import React, { lazy, Suspense } from "react";
import { Item } from "react-html-email";
import EmailSection from "./EmailSection"
import { importMDX } from 'mdx.macro';
import { typeStyles } from './utils/sharedStyles';

const bodyStyle = {
    ...typeStyles,
    padding: '30px 30px 38px 30px'
}

const Content = lazy(()=> importMDX('../content/bodyContent.mdx'));

function Body(props) {
    return(
        <EmailSection idString={props.idString}>
            <Item align="left" valign="top" bgcolor="#ffffff" style={bodyStyle} >
                <td style={typeStyles}>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Content />
                    </Suspense>
                </td>
            </Item>
        </EmailSection>
    )
}

export default Body;