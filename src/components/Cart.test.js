import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import createDB from "../fakeDb/fakeDB";
import "@testing-library/jest-dom/extend-expect";

const { coffeeCart } = createDB();

describe("<Cart />", () => {
  test("it renders without error", () => {
    expect(render(<Cart coffeeCart={coffeeCart} />)).toBeTruthy();
    expect(screen.getByText("Buy Some Coffee Beans")).toBeInTheDocument();
  });

  test("it renders Coffee component", () => {
    render(<Cart coffeeCart={coffeeCart} />);

    expect(screen.queryAllByText("+")[0]).toBeInTheDocument();
    expect(screen.queryAllByText("-")[0]).toBeInTheDocument();
    expect(
      screen.getByText("Algerian Blend, 1kg : $10.50")
    ).toBeInTheDocument();
  });
});
