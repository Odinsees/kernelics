import {deleteTodolist, renameTodolist, TodolistType} from "../../todolist-reducer";
import {useDispatch} from "react-redux";
import {EditableSpan} from "../../../../Components/EditableSpan/EditableSpan";
import IconButton from "@material-ui/core/IconButton/IconButton";
import { Delete } from "@material-ui/icons";

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
            <h3>
                <EditableSpan title={props.todo.title} callBack={renameTodolistHandler}/>
                <IconButton aria-label="delete" onClick={deleteTodolistHandler}>
                    <Delete fontSize="inherit"/>
                </IconButton>
            </h3>
        </div>
    )
}