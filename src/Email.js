import React from "react";
import { Helmet } from 'react-helmet';
import Preview from "./Preview";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const baseEmailStyle = {
  borderCollapse: 'collapse'
}

function Email(props) {
  return (
    <>
    <Helmet>
      <title>{props.msgTitle}</title>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Helmet>
    <Preview previewMsg={props.preview} />
    <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
        <tr>
            <td align="center" valign="top">
                <table border="1px solid #42454a" cellpadding="0" cellspacing="0" width="600" style={baseEmailStyle}>
                  <Header idString="emailHeader" />
                  <Body idString="emailBody" />
                  <Footer idString="emailFooter" />
                </table>
            </td>
        </tr>
    </table>
    </>
  );
}

export default Email;
