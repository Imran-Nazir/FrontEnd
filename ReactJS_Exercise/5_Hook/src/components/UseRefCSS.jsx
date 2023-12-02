import React, {useRef} from 'react';

const UseRefCSS = () => {
    let myCSS = useRef()
    const change = ()=>{
        myCSS.current.classList.remove('text-success');
        myCSS.current.classList.add('text-danger');
    }
    return (
        <div>
            <h1>useRef() css</h1>
            <h1 className="text-success" ref={myCSS}>Hi there, I wanna  goto my office.</h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRefCSS;