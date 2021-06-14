import React from "react";
import {Spinner} from "react-bootstrap";

const FullScreenLoader = ({show}:{show?:boolean}) => {
    if (!localStorage.getItem('loader') || show) return null;
    return (
        <div style={{
            opacity:'0.3',
            height: window.innerHeight,
            width: window.innerWidth,
            position: 'absolute',
            backgroundColor: 'white',
            zIndex: 1000,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            display:'flex'
        }}>
            <Spinner style={{alignSelf:'center'}} animation="border" role="status">
                <span style={{color:'black',alignSelf:'center'}} className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
}
export default FullScreenLoader;
