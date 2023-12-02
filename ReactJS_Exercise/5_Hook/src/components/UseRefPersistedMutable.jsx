import {useRef} from 'react';

const UseRefPersistedMutable = () => {
    let number = useRef(0);
    
    const change = ()=>{
        let demo = number.current++; // increment
        console.log(`Clciked ${demo} times`);
    }
    return (
        <div>
            <h1>useRef() creating persisted mutable value</h1>
            <button onClick={change}>Change</button>
        </div>
    );
};

export default UseRefPersistedMutable;