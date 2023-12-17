import Swal from "sweetalert2";
import { EditTodo } from "../../redux/state/todo/TodoSlice";
import Store from "../../redux/store/Store";

export function AlertEditTodo(index, item){
    Swal.fire({
        title: "Update TaskName",
        input: 'text',
        inputValue: item,
        inputValidator: (value)=>{
            if(value){
                Store.dispatch(EditTodo({index: index, item: value}));
            }
        }
      })
}