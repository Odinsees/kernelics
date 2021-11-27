import {v1} from "uuid";
import {addTodolist, deleteTodolistByID, renameTodolistByID, todolistReducer, TodolistType} from "./todolist-reducer";


let todolistId1 = v1();
let todolistId2 = v1();
let startState: TodolistType[] = [];
beforeEach(() => {
    startState = [
        {
            id: todolistId1,
            title: 'todo1',
            entityStatus: 'idle',
        },
        {
            id: todolistId2,
            title: 'todo2',
            entityStatus: 'idle',
        }]
})

test('correct todolist should be remove', () => {
    const endState = todolistReducer(startState, deleteTodolistByID(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
})

test('correct todolist should be add', () => {

    let newTodoTitle = 'newTodoTitle'

    const endState = todolistReducer(startState, addTodolist(newTodoTitle))

    expect(endState.length).toBe(startState.length + 1);
    expect(endState[0].title).toBe(newTodoTitle);
})

test('correct todolist should be change name', () => {

    let newTodolistName = "New Todolist"

    const endState = todolistReducer(startState, renameTodolistByID(todolistId2, newTodolistName))
    expect(endState[1].title).toBe(newTodolistName);
})
