import React from 'react';
import Navbar from './Components/Navbar'
import ProductLists from './Components/ProductLists'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ProductLists/>
      <Footer/>
    </div>
  );
};

export default App;