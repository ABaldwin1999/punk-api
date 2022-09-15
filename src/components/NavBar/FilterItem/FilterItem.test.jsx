import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterItem from "./FilterItem";

it("should render the filter", () => {
    // 1. Arrange
    render(<FilterItem />);
  
    // 2. Act
    const filter = screen.getByRole("checkbox");
  
    // 3. Assert
    expect(filter).toBeInTheDocument();
  });