import {useState} from 'react';

const UseStateForm = () => {

    let [FormObj, setFormObj] = useState({
        fName: '', 
        lName: '', 
        city: '', 
        gender: ''
    })

    const InputOnChange = (property, value)=>{
        setFormObj(previousObj=> ({ 
            ...previousObj, 
           //property: value এভাবে রাখলে ব্যাকএন্ড থেকে json  ডাটা আসবে সেটা এইটার সাথে 
           //collapse করতে পারে, তাই আমাদের কে [property] : value  এভাবে রাখতে হবে
           [property]: value
        }))
    }

    const FormSubmit = (event)=>{
        event.preventDefault();
        //যখন dinamically কাজ করবো তখন এটাই ajax এর মাধ্যমে পাঠিয়ে দিব।
        console.log(FormObj)
        alert(JSON.stringify(FormObj))
    }
    return (
        <div>
            <form action="" onSubmit={FormSubmit}>
                <input onChange={(event)=>InputOnChange('fName', event.target.value)} value={FormObj.fName} type="text" placeholder='First Name'/><br />

                <input onChange={(event)=>InputOnChange('lName', event.target.value)} value={FormObj.lName} type="text" placeholder='Last Name'/><br />

                <select onChange={(event)=>InputOnChange('city', event.target.value)} value={FormObj.city}>
                    <option value="">Choose City</option>
                    <option value="Pabna">Pabna</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Khulna">Khulna</option>
                </select><br />

                <input onChange={(event)=>InputOnChange('gender', 'Male')} checked={FormObj.gender==="Male"} type="radio" name='gender'/>Male

                <input onChange={(event)=>InputOnChange('gender', 'Female')} checked={FormObj.gender==="Female"} type="radio" name='gender'/>Female

                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UseStateForm;