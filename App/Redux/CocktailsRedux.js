import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    getCocktailsRequest: null,
    getCocktailsSuccess: ['respuesta'],
    getCocktailsFailure: ['error']
})

export const CocktailsTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    cocktails: [],
    status: '',
    fetching: true,
    errorMessage: '',
    error: false
})

/* ------------- Reducers ------------- */
export const getCocktailsRequest = (state, action) => {
    const { tipo } = action
    return state.merge({ fetching: true, error: false, errorMessage: '' })
}

export const getCocktailsSuccess = (state, action) => {
    return state.merge({ fetching: false, error: false, errorMessage: '', cocktails: action.respuesta })
}

export const getCocktailsFailure = (state, action) => {
    return state.merge({ fetching: false, error: true, errorMessage: action.error })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_COCKTAILS_REQUEST]: getCocktailsRequest,
    [Types.GET_COCKTAILS_SUCCESS]: getCocktailsSuccess,
    [Types.GET_COCKTAILS_FAILURE]: getCocktailsFailure
})
