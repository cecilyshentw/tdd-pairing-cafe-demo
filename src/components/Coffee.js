import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import ListGroup from "react-bootstrap/ListGroup";

const Coffee = ({ item, i, coffeeCart, coffeeTotal }) => {
  const [coffeeCount, setCoffeeCount] = useState(0);

  const handleAdd = (item) => {
    item.addOne();
    setCoffeeCount(item.count);
  };

  const handleRemove = (item) => {
    item.removeOne();
    setCoffeeCount(item.count);
  };

  return (
    <>
      <ListGroup.Item key={i}>
        {item.product.name} : ${item.product.price.toFixed(2)}
        <div className="float-right">
          <Button
            variant="outline-info"
            className="mx-3"
            disabled={item.count <= 0}
            onClick={() => {
              handleRemove(item);
              coffeeTotal(coffeeCart.getTotal());
            }}
          >
            -
          </Button>
          {item.count}
          <Button
            variant="outline-info"
            className="mx-3"
            onClick={() => {
              handleAdd(item);
              coffeeTotal(coffeeCart.getTotal());
            }}
          >
            +
          </Button>
        </div>
        <p>${item.getTotal().toFixed(2)}</p>
      </ListGroup.Item>
    </>
  );
};

export default Coffee;
