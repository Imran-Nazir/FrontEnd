import React from 'react';
import { useSelector } from 'react-redux';
import { AlertDeleteTodo } from './AlertDeleteTodo';
import { AlertEditTodo } from './AlertEditTodo';

const TodoList = () => {

    const todoItems = useSelector((state)=>state.todo.value);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                todoItems.map((item, index)=>{
                                    return (
                                        <tr key={index.toString()}>
                                            <td>{index+1}</td>
                                            <td>{item}</td>
                                            <td><button onClick={()=>{AlertEditTodo(index, item)}} className="btn btn-sm btn-warning">Edit</button></td>
                                            <td><button onClick={()=>{AlertDeleteTodo(index)}} className="btn btn-sm btn-danger">Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
            
        </div>
    );
};

export default TodoList;