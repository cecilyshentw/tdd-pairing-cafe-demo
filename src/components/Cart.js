import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const Cart = () => {
    const items = [
        {
            id: 1,
            count: 2,
            product: {
                name: 'Special Blend 250g',
                price: 12.50,
            },
        },
        {
            id: 2,
            count: 0,
            product: {
                name: 'Special Blend 500g',
                price: 22.00,
            },
        },
        {
            id: 3,
            count: 0,
            product: {
                name: 'Special Decaf 250g',
                price: 14.00,
            },
        },
        {
            id: 4,
            count: 0,
            product: {
                name: 'Special Decaf 500g',
                price: 26.00,
            },
        },
    ];

    const [coffeeItems, setCoffeeItems] = useState(items);

    const handleRemove = (itemId) => {
        let newItems = [...coffeeItems];
        const item = newItems.find(i => i.id === itemId);
        item.count--;
        setCoffeeItems(newItems);
        console.log('remove', items);
    }

    const handleAdd = (itemId) => {
        let newItems = [...coffeeItems];
        const item = newItems.find(i => i.id === itemId);
        item.count++;
        setCoffeeItems(newItems);
        console.log('add', {item, newItems});
    }

    return (
        <Card style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Title>Buy Some Coffee Beans</Card.Title>
                <ListGroup variant="flush">
                    {coffeeItems.map(
                        item => <ListGroup.Item key={item.id}>
                            {item.product.name} ${item.product.price}:
                            <div className="float-right">
                                <Button
                                    variant="outline-info"
                                    className="mx-3"
                                    disabled={item.count<=0}
                                    onClick={() => handleRemove(item.id)}
                                >-</Button>
                                {item.count}
                                <Button
                                    variant="outline-info"
                                    className="mx-3"
                                    onClick={() => handleAdd(item.id)}
                                >+</Button>
                            </div>
                            </ListGroup.Item>
                        )
                    }
                    <ListGroup.Item><span className="float-right">Order total: $0</span></ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Cart;
