import React from "react";

const imageStyle = {
    padding: '0px 10px 0px 10px',
    border:'0',
    outline: 'none', 
    textDecoration: 'none',
    display: 'block'
}

// Made a component so as to avoid repeating the style reset
function EmailImage(props) {
    return(
        <img
            src={props.src}
            border='0'
            style={imageStyle}
            alt={props.alt}
            height={props.height}
            width={props.width}
        ></img>
    );
}

EmailImage.defaultProps = {
    width: "95%",
    src: undefined,
    valign: "top"
}

export default EmailImage;