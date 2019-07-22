import React from "react";
import { Item, Box } from "react-html-email";

function EmailSection(props) {
    return (
        <Item align={props.align} valign={props.valign}>
          <Box border="0" cellpadding="20" cellspacing="0" width={props.width} id={props.idString}>
              <Item align="center" valign="top">
                I'm the {props.idString} of this amazing email!
              </Item>
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

