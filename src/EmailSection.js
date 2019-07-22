import React from "react";
import { Item, Box } from "react-html-email";

function EmailSection(props) {
    return (
        <Item align={props.align} valign={props.valign}>
          <Box border="0" cellpadding="20" cellspacing="0" width={props.width} id={props.idString}>
          <Box border="0" cellpadding="0" cellspacing="0" width={props.width} id={props.idString}>
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

