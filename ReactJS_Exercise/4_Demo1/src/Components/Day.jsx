import React from 'react';

const Day = (props) => {
    let day = props.dayOfWeek
    switch(day){
        case 1:
            return <p>It's Monday</p>
            break;
        case 6:
            return <p>It's Friday</p>
            break;
        default:
            return <p>It's Weekday</p>
            break;
    }
};

export default Day;