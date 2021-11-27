import {appReducer, RequestStatusType, setAppError, setAppStatus, setAppSuccess} from "./app-reducer";


let startState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    success: null as string | null
}


test('correct status should be changed', () => {

    let newStatus: RequestStatusType = 'loading'
    const endState = appReducer(startState, setAppStatus(newStatus))

    expect(endState.status).toBe('loading');
})

test('correct error should be set', () => {

    let newError = 'Title is required'
    const endState = appReducer(startState, setAppError(newError))

    expect(endState.error).toBe('Title is required');
})

test('correct SUCCESS should be set', () => {

    let newSuccess = 'TODO added'
    const endState = appReducer(startState, setAppSuccess(newSuccess))

    expect(endState.success).toBe('TODO added');
})

