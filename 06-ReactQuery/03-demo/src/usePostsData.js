import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

async function fetchPosts() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
    const res = await axios.get('http://localhost:4000/posts');
    console.log("response: ", res);
    return res.data;
}

async function addPost(post) {
    console.log(post)
    const res = await axios.post('http://localhost:4000/posts', post);
    console.log(res.data);
    return res.data;
}

export const usePosts = (onSuccess, onError) => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 3000,
        cacheTime: 10000 * 60,
        refetchOnWindowFocus: true,
        enabled: false,
        onSuccess,
        onError,
        select: (data) => {
            return data.filter(post => post.title);
        }
    });
}


export const useAddPost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['addPost'],
        mutationFn: (post) => addPost(post),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            // queryClient.setQueryData(['posts'], (oldPosts) => {
            //     // return {
            //     //     ...oldPosts,
            //     //     data: [...oldPosts.data, data.data]
            //     // };
            //     console.log("data: ", data);
            //     console.log("oldPosts : ", oldPosts);
            // })
        },
        onError: (error) => {
            console.error("Error adding post:", error.message);
        },
        onSettled: () => {
            console.log("Mutation settled");
        }
    });
}
