import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Cart from "./components/Cart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = ({ coffeeCart }) => {
  return (
    <div>
      <Header />
      <Slogan />
      <Container>
        <Row>
          <Col>
            <Cart coffeeCart={coffeeCart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
