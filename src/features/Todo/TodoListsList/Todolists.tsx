import React from "react";
import {Todolist} from "./Todolist/Todolist";
import {useSelector} from "react-redux";
import {AppRootState} from "../../../app/store";
import {TodolistType} from "../todolist-reducer";
import style from './Todolists.module.scss'

export const TodoLists = () => {

    const todoLists = useSelector<AppRootState, TodolistType[]>(state => state.todoLists)

    return todoLists.length === 0
        ? <h2 className={style.textTyping}>Your TODO will be here, when you create them.</h2>
        : <div className={style.allTodoWrapper}>
            {todoLists.map(todo => {
                return (
                    <Todolist
                        key={todo.id}
                        todo={todo}
                    />
                )
            })}
        </div>
}