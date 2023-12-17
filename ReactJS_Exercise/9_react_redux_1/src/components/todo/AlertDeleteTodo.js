import Swal from "sweetalert2";
import Store from '../../redux/store/Store';
import { RemoveTodo } from "../../redux/state/todo/TodoSlice";

export function AlertDeleteTodo(index){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            Store.dispatch(RemoveTodo(index));
            Swal.fire({
                showConfirmButton: false,
                timer: 1000,
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
        }
    });
}