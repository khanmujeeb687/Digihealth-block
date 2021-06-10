import React from 'react';
import {Link} from "react-router-dom";

const GradientBanner = ({title,subTitle,to}:{title:string,subTitle:string,to:string}) => {
    return (
        <Link to={to}>
        <div  className="text-white text-center d-flex align-items-center img-gradient-overlay py-5 px-4">
            <div>
                <h5 className="orange-text">{title}</h5>
                <p>{subTitle}</p>
            </div>
        </div>
        </Link>
    );
}

export default GradientBanner;
