
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
import Contact from "./components/contact"
import AboutUs from "./components/aboutUs"


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
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <AboutUs />
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
