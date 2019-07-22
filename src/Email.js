import React from "react";
import { Helmet } from 'react-helmet';
import EmailSection from "./EmailSection"

function Email() {
  return (
    <>
    <Helmet>
      <title>MITH Turns 20</title>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Helmet>
    <EmailSection idString="emailHeader" />
    <EmailSection idString="emailBody" />
    <EmailSection idString="emailFooter" />
    </>
  );
}

export default Email;
