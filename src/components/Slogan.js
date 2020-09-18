import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Slogan = () => {
  return (
    <Jumbotron fluid>
        <Container>
            <h1>Fancy a cuppa?</h1>
            <p>
            For those finer moments.
            </p>
        </Container>
    </Jumbotron>
  );
};

export default Slogan;
