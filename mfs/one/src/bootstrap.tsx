import { StrictMode } from "react"
import { render } from "react-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { App } from "./app.jsx"

const router = createBrowserRouter([
  //
  { path: "/", element: <App /> },
])

render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  document.querySelector("#root"),
)
