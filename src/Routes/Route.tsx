import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import HomePage from "@/Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <App /> },
]);
