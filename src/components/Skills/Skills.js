/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import React from 'react';
import './Skills.css';

const Skills = ({scroll, posSkill, posProjects, posRef}) => {
    const breakpoints = [676, 767, 991, 1199, 1600, 2140];

    const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    var vwh = document.documentElement.clientHeight;

    var h1Opacity;
    if (scroll < (posProjects-vwh/2)) {
        h1Opacity = (12*(scroll - (posSkill-vwh/2)) / posSkill);
    } else {
        h1Opacity = 1 - 24*(scroll - (posProjects-vwh/2)) / posProjects
    }

    //console.log("skills/postions: ", posSkill, posProjects, scroll, h1Opacity);

    const styleSkills = {
        height: '100vh',
        width: '100%',

        [mq[5]]: {
            marginRight: '350px',
        },
        [mq[4]]: {
            marginRight: '210px',
        },

        "& h1": {
            fontSize: '144px',
            textAlign: 'left',
            position: 'sticky',
            top: '2vh',
            marginLeft: '2vw',
            color: "rgba(3, 103, 134, 0.2)",
            opacity: h1Opacity,
        },
        
        "& h4": {
            maxWidth: '1440px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'left',
            paddingTop: '5vh',
            fontSize: '32px',
            //marginLeft: '2vw',
        },

        "& .row-out": {
            maxWidth: '1440px',
            marginLeft: 'auto',
            marginRight: 'auto',
            //marginLeft: '2vw',
            marginTop: '25px',
            height: '70vh',
        },

        "& .row-in": {
            width: '100%',
            height: '60vh',
            position: 'relative',
        },

        "& .col-in": {
            height: '100%',
        },

        "& .diagram": {
            height: '100%',
            //maxHeight: '795px',
            margin: '0px',
            borderRadius: '35px',
            border: '5px solid black',
            backgroundImage: 'linear-gradient(to bottom right, white, rgba(3, 103, 134, 1))',
            //boxShadow: 'inset 0px 0px 3px 3px rgba(100, 100, 100, 1)',
            zIndex: '0',
            position: 'relative',
          },

        "& .rating": {
            marginBottom: '12%',
            fontWeight: '700',
            fontSize: '32px',
            color: 'rgba(134, 3, 3, 1)',
            marginLeft: '50px',

            "& .text": {
                width: '120px',
                textAlign: 'right',
            }
        },
    };

    return ( 
        <div className="skills" css={styleSkills} ref={posRef} >
            <h1>Skills</h1>
            <h4>These are the languages, frameworks, libraries, etc. I'm working most...and it's getting more day by day.</h4>
            <div className="row-out row align-items-center justify-items-center">
                <div className="row-in row" >
                    <div className="col-in col-md-6">
                        <div className="diagram">
                            <div className="ball b1"></div>
                            <div className="ball b2"></div>
                            <div className="ball b3"></div>
                            <div className="ball b4"></div>
                            <div className="ball b5"></div>
                            <div className="ball b6"></div>
                            <div className="ball b7"></div>
                            <div className="ball b8"></div>
                            <div className="ball b9"></div>
                            <div className="ball b10"></div>
                        </div>
                    </div>
                    <div className="col-in col-md-6 align-items-right">
                        <div className="rating d-flex flex-row align-items-baseline">
                            <p className="text">html:</p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                        </div>
                        <div className="rating d-flex flex-row align-items-baseline">
                            <p className="text">css:</p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                        </div>
                        <div className="rating d-flex flex-row align-items-baseline">
                            <p className="text">js:</p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                        </div>
                        <div className="rating d-flex flex-row align-items-baseline">
                            <p className="text">reactjs:</p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                        </div>
                        <div className="rating d-flex flex-row align-items-baseline">
                            <p className="text">python:</p>
                            <p className="circle fill"></p>
                            <p className="circle fill"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                        </div>
                        <div className="rating d-flex flex-row align-items-baseline">
                            <p className="text">django:</p>
                            <p className="circle fill"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                            <p className="circle"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Skills;