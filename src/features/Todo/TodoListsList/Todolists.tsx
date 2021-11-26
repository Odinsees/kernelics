import React from "react";
import {Todolist} from "./Todolist/Todolist";
import {useSelector} from "react-redux";
import {AppRootState} from "../../../app/store";
import {TodolistType} from "../todolist-reducer";
import style from './Todolists.module.scss'

export const TodoLists = () => {

    const todoLists = useSelector<AppRootState, TodolistType[]>(state => state.todoLists)

    return (
        <div className={style.allTodoWrapper}>
            {todoLists.map(todo => {
                return (
                    <Todolist
                        key={todo.id}
                        todo={todo}
                    />
                )
            })}
        </div>

    )

}