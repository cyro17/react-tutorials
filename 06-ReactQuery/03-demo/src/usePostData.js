import { useQuery } from "@tanstack/react-query";
import axios from "axios";


async function fetchPost(postId) {
    console.log("fetch post function param : ", postId);
    const res =
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    console.log("response: ", res);
    return res.data;
}

export const usePost = (postId) => {
    return useQuery({
        queryKey: ['posts', postId],
        queryFn: (postId) => fetchPost(postId.queryKey[1]),
        staleTime: 3000,
        cacheTime: 10000 * 60,
        refetchOnWindowFocus: true,
        enabled: false,
    });
}