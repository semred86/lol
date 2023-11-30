import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <App />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Nav />
        <h1>BLOG</h1>
      </>
    ),
  },
  {
    path: "/contacts",
    element: (
      <>
        <Nav />
        <h1>CONTACTS</h1>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/blog"}>BLOG</Link>
        </li>
        <li>
          <Link to={"/contacts"}>CONTACTS</Link>
        </li>
      </ul>
    </nav>
  );
}
