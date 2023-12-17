import React from 'react';

const TodoList = () => {
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
                            <tr>
                                <td>1</td>
                                <td>Name 1</td>
                                <td><button className="btn btn-sm btn-warning">Edit</button></td>
                                <td><button className="btn btn-sm btn-danger">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            
        </div>
    );
};

export default TodoList;