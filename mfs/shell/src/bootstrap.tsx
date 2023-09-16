import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { App } from "./app.jsx"

const router = createBrowserRouter([
  //
  { path: "/", element: <App /> },
])

const root = createRoot(document.querySelector("#root")!)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
