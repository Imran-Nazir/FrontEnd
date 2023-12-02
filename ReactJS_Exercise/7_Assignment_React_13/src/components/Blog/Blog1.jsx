import React, {useState} from 'react';

const Blog1 = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const AddToList = ()=>{
        list.push(item);
        setList([...list]);
    }

    const RemoveItem = (index)=>{
        list.splice(index, 1);
        setList([...list]);
    }
    return (
        <div>
            <h2>This is Blog1</h2>
            <h4>useState() immutable array</h4>
            <table >
                <tbody>
                    {
                        list.length !==0 ? (
                            list.map((element, index)=>{
                                return(
                                    <tr>
                                        <td >{element}</td>
                                        <td ><button onClick={RemoveItem}>Remove</button></td>
                                    </tr>
                                )
                            })
                        ) : (<tr></tr>)
                    }
                </tbody>
            </table>
            
            <p>{list.length}</p>  {/*Showing items number*/}
            <input onChange={(event)=>setItem(event.target.value)} type="text" placeholder='Insert item' />
            <button onClick={AddToList}>Add</button>
            <br />
        </div>
    );
};

export default Blog1;