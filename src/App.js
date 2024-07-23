import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from './components/ScrollButton'; 


import {
  BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";


import  { Glavnaya }  from './components/Glavnaya';
import  { About } from './components/About';
import  { Portfolio } from './components/Portfolio';
import { Partner } from "./components/Partner";
import  { Otziv } from './components/Otziv';
import { Contact }  from './components/Contact';


function App() {
  return (
    <>
    <Router>
    <Header/>
     <Routes>
<Route exact path="/" element= {<Glavnaya/>}/>
<Route  path="/about" element= {<About/>}/>
<Route  path="/portfolio" element = {<Portfolio/>}/>
<Route  path="/partner" element = {<Partner/>}/>
<Route  path="/otziv" element= {<Otziv/>}/>
<Route  path="/contact" element= {<Contact/>}/>
</Routes>
    </Router>

   
      
    <ScrollButton /> 
    <Footer/>

</>
  )
}

export default App;