import './App.css';
import React from 'react';
import Topbar from './topbar';
import Elements from './elements';
import Us from './us';
import Story from './story';
import img from './images/IMG_4865.jpg'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <div className="App">
      <Topbar />

      <header className="App-header">
        <br></br>
        <Us />
      </header>
      <br></br>
      {/*
        <h1>Shop With Us</h1>
          Will integrate with Shopify product list as link to Shopify Store.
      */}
      
      <Elements />
      
      <br></br>

      <footer className='footer'>

        
        <Story />


        
      </footer>
    </div>
    
    
  );
}

export default App;
