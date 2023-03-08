import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Add from "./pages/Add";
import Book from "./pages/Book";
import Update from "./pages/Update";
import './style.css';



const router = createBrowserRouter([
  {
    path:'/books',
    element:<Book/>
  },
  {
    path:'/add',
    element:<Add/>
  },
  {
    path:'/update/:id',
    element:<Update/>
  }
])

function App() {
  

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
