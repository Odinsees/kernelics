import {Route, Routes} from "react-router-dom";
import {CreateTodolist} from "./CreateTodolist/CreateTodolist";
import {TodoLists} from "./TodoListsList/Todolists";

export const Todo = () => {
    return (
        <div>
            <Routes>
                <Route path="/create-new-todolist" element={<CreateTodolist/>}/>
                <Route path="/my-todoLists" element={<TodoLists/>}/>
            </Routes>
        </div>
    )
}