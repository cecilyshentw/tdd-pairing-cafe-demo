import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import shoppingCartImage from '../images/shopping-cart-coffee-beans.jpg';

const ShoppingCart = ({ coffeeCount, onClear }) => {
    const handleClear = () => {
        onClear();
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={shoppingCartImage} />
            <Card.Body>
                <Card.Title>Shopping Cart</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item data-testid="coffeeCount">Your items: {coffeeCount}</ListGroup.Item>
                    <ListGroup.Item>Total price: 0</ListGroup.Item>
                </ListGroup>
                <Button
                    variant="outline-warning"
                    data-testid="clearButton"
                    onClick={handleClear}
                >
                    CLEAR CART
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ShoppingCart;
