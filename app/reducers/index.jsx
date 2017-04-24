import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  planets: require('./planets').default,
  order: require('./order').default,
  products: require('./products').default,
  product: require('./product').default,
  reviews: require('./reviews').default
})

export default rootReducer
