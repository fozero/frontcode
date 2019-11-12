
import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)

export default store

// 发起一系列 action
// store.dispatch(addTodo('Learn about actions'))