import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

describe("Header component", () => {
  it("should display the title 'ProductHub'", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const titleElement = screen.getByText("ProductHub");
    expect(titleElement).toBeInTheDocument();
  });
});

describe("Header component", () => {
  it("should display the 'Electronics' link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const electronicsLink = screen.getByText("Electronics");

    expect(electronicsLink).toBeInTheDocument();
    expect(electronicsLink).toHaveAttribute("href", "/category/electronics");
  });
});
