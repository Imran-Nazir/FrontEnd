import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1>From Person component</h1>
            <p>Name: {props.name}</p>
        </div>
    );
};

export default Person;