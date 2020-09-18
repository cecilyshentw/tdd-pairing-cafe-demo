import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slogan from './components/Slogan';
import CoffeeBeansCard from './components/CoffeeBeansCard';

function App() {
  return (
    <div>
        <Header/>
        <Slogan/>
        <CoffeeBeansCard/>
    </div>
  );
}

export default App;
