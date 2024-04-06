import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { UserProvider } from './UserContext';
//import SupplierTable from './components/SupplierTable';
import StockChart from './components/StockChart';
import UserForm from './components/AddUser';
import TradingViewWidget from './components/TradingViewWidget';
import './style.css';
import StockFilter from './components/StockFilter';
import { useRef } from 'react';
import StockTable from './components/StockTable';
import stocksData from './records.json';
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

//import StockChart from './components/StockChart';
function App() {
  const Section = () =>
  {
    return(
      <div><img class="center" src="https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=612x612&w=0&k=20&c=XRsOnrdHQIoqaolR00ganJACUpCxD4JCELt3N3Mm3tk=" alt="logo" /></div>
    );
  }
  const TextScroller = ({ text }) => {
    const [key, setKey] = useState(1);
  
    const scrolling = useSpring({
      from: { transform: "translate(100%,0)" },
      to: { transform: "translate(-100%,0)" },
      config: { duration: 12000 },
      reset: true,
      //reverse: key % 2 == 0,
      onRest: () => {
        setKey(key + 1);
      }
    });
  
    return (
      <div key={key} style={{ background: 'darkblue' }}>
          <h4 style={{ color: 'white',textAlign:'center'}}>News Update</h4>
    <animated.div style={{ color: 'white', ...scrolling }}>Hi there</animated.div>
  </div>
    );
  }
  return (
    <div>
      <Router>
        <UserProvider>
          <NavBar/>
          <StockFilter/>
             <br></br>
            <Section/>
            <br></br>
            <div>
            <StockTable stocksData={stocksData} />
            </div>
            <br></br>
            <br></br>
            <TradingViewWidget/>
            
            
        </UserProvider>
      </Router>
      
    </div>
  );
}

export default App;
