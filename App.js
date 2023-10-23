
import './App.css';
import React from 'react';
import Name from './name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { ProductData } from './product';
import './App.css'; // You can style your components here

function App() {
  const App = () => {
  const firstName = "YourFirstName"; // Replace with your first name

  return (
    <div className="App">
      <div className="product-card">
        <Image />
        <div className="product-details">
          <name />
          <price />
          <Description />
        </div>
      </div>
      <div className="greeting">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </div>
    </div>
  );
};


 
}

export default App;
