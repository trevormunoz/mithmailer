import React from "react";

const imageStyle = {
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
    width: "100%",
    src: "center",
    valign: "top"
}

export default EmailImage;