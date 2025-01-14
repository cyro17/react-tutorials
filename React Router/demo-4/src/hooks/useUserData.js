import { useQuery } from "@tanstack/react-query"
import { fetchUser } from "../api"


export const useUserData = (onSuccess, onError, userId) => {
    return useQuery({
        queryKey: ["users", userId],
        queryFn: fetchUser,
        cacheTime: 5000,
        fetchTime: 3000,
        onSuccess,
        onError,
        select: (data) => {
            // console.log(data);
            return {
                id: data.data.id,
                title: data.data.title,
            }
        }
    })
}