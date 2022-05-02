import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Route exact path="/" component={HomePage} />  {/* it means when we are at "/" path we want to render the HomePage component    and exact means it only render if its the "/" path you can change the exact value true or false by default its true */}
    </div>
  );
}

export default App;
