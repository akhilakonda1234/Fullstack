import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("React Calendar Performance", () => {
  test("renders the application heading", () => {
    render(<App />);
    expect(
      screen.getByText("📅 React Calendar Performance")
    ).toBeInTheDocument();
  });

  test("allows user to type an event", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Enter Event");

    await userEvent.type(input, "Team Meeting");

    expect(input).toHaveValue("Team Meeting");
  });

  test("adds an event when Add Event button is clicked", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Enter Event");
    const button = screen.getByRole("button", { name: /Add Event/i });

    await userEvent.type(input, "Project Review");
    await userEvent.click(button);

    expect(screen.getByText("Project Review")).toBeInTheDocument();
    expect(screen.getByText(/Total Events:/i)).toBeInTheDocument();
  });
});