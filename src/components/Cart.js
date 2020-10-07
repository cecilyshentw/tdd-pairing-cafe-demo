import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Coffee from "./Coffee";

const Cart = ({ coffeeCart }) => {
  const [total, setTotal] = useState(0);

  const coffeeTotal = (total) => {
    setTotal(total);
  };

  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>Buy Some Coffee Beans</Card.Title>
        <ListGroup variant="flush">
          {coffeeCart.items.map((item, i) => {
            return (
              <Coffee
                item={item}
                key={i}
                coffeeCart={coffeeCart}
                coffeeTotal={coffeeTotal}
              />
            );
          })}
          <ListGroup.Item>
            <div className="float-right">Order total: ${total.toFixed(2)}</div>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Cart;
