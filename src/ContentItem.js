import React from 'react'

function Item(props) {
    return(
        <tr
            align={props.align}
            valign={props.valign}
            bgcolor={props.bgcolor}
            height={props.height}
            style= {props.style}>
            
            {props.children}

        </tr>
    )
}

Item.defaultProps = {
    align: "center",
    valign: "top",
    bgcolor: undefined,
    style: undefined,
    children: undefined,
    height: undefined  
}

export default Item;