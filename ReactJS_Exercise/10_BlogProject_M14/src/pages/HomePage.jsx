import React, {useState, useEffect} from 'react';
import Layout from '../component/Layout';
import BlogList from '../component/BlogList';
import { postLatest } from '../APIRequest/APIRequest';
import Loader from '../component/Loader';


const HomePage = () => {

    let [list, setList] = useState(null);
    
    useEffect(()=>{
        (async()=>{
            let res = await postLatest();
            setList(res);
        })()
    }, [])

    return (
        <Layout>
            {list===null ? <Loader/> : <BlogList list={list}/>}
        </Layout>
    );
};

export default HomePage;