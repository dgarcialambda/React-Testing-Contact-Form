import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders form on ContactForm component", async () => {
  render(<ContactForm />)

  const element = screen.queryByTestId(/lastName/i);
  expect(element).toBeInTheDocument();
})