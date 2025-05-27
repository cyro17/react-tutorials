import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Posts from './Posts.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Post from './Post.jsx'
import Form from './Form.jsx'
import ParallelQueries from './ParallelQueries.jsx'

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}/>
      <Route path='posts' element={<Posts />} />
      <Route path='/posts/:postId' element={ <Post />}/>
      <Route path='/posts/pq' element={ <ParallelQueries />}/>
    
      
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  </StrictMode>,
)
