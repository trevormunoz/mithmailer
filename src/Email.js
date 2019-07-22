import React from "react";
import { Helmet } from 'react-helmet';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function Email() {
  return (
    <>
    <Helmet>
      <title>MITH Turns 20</title>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Helmet>
    <Header idString="emailHeader" />
    <Body idString="emailBody" />
    <Footer idString="emailFooter" />
    </>
  );
}

export default Email;
