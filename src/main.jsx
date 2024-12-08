import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import React from "react";
import UserProvider from "./components/UserProvider.jsx";
import { router } from "./router.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
