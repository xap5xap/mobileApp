import apisauce from 'apisauce'

const create = (baseURL = 'https://www.thecocktaildb.com/api/json/v1/1') => {

    const api = apisauce.create({
        baseURL,
        timeout: 15000
    })

    const getCocktails = () => api.get('/filter.php', { g: 'Cocktail_glass' })

    return {
        getCocktails,
    }
}

export default {
    create
}