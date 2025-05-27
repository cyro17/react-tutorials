import React from 'react'
import { useParams } from 'react-router'
import { usePost } from './usePostData';

export default function Post() {
    const { postId } = useParams();
    console.log(postId);

    const { data, isLoading, isFetching, refetch } = usePost(postId);
    console.log("post data: ", data);

    if (isLoading || isFetching) return <div>Loading post...</div>;
    return (
        <div>
            <h3>Post</h3>
            <button onClick={refetch}>Get Post</button>
            <div>
                <h4 className='text-red-500 text-3xl'>{data?.id}</h4>
                <p>{ data?.title}</p>
            </div>
        </div>
    )
}
