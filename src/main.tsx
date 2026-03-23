import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Nav from "./Nav.tsx";
import FetchProfile from "./Fetch-GH-Profile.tsx";
//import App from "./App.tsx";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <h1 className="p-4">Welcome Home!</h1> },
      { path: "/github", element: <FetchProfile /> },
      { path: "/about", element: <div className="p-4">About Me Content</div> },
      {
        path: "/projects",
        element: <div className="p-4">Projects Content</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <title>Anthony's Portfolio</title>
    <RouterProvider router={router} />
  </StrictMode>,
);
