/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import React from 'react';

import './LandingPage.css';
import {ReactComponent as ReactLogo} from './logo_edmadd.svg';

const LandingPage = () => {
    const styleLandingPage = {
        height: "100vh",
        width: '100%',
        maxWidth: '1440px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    return ( 
        <div css={styleLandingPage} >
            <ReactLogo className="react-logo" />
        </div>
     );
}
 
export default LandingPage;