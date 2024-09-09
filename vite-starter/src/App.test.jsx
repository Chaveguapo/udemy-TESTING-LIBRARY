import { logRoles } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Button should starts with correct label and color", () => {
  //1.render the app
  const { container } = render(<App />);
  // logRoles(container); works to know the elements into the test

  //2.find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  //3.check initial color of the button text
  expect(buttonElement).toHaveClass("red");

  //4.click the button
  fireEvent.click(buttonElement);

  //5.check button text
  expect(buttonElement).toHaveTextContent(/red/i);
  //6.check the button color
  expect(buttonElement).toHaveClass("blue");
});

test("checkbox flow", () => {
  render(<App />);
  //find the elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  // Check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  //change the check box to checked
});
