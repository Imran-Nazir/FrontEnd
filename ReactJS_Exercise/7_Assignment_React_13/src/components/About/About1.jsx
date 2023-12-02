import React from 'react';
import { useRef } from 'react';
const About1 = () => {
    let firstName , lastName = useRef();
    const change = ()=>{
        let fName = firstName.value;
        let lName = lastName.value;
        alert(fName+ " "+lName)
    }
    return (
        <div>
            <h2>This is About1</h2>
            <input ref={(a)=>firstName=a} type="text" placeholder='Enter first name: '/>
            <br />
            <input ref={(a)=>lastName=a} type="text" placeholder='Enter last name: '/>
            <br />
            <button onClick={change}>Click</button>
        </div>
    );
};

export default About1;