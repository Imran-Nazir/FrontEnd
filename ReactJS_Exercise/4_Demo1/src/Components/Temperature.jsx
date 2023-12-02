import React from 'react';

const Temperature = () => {
    const status = 31
    const temperature = (status)=>{
        if(status > 30){
            return <p>It's hot</p>
        }
        else if(status < 20){
            return <p>It's cool</p>
        }
        else{
            return null;
        }
    };
    return (
        <div>
            <h1>Temperature Status</h1>
            {temperature(status)};
        </div>
    );
};

export default Temperature;