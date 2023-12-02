import {useRef} from 'react';

const UseRefExpensiveComputations = () => {
    let APIData = useRef(null);
    let myJSON = useRef();

    const fetchData =async ()=>{
        let response = await fetch('https://dummyjson.com/products/1');
        APIData.current = await response.json();
    }

    const showData =()=>{
        myJSON.current.innerText = JSON.stringify(APIData.current);
    }

    return (
        <div>
            <br />
            <h4>useRef() expensive computations</h4>
            <p ref={myJSON}></p> <br />
            <button onClick={fetchData}>Call API</button><br />
            <button onClick={showData}>Show Data</button><br />
        </div>
    );
};

export default UseRefExpensiveComputations;