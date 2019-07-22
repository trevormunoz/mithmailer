import React from "react";
import EmailSection from "./EmailSection"

function Email() {
  return (
    <>
    <EmailSection idString="emailHeader" />
    <EmailSection idString="emailBody" />
    <EmailSection idString="emailFooter" />
    </>
  );
}

export default Email;
