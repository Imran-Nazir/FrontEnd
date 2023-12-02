import {useEffect, useState} from 'react';

const UseEffect1 = () => {

    /*using useEffect()
    useEffect(()=>{
        console.log('Hello effect');
    }, [1,2,4,7])*/

    let [Data1, setData1] = useState();
    let [Data2, setData2] = useState();
    
    //using promises
    useEffect(()=>{
        fetch('https://dummyjson.com/products/6')
        .then(res=>res.json())
        .then(json=>setData1(json))
    }, [])
    
    //using async await
    useEffect(()=>{
        (async ()=>{
            let response = await fetch('https://dummyjson.com/products/1');
            let json = await response.json();  
            setData2(json);
        })()
    }, []) 
    
    

    

    return (
        <div>
            {JSON.stringify(Data1)}
            <br />
            {JSON.stringify(Data2)}
        </div>
    );
};

export default UseEffect1;