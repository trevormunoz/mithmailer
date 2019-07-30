import React from 'react';
import ReactDOM from 'react-dom';
import Email from './Email';

ReactDOM.render(
    <Email 
        msgTitle="You've got MITH Mail" 
        preview="You'll want to open this amazing email!" />, 
    document.getElementById('emailContainer')
);

