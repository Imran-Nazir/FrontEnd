import React, {useState} from 'react';

const UseState2 = () => {
    const [city, setCity] = useState(['q', 'w', 'e', 'f', 'g', 'h'])
    return (
        <div>
            <ul>
                {
                    city.map((item, i)=>{
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default UseState2;