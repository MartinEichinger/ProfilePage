/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

const ArrowDown = ({onClick}) => {
    const [resetArrow, setResetArrow] = useState(false);

    const {x} = useSpring({ 
        from: { x: 0 }, 
        to: {x: 1}, 
        config: { duration: 1000 },
        onRest: () => setResetArrow(state => !state), 
        reset: resetArrow,
    });

    const styleArrowDown = {
        
        color: 'rgba(120,120,120,1)',
        position: 'fixed',
        top: 'calc(100vh - 50px)',
        left: '50vw',
        marginRight: "auto",
        zIndex: '10',
        backgroundImage: 'url(ArrowDown.png)',
        backgroundRepeat: 'no-repeat',
        width: '50px',
        height: '50px',
        cursor: 'pointer',

        "& .badge": {
            position: 'relative',
            width: '300px',
            borderRadius: '60%',
            transform: 'rotate(-70deg)',
        },

        "& h1 span": {
            //font: 26px Monaco, MonoSpace;
            fontSize: '24px',
            height: '80px',
            position: 'absolute',
            width: '25px',
            left: '60px',
            top: '-180px',
            transformOrigin: 'bottom center',
        }, 

        "& .char1": { transform: 'rotate(-5deg)', },
        "& .char2": { transform: 'rotate(25deg)', },
        "& .char3": { transform: 'rotate(55deg)', },
        "& .char4": { transform: 'rotate(85deg)', },
        "& .char5": { transform: 'rotate(115deg)', },
        "& .char6": { transform: 'rotate(145deg)', },
    };

    return ( 
        <animated.div style={{
            transform: x
                .interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]                    
                })
                .interpolate(x => `scale(${x})`)
        }} css={styleArrowDown} onClick={onClick}>
            <div className="badge">
                <h1>
                    <span className="char1">s</span>
                    <span className="char2">c</span>
                    <span className="char3">r</span>
                    <span className="char4">o</span>
                    <span className="char5">l</span>
                    <span className="char6">l</span>
                </h1>
            </div> 
        </animated.div>
     );
}
 
export default ArrowDown;

//<img css={styleArrowDown} src="./ArrowDown.png" />
