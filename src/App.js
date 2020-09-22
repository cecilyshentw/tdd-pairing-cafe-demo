import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slogan from './components/Slogan';
import CoffeeBeansCard from './components/CoffeeBeansCard';
import ShoppingCart from './components/ShoppingCart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
    const [coffeeCount, setCoffeeCount] = useState(0);

    const handleAdd = () => {
        setCoffeeCount(coffeeCount + 1);
    };

    const handleClear = () => {
        setCoffeeCount(0);
    };

    return (
        <div>
            <Header/>
            <Slogan/>
            <Container>
                <Row>
                    <Col>
                        <CoffeeBeansCard onAdd={handleAdd}/>
                    </Col>
                    <Col></Col>
                    <Col>
                        <ShoppingCart
                            coffeeCount={coffeeCount}
                            onClear={handleClear}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
