import React, { useState, useEffect } from 'react'
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

  const [locationTitle, setLocationTitle] = useState("Welcome to")
  useEffect(() => {
    const aboutUs = `${locationTitle} - Royal Grace Redemption center`
    const locate = window.location.pathname;
    const handleTitleChange = () => {
      if (locate === "/") {
        setLocationTitle('Welcome to')
        document.title = aboutUs
      } else if (locate === "/about") {
        setLocationTitle('About Us')
        document.title = aboutUs
      } else if (locate === "/contact") {
        setLocationTitle('Contact Us at');
        document.title = aboutUs
      } else {
        setLocationTitle('Welcome to')
        document.title = aboutUs
      }
      // document.title = window.location.pathname;

    }
    handleTitleChange()

    window.addEventListener('popstate', handleTitleChange)
    return () => {
      window.removeEventListener('popstate', handleTitleChange)
    }
  }, [])
  return (

    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
