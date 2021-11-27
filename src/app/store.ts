import {todolistReducer} from "../features/Todo/todolist-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";

let rootReducer = combineReducers({
    app: appReducer,
    todoLists: todolistReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>


//use LocalStorage

// let preloadedState;
// const persistedTodolistString = localStorage.getItem("appState")
// if (persistedTodolistString){
//     preloadedState = JSON.parse(persistedTodolistString)
// }

export const store = createStore(rootReducer, applyMiddleware(thunk))

// store.subscribe(()=>{
//     localStorage.setItem("appState", JSON.stringify(store.getState()))
// })

// @ts-ignore
window.store = store