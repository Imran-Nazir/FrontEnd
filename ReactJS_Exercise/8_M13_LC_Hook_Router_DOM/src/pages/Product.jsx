import React, {useState} from 'react';
//import Menu from '../components/Menu';
import { CreateRequest } from '../APIRequest/ApiRequest';
import { useNavigate } from 'react-router-dom';
const Product = () => {
    
    let [formValue, setFormValue] = useState({
        Img:'',
        ProductCode:'',
        ProductName:'',
        Qty:'',
        TotalPrice:'',
        UnitPrice:''
    })

    const inputOnChange = (key, value)=>{
        setFormValue(formValue=>({
            ...formValue,
            [key]:value
        }))
    }

    let navigate = useNavigate()
    const submit = async (e)=>{
        e.preventDefault()
        

        //let res=await CreateRequest(formValue);
        navigate('/')
    }

    return (
        <div>
            {/*<Menu />*/}
            <h1>This is product page</h1>
            <form action="">
                
                <input value = {formValue.Img} onChange={(e)=>{inputOnChange('Img', e.target.value)}} placeholder='Img'/> <br /> <br/>

                <input value = {formValue.ProductCode} onChange={(e)=>{inputOnChange('ProductCode', e.target.value)}} type="text" placeholder='ProductCode'/> <br /><br />

                <input value = {formValue.ProductName} onChange={(e)=>{inputOnChange('ProductName', e.target.value)}} type="text" placeholder='ProductName'/> <br /><br />

                <input value = {formValue.Qty} onChange={(e)=>{inputOnChange('Qty', e.target.value)}} type="text" placeholder='Qty'/> <br /><br />

                <input value = {formValue.TotalPrice} onChange={(e)=>{inputOnChange('TotalPrice', e.target.value)}} type="text" placeholder='TotalPrice'/> <br /><br />

                <input value = {formValue.UnitPrice} onChange={(e)=>{inputOnChange('UnitPrice', e.target.value)}} type="text" placeholder='UnitPrice'/> <br /><br />

                <button onClick={submit}>Click</button>
            </form>
        </div>
    );
};

export default Product;