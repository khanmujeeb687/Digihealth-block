import React from 'react';
import Lottie from 'react-lottie';
import animationData from './../lottie/hispital.json';

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
        <div style={{alignSelf:'center',padding:20}}>
        <Lottie options={defaultOptions}
                height={window.innerWidth/4}
                width={window.innerWidth/2}/>
        </div>
    );

}

export default LottieComponent;
