import React from 'react';

const CreateTodo = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-10'>
                    <input type='text' placeholder='Task Name' className='form-control'/>

                </div>
                <div className='col-md-2'>
                    <button className='btn btn-primary'>Add ToDo</button>
                </div>

            </div>
            
        </div>
    );
};

export default CreateTodo;