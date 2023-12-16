import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, setCustom} from '../../redux/state/counter/CounterSlice'
import React, {useRef} from 'react';


const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const myNum = useRef();
    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="card-header bg-secondary text-center">
                <h1 className="text-white">My counter App</h1>
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="my-4">
                    <button onClick={()=>{dispatch(increment())}} className="btn btn-success">Increase</button>
                    <button onClick={()=>{dispatch(decrement())}} className="btn btn-danger mx-2">Decrease</button>
                </div>
                <div className="my-2">
                    <input ref={myNum} type='number' className='form-action w-50 my-2'  />
                    <button onClick={()=>{dispatch(setCustom(parseInt(myNum.current.value)))}} className="btn btn-danger w-50">Set Custom</button>
                </div>

            </div>
            
        </div>
    );
};

export default Counter;