import React from "react";
import { Box } from "react-html-email";
import Item from "./ContentItem";

function EmailSection(props) {
    return (
        <Item align={props.align} valign={props.valign}>
          <Box border="0" cellPadding="0" cellSpacing="0" width={props.width} id={props.idString}>
              {props.children}
          </Box>
        </Item>
    );
}

EmailSection.defaultProps = {
  width: "100%",
  align: "center",
  valign: "top"
}

export default EmailSection;

