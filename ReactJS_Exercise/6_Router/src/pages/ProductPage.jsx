import React from 'react';
import Menu from '../components/menu';
import {useParams} from 'react-router-dom';

const ProductPage = () => {

    let {id, name} = useParams();
    return (
        <div>
            <Menu />
            <p>ID: {id} , Name: {name}</p>
            <h1>This is product page</h1>
        </div>
    );
};

export default ProductPage;