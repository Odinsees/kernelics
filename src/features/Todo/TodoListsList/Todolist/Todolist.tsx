import {deleteTodolist, renameTodolist, TodolistType} from "../../todolist-reducer";
import {useDispatch} from "react-redux";
import {EditableSpan} from "../../../../Components/EditableSpan/EditableSpan";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {Delete} from "@material-ui/icons";
import style from './Todolist.module.scss'
import Checkbox from "@material-ui/core/Checkbox";
import React, {useCallback} from "react";

type TodolistPropsType = {
    todo: TodolistType
}

export const Todolist = React.memo((props: TodolistPropsType) => {

    const dispatch = useDispatch()

    const deleteTodolistHandler = useCallback(function () {
        dispatch(deleteTodolist(props.todo.id))
    },[dispatch,props.todo.id])

    const renameTodolistHandler = useCallback(function (newTodoTitle: string){
        dispatch(renameTodolist(props.todo.id, newTodoTitle))
    },[dispatch,props.todo.id])

    const disabledFromLoading = props.todo.entityStatus === 'loading'

    return (
        <div className={style.todolistWrapper}>
            <div className={style.todoTitle}>
                <h3>
                    <EditableSpan title={props.todo.title} callBack={renameTodolistHandler} disabled={disabledFromLoading}/>
                    <IconButton aria-label="delete" onClick={deleteTodolistHandler} disabled={disabledFromLoading}>
                        <Delete fontSize="inherit"/>
                    </IconButton>
                </h3>
            </div>
            <div className={style.todoTasks}>
                <span>some task</span>
                <Checkbox
                    color="primary"
                />
            </div>
        </div>
    )
})