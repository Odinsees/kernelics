export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    success: null as string | null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case "APP/SET-SUCCESS":
            return {...state, success: action.success}
        default:
            return state
    }
}


export const setAppStatus = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppSuccess = (success: string | null) => ({type: 'APP/SET-SUCCESS', success} as const)

export type SetAppStatusActionType = ReturnType<typeof setAppStatus>
export type setAppErrorActionType = ReturnType<typeof setAppError>
export type setAppSuccessActionType = ReturnType<typeof setAppSuccess>

type ActionsType =
    | SetAppStatusActionType
    | setAppErrorActionType
    | setAppSuccessActionType