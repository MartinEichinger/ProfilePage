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
        </animated.div>
     );
}
 
export default ArrowDown;

//<img css={styleArrowDown} src="./ArrowDown.png" />
