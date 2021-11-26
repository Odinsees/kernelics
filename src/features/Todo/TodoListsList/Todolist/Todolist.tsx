import {deleteTodolist, renameTodolist, TodolistType} from "../../todolist-reducer";
import {useDispatch, useSelector} from "react-redux";
import {EditableSpan} from "../../../../Components/EditableSpan/EditableSpan";
import IconButton from "@material-ui/core/IconButton/IconButton";
import { Delete } from "@material-ui/icons";
import {AppRootState} from "../../../../app/store";
import {RequestStatusType} from "../../../../app/app-reducer";

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

    const disabledFromLoading = props.todo.entityStatus === 'loading'

    return (
        <div>
            <h3>
                <EditableSpan title={props.todo.title} callBack={renameTodolistHandler} disabled={disabledFromLoading}/>
                <IconButton aria-label="delete" onClick={deleteTodolistHandler} disabled={disabledFromLoading}>
                    <Delete fontSize="inherit"/>
                </IconButton>
            </h3>
        </div>
    )
}