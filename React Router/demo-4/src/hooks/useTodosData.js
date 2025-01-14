import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api";


export const useTodosData = (onSuccess, onError) => {
    return useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        cacheTime: 5000,
        staleTime: 3000,
        // refetchInterval: 2000,
        // refetchIntervalInBackground: true,
        onSuccess,
        onError,
        select: (data) => {
            const todos = data.data?.map(todo => todo.title);
            return todos;
        }
        // enabled: false
    });
}