import React, {useState, useEffect} from 'react';
import Layout from '../component/Layout';
import { useParams } from 'react-router-dom';
import { postByCategory } from '../APIRequest/APIRequest';
import Loader from '../component/Loader';
import BlogList from '../component/BlogList';


const ByCategoryPage = () => {

    let {categoryID} = useParams();
    // alert(categoryID)

    let [list, setList] = useState(null);

    useEffect(()=>{
        (async()=>{
            let res = await postByCategory(categoryID);
            setList(res);
    })()
    }, [categoryID]) //since category id is simultaneously changing, so we have to add categoryID in the useEffect dependency
    

    return (
        <Layout>
            {list===null ? <Loader/> : <BlogList list={list}/>}
        </Layout>
    );
};

export default ByCategoryPage;