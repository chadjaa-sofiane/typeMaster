
import React, { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createMemoryRouter, RouterProvider} from "react-router-dom";

import './index.css'
import Home from "./scenes/Home";
import Practice from "./scenes/practice";
import Error from "./scenes/Error";

/*
function render() {
  ReactDOM.render(<KeyBoard/>, document.body);
}

render();
*/

const router = createMemoryRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "/practice",
    element: <Practice/>,
    errorElement: <Error/>
  }
])

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
);