
import React, { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider} from "react-router-dom";

import './index.css'
import Home from "./scenes/Home";
/*
function render() {
  ReactDOM.render(<KeyBoard/>, document.body);
}

render();
*/

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>
  },
])

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
);