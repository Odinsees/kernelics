import React from "react";
import {Todolist} from "./Todolist/Todolist";
import {useSelector} from "react-redux";
import {AppRootState} from "../../../app/store";
import {TodolistType} from "../todolist-reducer";

export const TodoLists = () => {

    const todoLists = useSelector<AppRootState, TodolistType[]>(state => state.todoLists)

    return (
        <div>
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