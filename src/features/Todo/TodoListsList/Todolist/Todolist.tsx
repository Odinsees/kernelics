import {deleteTodolist, renameTodolist, TodolistType} from "../../todolist-reducer";
import {useDispatch} from "react-redux";
import {EditableSpan} from "../../../../Components/EditableSpan/EditableSpan";

type TodolistPropsType = {
    todo: TodolistType
}

export const Todolist = (props: TodolistPropsType) => {

    const dispatch = useDispatch()
    const deleteTodolistHandler = () => {
        dispatch(deleteTodolist(props.todo.id))
    }

    const renameTodolistHandler = (newTodoTitle: string) => {
        dispatch(renameTodolist(props.todo.id, newTodoTitle))
    }
    return (
        <div>
            <EditableSpan title={props.todo.title} callBack={renameTodolistHandler}/>
            <button onClick={deleteTodolistHandler}>x</button>
        </div>
    )
}