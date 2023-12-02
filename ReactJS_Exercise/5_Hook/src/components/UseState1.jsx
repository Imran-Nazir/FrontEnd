import {useState} from 'react';

const UseState1 = () => {

    let [number, setNumber] = useState(0);

    const changeNumber = ()=>{
        //setNumber = number + 1; এভাবে দিলে কাজ হবেনা
        setNumber(number+ 1);
    }

    return (
        <div>
            <br />
            <h1>useState() starting</h1>
            <h2>Number: {number}</h2>
            <button onClick={changeNumber}>Click</button>
        </div>
    );
};

export default UseState1 ;