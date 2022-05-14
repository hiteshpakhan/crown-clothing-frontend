import React from 'react';
import { Switch, Route } from 'react-router-dom';   // importing the Route that support the routing
// there is another "Link" that we can import from the react-router-dom
// <Link to="/topics"> example </Link> 
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
      <Switch >  {/* Switch only render the component that has the exact path */}
        <Route path='/' component={HomePage} />  {/* here the component homepage will apper on the / path ,and the exact have the values of true or false  */}
        <Route path='/hats' component={HatsPage} />    
      </Switch>
    </div>
  );
}

export default App;
