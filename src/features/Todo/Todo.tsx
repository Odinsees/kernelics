
import {Navigate, Route, Routes} from "react-router-dom";
import {CreateTodolist} from "./CreateTodolist/CreateTodolist";
import {TodoLists} from "./TodoListsList/Todolists";

export const Todo = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate replace to="/my-todoLists" />}/>
                <Route path="/create-new-todolist" element={<CreateTodolist/>}/>
                <Route path="/my-todoLists" element={<TodoLists/>}/>
            </Routes>
        </div>
    )
}