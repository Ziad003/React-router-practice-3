import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './components/root/Root'
import Home from "./components/home/Home"
import Mobile from "./components/mobile/Mobile"
import App from "./App"
import Hello from "./components/Hello"
import Users from "./components/users/Users";
import Hero from "./components/Hero";
import Users2 from "./components/users2/Users2";

const users2Res=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

const router=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index:true, Component: Home},
      {path:'mobiles', Component: Mobile},
      {path:'users',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users},
      {
        path:'users2',
        element: <Suspense fallback={<p>Loading...</p>}>
          <Users2 users2Res={users2Res}></Users2>
        </Suspense>
      }
    ]
  },
  {
    path:'app',
    Component: App
  },
  {
    path:'hello',
    element: <Hello></Hello>
  },
  {
    path:'hero',
    Component: Hero
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
