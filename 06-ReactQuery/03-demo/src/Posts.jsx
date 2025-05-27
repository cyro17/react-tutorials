import React from 'react';

import { Link } from 'react-router';
import { usePosts } from './usePostsData';
import Form from './Form';

export default function Posts() {
    function onSuccess (data) {
        console.log("Data fetched successfully:", data);
    }
    function onError(error) {
        console.error("Error fetching data:", error.message);
    }

    const { data, isLoading, isError, error, isFetching, refetch } =
        usePosts(onSuccess, onError);
    
    console.log({ isFetching, isLoading });

    if (isLoading || isFetching)
        return <div>Loading posts....</div>;

    if(isError) return <div>Error: {error.message}</div>;
    

  return (
      <div>
          <h3 className='text-red-500 text-left'>Posts</h3>
          <button onClick={refetch}>Fetch posts</button>
          <div className=''>
              {data?.map((post, index) => (
                  <div key={index}>
                      <Link to={`/posts/${post.id}`}>
                        {post.title}
                      </Link>
                  </div>
              ))}
          </div>
          <Form/>
    </div>
  )
}
