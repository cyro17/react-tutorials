import React from 'react'
import { useMultiData } from './useMultiData'
import Spinner from './components/Spinner';

function ParallelQueries() {

    const [userQuery, postQuery] = useMultiData();
    console.log("userQuery : ", userQuery.data);
    console.log("postQuery : ", postQuery.data);
    return (
        <>
            <h2 className=''>Parallel Queries </h2>
            <div className='flex'>
                <div>
                    <div className='flex flex-col'>
                            <h3>Users</h3>
                            {userQuery.isLoading ? (
                                <Spinner/>
                            ) : userQuery.isError ? (
                                <div>Error loading users: {userQuery.error.message}</div>
                            ) : (
                                <ul>
                                    {userQuery.data?.data.map(user => (
                                        <li key={user.id}>{user.name}</li>
                                    ))}
                                </ul>
                            )}
                    </div>
                </div>
            <div>
            <div>
                    <div className='flex flex-col'>
                            <h3>Posts</h3>
                            {postQuery.isLoading ? (
                                <Spinner/>
                            ) : userQuery.isError ? (
                                <div>Error loading users: {postQuery.error.message}</div>
                            ) : (
                                <ul>
                                    {postQuery.data?.data.map(post => (
                                        <li key={post.id}>{post.name}</li>
                                    ))}
                                </ul>
                            )}
                    </div>
                </div>
            </div>
            </div>
        </>
  )
}

export default ParallelQueries