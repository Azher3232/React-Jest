import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock("axios");

const TestComponent = ({ url }) => {
  const { response, loading, error } = useAxios(url);
  return (
    <div>
      {loading && <span>Loading...</span>}
      {error && <span>Error occurred</span>}
      {response && <span>{response.name}</span>}
    </div>
  );
};

describe("useAxios", () => {
  it("should fetch data successfully", async () => {
    const mockData = { data: { id: 1, name: "Test Product" } };
    axios.get.mockResolvedValueOnce(mockData);

    render(<TestComponent url="https://fakestoreapi.com/products" />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
      expect(screen.getByText("Test Product")).toBeInTheDocument();
      expect(screen.queryByText("Error occurred")).toBeNull();
    });
  });
});
