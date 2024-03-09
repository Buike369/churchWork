
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet

} from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./components/home"
import Login from "./components/login"


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
     
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/forget-password",
  //   element: <ForgotPassword />,
  // },
  // {
  //   path: "/update-password",
  //   element: <UpdatePassword />,
  // },
  // {
  //   path: "/login/free",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
]);

function App() {
  return (
  
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
