const initialState = {}

type InitialStateType = typeof initialState

export const signUpReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
};
