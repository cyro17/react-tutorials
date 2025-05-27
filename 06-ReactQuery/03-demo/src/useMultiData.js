import { useQueries } from "@tanstack/react-query"
import axios from "axios"

async function fetchUsers() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
    return axios.get('https://68360c3d664e72d28e3fb85c.mockapi.io/api/v1/users')
}

async function fetchPosts() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return axios.get('https://68360c3d664e72d28e3fb85c.mockapi.io/api/v1/posts')
}


export const useMultiData = () => {
    return useQueries({
        queries: [{
            queryKey: ['users-v1'],
            queryFn: fetchUsers,
        }, {
            queryKey: ['posts-v1'],
            queryFn: fetchPosts,
        }
        ]
    })
}