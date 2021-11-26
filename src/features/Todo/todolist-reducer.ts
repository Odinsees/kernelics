import {v1} from "uuid";
import {Dispatch} from "redux";
import {syntheticRequest} from "../../utils/utils";
import {
    RequestStatusType,
    setAppError,
    setAppErrorActionType,
    setAppStatus,
    SetAppStatusActionType
} from "../../app/app-reducer";


export type TodolistType = {
    id: string
    title: string
    entityStatus:RequestStatusType
}

let todoID1 = v1()
let todoID2 = v1()

type initialStateType = TodolistType[]

const initialState: initialStateType = [
    {'id': todoID1, 'title': 'title1', entityStatus:"idle"},
    {'id': todoID2, 'title': 'title2', entityStatus:"idle"},
]

export const todolistReducer = (state: TodolistType[] = initialState, action: ActionsType): TodolistType[] => {
    switch (action.type) {
        case "TODOLIST/ADD-TODOLIST":
            return [{id: v1(), title: action.newTodoTitle, entityStatus:"idle"}, ...state]
        case "TODOLIST/DELETE-TODOLIST":
            return [...state.filter(todo => todo.id !== action.id)]
        case "TODOLIST/RENAME-TODOLIST":
            return [...state.map(todo => todo.id === action.id ? {...todo, title: action.title} : todo)]
        case 'SET-ENTITY-STATUS':
            return state.map(todo => todo.id === action.todolistID ? {...todo, entityStatus: action.entityStatus} : todo)
        default:
            return state
    }
}

const addTodolist = (newTodoTitle: string) => ({type: 'TODOLIST/ADD-TODOLIST', newTodoTitle} as const)
const deleteTodolistByID = (id: string) => ({type: 'TODOLIST/DELETE-TODOLIST', id} as const)
const renameTodolistByID = (id: string, title: string) => ({type: 'TODOLIST/RENAME-TODOLIST', id, title} as const)
export const setEntityStatus = (todolistID: string, entityStatus:RequestStatusType) => ({type: 'SET-ENTITY-STATUS', todolistID, entityStatus} as const)



export const addNewTodolist = (newTodolistTitle: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'))
    syntheticRequest()
        .then(() => {
            dispatch(setAppStatus('succeeded'))
            dispatch(addTodolist(newTodolistTitle))
        })
}

export const deleteTodolist = (todolistID: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setEntityStatus(todolistID,'loading'))
    dispatch(setAppStatus('loading'))
    syntheticRequest()
        .then(() => {
            dispatch(setAppStatus('succeeded'))
            dispatch(setEntityStatus(todolistID,'succeeded'))
            dispatch(deleteTodolistByID(todolistID))
        })
}

export const renameTodolist = (todolistID: string, newTitle: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setEntityStatus(todolistID,'loading'))
    dispatch(setAppStatus('loading'))
    syntheticRequest(newTitle)
        .then(() => {
            dispatch(setAppStatus('succeeded'))
            dispatch(setEntityStatus(todolistID,'succeeded'))
            dispatch(renameTodolistByID(todolistID, newTitle))
        })
        .catch(err=>{
            dispatch(setAppError(err))
            dispatch(setAppStatus('failed'))
            dispatch(setEntityStatus(todolistID,'failed'))
        })
}


type ActionsType =
    | ReturnType<typeof addTodolist>
    | ReturnType<typeof deleteTodolistByID>
    | ReturnType<typeof renameTodolistByID>
    | ReturnType<typeof setEntityStatus>
    | SetAppStatusActionType
    | setAppErrorActionType
