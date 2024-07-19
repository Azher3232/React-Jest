import { render } from "@testing-library/react";
import React from "react";
import App from "../../App";
import { BrowserRouter } from "react-router-dom";

test("renders App component in root element", () => {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    { container: root }
  );

  expect(root.querySelector("div")).toBeInTheDocument();
});
