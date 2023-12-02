import React from 'react';

const Greetings = () => {
    const isGreeting = true;
    return (
        <div>
            <h1>Greeting status</h1>
            {isGreeting === true ? <p>Hello World</p> : <p>Good bye</p>}
        </div>
    );
};

export default Greetings;