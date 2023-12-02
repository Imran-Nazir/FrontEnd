import React, {useEffect, useState} from 'react';

const Service1 = () => {
    let [Data1, setData1] = useState();
    let [Data2, setData2] = useState();
    const change1=()=>{
        //using promises
        useEffect(()=>{
            fetch('https://dummyjson.com/products/6')
            .then(res=>res.json())
            .then(json=>setData1(json))
        }, [])
    }
    const change2 = ()=>{
        //using async await
        useEffect(()=>{
            (async ()=>{
                let response = await fetch('https://dummyjson.com/products/1');
                let json = await response.json();  
                setData2(json);
            })()
        }, []) 
    }
        
    
    return (
        <div>
            <h2>This is Service1</h2>
            <h4>useEffect()</h4>
            {JSON.stringify(Data1)}
            <br />
            {JSON.stringify(Data2)}
        </div>
    );
};

export default Service1;