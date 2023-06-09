
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KeyBoard from './KeyBoard.jsx'

/*
function render() {
  ReactDOM.render(<KeyBoard/>, document.body);
}

render();
*/

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <KeyBoard />
  </StrictMode>
);