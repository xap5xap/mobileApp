import { call, put } from 'redux-saga/effects'
import CocktailsActions from '../Redux/CocktailsRedux'

export function* getAllCocktails(api, action) {
    try {
        const response = yield call(api.getCocktails)
        console.log("response", response)
        if (response.ok) {          
            yield put(CocktailsActions.getCocktailsSuccess(response.data.drinks))
        } else {
            yield put(CocktailsActions.getCocktailsFailure('Connection problems :('))
        }
    } catch (error) {
        yield put(CocktailsActions.getCocktailsFailure(error.message))
    }
}
