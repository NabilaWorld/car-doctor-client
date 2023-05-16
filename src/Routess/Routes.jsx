import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutt/Main";
import Home from "../pagess/Home/Home/Home";
import Login from "../pagess/Login/Login";
import SignUp from "../pagess/SignUp/SignUp";
import CheckOut from "../pagess/CheckOut/CheckOut";
import Bookservice from "../pagess/BookService/Bookservice";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },

        {
          path: "book/:id",
          element: <Bookservice></Bookservice>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },

        {
          path: "/checkout/:id",
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;