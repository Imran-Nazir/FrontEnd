import {useState} from 'react';

const UseStateObject = () => {
    const [myObj, setMyObj] = useState({ 
        name: "Imran",
        Role: "Junior Web Developer",
        Office: "sicunet.com"
    })

    const changeObj = ()=>{
        setMyObj(previousObj => ({ 
            ...previousObj,
            name: "Nazir"
        }));
    };

    return (
        <div>
            <h1>useState() immutable object</h1>
            <h3>{myObj.name}</h3>
            <button onClick={changeObj}>Click</button>
        </div>
    );
};

export default UseStateObject;