

import axios from "axios";

export function fetchTodos() {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    return axios.get("http://localhost:3001/todos");

}

// export async function addTodo(todo) {
//     await new Promise(res => setTimeout(res, 1000));
//     const todos = await axios.get("http://localhost:3001/todos");
//     const newTodo = {
//         id: todos.length + 1,
//         title: todo.title,
//         completed: false
//     };
//     todos.push(todo);
//     return newTodo;
// }