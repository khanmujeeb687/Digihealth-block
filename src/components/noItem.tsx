import React from 'react';
import animationData from "../lottie/no-item.json";
import Lottie from "react-lottie";
import {Typography} from "@material-ui/core";


const NoItem=()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div style={{alignSelf:'center',padding:100}}>
            <Lottie options={defaultOptions}
                    height={window.innerWidth/5}
                    width={window.innerWidth/5}/>
                    <Typography variant={'h4'}>No Item found!</Typography>
        </div>
    );

}


export default NoItem;