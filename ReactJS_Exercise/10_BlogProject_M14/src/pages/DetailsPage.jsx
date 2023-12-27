import React, {useState, useEffect} from 'react';
import Layout from '../component/Layout';
import { useParams } from 'react-router-dom';
import {postDetails} from '../APIRequest/APIRequest.js'
import BlogDetails from '../component/BlogDetails';
import Loader from '../component/Loader'

const DetailsPage = () => {

    let {postID} = useParams();

    let [list, setList] = useState(null);

    useEffect(()=>{
        (async ()=>{
            let res = await postDetails(postID);
            setList(res);
        })()
    }, [postID])

    return (
        <Layout>
            {list===null ? <Loader/> : <BlogDetails list={list}/>}
        </Layout>
    );
};

export default DetailsPage;