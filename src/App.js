import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/Button';
import Logo from './logo.svg';
import Header from './components/Header';
import Grow from './components/Grow';
import Flowing from './components/Flowing';
import Users from './components/Users';
import Footer from './components/Footer';
import initFontAwesome from "./components/initFontAwesome";
import Card from './components/Card';



function App() {
  initFontAwesome();
  return (
    <div className='container-fluid body'>
      <div className='App'>
        <div className='container' >
          <div className='d-flex flex-row justify-content-between'>
            <img src={Logo} alt="logo" className='mt-3 fs-1'/>
            <Button name="Try it Free" />
          </div>
          <Header />
        </div>
      </div>
      <div className='container'>
        <Grow />
        <Flowing />  
        <Users />
      </div>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
