import { render, fireEvent, screen } from "@testing-library/react";
import TodoNew from "./TodoNew";

test("add new todo button exist", () => {
  const { getByTestId } = render(<TodoNew />);
  expect(getByTestId("button-add-todo")).toBeInTheDocument();
});

test("it should add input value", () => {
  const { getByTestId } = render(<TodoNew />);
  const input = getByTestId("input");
  fireEvent.change(input, { target: { value: "Test new todo" } });
  expect(input.value).toBe("Test new todo");
});

test("it should add new TodoList", () => {
  const { getByTestId } = render(<TodoNew />);
  const input = getByTestId("input");
  const addButton = getByTestId("button-add-todo");
  fireEvent.change(input, { target: { value: "Test new todo" } });
  fireEvent.click(addButton);
  const linkElement = screen.getByText(/test new todo/i);
  expect(linkElement).toBeInTheDocument();
});
