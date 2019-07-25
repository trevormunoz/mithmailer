import React from "react";
import Item from "./ContentItem";

const borderStyle = {
    fontSize: '0',
    lineHeight: '0'
}

function DecorativeBorder() {
    return(
        <>
            <Item bgcolor="#a8b50a" style={borderStyle} height="14">
                <td>&nbsp;</td>
            </Item>
            <Item bgcolor="#42454a" style={borderStyle} height="3">
                <td>&nbsp;</td>
            </Item>
            <Item bgcolor="#a8b50a" style={borderStyle} height="2">
                <td>&nbsp;</td>
            </Item>
        </>
    )
}

export default DecorativeBorder;