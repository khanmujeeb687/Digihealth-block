import React from 'react';
import Lottie from 'react-lottie';
import animationData from './../lottie/infection.json';

const LottieComponent = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div style={{alignSelf:'center'}}>
        <Lottie options={defaultOptions}
                height={window.innerWidth/3}
                width={window.innerWidth/3}/>
        </div>
    );

}

export default LottieComponent;
