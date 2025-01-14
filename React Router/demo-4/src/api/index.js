

import axios from "axios";

export async function fetchTodos() {
    await new Promise(resolve => setTimeout(resolve, 1000));
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

export async function fetchUser({ queryKey }) {
    const userId = queryKey[1];
    console.log(userId);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return axios.get(`https://fakestoreapi.com/products/${userId}`);
}

export async function postTodo(todo) {
    return axios.post("http://localhost:3001/todos", todo)
}
