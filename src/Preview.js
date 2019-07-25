import React from "react";

const previewStyle = {
    color: 'transparent',
    display: 'none',
    maxHeight: '0',
    maxWidth: '0',
    opacity: '0',
    overflow: 'hidden',
    visibility: 'hidden',
    msoHide: 'all'
}

function Preview(props) {
    return(
        <span 
            style={previewStyle}
            height="0" 
            width="0">{props.previewMsg}</span>
    );
}

export default Preview;