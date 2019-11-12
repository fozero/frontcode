// reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
import { ADD_TODO} from './actions'
let initialState = {
  text:''
}
function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
}

export default todoApp