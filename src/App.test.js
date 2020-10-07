import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import createDB from "./fakeDb/fakeDB";
import "@testing-library/jest-dom/extend-expect";

const { coffeeCart } = createDB();

describe("<App />", () => {
  test("it renders without error", () => {
    expect(render(<App coffeeCart={coffeeCart} />)).toBeTruthy();
    expect(screen.getByText("Buy Some Coffee Beans")).toBeInTheDocument();
  });
});
