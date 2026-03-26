import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Nav from "./Nav.tsx";
import FetchGHProfile from "./Fetch-GH-Profile.tsx";
import Posts from "./Posts.tsx";
import About from "./About.tsx";
import Home from "./Home.tsx";
import Chat from "./Chat.tsx";
import Demos from "./Demos.tsx";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";

//import App from "./App.tsx";

const queryClient = new QueryClient();

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
      { path: "/", element: <Home /> },
      { path: "/github", element: <FetchGHProfile /> },
      { path: "/blog", element: <Posts /> },
      { path: "/about", element: <About /> },
      {
        path: "/projects",
        element: <div className="p-4">Projects Content</div>,
      },
      { path: "/chat", element: <Chat /> },
      { path: "/chat/:room", element: <Chat /> },
      {
        path: "/demos",
        element: <Demos />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <title>Anthony's Portfolio</title>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
