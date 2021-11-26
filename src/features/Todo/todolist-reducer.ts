import {v1} from "uuid";
import {Dispatch} from "redux";
import {syntheticRequest} from "../../utils/utils";
import {setAppErrorActionType, setAppStatus, SetAppStatusActionType} from "../../app/app-reducer";


export type TodolistType = {
    id: string
    title: string
}

type initialStateType = TodolistType[]

const initialState: initialStateType = []

export const todolistReducer = (state: TodolistType[] = initialState, action: ActionsType): TodolistType[] => {
    switch (action.type) {
        case "TODOLIST/ADD-TODOLIST":
            return [{id: v1(), title: action.newTodoTitle}, ...state]
        case "TODOLIST/DELETE-TODOLIST":
            return [...state.filter(todo => todo.id !== action.id)]
        case "TODOLIST/RENAME-TODOLIST":
            return [...state.map(todo => todo.id === action.id ? {...todo, title: action.title} : todo)]
        default:
            return state
    }
}

const addTodolist = (newTodoTitle: string) => ({type: 'TODOLIST/ADD-TODOLIST', newTodoTitle} as const)
const deleteTodolistByID = (id: string) => ({type: 'TODOLIST/DELETE-TODOLIST', id} as const)
const renameTodolistByID = (id: string, title: string) => ({type: 'TODOLIST/RENAME-TODOLIST', id, title} as const)


export const addNewTodolist = (newTodolistTitle: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'))
    syntheticRequest()
        .then(() => {
            dispatch(setAppStatus('succeeded'))
            dispatch(addTodolist(newTodolistTitle))
        })
}

export const deleteTodolist = (todolistID: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'))
    syntheticRequest()
        .then(() => {
            dispatch(setAppStatus('succeeded'))
            dispatch(deleteTodolistByID(todolistID))
        })
}

export const renameTodolist = (todolistID: string, newTitle: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'))
    syntheticRequest()
        .then(() => {
            dispatch(setAppStatus('succeeded'))
            dispatch(renameTodolistByID(todolistID, newTitle))
        })
}


type ActionsType =
    | ReturnType<typeof addTodolist>
    | ReturnType<typeof deleteTodolistByID>
    | ReturnType<typeof renameTodolistByID>
    | SetAppStatusActionType
    | setAppErrorActionType
