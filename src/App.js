
import './App.css';
import Questions from './Components/Questions'
import React, {useEffect}from "react";
import ReactGA from "react-ga";

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-193202659-1');
    ReactGA.pageview('/');
  },[])


  return (
    <div className="app">
     <Questions />
    </div>
  );
}

export default App;
