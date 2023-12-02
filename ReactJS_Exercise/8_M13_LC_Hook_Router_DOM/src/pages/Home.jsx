import React, {useEffect, useState} from 'react';
//import Menu from '../components/Menu';
import { ReadRequest } from '../APIRequest/ApiRequest.js';

const Home = () => {
    let [data, setData] = useState([]);
    /*
    const ReadData = async ()=>{
        let res = await ReadRequest();
        setData(res);
    }
    */
    useEffect(()=>{ //eta button er bodole kaj korbe
        (async ()=>{
            let res = await ReadRequest();
            setData(res);
        
        })()
    
    }, [])


    return (
        <div>
            {/*<Menu /> */}
            <h1>This is home page</h1>
            {/*<button onClick={ReadRequest}>Get Product List without useState()</button>*/}
            {/*<button onClick={ReadData}>Get Product List with useState()</button>*/}
            {/*<p>{JSON.stringify(data)}</p> */}
            <ul>
                {data.map((item, i)=>{
                    return <li key={i}><a href="#" target="_blank">{item['ProductName']}</a></li>
                })}
            </ul>
        </div>
    );
};

export default Home;