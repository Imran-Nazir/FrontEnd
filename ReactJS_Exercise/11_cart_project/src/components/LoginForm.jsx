import React, {useState} from 'react';
import {toast, Toaster} from 'react-hot-toast'
import { UserLoginRequest } from '../apiRequest/apiRequest';
import { useNavigate } from 'react-router-dom';
import FullScreenLoader from './FullScreenLoader';

const LoginForm = () => {

    const [FormValue, setFormValue] = useState({UserEmail:""});

    const navigate = useNavigate();

    const InputOnChange = (key, value) => {
        setFormValue(FormValue => ({
            ...FormValue,
            [key]:value
        }))
    }

    const submitForm = async () =>{
        if(FormValue.UserEmail.length === 0){
            toast.error("Email Address Required");
        }
        else{
            let msg = await UserLoginRequest(FormValue)
            if(msg==="success"){
                toast.error("Request Successfull!");
                navigate("/otp")
            }
            else{
                toast.error("Request Fail. Try again.");
            }
        }
    }
    


    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className='card p-5'>
                            <h3>Login</h3>
                            <label>User Email</label>
                            <input value={FormValue.UserEmail} onChange={(e)=>{InputOnChange('UserEmail', e.target.value)}} type="email" className='form-control' placeholder="Email Address"/>
                            <button onClick={submitForm} className="btn my-2 w-100 btn-primary">Next</button>
                        </div>
                    </div>
                </div>
                <Toaster position="bottom center"/>
                <FullScreenLoader visibility=""/>
            </div>
        </>
    );
};

export default LoginForm;