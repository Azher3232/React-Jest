import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "../SearchBox/index";

describe("SearchBox component", () => {
  it("should render the SearchBox component", () => {
    render(<SearchBox onSearchChange={() => {}} />);

    // Verifica que el input está presente
    expect(screen.getByPlaceholderText("Search by title")).toBeInTheDocument();
  });

  it("should call onSearchChange with the input value when typed", () => {
    const mockOnSearchChange = jest.fn(); // Crea un mock para la función onSearchChange
    render(<SearchBox onSearchChange={mockOnSearchChange} />);

    // Encuentra el input y simula un cambio de valor
    const input = screen.getByPlaceholderText("Search by title");
    fireEvent.change(input, { target: { value: "test" } });

    // Verifica que la función onSearchChange fue llamada con el valor correcto
    expect(mockOnSearchChange).toHaveBeenCalledWith("test");
    expect(mockOnSearchChange).toHaveBeenCalledTimes(1);
  });
});
