import { createStore, applyMiddleware } from 'redux'
import reducer from 'reducers'
import thunk from 'redux-thunk'

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//    if (typeof action === 'function') {
//      return action(dispatch, getState)
//    }
//    return next(action)
//  }

export default () => {
  const store = createStore(reducer, applyMiddleware(logger,thunk))
   if (module.hot) {
      module.hot.accept('reducers', () => {
        const NextReducer = require('reducers').default
        store.replaceReducer(NextReducer)
      })
   }

   return store
}

const logger = ({ dispatch, getState }) => (next) => (action) => {
   return nextAction
 }