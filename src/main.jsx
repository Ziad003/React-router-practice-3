import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './components/root/Root'
import Home from "./components/home/Home"
import Mobile from "./components/mobile/Mobile"
import App from "./App"
import Hello from "./components/Hello"
import Users from "./components/users/Users";

const router=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index:true, Component: Home},
      {path:'mobiles', Component: Mobile},
      {path:'users',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users}
    ]
  },
  {
    path:'app',
    Component: App
  },
  {
    path:'hello',
    element: <Hello></Hello>
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
