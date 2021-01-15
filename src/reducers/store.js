import { createStore } from 'redux'



function counterReducer(state = [], action) {
    switch (action.type) {
      
      default:
        return state
    }
  }
  
  let store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  export default store 