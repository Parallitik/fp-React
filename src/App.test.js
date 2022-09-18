import { App } from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("render App", () => {
    render(<App />);
  });

  it("check render message to chat container", async () => {
    render(<App />);
    const inputMessage = screen.getByPlaceholderText("Message");
    const inputAuthor = screen.getByPlaceholderText("Author");

    await userEvent.type(inputMessage, "Hello from test comp!");
    await userEvent.type(inputAuthor, "I am Test!");
    await userEvent.click(screen.getByText(/Send message/));

    expect(screen.getByTestId("chat-messageText")).toContainHTML(
      "Hello from test comp!"
    );
    expect(screen.getByTestId("chat-authorText")).toContainHTML(
      "<cite role='messageText' data-testid='chat-authorText'>I am Test!</cite>"
    );
  });

  it("check Bots timeout message", async () => {
    render(<App />);
    const inputMessage = screen.getByPlaceholderText("Message");
    const inputAuthor = screen.getByPlaceholderText("Author");

    await userEvent.type(inputMessage, "Hello from test comp!");
    await userEvent.type(inputAuthor, "Test timeout!");
    await userEvent.click(screen.getByText(/Send message/));

    await waitFor(
      () => expect(screen.getByText(/Hello Test timeout/)).toBeInTheDocument(),
      {
        timeout: 1600,
      }
    );
  });
});
