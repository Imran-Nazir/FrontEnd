import React, {useRef} from 'react';

const UseRef1 = () => {

    let myHeadLine1 = useRef();
    let myHeadLine2 = useRef();
    //let {myHeadLine1, myHeadLine2} = useRef(); দুইটার বাটন বা দুইটার html  property er জন্য েভাবে কাজ করেনা। আগের দুইটার মতো কাজ করতে হবে।
    const change1 = ()=>{
    myHeadLine1.current.innerHTML = "<ul><li>A</li><li>B</li><li>C</li><li>D</li></ul>";
  }

    const change2 = ()=>{
    myHeadLine2.innerHTML = "<ul><li>E</li><li>F</li><li>G</li><li>H</li></ul>";
  }
    return (
        <div>
            <h1>How to use useRef?</h1>

            <h1 ref={myHeadLine1}>এটা current প্রোপার্টি দিয়ে কাজ করে।</h1> 
            <button onClick = {change1}>Click1</button>

            <h1 ref={(h1)=>myHeadLine2=h1}>এটা current property ছাড়া কাজ করে</h1>
            <button onClick = {change2}>Click2</button>
        </div>
    );
};

export default UseRef1;