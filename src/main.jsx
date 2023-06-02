import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/Home/Home/About.jsx";

import Contact from "./components/Home/Home/Contact.jsx";
import Banner from "./components/Home/Home/Banner.jsx";
import News from "./components/Home/Home/News.jsx";
import Portfolio from "./components/Home/Home/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/news",
        element: <News></News>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
