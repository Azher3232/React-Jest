import { render, screen } from "@testing-library/react";
import React from "react";
import FilteredList from "../FilteredList";

const products = [
  {
    id: 1,
    title: "Apple iPhone",
    image: "iphone.jpg",
    description: "Latest model",
    price: 999,
    rating: { rate: 4.5 },
  },
  {
    id: 2,
    title: "Samsung Galaxy",
    image: "galaxy.jpg",
    description: "New release",
    price: 899,
    rating: { rate: 4.7 },
  },
  {
    id: 3,
    title: "Sony Headphones",
    image: "headphones.jpg",
    description: "Noise-cancelling",
    price: 199,
    rating: { rate: 4.2 },
  },
];

describe("FilteredList component", () => {
  it("should filter products based on search text", () => {
    render(<FilteredList products={products} searchText="iPhone" />);

    expect(screen.getByText("Apple iPhone")).toBeInTheDocument();
    expect(screen.queryByText("Samsung Galaxy")).not.toBeInTheDocument();
    expect(screen.queryByText("Sony Headphones")).not.toBeInTheDocument();
  });

  it("should display all products when search text is empty", () => {
    render(<FilteredList products={products} searchText="" />);

    expect(screen.getByText("Apple iPhone")).toBeInTheDocument();
    expect(screen.getByText("Samsung Galaxy")).toBeInTheDocument();
    expect(screen.getByText("Sony Headphones")).toBeInTheDocument();
  });
});
