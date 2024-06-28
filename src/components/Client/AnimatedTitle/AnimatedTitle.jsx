import React from 'react';

export const AnimatedTitle = ({ title = 'Title', subTitle = 'subtitle', children}) => {
    return (
        <div className='animated-title-wrapper'>
            <div className="animated-title service-page-text-wrapper">
                {children}
                <div className="text-top">
                    <div className='title'>{typeof(title) === 'string' ? title?.toUpperCase() : title}</div>
                </div>
                <div className="text-bottom">
                    <div className='service-page-subtitle'>{typeof(subTitle) === 'string' ? subTitle?.toUpperCase() : subTitle}</div>
                </div>
            </div>
        </div>
    );
};