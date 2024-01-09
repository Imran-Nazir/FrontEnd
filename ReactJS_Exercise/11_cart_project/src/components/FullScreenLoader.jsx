import React from 'react';
import Loader from '../assets/img/Loader.svg'

const FullScreenLoader = (props) => {
    return (
        <div className={props.visibility}>
            <div className="ProcessingDiv">
                <div className="center-screen">
                    <img src={<Loader/>} className="loader-size" />
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;