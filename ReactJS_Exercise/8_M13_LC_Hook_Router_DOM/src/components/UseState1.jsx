import React, {useState} from 'react';

const UseState1 = () => {
    const [population, setPopulation] = useState({
        name: "Imran",
        age: 24,
        session: '2017-18',
        city: 'Pabna'
    });
    /*
    const change = (e)=>{
        //setPopulation(population + 1);
        let newName =  e.target.value;
        setPopulation(person=>({
            ...person,
            name: newName
        }))
    }
    */
    const InputOnChange = (key, value)=>{
        setPopulation(person=>({
            ...person,
            [key]:value,
        }))
    }
   
    return (
        <div >
            <h2>Name: {population['name']}</h2>
            <h2>Age: {population['age']}</h2>
            <h2>Session: {population['session']}</h2>
            <h2>City: {population['city']}</h2>

            <label htmlFor="name">Name: </label>
            <input onChange={(e)=>InputOnChange('name', e.target.value)} type="text" id='name' value={population['name']} />

            <label htmlFor="age">Age: </label>
            <input onChange={(e)=>InputOnChange('age', e.target.value)} type="text" id='age' value={population['age']} />

            <label htmlFor="session">Session: </label>
            <input onChange={(e)=>InputOnChange('session', e.target.value)} type="text" id='session' value={population['session']} />

            <label htmlFor="city">City: </label>
            <input onChange={(e)=>InputOnChange('city', e.target.value)} type="text" id='city' value={population['city']} />

        </div>
    );
};

export default UseState1;