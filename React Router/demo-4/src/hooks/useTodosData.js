import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchTodos, postTodo } from "../api";

export const useTodosData = () => {
    return useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        cacheTime: 5000,
        staleTime: 3000,
        onSuccess: () => console.log("success"),
        onError: () => console.log("error"),
        select: (data) => {
            const todos = data.data?.map(todo => todo.title);
            return todos;
        }
    });
}

export const useAddTodoData = () => {
    return useMutation({
        mutationFn: postTodo,
    });
}