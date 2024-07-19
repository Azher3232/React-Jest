import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "../SearchBox/index";

describe("SearchBox component", () => {
  it("should render the SearchBox component", () => {
    render(<SearchBox onSearchChange={() => {}} />);

    expect(screen.getByPlaceholderText("Search by title")).toBeInTheDocument();
  });

  it("should call onSearchChange with the input value when typed", () => {
    const mockOnSearchChange = jest.fn();
    render(<SearchBox onSearchChange={mockOnSearchChange} />);

    const input = screen.getByPlaceholderText("Search by title");
    fireEvent.change(input, { target: { value: "test" } });

    expect(mockOnSearchChange).toHaveBeenCalledWith("test");
    expect(mockOnSearchChange).toHaveBeenCalledTimes(1);
  });
});
