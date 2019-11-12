

// 定义常量
export const ADD_TODO = 'ADD_TODO';

// action
export function addTodo(text) {
  console.log('text', text)
  return { type: ADD_TODO, text }
}

