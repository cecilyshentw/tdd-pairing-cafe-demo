import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import coffeeImage from '../images/Roasted-coffee-beans.jpg';

const CoffeeBeansCard = ({ onAdd }) => {
    const handleAdd = () => {
        onAdd();
    }

    return (
        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={coffeeImage} />
        <Card.Body>
            <Card.Title>The best coffee beans in the world</Card.Title>
            <Card.Text>
            Great coffee at the push of a button
            </Card.Text>
            <Button
                variant="primary"
                data-testid="addButton"
                onClick={handleAdd}
            >
                ADD TO CART
            </Button>
        </Card.Body>
        </Card>
    );
};

export default CoffeeBeansCard;
