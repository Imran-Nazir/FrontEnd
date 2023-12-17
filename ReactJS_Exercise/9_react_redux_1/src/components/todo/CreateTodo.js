import React from 'react';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { AddTodo } from '../../redux/state/todo/TodoSlice';

const CreateTodo = () => {
    const taskInput = useRef();
    const dispatch = useDispatch();
    const [initialState, setInitialState] = useState('');

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-10'>
                    <input 
                        ref={taskInput} 
                        value={initialState} 
                        onChange={(e)=>setInitialState(e.target.value)}
                        type='text' 
                        placeholder='Task Name' 
                        className='form-control'/>

                </div>
                <div className='col-md-2'>
                    <button onClick={()=>{dispatch(AddTodo(taskInput.current.value)); setInitialState('')}} type='btn' className='btn btn-primary'>Add ToDo</button>
                </div>

            </div>
            
        </div>
    );
};

export default CreateTodo;