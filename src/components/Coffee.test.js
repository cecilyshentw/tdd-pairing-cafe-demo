import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Coffee from "./Coffee";
import createDB from "../fakeDb/fakeDB";
import "@testing-library/jest-dom/extend-expect";

const { coffeeCart } = createDB();

describe("<Coffee />", () => {
  test("it renders without error", () => {
    expect(
      render(
        <Coffee
          item={coffeeCart.items[0]}
          i={0}
          coffeeCart={coffeeCart}
          coffeeTotal={() => {}}
        />
      )
    ).toBeTruthy();
    expect(
      screen.getByText("Algerian Blend, 1kg : $10.50")
    ).toBeInTheDocument();
  });

  test("it increments coffe amount by 1", () => {
    render(
      <Coffee
        item={coffeeCart.items[0]}
        i={0}
        coffeeCart={coffeeCart}
        coffeeTotal={() => {}}
      />
    );

    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("it decrements by 1", () => {
    render(
      <Coffee
        item={coffeeCart.items[0]}
        i={0}
        coffeeCart={coffeeCart}
        coffeeTotal={() => {}}
      />
    );

    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
