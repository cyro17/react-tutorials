
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import CreateOrder, { createOrderAction } from "./CreateOrder";
import Home, { fetchPosts } from "./Home";
import Todo from "./Todo";
import Error from "./Error";

function AppLayout(){

  return (
    <div>
      Layout Page
      <Outlet/>
    </div> );
}

function About(){
  return <div>About Page</div>
}

function Cart(){
  return <div>Cart Page</div>
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: fetchPosts
      },
      { path: "/order", element: <About /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
      },
      { path: "/order/:id", element: <Cart /> },
      { path: "/todos", element: <Todo /> },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
