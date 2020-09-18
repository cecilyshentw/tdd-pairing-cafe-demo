import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import coffeeImage from '../images/coffee-beans.png';

const CoffeeBeansCard = () => {
    const [buttonText, setButtonText] = useState('Purchase');
    const [isPurchased, setIsPurchased] = useState(false);
    const handlePurchase = () => {
        setButtonText('Purchased');
        setIsPurchased(true);
    };

    return (
    <Container>
        <Card className="text-center">
        {isPurchased && <Card.Header>You have purchased the best coffee beans in the world!</Card.Header>}
        <Card.Img variant="top" src={coffeeImage} />
        <Card.Body>
            <Card.Title>The best coffee beans in the world</Card.Title>
            <Card.Text>
            Great coffee at the push of a button
            </Card.Text>
            <Button
                variant="primary"
                data-testid="purchaseButton"
                onClick={handlePurchase}
            >
                {buttonText}
            </Button>
        </Card.Body>
        </Card>
    </Container>
    );
};

export default CoffeeBeansCard;
