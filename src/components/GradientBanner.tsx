import React from 'react';

const GradientBanner = ({title,subTitle}:{title:string,subTitle:string}) => {
    return (
        <div className="text-white text-center d-flex align-items-center img-gradient-overlay py-5 px-4">
            <div>
                <h5 className="orange-text">{title}</h5>
                <p>{subTitle}</p>
            </div>
        </div>
    );
}

export default GradientBanner;
