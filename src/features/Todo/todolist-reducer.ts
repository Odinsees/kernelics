import {v1} from "uuid";
import {Dispatch} from "redux";
import {syntheticRequest} from "../../utils/utils";


export type TodolistType = {
    id: string
    title: string
}

type initialStateType = TodolistType[]

type ActionsType =
    | ReturnType<typeof addTodolist>
    | ReturnType<typeof deleteTodolistByID>
    | ReturnType<typeof renameTodolistByID>


const initialState: initialStateType = []

export const todolistReducer = (state: TodolistType[] = initialState, action: ActionsType): TodolistType[] => {
    switch (action.type) {
        case "ADD-TODOLIST":
            return [{id: v1(), title: action.newTodoTitle}, ...state]
        case "DELETE-TODOLIST":
            return [...state.filter(todo => todo.id !== action.id)]
        case "RENAME-TODOLIST":
            return [...state.map(todo => todo.id === action.id ? {...todo, title: action.title} : todo)]
        default:
            return state
    }
}

const addTodolist = (newTodoTitle: string) => ({type: 'ADD-TODOLIST', newTodoTitle} as const)
const deleteTodolistByID = (id: string) => ({type: 'DELETE-TODOLIST', id} as const)
const renameTodolistByID = (id: string, title: string) => ({type: 'RENAME-TODOLIST', id, title} as const)


export const addNewTodolist = (newTodolistTitle: string) => (dispatch: Dispatch<ActionsType>) => {
    syntheticRequest()
        .then(() => {
            dispatch(addTodolist(newTodolistTitle))
        })
}

export const deleteTodolist = (todolistID: string) => (dispatch: Dispatch<ActionsType>) => {
    syntheticRequest()
        .then(() => {
            dispatch(deleteTodolistByID(todolistID))
        })
}

export const renameTodolist = (todolistID: string, newTitle: string) => (dispatch: Dispatch<ActionsType>) => {
    syntheticRequest()
        .then(() => {
            dispatch(renameTodolistByID(todolistID, newTitle))
        })
}