import React from 'react';
import CreateTodo from '../components/todo/CreateTodo';
import TodoList from '../components/todo/TodoList';
const TodoPage = () => {
    return (
        <div className='container-fluid  my-5 '>
            <div className='row justify-content-center '>
                <div className='col-md-12'>
                    <div className='card bg-success'>
                        <div className='card-header '>
                            <h4 className='text-white  text-center'>My Todo App</h4>
                        </div>
                        <div className='card-body'>
                            <CreateTodo/><br/>
                            <TodoList />
                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default TodoPage;