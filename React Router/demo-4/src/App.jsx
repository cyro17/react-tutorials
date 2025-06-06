
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import CreateOrder, { createOrderAction } from "./CreateOrder";
import Home, { fetchPosts } from "./Home";
import Todo from "./Todo";
import Error from "./Error";
import User from "./User";
import "./App.css";

function AppLayout(){
  return (
    <div>
      Layout Page
      <Outlet/>
    </div> );
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
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: "/todos",
        element: <Todo />
      },
      {
        path: "/users/:userId", 
        element: <User/>
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
