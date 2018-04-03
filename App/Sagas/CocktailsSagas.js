import { call, put } from 'redux-saga/effects'
import CocktailsActions from '../Redux/CocktailsRedux'

export function* getAllCocktails(api, action) {
    try {
        const response = yield call(api.getCocktails)
        if (response.ok) {
            const cocktailDetail = yield response.data.drinks.map(cocktail => call(api.getCocktailById, cocktail.idDrink))
            const res = cocktailDetail.map(cocktail => {
                if (cocktail.ok && cocktail.data.drinks) {
                    return cocktail.data.drinks[0]
                }
            })
            yield put(CocktailsActions.getCocktailsSuccess(res))
        } else {
            yield put(CocktailsActions.getCocktailsFailure('Connection problems :('))
        }
    } catch (error) {
        yield put(CocktailsActions.getCocktailsFailure(error.message))
    }
}
